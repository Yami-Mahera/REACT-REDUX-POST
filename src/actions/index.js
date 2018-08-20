import axios from 'axios';
import { AT_POSTS } from "./action-types";

const END_POINT = "http://localhost:3000";

export const readAllPost = () => {
    return function (dispatch) {
        axios.get(`${END_POINT}/posts`).then( res => dispatch ({ type: AT_POSTS.READ_ALL, payload: res.data })
        ).catch(error => dispatch ({ type:AT_POSTS.ERROR, payload:error.data }));
    }
}

export const readPost = (id) => {
    return function (dispatch) {
        axios.get(`${END_POINT}/posts/${id}`).then( res => dispatch ({ type: AT_POSTS.READ, payload: res.data })
        ).catch(error => dispatch ({ type:AT_POSTS.ERROR, payload:error.data }));
    }
}

export const deletePost = (id) => {
    return function (dispatch) {
        axios.delete(`${END_POINT}/posts/${id}`).then( res => dispatch ({ type: AT_POSTS.DELETE, payload: id })
        ).catch( error => dispatch ({ type:AT_POSTS.ERROR,payload:error.data }));
    }
}

export const createPost = (post) => {
    const BODY_POST = {
        title: post.title,
        content: post.content,
        author: post.author
    }
    return function (dispatch) {
        axios.post(`${END_POINT}/posts/`,BODY_POST).then(res => dispatch ({
            type: AT_POSTS.CREATE,
            payload: res.data
        })).catch( error => dispatch ({ type:AT_POSTS.ERROR,payload:error.data }));
    }
}