<script lang="ts">
  import { onMount } from 'svelte';

  interface Card {
    color: string;
    zIndex: number;
    rotation?: number;
    translate?: number;
  }
  let cards: Card[] = [
    { color: 'var(--mtg-white)', zIndex: 5 },
    { color: 'var(--mtg-blue)', zIndex: 4 },
    { color: 'var(--mtg-black)', zIndex: 3 },
    { color: 'var(--mtg-red)', zIndex: 2 },
    { color: 'var(--mtg-green)', zIndex: 1 },
  ];

  type State = 'out' | 'in';
  const rate = 0.05;
  let index = 0;
  let current = cards[index];
  let state: State = 'out';
  let distance = 0;
  let dir = 1;
  let delay = 0;

  function cycleCurrentCard() {
    index = cards.length - 1 === index ? 0 : index + 1;
    current = cards[index];
    dir *= -1;
  }

  function updateProperties(card: Card) {
    card.rotation = distance * 45 * dir;
    card.translate = -50 + distance * 100 * dir;
  }

  for (const card of cards) {
    updateProperties(card);
  }

  function loop() {
    if (delay) {
      delay--;
      window.requestAnimationFrame(loop);
      return;
    }

    if (state === 'out') {
      distance += rate;
      updateProperties(current);

      if (distance >= 1) {
        distance = 1;
        updateProperties(current);
        for (const card of cards) {
          card.zIndex++;
        }
        current.zIndex = 1;
        state = 'in';
      }
    } else {
      distance -= rate;
      updateProperties(current);

      if (distance <= 0) {
        distance = 0;
        updateProperties(current);
        state = 'out';
        delay = 10;
        cycleCurrentCard();
      }
    }

    cards = [...cards];

    window.requestAnimationFrame(loop);
  }

  onMount(() => {
    window.requestAnimationFrame(loop);
  });
</script>

<div class="loader">
  {#each cards as card}
    <div
      class="card"
      style="
				--color: {card.color};
				--z-index:{card.zIndex};
				--rotation:{card.rotation || 0}deg;
				--translation:{card.translate || 0}%
			"
    ></div>
  {/each}
</div>

<style lang="scss">
  .loader {
    position: relative;
    height: 4.5em;
  }

  .card {
    position: absolute;
    left: 50%;
    display: block;
    width: 2.5em;
    height: 3.5em;
    background: var(--color);
    border-radius: 4px;
    transform: translateX(var(--translation)) rotateZ(var(--rotation));
    transform-origin: center 120%;
    z-index: var(--z-index);
  }
</style>
