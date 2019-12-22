<script>
  export let pathGetter;
  export let alt;
</script>

<style>
 img {
    width: 100%;
  }
</style>

<picture>
  <!-- <source media="(min-width: 1024px)" srcset={pathGetter("1024")}> -->
  <source media="(min-width: 361px)" srcset={pathGetter(720)}>
  <source media="(max-width: 360px)" srcset={pathGetter(360)}>
  <img
    src={pathGetter(720)}
    {alt} 
    data-test-image
  >
</picture>