import React from "react";
import Card from "../components/Card";
import profile from "../assets/profile.png";
import "../css/Mypage.css";
import { BiEditAlt } from "react-icons/bi";

const Mypage = () => {

    return (
        <div className="Mypage-container">
            <div className="Mypage-content">
                <div className="user-content">
                    <div className="user">
                        <img src={profile} alt="프로필"/>
                        <button><BiEditAlt size="25" /></button>
                    </div>
                    <div className="nickname-title">
                        <p>닉네임 자리입니다.</p>
                    </div>
                </div>
                <div className="my-post-content">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Mypage;