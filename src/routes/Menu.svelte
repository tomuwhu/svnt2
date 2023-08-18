<script>
	export let active = ""
	var items = [
		["/", "Damerau-Levenshtein távolság"],
		["animation", "Animáció"],
		["dragdrop", "Drag & Drop"],
		["malom_v01", "Malom tábla"],
		["malom_v02", "Malom bábuk mozgatása"],
		["malom_v03", "Malom teljes"],
		["seti", "Időzítés"],
	]
</script>
<div>
	{#each items as p, i}<a class="x{i} {active == i.toString() ? "a" : ""}" href={p[0]}>{p[1]}</a>{/each}
</div>
<style>
	div {
		background-color: black;
		padding: 3px;
		color: white;
	}
    a {
		text-decoration: none;
		padding-left: 8px;
		padding-right: 8px;
		color: rgb(240, 237, 195);
		border-left: solid 1px white;
	}
	a.x0 {
		border: none;
	}
	a:hover {
		color:aqua;
	}
	.a {
		color: rgb(135, 230, 230);
		text-shadow: 0px 0px 2px rgb(141, 238, 236);
	}
</style>