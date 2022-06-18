import React from "react";
import "../css/Login.css";

const Login = () => {

    return (
        <div className="Login_container">
            <div className="Login_content">
                <div className="Login_input">
                    <p className="title">로그인</p>

                    <input type="text" label="아이디" placeholder="아이디를 입력해주세요"/>

                    <input type="password" label="비밀번호" placeholder="비밀번호를 입력해주세요."/>

                    <button className="Login_btn">로그인</button>

                    <p>계정이 없으신가요? &nbsp;
                        <a href={"/Signup"}>회원가입</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login;