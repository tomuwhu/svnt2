<script>
  export let active = ""
  var items = [
    ["./index.html", "Damerau-Levenshtein távolság"],
    ["./animation", "Animáció"],
    ["./dragdrop", "Drag & Drop"],
    ["./malom_v01", "Malom tábla"],
    ["./malom_v02", "Malom bábuk mozgatása"],
    ["./malom_v03", "Malom teljes"],
    ["./seti", "Időzítés"],
  ]
</script>
<div>
  {#each items as p, i}<a class="x{i} {active == i.toString() ? "a" : ""}" href={active == i.toString() ? "" : p[0]}>{p[1]}</a>{/each}
</div>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@10..48,200&display=swap');
  div {
    background-color: black;
    padding-bottom: 1px;
    padding-top: 0px;
    color: white;
  }
    a {
    text-decoration: none;
    padding-left: 8px;
    padding-right: 8px;
    color: rgb(240, 237, 195);
    border-left: solid 1px white;
    font-size: 11px;
    font-family: 'Bricolage Grotesque', sans-serif;
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