<script setup>

//const props = defineProps(['languages'])
//const emit = defineEmits(['update:languages'])

function addRow(){
  var newInput = document.createElement("input");
  newInput.setAttribute("list", "languages");
  newInput.classList = "form-control dc-vlist";
  var newcol = document.createElement("div");
  newcol.classList = "col dc-tmp";
  newcol.appendChild(newInput);
  document.getElementById("langs").appendChild(newcol);
}

/*function saveData(){
  var domNodes = document.querySelectorAll("#langs input");
  var nodes = [...domNodes]; // converts a Node list to an array
  var values = nodes.map((x) => x.value).filter(function(i){return i.trim() != "";}); //delete empty values (ES5 syntax for old browser)
  emit('update:languages', values);
}*/
</script>

<template>
    <div class="row">
      <h5>Langues</h5>
      <div id="langs">
        <div class="col" v-for="(language, index) in languages" :key="language">
          <input 
          class="form-control dc-vlist" list="languages" type="text" 
          :value="language" :key="index">
        </div>
      </div>
    </div>
    <datalist id="languages">
      <option value="Français"></option>
      <option value="Anglais"></option>
      <option value="Allemand"></option>
      <option value="Espagnol"></option>
      <option value="Italien"></option>
    </datalist>
    <div class="row">
      <div class="col text-center">
        <button type="button" class="btn btn-outline-primary btn-sm" @click="addRow">Ajouter une langue</button>
      </div>
    </div>
</template>
