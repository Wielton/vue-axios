<template>
    <div>
            <button @click="onClick">Make Snake_Text</button>
            <p v-if="isShow">{{snakeText}}</p>
        </div>
</template>

<script>
import {useMainStore} from '@/stores/rawDataApi';
import {mapState} from 'pinia';






    export default {

        
        name: 'SnakeJokeComp',
        data(){
            return{
                isShow:false
            }
        },
        computed: {
            
            // Getter
            
            ...mapState(useMainStore,['onClick']),
            ...mapState(useMainStore,['snakeText']),
            
        },
        
        actions: {
            
        },
        methods: {
            
        }
    }
</script>

<style scoped>

</style>