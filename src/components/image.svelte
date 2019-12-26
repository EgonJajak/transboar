<script>
  export let pathGetter;
  export let fillHeight;
  export let alt;
  export let lazyLoad;

  let observer;
  let getPath = pathGetter;
  let loaded = false;

  if (lazyLoad){
    getPath = () => {
      return "";
    };

    observer = new IntersectionObserver(onIntersect, {
      rootMargin: "200px"
    });
  }


  function onIntersect(entries) {
    if (!loaded && entries[0].isIntersecting) {
      getPath = pathGetter;
    }
  }

  function observe(node) {
    observer && observer.observe(node);
    return {
      destroy() {
        observer && observer.unobserve(node);
      }
    };
  }
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
  <!-- <source media="(min-width: 1024px)" srcset={getPath("1024")}> -->
  <source media="(min-width: 361px)" srcset={getPath(720)} />
  <source media="(max-width: 360px)" srcset={getPath(360)} />
  <img
    src={getPath(720)}
    {alt}
    class:fill-height={fillHeight}
    use:observe
    data-test-image />
</picture>
