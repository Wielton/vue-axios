<template>
<v-app>
    <v-main>
        <JokeButtonComp/>
        <p>{{snakeJoke}}</p>
    </v-main>
</v-app>
    
    
    

</template>

<script>
import {useMainStore} from '@/stores/rawDataApi';
import {mapState} from 'pinia';
import JokeButtonComp from './JokeButtonComp.vue';




    export default {
        components: { JokeButtonComp },
        name: 'SnakeJokeComp',
        data(){
            return{
                jokeType: 'Snake Joke',
            }
        },
        computed: {
            // Getter
            ...mapState(useMainStore,['snakeJoke']),
            
        },
        
        actions: {
            
        },
        methods: {
            
        }
    }
</script>

<style scoped>

</style>