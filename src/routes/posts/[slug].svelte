<script context="module" lang="ts">
	export const prerender = true;
	import { sendQuery } from '@/utils/api';
	import DefaultPostTemplate from '@/templates/post.svelte';

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
				featuredCardSettings {
					featuredCard
				}
      }
    }
  `;

	const resolveTemplate = async (slugs: string[]) => {
		for (const slug of slugs) {
			try {
				const { default: template } = await import(`../../templates/${slug}.svelte`);
				return template;
			} catch {
				continue;
			}
		}

		return DefaultPostTemplate;
	};

	export async function load({ page }) {
		const { post } = await sendQuery(query, {
			slug: page.params.slug
		});

		if (!post) {
			return {
				status: 404,
				error: new Error(`Could not load ${page.params.slug}`)
			};
		}

		const categories = post.categories?.nodes?.map((category) => category.slug) ?? [];

		const template = await resolveTemplate(categories);

		return {
			props: {
				post,
				template
			}
		};
	}
</script>

<script>
	export let post;
	export let template;
</script>

<svelte:component this={template} {post} />
