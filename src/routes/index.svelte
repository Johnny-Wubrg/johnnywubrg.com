<script context="module">
	import { sendQuery } from '@/utils/api';
	export const prerender = true;

	const query = `
    query getPosts {
      posts {
        nodes {
          databaseId
          uri
          title
          excerpt
          date
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
    }
  `;

	export async function load() {
		const { posts } = await sendQuery(query);

		return {
			props: {
				posts: posts.nodes
			}
		};
	}
</script>

<script>
	import FeaturedCard from '@/components/FeaturedCard.svelte';
	import PostExcerpt from '@/components/PostExcerpt.svelte';
	export let posts;
</script>

<h1>Blog</h1>
{#if posts}
	<ul>
		{#each posts as post}
			<li>
				<PostExcerpt {post} />
			</li>
		{/each}
	</ul>
{:else}
	<p>No posts found.</p>
{/if}

<FeaturedCard />

<style>
	ul {
		list-style: none;
		padding: 0;
	}
	ul li + li {
		margin-top: 2rem;
	}
</style>
