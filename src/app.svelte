<script>
  import router from "page";
  import Home from "./routes/home.svelte";
  import Card from "./routes/card.svelte";

  let route = {
    component: Home
  };

  router("/", () => {
    route = {
      component: Home,
      name: "Title more"
    };
  });

  router("/card/:name", context => {
    route = {
      component: Card,
      cardName: context.params.name
    };
  });
  router.base(BASE_URL);
  router.start({hashbang: true});
</script>

<svelte:component this={route.component} {...route} />
