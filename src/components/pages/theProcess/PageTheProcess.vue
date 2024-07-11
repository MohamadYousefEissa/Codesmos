<template>
  <div class="container">
    <div class="row text-center">
      <div class="col">
        <v-astro></v-astro>
        <v-waterfall>
          The waterfall methodology is a linear project management approach, where stakeholder and
          customer requirements are gathered at the beginning of the project, and then a sequential
          project plan is created to accommodate those requirements. The waterfall model is so named
          because each phase of the project cascades into the next, following steadily down like a
          waterfall.
        </v-waterfall>
        <v-rapid>
          RAD methodology is a software design methodology that's designed to counter the rigidity
          of other traditional software development models-where you can't make changes easily after
          the initial development is complete. RAD methodology is designed to be flexible to changes
          and to accept new inputs, like features and functions, at every step of the development
          process.
        </v-rapid>
      </div>
    </div>
  </div>
</template>

<script>
import VAstro from './VAstro.vue'
import VWaterfall from './VWaterfall.vue'
import VRapid from './VRapid.vue'
export default {
  components: { VAstro, VWaterfall, VRapid }
}
</script>

<style lang="scss" scoped>
@use '../../../assets/main.scss' as *;
.container {
  margin-top: 8rem;
}
</style>
