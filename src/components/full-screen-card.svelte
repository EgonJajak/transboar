<script>
  import CardImage from './card-image.svelte';

  export let onClose;
  export let card;

  $: fileName = card.fileName;
  $: alt = card.transName;
  $: text = card.transText;
</script>

<style>
  .container {
    width: 100%;
    max-width: var(--max-width);
    position: absolute;
    top: 0;
    left: 0;
    padding: var(--main-spacing);
  }
  .img {
    width: 100%;
    display: block;
    cursor: pointer;
  }

  p {
    display: block;
    margin: 1em 0.5em;
    line-height: normal;
  }
</style>

<div class="container">
  <div on:click={onClose} class="img">
    <CardImage card={card} />
  </div>
  <p data-test-full-screen-card="description">
    {@html text}
  </p>
</div>
