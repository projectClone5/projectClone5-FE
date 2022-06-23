import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

import "../css/Main.css";
import banner from '../assets/banner.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import TRIP from "../assets/travel.png";
import cook from "../assets/cook.png";
import sport from "../assets/sport.png";
import metting from "../assets/metting.png";
import { BsPlusLg } from "react-icons/bs"; 
import { BiCategory } from "react-icons/bi";

//components

import Card from '../components/Card'
import _ from "lodash";

const Main = (list) => {
    const history = useHistory();
    const [checkedInputs, setCheckedInputs] = useState("All");
    const changeRadio = (e) => {
        console.log(e)
        if (e.target.checked) {
            setCheckedInputs(e.target.id);
        }
    };
    const Cards = _.filter(Card, {category: "TRIP"});

    
    return (
        <>
            <div className="banner">
                <div className="main-view">
                    <ul>
                        <li><img src={banner} width="100%" alt="banner"/></li>
                        <li><img src={banner2} width="100%" alt="banner2"/></li>
                        <li><img src={banner3} width="100%" alt="banner3"/></li>
                    </ul>
                </div>
            </div>
            <div className="category">
                <div className="categoty-content">
                    <label  >
                        <div
                            className="CategoryCheck"
                            type="radio"
                            id="TRIP"
                            name="radioButton"
                            onChange={setCheckedInputs}
                            
                            onClick={() => history.push("/All")}
                        >
                        <img src={TRIP} alt="TRIP"  />
                        여행
                        </div>
                    </label>
                    <label>
                        <div
                            className="CategoryCheck"
                            type="radio"
                            id="COOK"
                            name="radioButton"
                            onChange={changeRadio}
                            onClick={setCheckedInputs}
                        >
                        <img src={cook} alt="COOK" onClick={() => history.push("/All")}/>
                        요리
                        </div>
                    </label>
                    <label>
                        <div
                            className="CategoryCheck"
                            type="radio"
                            id="SPORTS"
                            name="radioButton"
                            onChange={changeRadio}
                            onClick={setCheckedInputs}
                            >
                        <img src={sport} alt="SPORTS" onClick={() => history.push("/All")}/>
                        스포츠        
                        </div>
                    </label>
                    <label>
                        <div
                            className="CategoryCheck"
                            type="radio"
                            id="METTING"
                            name="radioButton"
                            onChange={changeRadio}
                            onClick={setCheckedInputs}
                            >
                          <img src={metting} alt="METTING"  onClick={() => history.push("/All")}/>
                        모임
                        </div>
                    </label>
                    <label>
                        <div
                            className="CategoryCheck"
                            type="radio"
                            id="All"
                            name="radioButton"
                            onChange={changeRadio}
                            onClick={setCheckedInputs}
                        ><BiCategory size="45" onClick={() => history.push("/All")} />
                        <p>전체보기</p>
                        </div>
                    </label>
                </div>
            </div>
            <div className="card-container">
                <div className="card-view">
                    <div className="bestReviewPoint">
                        <div className="bestReviewPoint-title">
                            <h3>한 주간 사랑받은 프립💜</h3>
                        </div>
                        <div className="card">
                            <Card/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="addBtn-container">
                <div className="addBtn">
                    <button
                    onClick={() => history.push('/Write')}
                    ><BsPlusLg size="25" /></button>
                </div>  
            </div>    
        </>
    )
};

export default Main;