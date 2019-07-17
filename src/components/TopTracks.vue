<template>
  <div>
    <strong>Top Tracks:</strong>
    <div v-if="weeklyTracks.length">
      <p v-for="(track, i) in weeklyTracks" :key="i">
        {{ track.name }}
        {{ track.artist.name }}
      </p>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component({
  computed: {
    ...mapState(['weeklyTracks'])
  }
})
export default class TopTracks extends Vue {
  private mounted(): void {
    this.$store.dispatch('getWeeklyTracks');
  }
}
</script>
<style scoped lang="less">
</style>
