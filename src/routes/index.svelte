<script context="module">
	import { sendQuery } from '@/utils/api';
	export const prerender = true;

	const gql = String.raw;
	const query = gql`
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
	import Sidebar from '@/components/layout/Sidebar.svelte';
	import PostExcerpt from '@/components/PostExcerpt.svelte';
	export let posts;
</script>

<h1>Latest Posts</h1>
<div class="content-wrap">
	<div class="content-main">
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
	</div>
	<aside class="content-aside">
		<Sidebar />
	</aside>
</div>

<style>
	ul {
		list-style: none;
		padding: 0;
	}
	ul li + li {
		margin-top: 2rem;
	}

	.content-wrap {
		display: flex;
		position: relative;
		align-items: flex-start;
	}

	.content-main {
		flex: 1 1 auto;
	}

	.content-aside {
		flex: 0 0 30%;
	}
</style>
