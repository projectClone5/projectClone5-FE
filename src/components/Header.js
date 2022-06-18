import React from 'react';
import Logo from '../assets/Logo.PNG';
import '../css/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className="Header-container">
            <div className="Header-content">
                <Link to="/"> 
                    <img src={Logo} alt="Logo" />
                </Link>
             {/*       <p className="nickname_btn2">님 환영합니다!</p>
                <button className="Logout_btn2">로그아웃</button>

             <button className="Login_btn2">로그인</button>
                <button className="Singup_btn2">회원가입</button> */}
            </div>
        </div>
        )
    }

export default Header;