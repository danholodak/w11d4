import produceData from "../mockData/produce.json"

export default function produceReducer(state={}, action){
    Object.freeze(state)
    const newState = {...state}

    switch(action.type){
        case POPULATE:
            action.produce.forEach((ele) => {
                newState[ele.id] = ele;
            });
            return newState;
        default: 
            return newState;
    }
}

const POPULATE = "procuce/POPULATE"

export function populateProduce(){

    return {
        type: POPULATE,
        produce: produceData
    }
}