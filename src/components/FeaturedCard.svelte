<script>
	export let card;
</script>

<div class="featured-card">
	<h3 class="featured-card-label">{card.label}</h3>
	<a href="/posts{card.post_uri}" class="featured-card-link">
		<img class="featured-card-image" src={card.image} alt={card.card_name} />
	</a>
	<p class="archive">
		<a href={card.archive_uri}>View Archive</a>
	</p>
</div>

<style lang="scss">
	.featured-card {
		max-width: 100%;

		&-image {
			display: block;
			max-width: 100%;
		}
	}

	.archive {
		margin: 0;
		margin-top: 0.5em;
		text-align: center;
	}
</style>
