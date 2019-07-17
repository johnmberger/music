<template>
  <div>
    <strong>Top Artists:</strong>
    <div v-if="weeklyArtists.length">
      <p v-for="(artist, i) in weeklyArtists" :key="i">{{ artist.name }}</p>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component({
  computed: {
    ...mapState(['weeklyArtists'])
  }
})
export default class TopArtists extends Vue {
  private mounted(): void {
    this.$store.dispatch('getWeeklyArtists');
  }
}
</script>
<style scoped lang="less">
</style>
