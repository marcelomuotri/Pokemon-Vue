<template>
  <div class="pokemon-container">
   
    <img
      :src="imgSrc"
      class="hidden-pokemon"
      alt="Bolbasor"
    />

    <img
      v-if="showPokemon"
      :src="imgSrc"
      class="fade-in"
      alt="pokemon2" 
    /> 
  </div>
</template>

<script>
export default {
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
    }
  },
  props:{
    pokemonId: {
      type: Number,
      required:true,
      default: 1
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false
    }
  }
};
</script>

<style scoped>
.pokemon-container {
  height: 200px;
}

img {
  height: 200px;
  position: absolute;
  right: 42%;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}

.hidden-pokemon {
  filter: brightness(0);
}
</style>