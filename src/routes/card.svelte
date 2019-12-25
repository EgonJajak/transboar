<script>
  import { getCardByName } from "../database";
  import FullScreenCard from "../components/full-screen-card.svelte";
  import goTo from "page";

  export let cardName;
</script>

<div>
  <FullScreenCard card={getCardByName(cardName)} onClose={()=> goTo('/')} />
</div>

<style>
  div {
    max-width: var(--max-width);
    margin: 0 auto;
  }
</style>