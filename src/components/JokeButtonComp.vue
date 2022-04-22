<template>
    <v-btn color="primary" @click="getJoke" :key="jokeButton"
            >
        {{jokeType}}
      </v-btn>
</template>

<script>
import {useMainStore} from '@/stores/rawDataApi';
import {mapState} from 'pinia';
    export default {
        name: 'JokeButtonComp',
        props: {
            jokeType: String
        },
        data(){
            return {
                store: undefined,
                showLoading: false,
                
            }
        },
        computed: {
            
            
            // Action
            ...mapState(useMainStore,['getJoke'])
        },
        mounted (){
            this.store = useMainStore();
            useMainStore().$onAction(({name, after}) => {
                if(name == "getJoke"){
                    after(()=>{
                        this.showLoading = true;
                    })
                }else if(name == "newQuoteNotification"){
                    this.showLoading = false;
                }
            })
        },
        
    }
</script>

<style  scoped>

</style>