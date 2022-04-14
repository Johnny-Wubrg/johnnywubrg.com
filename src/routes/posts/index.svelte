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
							mediaSettings {
								artistCredit
							}
						}
					}
					categories {
						nodes {
							name
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
	import PostList from '@/components/PostList.svelte';
	export let posts;
</script>

<div class="content-wrap container">
	<div class="content-main">
		<h1>All Posts</h1>
		<PostList {posts} />
	</div>
</div>

<style lang="scss">
	.content-main {
		flex: 1 1 auto;
	}
</style>
