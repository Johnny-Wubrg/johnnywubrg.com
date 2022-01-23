<script>
	import { onDestroy } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import navigationState from '@/stores/navigationState';

	const progress = tweened(0, {
		duration: 3500,
		easing: cubicOut
	});

	const opacity = tweened(0, {
		duration: 500,
		easing: cubicOut
	});

	const unsubscribe = navigationState.subscribe(async (state) => {
		if (state === 'loading') {
			await opacity.set(1, { duration: 0, delay: 0 });
			await progress.set(0, { duration: 0 });
			progress.set(0.9, { duration: 3500 });
		}
		if (state === 'loaded') {
			progress.set(1, { duration: 1000 });
			opacity.set(0, { duration: 500, delay: 500 });
		}
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<svelte:window
	on:sveltekit:navigation-start={() => {
		$navigationState = 'loading';
	}}
	on:sveltekit:navigation-end={() => {
		$navigationState = 'loaded';
	}}
/>

<div class="progress-bar">
		<div class="progress-sliver" style="--width: {$progress * 100}%;--opacity: {$opacity}" />
</div>

<style>
	.progress-bar {
		position: absolute;
		top: 0;
		width: 100%;
		height: 0.25rem;
		background-color: rgba(#000, 0.1);
	}
	.progress-sliver {
		width: var(--width);
		opacity: var(--opacity);
		background-color: var(--color-tint);
		height: 100%;
	}
</style>
