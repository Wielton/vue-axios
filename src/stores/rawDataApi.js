import { defineStore } from "pinia";
import axios from 'axios';


export const useMainStore = defineStore('main', {
    state : () => {
        return{
            title: 'Welcome to the Geeky Jokes page!',
            jokeResponse: undefined,
            isShow: false
            }
        },
        actions: {
        async getJoke(){
                axios.request({
                    url: 'https://geek-jokes.sameerkumar.website/api?format=json',
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        
                    },
                    
                }).then((response) => {
                        this.jokeResponse = response.data.joke;
                        this.onClick();
                        console.log(response.data.joke);
                        
                }).catch((error) => {
                    console.log(error);
                })
            },
            // changeText(){
            //     if ((this.jokeResponse != 'loudText') && (this.jokeResponse == 'joke')){
            //         this.btnFunction = 'Make_Snake_Text';
            //         this.jokeResponse.replaceAll('','_');
            //     }else if((this.jokeResponse != 'snakeText') && (this.jokeResponse == 'joke')){
            //         this.btnFunction = 'Make UPPERCASE text';
            //         this.jokeResponse.toUpperCase();
            //     }else {
            //         this.btnFunction = 'Make normal text';
            //         this.jokeResponse;
            //     }
            // },
            onClick() {
                this.isShow = !this.isShow;
                if(this.joke != this.normalText && this.joke != this.snakeText){
                    this.upperText;
                }else if(this.joke != this.normalText && this.joke != this.upperText){
                    this.snakeText;
                }else{
                    this.normalText;
                }
                }
            
        },
        
        getters: {
            normalText : state => {
                if(!state.joke){
                return state.joke;
            }},
            snakeText : state => {
                if(state.joke){
                return state.joke.replaceAll('','_');
            }},
            upperText : state => {
                if(state.joke){
                return state.joke.toUpperCase();
            }},
            joke : state =>{
                if (state.jokeResponse){
                    return state.jokeResponse;
                    
                }
                return undefined;
                
            }
        }
})