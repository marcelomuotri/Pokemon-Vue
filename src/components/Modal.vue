<template>
  <div v-if="mostrar" class="clase w3-animate-opacity">
    <div class="card">
      <div class="titulo">
        <h1>Juego finalizado</h1>
        <h2>Score:  {{puntaje}}</h2>
      </div>
      <div>
        <button @click="$emit('reiniciar')" class="w3-button w3-purple">REINICIAR JUEGO</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrar: true,
    };
  },
  props: {
    puntaje: {
      type: Number,
    }
  },
  methods: {
    ocultar() {
      this.mostrar = null;
    },
  },
};
</script>

<style scoped>
body {
  background: #fafafa;
  display: flex;
  text-transform: uppercase;
  font-family: "Asap Condensed", sans-serif;
}

.italic {
  font-style: italic;
}

.card {
  position: absolute;
  left: 30%;
  bottom: 30%;
  margin: auto;
  height: 430px;
  width: 600px;
  text-align: center;
  background-image: url("https://www.kissfm.es/wp-content/uploads/2016/07/pOKEMON.jpg");
  background-size: 70%;
  background-position: 50% 65%; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  border-radius: 10px;
  box-shadow: 0 6px 12px -3px rgba(0, 0, 0, 0.3);
  color: #fff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.titulo {
  color: black;
  font-size: 2rem;
}
</style>