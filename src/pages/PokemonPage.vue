<template>
  <div v-if="pokemon">
    <div class="superior">
      <h2 class="letraPokemon">Chances: {{ oportunidades }}</h2>
      <img src="../assets/logoPokemon.png" class="w3-round" alt="Norway">
      <h2 class="letraPokemon">Score : {{ contador }}</h2>
      
    </div>
    <div>
      
    </div>
    <h1 class="letraPokemon">Quien en este Pokémon?</h1>

    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions
      :pokemons="pokemons"
      :oportunidades="oportunidades"
      @selection="checkAnswer"
    />
    <Modal v-if="mostrarModal" :puntaje="contador" @reiniciar="reiniciar"/>

    <div class="fade-in" v-if="showMessage">
      <h2 v-if="ganador" class="w3-panel w3-green">{{ message }}</h2>
      <h2 v-else class="w3-panel w3-red">{{ message }}</h2>
      <button  @click="siguiente">Siguiente</button>
    </div>

    <!-- aca van a ir 2 componentes, la imagen de pkmn y las opciones -->
  </div>
  <div v-else><h1>Cargando...</h1></div>
</template>

<script>
import PokemonPicture from "../components/PokemonPicture.vue";
import PokemonOptions from "../components/PokemonOptions.vue";
import getPokemonOptions from "../helpers/getPokemonOptions";
import Modal from "../components/Modal.vue";
import Logo from "../assets/logoPokemon.png"

export default {
  data() {
    return {
      pokemons: [
        {
          name: "cargando",
          id: 0,
        },
      ],
      pokemon: null,
      showPokemon: false,
      showMessage: false,
      message: "Ganaste !!",
      contador: 0,
      oportunidades: 5,
      mostrarModal: false,
      watcher: "1",
      ganador: null
    };
  },
  components: { PokemonPicture, PokemonOptions, Modal },
  methods: {
    async arrancar() {
      const pokemons = await getPokemonOptions();
      console.log(pokemons.pokemonListos);
      this.pokemons = pokemons.pokemonListos;

      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemons[rndInt];
    },
    checkAnswer(pokemonId) {
      if (this.oportunidades > 0) {
        this.showPokemon = true;
       
        if (pokemonId === this.pokemon.id) {
          this.showMessage = "true";
          this.message = `Ganaste!! es ${this.pokemon.name}`;
          this.contador = this.contador + 10;
          this.ganador= true
        } else {
          this.showMessage = "true";
          this.message = `Perdiste!! es ${this.pokemon.name}`;
          this.ganador= false
        }
      } else {
      }
    },
    siguiente() {
      if (this.oportunidades > 0) {
        (this.showPokemon = false), (this.showMessage = false), this.arrancar();
         this.oportunidades--;
      }
    },
    reiniciar(){
      this.contador = 0
      this.oportunidades = 5
      this.mostrarModal = false
    }
  },
  mounted() {
    this.arrancar();
  },
  watch : {
    oportunidades(nuevoValor , valorAnterior){
      if (this.oportunidades === 0){
        this.mostrarModal = true
      }
      
    }
  }
};
</script>
<style scoped>
.superior {
  display: flex;
  justify-content: space-around;
}
img{
  width: 15%;
}

.letraPokemon{
  font-family: 'Pokemon Solid', sans-serif;
  letter-spacing: 2px;
}
</style>


PokemonPicture