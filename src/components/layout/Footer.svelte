<script lang="ts">
	export let menu;
	export let social;
	export let title: string;
	export let description: string;
</script>

<footer class="footer">
	<div class="footer-wrap">
		<div class="footer-top">
			<div class="info">
				<p>
					{title}: {description}
					{#each menu as item}
						| <a href={item.path}>{item.label}</a>
					{/each}
				</p>
			</div>

			{#if social.length}
				<div class="social">
					<p>
						{#each social as item, i}
							{#if i !== 0} | {/if}
							<a href={item.path}>{item.label}</a>
						{/each}
					</p>
				</div>
			{/if}
		</div>
		<div class="footer-bottom">
			<p class="disclaimer">
				<b>Magic: the Gathering</b> and <b>Dungeons &amp; Dragons</b> are copyright Wizards of the Coast,
				LLC, a subsidiary of Hasbro, Inc. This website is unofficial fan content permitted under the
				Wizards of the Coast Fan Content Policy and is not affiliated with Wizards of the Coast.
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
			display: flex;
			justify-content: space-between;
		}
	}

	.disclaimer {
		font-size: 0.75em;
		font-style: italic;
	}
</style>
