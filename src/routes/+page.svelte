<script lang="ts">
  var i1: string = '';
  var i2: string = '';
  import levenshtein from 'damerau-levenshtein';
  $: sim = levenshtein(i1, i2).similarity*100;
  import Menu from './Menu.svelte'
</script>
<Menu active="0" />
<br><br>
<title>Hasonlóság</title>
<h1>Két szöveg hasonlósága</h1>
<input 
  type="text" 
  bind:value={i1}
  placeholder="egyik szöveg" />
<br />
<input 
  type="text" 
  bind:value={i2} 
  placeholder="másik szöveg"/>
<br />
<div>Hasonlóság: {sim.toFixed()}%</div>
<style lang="scss">
  $resc: rgb(55, 71, 109);
  div {
    color: $resc;
  }
</style>
