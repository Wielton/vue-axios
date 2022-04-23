<template>
    <div>
            <button @click="onClick">Make normal text</button>
            <p v-if="isShow">{{makeNormal}}</p>
        </div>
</template>

<script>
import {useMainStore} from '@/stores/rawDataApi';
import {mapState} from 'pinia';






    export default {

        
        name: 'NormalJokeComp',
        data(){
            return{
                isShow:false
                
            }
        },
        computed: {
            
            // Getter
            
            
            ...mapState(useMainStore,['onClick']),
            ...mapState(useMainStore,['makeNormal']),
            
            
        },
        
        actions: {
            
        },
        methods: {
            
    }}
</script>

<style scoped>

</style>