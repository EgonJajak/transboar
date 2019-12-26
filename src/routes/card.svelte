<script>
  import { getCardByName } from "../database";
  import FullScreenCard from "../components/full-screen-card.svelte";
  import goTo from "page";

  export let cardName;

  function goBack(){
    window.history.back();
  }
</script>

<div>
  <FullScreenCard card={getCardByName(cardName)} onClose={goBack} />
</div>

<style>
  div {
    max-width: var(--max-width);
    margin: 0 auto;
  }
</style>