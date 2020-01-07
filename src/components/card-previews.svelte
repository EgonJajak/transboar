<script>
  import { fly } from "svelte/transition";
  import { expoInOut } from "svelte/easing";
  import CardImage from "../components/card-image.svelte";
  import { getCardsByText } from "../database";
  import noCard from "../database/cards/no-card";

  export let cards;
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

<div class="card-previews">
  {#if cards.length}
    {#each cards as card, index}
      <a
        href={`card/${card.name}`}
        in:fly={{ y: 500, duration: FLY_DURATION, delay: getDelayForIndex(cards.length, index), easing: expoInOut }}
        data-test-card-previews="link"
      >
        <CardImage {card} lazyLoad={true} />
      </a>
    {/each}
  {:else}
    <CardImage card={noCard} />
  {/if}
</div>


<style>
  a {
    height: 70px;
    display: block;
  }
</style>