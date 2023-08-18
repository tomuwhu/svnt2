<script lang="ts">
	var i1: string = '';
	var i2: string = '';
	import levenshtein from 'damerau-levenshtein';
	$: sim = levenshtein(i1, i2).similarity*100;
</script>
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
<br><br>
<div>
	<a href="animation" target="animation">Animáció</a>
	<a href="dragdrop" target="dragdrop">Drag & Drop</a>
	<a href="malom_v01" target="malom_v01">Malom tábla</a>
	<a href="malom_v02" target="malom_v02">Malom bábuk mozgatása</a>
	<a href="malom_v03" target="malom_v03">Malom teljes</a>
	<a href="seti" target="seti">Időzítés</a>
</div>
<style lang="scss">
	$resc: rgb(55, 71, 109);
	div {
		color: $resc;
	}
	a {
		text-decoration: none;
		border: solid 1px black;
		padding: 5px;
		color: rgb(40, 40, 73);
		background-color: aquamarine;
	}
	a:hover {
		background-color: rgb(129, 202, 174);
	}
</style>
