<script>
  import { searchString } from '../stores';
  import { onMount, afterUpdate } from 'svelte';

  function inputChanged({target: {value = ''}}){
    if (value !== $searchString){
      $searchString = value;
    }
  }
</script>

<style>
  input {
    width: 100%;
    height: 100%;
    line-height: 24px;
    font-size: 24px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 0 0.5em;
  }
</style>

<input
  type="search"
  placeholder="část názvu karty"
  bind:value={$searchString}
  id="search-bar"
  data-test-search-bar
/>