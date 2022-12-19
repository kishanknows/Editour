import { PATH_CHANGE } from "./constants";

const initialState = {
    filePath : ''
};

const pathReducer = (state = initialState, action) => {
    switch(action.type){
        case PATH_CHANGE:
            return {
                ...state,
                filePath:action.payload
            };
        default:
            return state;
    }
}

export default pathReducer;