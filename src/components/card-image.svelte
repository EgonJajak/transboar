<script>
  import Image from './Image.svelte';
  export let card;

  $: alt = card.transName;

  function pathGetter({ type, name }) {
    return (size) => encodeURIComponent(`/cards/${type}/${size}/${name}.jpg`);
  }
</script>

<Image pathGetter={pathGetter(card)} alt/>