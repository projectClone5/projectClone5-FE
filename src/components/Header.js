import React from 'react';
import Logo from '../assets/Logo.PNG';
import { FaRegUser } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import '../css/Header.css';
import { Link, useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory();

    return (
        <div className="Header-container">
            <div className="Header-wrap">
                <div className="Header-content">
                    <div className="entire">
                        <BiCategory size="20" color="#333333"/>
                        <span className="wall"></span>
                        <Link to="/"> 
                            <img src={Logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="mypage">
                        <div className="LO-SI-button">
                            <button onClick={() => history.push("/Login")} className="Login_btn2">로그인</button>
                            <button onClick={() => history.push("/Signup")} className="Singup_btn2">회원가입</button>
                        </div>
                        <div className="My-button" onClick={() => history.push("/Mypage")}>
                            <FaRegUser size="25" />
                            <p>마이</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }

export default Header;