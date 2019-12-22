<script>
  import CardImage from "../components/card-image.svelte";
  import SearchBar from "../components/search-bar.svelte";
  import { getCardsByText } from "../database";
  import noCard from "../database/cards/no-card";
  import { searchString } from "../stores";

  $: cards = getCardsByText($searchString);
</script>

<style>
  :root {
    --search-box-height: 2.5rem;
    --main-spacing: 0.6rem;
    --main-spacing-sum: var(--main-spacing) * 2;
  }
  :global(*) {
    box-sizing: border-box;
  }

  .container {
    padding: 0 0.6rem;
  }

  .search-bar {
    position: fixed;
    height: var(--search-box-height);
    width: calc(100% - var(--main-spacing-sum));
    max-width: calc(var(--max-width) - var(--main-spacing-sum));
  }

  .cards {
    margin-top: calc(var(--search-box-height) + var(--main-spacing));
  }
</style>

<svelte:head>
  <title>Transboar app</title>
</svelte:head>

<div class="container">
  <section class="search-bar">
    <SearchBar />
  </section>

  <section class="cards">
    <div class="card-previews">
      {#if cards.length}
        {#each cards as card}
          <a href={`card/${card.name}`}>
            <CardImage {card} />
          </a>
        {/each}
      {:else}
        <CardImage card={noCard} />
      {/if}
    </div>
  </section>
</div>
