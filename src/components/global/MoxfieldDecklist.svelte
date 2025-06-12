<script lang="ts">
  import { onMount } from 'svelte';
  import Loader from './Loader.svelte';
  export let id: string;

  let iframe: HTMLIFrameElement | null = null;
  let loaded = false;

  function makeid(length: number) {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const elementId = `moxfield-frame-${makeid(5)}`;

  function moxfieldOnMessage(evt: MessageEvent) {
    const data = evt.data;
    console.log(data, elementId);
    if (
      'object' == typeof data &&
      'moxfield' === data.type &&
      data.id === elementId
    ) {
      if (iframe) iframe.style.height = data.data + 'px';
    }
  }

  function moxfieldOnLoad(evt: Event) {
    if (!evt.target) return;

    loaded = true;

    const target = evt.target as HTMLIFrameElement;

    if (target.contentWindow) {
      target.contentWindow.postMessage(
        { type: 'moxfield', data: target.id },
        '*'
      );
    }
  }

  onMount(() => {
    window.addEventListener('message', moxfieldOnMessage);
  });
</script>

{#if !loaded}
  <Loader />
{/if}

<iframe
  title="Moxfield Deck"
  class="moxfield-embed"
  src={`https://moxfield.com/embed/${id}`}
  id={elementId}
  onload={moxfieldOnLoad}
  bind:this={iframe}
></iframe>

<style lang="scss">
  .moxfield-embed {
    border: none;
    display: block;
    width: 100%;
    max-width: 60vw;
    height: 0;
    margin: auto;
  }
</style>
