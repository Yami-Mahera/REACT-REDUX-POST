import { AT_POSTS } from "../actions/action-types";

export default function reducerPosts (state = [], action) {
    switch (action.type) {
        case AT_POSTS.READ_ALL : {
            if (Array.isArray(action.payload)) {
                return action.payload;
            } else {
                return state;
            }
        }
        case AT_POSTS.DELETE :
            return state.filter( post => post.id === action.payload ? false : true )
        
        case AT_POSTS.CREATE :
            return [ ...state, action.payload]
            
        case AT_POSTS.ERROR :
            return action.error;
    }
    return state;
}