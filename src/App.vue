<template>
  <div id="app">
    <Monitor/>
  </div>
</template>

<script>
import Monitor from './components/Monitor.vue';

export default {
  name: 'App',
  components: {
    Monitor,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
@import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

h1 {
  font-family: 'Press Start 2P', cursive;
  font-smooth: never;
  -webkit-font-smoothing : none;
  text-transform: uppercase;
}

body {
  background-color: #141214;
}
</style>
