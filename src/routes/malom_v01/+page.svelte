<script>
// @ts-nocheck
import Menu from './../Menu.svelte'
var r = 3.1
var d = [
  [10,10,[1, 9]],[60,10,[0,2,4]],[110,10,[1,14]],[25,25,[4,10]],
  [60,25,[1,3,5,7]],[95,25,[4,13]],[40,40,[7,11]],[60,40,[4,6,8]],
  [80,40,[7,12]],[10,60,[0,10,21]],[25,60,[3,9,11,18]],[40,60,[6,10,15]],
  [80,60,[8,13,17]],[95,60,[5,12,14,20]],[110,60,[2,13,23]],[40,80,[11,16]],
  [60,80,[15,17,19]],[80,80,[12,16]],[25,95,[10,19]],[60,95,[16,18,20,22]],
  [95,95,[13,19]],[10,110,[9,22]],[60,110,[19,21,23]],[110,110,[14,22]]
].map(v => ({x: v[0], y:v[1], b: "white", nl: v[2]}))
</script>
<title>Malom tábla</title>
<Menu active="3" />
<br>
<br>
<h1>Malom</h1>
<svg id="mt" viewBox="0 0 120 120">
  {#each d as p, i}
    {#each p.nl as l}
      <line x1={d[l].x} y1={d[l].y}
            x2={p.x} y2={p.y}
            stroke="#123432" stroke-width="0.7"/>
    {/each}
  {/each}
  {#each d as p, i}
    <circle id={i} cx={p.x} cy={p.y} r={r} fill="white"
            stroke="#123432" stroke-width="0.7" />
  {/each}
</svg>

<style lang="scss">
#mt {
    margin: auto;
    width: 600px;
    border: solid 1px black;
    border-radius: 6px;
    box-shadow: 1px 1px 4px inset black;
    background-color: LightCyan;
}
#mt circle {
  cursor: pointer;
}
</style>
