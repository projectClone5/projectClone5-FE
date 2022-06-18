//Action
const LOAD = "post/LOAD";
const LOAD_ID = "post/LOAD_ID";
const ADD = "post/ADD";
const DELETE = "post/DELETE";

// Action Creator
export function loadPosts(post) {
    return { type: LOAD, post };
  }
  
  export function loadPost_ID(post) {
    return { type: LOAD_ID, post };
  }
  
  export function createPost(post) {
    console.log("포스트를 생성할거야!", post);
    return { type: ADD, post: post };
  }
  
  export function deletePost(post_index) {
    console.log("지울 인덱스", post_index);
    return { type: DELETE, post_index };
  }
  
  // initialState
  const initialState = {
    is_loaded: false,
    list: [],
  };