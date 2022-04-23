<template>
<div id="app">
      <JokeButtonComp/>
      <TextModContainer/>
</div> 
</template>

<script>
import { mapState } from 'pinia';
import {useMainStore} from '@/stores/rawDataApi';
import JokeButtonComp from '@/components/JokeButtonComp.vue';
import TextModContainer from '@/components/TextModContainer.vue';

export default {
  name: 'App',
  components: {
    TextModContainer, 
    JokeButtonComp
    },
    computed: {
      ...mapState(useMainStore,['onClick','isShow']),
    }
  
  
};
</script>
<style>
  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
