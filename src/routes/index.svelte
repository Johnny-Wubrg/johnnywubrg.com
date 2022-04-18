<script context="module">
	import { sendQuery } from '@/utils/api';
	export const prerender = true;

	const gql = String.raw;
	const query = gql`
		query getHomepage {
			posts(first: 3) {
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
			generalSettings {
				description
			}
		}
	`;

	export async function load() {
		const { posts, featuredCard, generalSettings } = await sendQuery(query);

		return {
			props: {
				posts: posts.nodes,
				featuredCard,
				generalSettings
			}
		};
	}
</script>

<script>
	import HomepageHero from '@/components/HomepageHero.svelte';
	import PostColumns from '@/components/PostColumns.svelte';
	import PostList from '@/components/PostList.svelte';
	export let generalSettings;
	export let posts;
	export let featuredCard;
</script>

<HomepageHero card={featuredCard} description={generalSettings.description} />
<div class="content-wrap container">
	<div class="content-main">
		{#if posts.length}
			<section>
				<h1>Latest Posts</h1>

				{#if posts.length > 1}
					<PostColumns {posts} />
				{:else}
					<PostList {posts} />
				{/if}

				<div class="actions">
					<a class="button" href="/posts">All Posts</a>
				</div>
			</section>
		{:else}
			<section style="text-align: center;">
				<h1>Whoops, you're here early!</h1>
				<p>Check back later for some exciting Magic: the Gathering articles!</p>
			</section>
		{/if}
	</div>
</div>

<style lang="scss"></style>
