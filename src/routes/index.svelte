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
	import PostList from '@/components/PostList.svelte';
	export let posts;
</script>

<div class="content-wrap container">
	<div class="content-main">
		<h1>Latest Posts</h1>
		<PostList {posts} />
	</div>
</div>

<style lang="scss"></style>
