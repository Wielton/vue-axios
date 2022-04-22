<template>
  <v-app>
    <v-main>
      <h1>{{title}}</h1>
      <JokeButtonComp @click="getJoke"/>
      <GridComp/>
    </v-main>
  </v-app>
</template>

<script>
import {useMainStore} from '@/stores/rawDataApi';
import {mapState} from 'pinia';
import JokeButtonComp from './components/JokeButtonComp.vue';
import GridComp from './components/GridComp.vue';




export default {
  name: 'App',

  components: {
    JokeButtonComp,
    GridComp
    
    
    
  },

  data: () => ({
    
  }),
  computed: {
            //// State
            ...mapState(useMainStore,['title']),
            // Action
            ...mapState(useMainStore,['getJoke'])
        },
};
</script>
