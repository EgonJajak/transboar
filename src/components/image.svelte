<script>
  export let pathGetter;
  export let fillHeight;
  export let alt;
</script>

<style>
 img:not(.fill-height) {
    width: 100%;
  }

  .fill-height {
    height: 100%;
  }
</style>

<picture>
  <!-- <source media="(min-width: 1024px)" srcset={pathGetter("1024")}> -->
  <source media="(min-width: 361px)" srcset={pathGetter(720)}>
  <source media="(max-width: 360px)" srcset={pathGetter(360)}>
  <img
    src={pathGetter(720)}
    {alt}
    class:fill-height="{fillHeight}"
    data-test-image
  >
</picture>