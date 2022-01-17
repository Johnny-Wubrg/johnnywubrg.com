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
	import PostList from '@/components/PostList.svelte';
	export let posts;
</script>

<div class="content-wrap">
  <div class="content-main">
    <h1>Latest Posts</h1>
    <PostList {posts} />
	</div>
	<aside class="content-aside">
		<Sidebar />
	</aside>
</div>

<style>
	.content-wrap {
		display: flex;
		position: relative;
		align-items: flex-start;
	}

	.content-main {
		flex: 1 1 auto;
	}

	.content-aside {
		flex: 0 0 20%;
	}
</style>
