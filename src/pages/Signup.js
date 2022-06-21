import React, { useEffect, useState, useRef, useSelector } from "react";
import { useHistory } from "react-router-dom";
import "../css/Signup.css";
import axios from "axios";

const Signup = () => {
    const history = useHistory

    const [email, setUserEmail] = useState("");
    const [nickname, setUserNickname] = useState("");
    const [password, setUserPassword] = useState("");
    const [passwordChek, setUserPasswordChek] = useState("");

    const signup = (e) => {
        if (
            nickname === "" ||
            email === "" ||
            password === "" ||
            passwordChek === ""
        ) {
            alert("빈칸을 다 채워주세요.");
            return;
        } else if (password !== passwordChek) {
            alert("비밀번호와 비밀번호 확인이 서로 다릅니다. 다시 적어주세요.");
            return;
        }
        e.preventDefault();
        let frm = new FormData();
        frm.append("nickname", nickname);
        frm.append("username", email);
        frm.append("password", password);
        frm.append("passwordCheck", passwordChek);
        axios({
            method: "post",
            url: "http://localhost:5001/user/signup",
            data: frm,
            headers: { "Content-Type": "multipart/form-data" }
        }).then(
            alert("게시글 등록 완료!")
        )
        console.log(frm);
        
    }
    

    return (
        <div className="Singup_container">
            <div className="Singup_content">
                <div className="Singup_input">
                    <p className="title">회원가입</p>
                    <input type="text" label="아이디" placeholder="아이디를 입력하세요" />

                    <input type="text" label="닉네임" placeholder="닉네임를 입력하세요" />

                    <input type="Password" label="비밀번호" placeholder="비밀번호를 입력하세요." />

                    <input type="Password" label="비밀번호 확인" placeholder="비밀번호를 다시 입력하세요." />

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