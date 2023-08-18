<script lang="ts">
  var i: number = 0
  setInterval( ()=> i++, 1000)
  import Menu from '../Menu.svelte'
</script>
<title>Időzítő</title>
<Menu active="6"/>
<br>
<br>
<h1>Négyzetszámok</h1>
{i}<sup>2</sup> = {i ** 2}
<style>
  :global(html), :global(body) {
    margin: 0; 
    height: 100%; 
    overflow: hidden;
    user-select: none;
    -webkit-user-select: none;
  }
</style>