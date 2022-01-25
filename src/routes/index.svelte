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
				}
			}
			featuredCard {
				label
				card_name
				image
				post_uri
				post_title
				archive_uri
			}
		}
	`;

	export async function load() {
		const { posts, featuredCard } = await sendQuery(query);

		return {
			props: {
				posts: posts.nodes,
				featuredCard
			}
		};
	}
</script>

<script>
	import Sidebar from '@/components/layout/Sidebar.svelte';
	import PostList from '@/components/PostList.svelte';
	export let posts;
	export let featuredCard;
</script>

<div class="content-wrap container">
	<div class="content-main">
		<h1>Latest Posts</h1>
		<PostList {posts} />
	</div>
	<aside class="content-aside">
		<Sidebar card={featuredCard} />
	</aside>
</div>

<style lang="scss">
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
