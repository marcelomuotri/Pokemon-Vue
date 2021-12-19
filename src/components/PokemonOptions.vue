<template>
  
  <div  class="options-container">
    <ul>
      <li v-for="pokemon in pokemons" 
          :key="pokemon.id" 
          @click="$emit('selection', pokemon.id)">
        {{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}}
      </li>
    </ul>
  </div>
</template>
    
<script>
export default {
  
  props: {
    pokemons: {
      type: Array,
    },
    oportunidades :{
      type: Number
    }
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
li {
  color: White;
  background-color: blue;
  padding: 5px 20px 5px 20px;
  font-family: cursive;
  font-size: 25px;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
}

.options-container {
  display: flex;
  justify-content: center;
}
</style>