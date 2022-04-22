<template>
<v-app>
    <v-main>
        <JokeButtonComp/>
        <p>{{loudJoke}}</p>
    </v-main>
</v-app>
    
    
    

</template>

<script>
import {useMainStore} from '@/stores/rawDataApi';
import {mapState} from 'pinia';
import JokeButtonComp from './JokeButtonComp.vue';




    export default {
        name: 'LoudJokeComp',
        data(){
            return{
                jokeType: 'Loud Joke',
            }
        },
        components : {
            JokeButtonComp 
        },
        computed: {
            // Getter
            ...mapState(useMainStore,['loudJoke']),
            
        },
        
        actions: {
            
        },
        methods: {
            
        }
    }
</script>

<style scoped>

</style>