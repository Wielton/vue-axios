<template>
    <div>
        <h1>{{title}}</h1>
        <button @click="getJoke">Get Joke</button>
        <p>{{joke}}</p>
    </div>
</template>

<script>
import {useMainStore} from '@/stores/rawDataApi';
import {mapState} from 'pinia';


    export default {
        name: 'JokeButtonComp',
        data(){
            return{
                
            }
        },
        computed: {
            // Action
            ...mapState(useMainStore,['title']),
            ...mapState(useMainStore,['getJoke']),
            ...mapState(useMainStore,['joke'])
            
        },
        mounted (){
            this.store = useMainStore();
            useMainStore().$onAction(({name, after}) => {
                if(name == "getJoke"){
                    after(()=>{
                        !this.isShow;
                    })
                }else{
                    this.isShow;
                }
            })
        },
        
    }
</script>

<style  >
    button {

        box-sizing: border-box;
        border: 1px solid black;
        background-color: #383838;
        width: 200px;
        height: 50px;
        color: white
    }
</style>