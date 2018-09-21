import {ADD_STATS} from '../actions/types';

const stats = (state = [], action)=>{

console.log(state)

    switch (action.type){
        case ADD_STATS:
           // return [...state.map(item =>{
           //      if (item.word === action.payload.word) {
           //          console.log('hi')
           //          return {
           //              word: item.word,
           //              right: parseInt(item.right) + parseInt(action.payload.right),
           //              wrong: parseInt(item.wrong) + parseInt(action.payload.wrong),
           //          }
           //
           //      } else {return action.payload};
           //  })];
            return [...state, action.payload]
        default:
            return state;
    }
};

export default stats;