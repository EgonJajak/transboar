<script>
  import Image from './Image.svelte';
  export let card;
  export let fillHeight;

  $: alt = card.transName;

  function pathGetter({ type, name }) {
    return (size) => `/cards/${type}/${size}/${name}.jpg`;
  }
</script>

<Image pathGetter={pathGetter(card)} fillHeight={fillHeight} alt/>