<script lang="ts">
	import type { MenuItem } from '$lib/models';

	export let menu: MenuItem[];
	export let social: MenuItem[];
	export let title: string;
	export let description: string;
</script>

<footer class="footer">
	<div class="footer-wrap">
		<div class="footer-top">
			<div class="info">
				<p>
					{title}: {description}
					{#if menu?.length}
						{#each menu as item}
							| <a href={item.path}>{item.label}</a>
						{/each}
					{/if}
				</p>
			</div>

			{#if social?.length}
				<div class="social">
					<p>
						{#each social as item, i}
							{#if i !== 0} | {/if}
							<a href={item.path} target="_blank">{item.label}</a>
						{/each}
					</p>
				</div>
			{/if}
		</div>
		<div class="footer-bottom">
			<p class="disclaimer">
				<b>Magic: the Gathering</b> is copyright Wizards of the Coast, LLC, a subsidiary of Hasbro, Inc.
				Portions of this website are unofficial fan content permitted under the Wizards of the Coast
				Fan Content Policy. This site is not produced by, endorsed by, supported by, or affiliated with
				Wizards of the Coast.
			</p>

			<p class="disclaimer">
				Portions of this site is powered by <b>Scryfall</b>, which is not an affiliate of this site.
			</p>
		</div>
	</div>
</footer>

<style lang="scss">
	.footer {
		p {
			margin: 0;
		}
		&-wrap {
			max-width: var(--container-width);
			margin: auto;
			padding: 1rem;
		}
		&-top {
			margin-bottom: 1em;
			@include breakpoint(small) {
				display: flex;
				justify-content: space-between;
			}
			.info {
				margin-bottom: 1em;
				@include breakpoint(small) {
					margin-bottom: 0;
				}
			}
		}

		.disclaimer {
			font-size: 0.75em;
			font-style: italic;
			margin-bottom: 1em;
		}
	}
</style>
