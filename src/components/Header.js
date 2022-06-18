import React from 'react';
import Logo from '../assets/Logo.PNG';
import { FaRegClone, FaRegUser } from "react-icons/fa";
import '../css/Header.css';
import { Link, useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory();

    return (
        <div className="Header-container">
            <div className="Header-wrap">
                <div className="Header-content">
                    <div className="entire">
                        <FaRegClone size="20" />
                        <hr></hr>
                        <Link to="/"> 
                            <img src={Logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="mypage">
                        <div className="LO-SI-button">
                            <button onClick={() => history.push("/Login")} className="Login_btn2">로그인</button>
                            <button onClick={() => history.push("/Signup")}className="Singup_btn2">회원가입</button>
                        </div>
                        <div className="My-button">
                            <FaRegUser size="25"/>
                            <p>마이</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }


             {/*       <p className="nickname_btn2">님 환영합니다!</p>
                <button className="Logout_btn2">로그아웃</button> */}



export default Header;