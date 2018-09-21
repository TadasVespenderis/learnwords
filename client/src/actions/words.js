import {ADD_NEW_WORDS, REMOVE_WORDS} from "./types";


export function addNewWords (values){
    return{
        type: ADD_NEW_WORDS,
        payload: values
    }
};

export function removeWords (i) {
    return {
        type: REMOVE_WORDS,
        payload: i
    }
};