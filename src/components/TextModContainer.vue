<template>

    
    <div v-if="isShow">
        <LoudJokeComp/>
        <NormalJokeComp/>
        <SnakeJokeComp/>
    </div>


</template>

<script>
import { useMainStore } from '@/stores/rawDataApi';
import { mapState } from 'pinia';
import LoudJokeComp from '@/components/LoudJokeComp.vue';
import NormalJokeComp from '@/components/NormalJokeComp.vue';
import SnakeJokeComp from '@/components/SnakeJokeComp.vue';








export default {
    name: 'App',
    components: {
        LoudJokeComp,
        NormalJokeComp,
        SnakeJokeComp,
        
    },
    data(){
        
            return {
                
                
                
            }
        },
    computed: {

            
            //// State
            ...mapState(useMainStore,['onClick']),
            ...mapState(useMainStore,['isShow'])
            // Getters
            
            
        },
        
        
};
</script>
