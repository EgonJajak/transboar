<script>
  import Image from './Image.svelte';
  export let card;
  export let fillHeight;

  $: alt = card.transName;

  function pathGetter({ type, fileName, fileTypes = []}) {
    if (!fileTypes || !fileTypes.length){
      throw new Error('Datasource`s card item must have available fileTypes set');
    }

    const fileType = fileTypes[0];
    return (size) => `/cards/${type}/${size}/${fileName}.${fileType}`;
  }
</script>

<Image pathGetter={pathGetter(card)} {fillHeight} {alt}/>