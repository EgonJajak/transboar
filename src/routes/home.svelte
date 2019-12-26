<script>
  import { fly } from "svelte/transition";
  import { expoInOut } from "svelte/easing";
  import CardImage from "../components/card-image.svelte";
  import SearchBar from "../components/search-bar.svelte";
  import CardPreviews from "../components/card-previews.svelte";
  import { getCardsByText } from "../database";
  import noCard from "../database/cards/no-card";
  import { searchString } from "../stores";

  $: cards = getCardsByText($searchString);
</script>


<svelte:head>
  <title>Transboar app</title>
</svelte:head>

<div class="container">
  <section class="search-bar">
    <SearchBar />
  </section>

  <section class="cards">
    <CardPreviews {cards} />
  </section>
</div>


<style>
  :root {
    --search-box-height: 2.5rem;
    --main-spacing: 0.6rem;
    --main-spacing-sum: var(--main-spacing) * 2;
    --max-width: 720px;
  }
  :global(*) {
    box-sizing: border-box;
  }

  .container {
    padding: 0 0.6rem;
    max-width: var(--max-width);
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }

  .search-bar {
    position: fixed;
    top: 0;
    height: var(--search-box-height);
    width: calc(100% - var(--main-spacing-sum));
    max-width: var(--max-width);
  }

  .cards {
    margin-top: calc(var(--search-box-height) + var(--main-spacing));
    width: 100%;
  }
</style>