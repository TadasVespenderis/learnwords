import {ADD_NEW_WORDS, REMOVE_WORDS} from "../actions/types";

const savedEntry = [];
const entry = JSON.parse(localStorage.getItem('entry'));
if (entry !== null) {
    for (let i = 0; i < entry.length; i++) {
        savedEntry.push(entry[i]);
    }
};

const words = (state=[...savedEntry], action)=>{
        // console.log(action);
    switch (action.type) {
        case ADD_NEW_WORDS:
            if (action.payload.enWord.length !== 0 && action.payload.ltWord.length !== 0 ) {
                return [...state, action.payload];
            }else {return [...state]}
        case REMOVE_WORDS:
            return [...state.filter((item, i)=> i !== action.payload)];
        default:
            return state;
    }
};

export default words;