import React from "react";
import "../css/Signup.css";

const Signup = () => {

    return (
        <div className="Singup_container">
            <div className="Singup_content">
                <div className="Singup_input">
                    <p className="title">회원가입</p>
                    <input type="text" label="아이디" placeholder="아이디"/>

                    <input type="text" label="닉네임" placeholder="닉네임"/>

                    <input type="Password" label="비밀번호" placeholder="비밀번호."/>

                    <input type="Password" label="비밀번호 확인" placeholder="비밀번호 확인" />

                    <button className="Singup_btn">회원가입</button>

                    <p>계정이 있으신가요? &nbsp;
                        <a href={"/Login"}>로그인</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup;