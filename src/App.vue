<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <TopTracks />
    <TopArtists />
    <RecentTracks />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TopArtists from './components/TopArtists.vue';
import TopTracks from './components/TopTracks.vue';
import RecentTracks from './components/RecentTracks.vue';

@Component({
  components: {
    TopArtists,
    TopTracks,
    RecentTracks
  }
})
export default class App extends Vue {}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
