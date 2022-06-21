import React, { useEffect, useState, useRef, useSelector } from "react";
import { useHistory } from "react-router-dom";
import "../css/Signup.css";
import axios from "axios";
// import { actionCreators as userActions } from "../redux/modules/users";

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
        const variables = {
            username : email,
            nickname: nickname,
            password: password,
            passwordCheck: passwordChek
        }
        axios({
            method: "post",
            url: "http://44.204.90.116/api/user/signup",
            data: JSON.stringify(variables),
            headers: { "content-type": `application/json`
                // "Content-Type": "multipart/form-data"
             }
             
        })
        // axios
        // .post("http://44.204.90.116/api/user/signup",  JSON.stringify(variables), {
        //   headers: {
        //     "Content-Type": `application/json`,
        //   },
        // })
        .then((res) => {
            alert("게시글 등록 완료!")
            console.log(res);
    })
        console.log(variables);
        
    }
    

    return (
        <div className="Singup_container">
            <div className="Singup_content">
                <div className="Singup_input">
                    <p className="title">회원가입</p>

                    <input type="text" label="아이디" placeholder="아이디를 입력하세요" 
                    onChange={(e) => {
                        setUserEmail(e.target.value);
                      }}/>

                    <input type="text" label="닉네임" placeholder="닉네임를 입력하세요" 
                     onChange={(e) => {
                        setUserNickname(e.target.value);
                      }}
                    />

                    <input type="Password" label="비밀번호" placeholder="비밀번호를 입력하세요"
                     onChange={(e) => {
                        setUserPassword(e.target.value);
                      }} />

                    <input type="Password" label="비밀번호 확인" placeholder="비밀번호를 다시 입력하세요" 
                     onChange={(e) => {
                        setUserPasswordChek(e.target.value);
                      }}/>


                    <button className="Singup_btn" onClick={signup}>회원가입</button>

                    <p>계정이 있으신가요? &nbsp;
                        <a href={"/Login"}>로그인</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup;