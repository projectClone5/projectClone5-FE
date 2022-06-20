import React, { useEffect, useState, useRef, useSelector } from "react";
import { useHistory } from "react-router-dom";

import "../css/Login.css";

const Login = () => {
    const history = useHistory

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const _loginUser = () => {
        console.log("로그인 시도!");
        if (userEmail === "" || userPassword === "") {
            alert("빈칸을 다 채워주세요.");
            return;
        }
        // dispatch(userActions.loginDB(userEmail, userPassword));
        // 로그인 성공시 메인으로 이동
    }
    return (
        <div className="Login_container">
            <div className="Login_content">
                <div className="Login_input">
                    <p className="title">로그인</p>

                    <input type="text" label="아이디" placeholder="아이디를 입력해주세요"
                        onChange={(e) => {
                            setUserEmail(e.target.value);
                        }}
                        value={userEmail} />

                    <input type="password" label="비밀번호" placeholder="비밀번호를 입력해주세요."
                        onChange={(e) => {
                            setUserPassword(e.target.value);
                        }}
                        value={userPassword} />

                    <button className="Login_btn" onClick={_loginUser}>로그인</button>

                    <p>계정이 없으신가요? &nbsp;
                        <a href={"/Signup"}>회원가입</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;