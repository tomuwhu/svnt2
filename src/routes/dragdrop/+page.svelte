<script>
// @ts-nocheck

let name = 'world';

let drop_zone;
let objects = [
  { el: null, id: 1 }, 
  { el: null, id: 2 }, 
  { el: null, id: 3 }
];

let dropped = [];
let status = '';

let dropped_in = '';
let activeEvent = '';
let originalX = '';
let originalY = '';

function handleDragEnter(e) {
    status = "You are dragging over the " + e
      .target
      .getAttribute('id');
}

function handleDragLeave(e) {
    status = "You left the " + e
      .target
      .getAttribute('id');
}

function handleDragDrop(e) {
  e.preventDefault();
  var element_id = e
      .dataTransfer
      .getData("text");
  dropped = dropped.concat(element_id);
  dropped_in = true;
  status = "You droped " + element_id + " into drop zone";
}

function handleDragStart(e) {
  status = "Dragging the element " + e
    .target
    .getAttribute('id');
  e.dataTransfer.dropEffect = "move";
  e.dataTransfer
    .setData("text", e.target.getAttribute('id'));
}

function handleDragEnd(e) {
  if (dropped_in == false) {
    status = "You let the " + e
      .target
      .getAttribute('id') + " go.";
  }
  dropped_in = false;
}
</script>

<h2 id="app_status">Drag status: {status}</h2>
<h1>Drop Zone</h1>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div 
  on:dragenter={handleDragEnter} 
  on:dragleave={handleDragLeave}  
  on:drop={handleDragDrop} 
  bind:this={drop_zone}
  id="drop_zone" 
  ondragover="return false">
  {#each objects.filter(v => dropped.includes(`${v.id}`)) as {id}, i}
    <div class="objects" id={id} style="cursor: auto">
      {id}. objektum
    </div>
  {/each}
</div>

<!-- svelte-ignore a11y-no-static-element-interactions -->
{#each objects.filter(v => !dropped.includes(`${v.id}`)) as { id }, i}
  <div 
    id="{id}"
    class="objects" 
    draggable=true 
    bind:this={objects[i].el}
    on:dragstart={handleDragStart}
    on:dragend={handleDragEnd}>
  {id}. objektum
  </div>
{/each}

<style>
  
  :global(html), :global(body) {
    margin: 0; 
    height: 100%; 
    overflow: hidden;
    user-select: none;
    -webkit-user-select: none;
  }

  #drop_zone {
    background-color: #eee;
    border: #999 1px solid ;
    width: 280px;
    height: 200px;
    padding: 18px;
    font-size: 19px;
    border-radius: 120px;
  }
  
  .objects {
    display: inline-block;
    background-color: #FFF3CC;
    border: #DFBC6A 1px solid;
    width: 90px;
    height: 20px;
    margin: 10px;
    padding: 8px;
    font-size: 16px;
    text-align: center;
    box-shadow: 2px 2px 2px #999;
    cursor: move;
    border-radius: 15px;
  }
  div#drop_zone {
    margin: auto;
  }
</style>