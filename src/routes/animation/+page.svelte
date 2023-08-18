<script>
  var x = 40, y = 100
  import Menu from '../Menu.svelte'
</script>
<title>Animáció</title>
<body>
  <Menu  active="1" />
  <br>
  <br>
  <div>X:</div>
  <div><input 
      type="range" 
      bind:value={x}
  ></div>
  <div>{x}</div>
  <br>
  <div>Y: </div>
  <div><input 
      type="range" 
      bind:value={y}
  ></div>
  <div>{y}</div><hr>
  <div    
      id="x2" 
      style={`top: ${4*y+150}px; left: ${10*x+20}px;`}
  ></div>
</body>

<style>
  :global(html), :global(body) {
    margin: 0; 
    height: 100%; 
    overflow: hidden;
    user-select: none;
    -webkit-user-select: none;
  }
  div {
      display: inline-block;
      width: 190px;
      text-align: center;
  }
  #x2 {
      background-color: aqua;
      height: 40px;
      width: 40px;
      position: fixed;
      border-radius: 20px;
      box-shadow: 1px 1px 3px black;
  }
</style>