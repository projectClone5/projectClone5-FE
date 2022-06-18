import React from 'react';
import '../css/Footer.css';
import Profile from '../assets/profile.png';
import Profile_ from '../assets/profile(man).png';

const Footer = () => {

    return (
        <div className="Footer-container">
            <div className="Footer-wrap">
                <div className="Footer-content">
                    <h2>팀원 소개</h2>
                </div>
                    <div className="BE">
                        <div className="team-user">
                            <img src={Profile_} alt="노흥진" />
                            <p>노흥진</p>
                            <p>BE</p>
                        </div>
                        <div className="team-user">
                            <img src={Profile_} alt="이정우" />
                            <p>이정우</p>
                            <p>BE</p>
                        </div>
                        <div className="team-user">
                            <img src={Profile_} alt="함형준" />
                            <p>함형준</p>
                            <p>BE</p>
                        </div>
                    </div>
                    <div className="FE">
                        <div className="team-user">
                            <img src={Profile_} alt="김진희" />
                            <p>김진희</p>
                            <p>FE</p>
                        </div>
                        <div className="team-user">
                            <img src={Profile} alt="홍수민" />
                            <p>홍수민</p>
                            <p>FE</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default Footer;