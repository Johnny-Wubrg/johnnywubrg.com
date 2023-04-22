<script>
	import HomepageHero from '@/components/HomepageHero.svelte';
	import PostColumns from '@/components/PostColumns.svelte';
	import PostList from '@/components/PostList.svelte';
	export let data;
	const { generalSettings, posts, featuredCard } = data;
</script>

<svelte:head>
	<title>{generalSettings.title} | A Magic: the Gathering Blog for Combo Players</title>
</svelte:head>

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
