<script>
	import { sendQuery } from '@/utils/api';
	import { onMount } from 'svelte';
	let card;

	onMount(async () => {
		const query = `
    query getFeaturedCard {
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
		const { featuredCard } = await sendQuery(query);
		card = featuredCard;
	});
</script>

{#if card}
<div class="featured-card">
  <h3 class="featured-card-label">{card.label}</h3>
  <a href="/posts{card.post_uri}" class="featured-card-link">
    <img class="featured-card-image" src={card.image} alt={card.card_name} />
  </a>
</div>
{/if}