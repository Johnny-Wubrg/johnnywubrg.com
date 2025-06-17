<script lang="ts">
  type Anchor = 'center' | 'top' | 'bottom';

  export let src: string;
  export let anchor: Anchor = 'center';

  let scroll: number;

  $: offset = Math.round((scroll ?? 0) * 0.6);
</script>

<svelte:window bind:scrollY={scroll} />

<div
  class={['hero', `anchor-${anchor}`]}
  style="--background: url({src}); --offset: {offset}px"
>
  <slot name="content">
    <div class="hero-content">
      <div class="hero-text">
        <slot />
      </div>
    </div>
  </slot>
</div>

<style lang="scss">
  @use 'src/styles/mixins';
  .hero {
    position: relative;
    background-image: var(--background);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
    &.anchor-top {
      background-position-y: calc(0px + var(--offset));
    }
    
    &.anchor-center {
      background-position-y: calc(50% + var(--offset));
    }

    &.anchor-bottom {
      background-position-y: calc(100% + var(--offset));
    }
    padding: 1em 0;

    @include mixins.breakpoint(small) {
      height: 30vw;
      padding: 0;
    }

    &-content {
      text-align: center;
      background: rgba(#000, 0.7);
      padding: 0.5em 0;

      @include mixins.breakpoint(small) {
        box-sizing: border-box;
        position: absolute;
        padding: 3em 0;
        width: 100%;
        top: 50%;
        background: none;
        transform: translateY(-50%);
        overflow: hidden;
        backdrop-filter: blur(2em) brightness(0.7);

        @media (prefers-color-scheme: dark) {
          background: color-mix(
            in srgb,
            var(--color-background) 60%,
            transparent
          );
        }
      }
    }

    &-text {
      color: var(--color-white);
      position: relative;
      z-index: 2;
    }
  }
</style>
