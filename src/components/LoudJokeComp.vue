<template>
    
        <div>
            <button @click="onClick">Make UPPERTEXT</button>
            <p v-if="isShow">{{upperText}}</p>
        </div>
        
</template>

<script>
import {useMainStore} from '@/stores/rawDataApi';
import {mapState} from 'pinia';






    export default {
        
        name: 'LoudJokeComp',
        data(){
            return{
                isShow:false
                
                
            }
        },
        
        computed: {
            
            // Getter
            
            
            ...mapState(useMainStore,['onClick']),
            ...mapState(useMainStore,['upperText']),
            
        },
        
        actions: {
            
        },
        methods: {
            
        }
    }
</script>

<style scoped>

</style>