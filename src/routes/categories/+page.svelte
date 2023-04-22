<script lang="ts">
	export let data;
	const categories = data.categories;
</script>

<div class="container">
	<h1>Categories</h1>

	{#if categories}
		<ul>
			{#each categories as category}
				<li>
					<h2>
						<a href={category.uri}>{category.name}</a>
					</h2>
					{#if category.description}
						<p>{category.description}</p>
					{/if}
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	ul {
		list-style: none;
		padding: 0;
	}

	ul li + li {
		margin-top: 2rem;
	}

	h2,
	p {
		margin: 0;
	}

	h2 {
		margin-bottom: 1rem;
	}
</style>
