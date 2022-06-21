import { produce } from "immer";
import { apis } from "../../shared/apis";
import { useHistory } from "react-router-dom";
import { createAction, handleActions } from "redux-actions";
import Cookies from "universal-cookie";
import jwt_decode from "jwt-decode";
import { localStorageGet, localStorageSet } from "../../shared/localStorage";


// actions
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
const LOAD = "user/LOAD";

// action creators
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));
const userInfo = createAction(GET_USER, (user) => ({ user }));

// initialState
const initialState = {
    user: null,
    is_login: false,
  };
  

  //cookie
const cookies = new Cookies();

//navigate
const history = useHistory;


const loginDB = (userEmail, userPassword) => {
    console.log(userEmail, userPassword);
    return function (dispatch, getState) {
      apis
        .login(userEmail, userPassword)
  
        .then((res) => {
          console.log(res);
          console.log(res.headers);
          const cookie = res.headers.Authorization;
              // setCookie("token", _cookie, 7);
          // const DecodedToken = jwt_decode(cookie);
          console.log(cookie);
          localStorage.setItem("jwtToken", cookie);
          // dispatch(
          //   setUser({
          //     is_login: true,
          //     userEmail: userEmail,
          //     nickname: DecodedToken.nickname,
          //   })
          // );
          // localStorage.setItem("email", userEmail);
        //   // localStorageSet("token", cookie);
        //   // console.log(setItem);
          console.log(localStorage);
  
          //    console.log("토큰을 받았어!", userEmail, _cookie)
          // cookies.set("userEmail", userEmail, { path: "/" });
          // cookies.set("token", cookie, `${cookie}`);
        })
        .catch((error) => {
            console.log(error);
            alert("없는 회원정보 입니다! 회원가입을 해주세요!");
          });
        dispatch(setUser({ userEmail: userEmail }));
      };
    };


export default handleActions(
    {
      [SET_USER]: (state, action) =>
        produce(state, (draft) => {
          draft.user = action.payload.user;
          draft.is_login = true;
          console.log(draft.user.userEmail);
          draft.uploading = false;
          console.log("리듀서로 적용 완료", state, action.payload);
        }),
      [GET_USER]: (state, action) => produce(state, (draft) => {}),
    },
    initialState
  );
  const actionCreators = {
    // SignupDB,
    loginDB,
    // logoutDB,
    // loginCheck,
  };
  export { actionCreators };