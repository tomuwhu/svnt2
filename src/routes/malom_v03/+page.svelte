<script>
  import Malom from './Malom.svelte'
  var render = false
  var counter = 1
  const start = () => {
    render = false
    setTimeout(() => {
      render = true
      counter++
    }, 100)
  }
</script>

{#if render==true}
<Malom ad="Malom - {counter}. játszma"/>
{:else}
<Malom />
{/if}
<br><br>
<button on:click={start}>Új játszma</button>

<style>
  button {
    cursor: pointer;
  }
</style>