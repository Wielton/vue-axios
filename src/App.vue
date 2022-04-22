<template>
  <v-app>
    <v-main>
      <h1>{{title}}</h1>
      <NormalJokeComp/>
      <LoudJokeComp/>
      <SnakeJokeComp/>
    </v-main>
  </v-app>
</template>

<script>
import {useMainStore} from '@/stores/rawDataApi';
import {mapState} from 'pinia';
import NormalJokeComp from './components/NormalJokeComp.vue';
import LoudJokeComp from './components/LoudJokeComp.vue';
import SnakeJokeComp from './components/SnakeJokeComp.vue';



export default {
  name: 'App',

  components: {
    
    NormalJokeComp,
    LoudJokeComp,
    SnakeJokeComp,
    
  },

  data: () => ({
    
  }),
  computed: {
            //// State
            ...mapState(useMainStore,['title']),
        },
};
</script>
