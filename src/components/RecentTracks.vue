<template>
  <div>
    <strong>Recent Tracks:</strong>
    <div v-if="recentTracks.length">
      <p v-for="(track, i) in recentTracks" :key="i">
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
    ...mapState(['recentTracks'])
  }
})
export default class RecentTracks extends Vue {
  private mounted(): void {
    this.$store.dispatch('getRecentTracks');
  }
}
</script>
<style scoped lang="less">
</style>
