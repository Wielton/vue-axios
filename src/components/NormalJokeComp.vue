<template>
<v-app>
    <v-main>
        <JokeButtonComp/>
        <p>{{normalJoke}}</p>
    </v-main>
</v-app>
    
    
    

</template>

<script>
import {useMainStore} from '@/stores/rawDataApi';
import {mapState} from 'pinia';
import JokeButtonComp from './JokeButtonComp.vue';




    export default {
        components: { JokeButtonComp },
        name: 'NormalJokeComp',
        data(){
            return{
                jokeType: 'Normal Joke',
            }
        },
        computed: {
            // Getter
            ...mapState(useMainStore,['normalJoke']),
            
        },
        
        actions: {
            
        },
        methods: {
            
        }
    }
</script>

<style scoped>

</style>