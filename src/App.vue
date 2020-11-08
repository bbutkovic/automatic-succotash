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

h1, h2 {
  font-family: 'Press Start 2P', cursive;
  text-transform: uppercase;
  font-size: 100px;
}

h2 {
  font-size: 50px;
}

p {
  font-family: 'VT323', monospace;
}

body {
  background-color: #141214;
  font-smooth: never;
  -webkit-font-smoothing : none;
}
</style>
