import {ADD_STATS} from "./types";

export function addStats (values){
    return{
        type: ADD_STATS,
        payload: values
    }
}