<script>
	import PostList from '@/components/PostList.svelte';
	export let data
	const posts = data.postsl;
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
