<script context="module" lang="ts">
	export const prerender = true;

	const query = `
    query getPostBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        date
        title
        content
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
      }
    }
  `;

	const resolveTemplate = async (slugs: string[]) => {
    const templates = [...slugs, 'post']
		for (const slug of templates) {
			try {
				const { default: template } = await import(`../../templates/${slug}.svelte`);
				return template;
			} catch {
				continue;
			}
		}
	};

	export async function load({ page, fetch }) {
		const response = await fetch(import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				query,
				variables: {
					slug: page.params.slug
				}
			})
		});

		if (response.ok) {
			const responseObj = await response.json();
			const { post } = responseObj.data;

			const categories = post.categories?.nodes?.map((category) => category.slug) ?? [];

			const template = await resolveTemplate(categories);

			return {
				props: {
					post,
					template
				}
			};
		}

		return {
			status: response.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	export let post;
	export let template;
</script>

<svelte:component this={template} {post} />