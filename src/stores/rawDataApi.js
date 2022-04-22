import { defineStore } from "pinia";
import axios from 'axios';


export const useMainStore = defineStore('main', {
    state : () => {
        return{
            title: 'Welcome to the Geeky Jokes page!',
            joke: undefined
            }
        },
        actions: {
            getJoke(){
                axios.request({
                    url: 'https://geek-jokes.sameerkumar.website/api?format=json',
                    method: 'GET',
                    headers: {
                        'Content-type': 'application/json',
                        
                    },
                    
                }).then((response) => {
                        this.joke = response;

                        this.newQuoteNotification();
                }).catch((error) => {
                    console.log(error);
                })
            },
            newQuoteNotification(){
            
            }
        },
        
        getters: {
            loudJoke : state =>{
                return state.joke.toUpperCase();
            },
            snakeJoke : state => {
                return state.joke.replaceAll('','_');
            },
            normalJoke : state =>{
                if (state.joke){
                    return state.joke.data.joke;
                }
                return undefined;
                
            }
        }
})