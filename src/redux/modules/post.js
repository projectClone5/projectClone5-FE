import instance from "../../shared/request";
import { apis } from "../../shared/apis";

//Action
const LOAD = "post/LOAD";
const LOAD_ID = "post/LOAD_ID";
const ADD = "post/ADD";
const DELETE = "post/DELETE";
const GET_LIKE_POST = "GET_LIKE_POST";

const CHANGE_LIKE_COUNT = "CHANGE_LIKE_COUNT";


// Action Creator
export function loadPosts(post) {
    return { type: LOAD, post };
}

export function loadPost_ID(post, postId) {
    return { type: LOAD_ID, post, postId };
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

export const loadPostsApi = () => {
  return async function (dispatch) {
    try {
      console.log("얍");
      const data = await apis.loadposts();
      dispatch(loadPosts(data.data));
    } catch (e) {
      console.log(`포스팅 조회 오류 발생!${e}`);
    }
  };
};
  
export const loadPostApi = (postId) => {
  console.log(postId)
    return async function (dispatch) {
      await instance
      .get(`/api/post/${postId}`)
      .then((response) => {
        console.log(response)

        const comment_list = response.data
        console.log(comment_list)

        dispatch(loadPost_ID(comment_list, postId))
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }

  //포스팅 삭제하기
  export const delPostApi = (id) => {
    return async function (dispatch, getState) {
      try {
        await apis.delpost(id);
      } catch (e) {}
    };
  };

//Reducer

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "post/LOAD": {
            console.log("포스트를 불러올거야");
            console.log(action.post);
            return { list: action.post, is_loaded: true };
        }

        case "post/LOAD_ID": {
          console.log("포스트 하나만 불러올거야");

          const post_list = [action.post];
          console.log(post_list)
          const new_post_list = post_list.filter((l) => {
            return parseInt(action.postId) === l.postId;
          });
          return { list: new_post_list, is_loaded: true };
      }

        case "post/ADD": {
            console.log("포스트 생성완료!");
            const new_post_list = [...state.list, action.post];
            return { list: new_post_list };
        }

        case "post/DELETE": {
            console.log("포스팅 삭제할거야");
            const new_post_list = state.list.filter((l, idx) => {
                return parseInt(action.post_index) !== idx;
            });
            return { ...state, list: new_post_list };
        }

        default:
            return state;
    }
    
}
