<script>
  import Malom from './Malom.svelte'
  var render = false
  var button = "Start"
  const start = () => {
    render = false
    setTimeout(() => {
      render = true
      button = "Új játszma"
    }, 100)
  }
</script>

{#if render==true}
<Malom ad="Malom - új játszma"/>
{:else}
<Malom ad="Malom"/>
{/if}
<br><br>
<button on:click={start}>{button}</button>

<style>
  button {
    cursor: pointer;
  }
</style>