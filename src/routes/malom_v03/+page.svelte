<script>
// @ts-nocheck
  import Malom from './Malom.svelte'
  var render = false
  var counter = 1
  var innerWidth = 0
  $: x = start(innerWidth != 10000 ? "cica" : 3)
  const start = p => {
    render = false
    setTimeout(() => {
      render = true
      if (p!="cica") counter++
    })
  }
</script>
<svelte:window bind:innerWidth />
{#if render==true}
<Malom ad="Malom - {counter}. játszma"/>
{/if}
<br><br>
<button on:click={start}>Új játszma</button>

<style>
  button {
    cursor: pointer;
  }
</style>