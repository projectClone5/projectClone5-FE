import { useHistory } from "react-router-dom";
import { apis } from "../../shared/api";
import { localStorageGet, localStorageSet } from "../../shared/localStorage";

//navigate
const history = useHistory;

// // Actions
const LOAD = "comment/LOAD";
const CREATE = "comment/CREATE";
const DELETE = "comment/DELETE";

export function loadComment(comment) {
    return { type: LOAD, comment };
  }
  
  export function addComment(comment) {
    console.log("액션을 생성할거야!");
    return { type: CREATE, comment };
  }
  
  export function deleteComment(comment_index) {
    console.log("지울 인덱스", comment_index);
    return { type: DELETE, comment_index };
  }

  export const loadCommentApi = (id) => async (dispatch) => {
    try {
      const { data } = await apis.loadcomments(id);
      dispatch(loadComment(data));
    } catch (e) {
      console.log(`코멘트 불러오기 실패! ${e}`);
    }
  };
  
  export const createCommentApi = (comment) => async (dispatch, getState) => {
    // const userEmail = localStorageGet("useremail");
    // const tokenCheck = document.cookie;
    try {
      console.log("댓글 만들 준비");
      console.log(comment);
      const { data } = await apis.createComment(comment);
      console.log(data);
  
      dispatch(addComment(data));
      history(0);
    } catch (e) {}
  };
  
  export const deleteCommentApi = (coId) => (dispatch) => {
    try {
      apis.delComment(coId);
      dispatch(deleteComment(coId));
    } catch (e) {}
  };
  