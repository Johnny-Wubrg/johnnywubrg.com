<script>
	import Post from './post.svelte';
  export let post;
</script>

<Post {post}>
  <div>Card content: {@html post.content}</div>
</Post>
