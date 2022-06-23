import instance from "../../shared/request";

const LOAD_COMMENT = 'comment/LOAD_COMMENT';
const ADD_COMMENT = 'comment/ADD_COMMENT';
const EDIT_COMMENT  = 'comment/EDIT_COMMENT';
const DELETE_COMMENT = 'comment/DELETE_COMMENT';

const initialState = {
  commentList: [],
};

export const loadComment = (comment_list) => {
    return { type: LOAD_COMMENT, comment_list};
};

export const addComment = (comment) => {
    return { type: ADD_COMMENT, comment};
};

export const editComment = (commentId, comment) => {
    return { type: EDIT_COMMENT, commentId, comment};
};

export const deleteComment  = (commentId) => {
    return { type: DELETE_COMMENT, commentId };
};

// middlewares
export const loadCommentFB = (postId) => {
  console.log(postId)
    return async function (dispatch) {
      await instance
      .get(`/api/post/${postId}`)
      .then((response) => {
        console.log(response)
        
        const comment_list = response.data.comments 
        console.log(comment_list)

        dispatch(loadComment(comment_list))
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
  
  export const addCommentFB = (postId, comment, reviewPoint) => {
    console.log(postId, comment, reviewPoint)
      return async function (dispatch) {
         await instance
        .post(`/api/post/${postId}/comment`, {
          comment : comment,
          reviewPoint : reviewPoint 
        }, {
          headers: { Authorization: localStorage.getItem("jwtToken")
         }
        })
        .then((response) => {
          console.log(response)

          dispatch(addComment(comment))
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
  
export const editCommentFB = (commentId, comment, reviewPoint) => {
  console.log(comment)
    return async function(dispatch) {
      await instance
      .put(`/api/comment/${commentId}`, {
        comment : comment,
        reviewPoint : reviewPoint,
      }, {
        headers: { Authorization: localStorage.getItem("jwtToken") }
      })
      .then((response) => {
        console.log(response)

        dispatch(editComment(commentId, comment))
      })
      .catch((error) => {
        console.log(error)
    })
  }
} 
  
export const deleteCommentFB = (commentId) => {
  console.log(commentId)
    return async function(dispatch) {
      await instance
      .delete(`/api/comment/${commentId}`, {
        headers: { Authorization: localStorage.getItem("jwtToken") }
      })
      .then((response) => {
        console.log(response)

        dispatch(deleteComment(commentId))
      })
      .catch((error) => {
        console.log(error)
    })
  }
}

// reducer
export default function reducer(state = initialState, action = {}) {
      switch (action.type) {
        case 'comment/LOAD_COMMENT':
          return { commentList : action.comment_list };
    
        case 'comment/ADD_COMMENT': {
          const new_comment_list = [...state.commentList, action.comment];
            return { commentList :  new_comment_list };
        }
  
      case 'comment/EDIT_COMMENT': {
          const new_comment_list = state.commentList.map((a, idx) => 
            parseInt(action.commentId) === a.commentId? { ...a, ...action.comment } : a);
          return { ...state, commentList: new_comment_list };
        } 
  
        case 'comment/DELETE_COMMENT': {
        const new_comment_list = state.commentList.filter((l) => {
          return parseInt(action.commentId) !== l.commentId;
        });
        return { commentList : new_comment_list };
      } 
        default:
          return state;
      }
    }