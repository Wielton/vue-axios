<template>
  <v-container class="grey lighten-5">
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <NormalJokeComp/>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <LoudJokeComp/>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          <SnakeJokeComp/>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LoudJokeComp from './LoudJokeComp.vue'
import NormalJokeComp from './NormalJokeComp.vue'
import SnakeJokeComp from './SnakeJokeComp.vue'
    export default {
  components: { NormalJokeComp, LoudJokeComp, SnakeJokeComp },
    data: () => ({
      alignments: [
        'start',
        'center',
        'end',
      ],
    }),
    }
</script>

<style scoped>

</style>