<template>
    <v-btn color="primary"
            >
        {{jokeType}}
      </v-btn>
</template>

<script>
import {useMainStore} from '@/stores/rawDataApi';

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