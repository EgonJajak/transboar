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
    padding: var(--main-spacing);
  }
  .img {
    display: flex;
    cursor: pointer;
    height: 80vh;
    justify-content: center;
  }

  p {
    display: block;
    margin: 1em 0.5em;
    line-height: normal;
  }
</style>

<div class="container">
  <div on:click={onClose} class="img">
    <CardImage card={card} fillHeight={true} />
  </div>
  <p data-test-full-screen-card="description">
    {@html text}
  </p>
</div>
