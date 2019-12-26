<script>
  import { fly } from "svelte/transition";
  import { expoInOut } from "svelte/easing";
  import CardImage from "../components/card-image.svelte";
  import SearchBar from "../components/search-bar.svelte";
  import { getCardsByText } from "../database";
  import noCard from "../database/cards/no-card";
  import { searchString } from "../stores";

  $: cards = getCardsByText($searchString);
  const FLY_DURATION = 200;

  let lastDelay = 0;

  function getDelay(index) {
    const queue = FLY_DURATION * index;
    const easingMultiplier = Math.pow(index, 1 + index * 0.05);

    const easing = index > 0 ? - easingMultiplier * 100 : 0;
    const delay = queue + easing;

    if (delay < lastDelay){
      return lastDelay;
    }

    lastDelay = delay;
    return delay;
  }
  
  const delays = [];
  $: highestCountComputed = delays.length;

  function getDelays(count){
    for (let i = highestCountComputed; i < count; i++){
      delays.push(getDelay(i));
    }

    return delays;
  }

  function getDelayForIndex(count, index){
    let computedDelays = getDelays(count);
    console.log(computedDelays[index])
    return computedDelays[index];
  }
</script>


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
        {#each cards as card, index}
          <a
            href={`card/${card.name}`}
            in:fly={{ y: 500, duration: FLY_DURATION, delay: getDelayForIndex(cards.length, index), easing: expoInOut }}
          >
            <CardImage {card} />
          </a>
        {/each}
      {:else}
        <CardImage card={noCard} />
      {/if}
    </div>
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

  a {
    height: 7rem;
    display: block;
  }
</style>