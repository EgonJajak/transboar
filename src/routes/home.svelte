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
