<script>
  import { getCardByName } from "../database";
  import FullScreenCard from "../components/full-screen-card.svelte";
  import goTo from "page";

  export let cardName;
</script>

<FullScreenCard card={getCardByName(cardName)} onClose={()=> goTo('/')} />
