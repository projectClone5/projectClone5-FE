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
import All from "../assets/all.PNG";
import metting from "../assets/metting.png";
import { BsPlusLg } from "react-icons/bs"; 

//components

import Card from '../components/Card'

const Main = (list) => {
    const history = useHistory();
    const [checkedInputs, setCheckedInputs] = useState("All");
    const changeRadio = (e) => {
        console.log(e)
        if (e.target.checked) {
            setCheckedInputs(e.target.id);
           
        }
        
    };

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
                    <label>
                        <div
                            className="CategoryCheck"
                            type="radio"
                            id="TRIP"
                            name="radioButton"
                            onChange={changeRadio}
                            value={checkedInputs}

                        >
                        <img src={TRIP} alt="TRIP"/>
                        여행


                            defaultChecked
                            >카테고리 버튼/전체

                        </div>
                    </label>
                    <label>
                        <div
                            className="CategoryCheck"
                            type="radio"
                            id="COOK"
                            name="radioButton"
                            onChange={changeRadio}
                            value={checkedInputs}
                        >
                        <img src={cook} alt="COOK"/>
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
                            value={checkedInputs}
                            >
                        <img src={sport} alt="SPORTS"/>
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
                            value={checkedInputs}
                            >
                          <img src={metting} alt="METTING"/>
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
                            value={checkedInputs}
                            defaultChecked
                        >
                        전체보기
                        </div>
                            {/* 카테고리 리스트로 이동 */}
                    </label>
                </div>
            </div>
            <div className="card-container">
                <div className="card-view">
                    <div className="bestReviewPoint">
                        <div className="bestReviewPoint-title">
                            <h3>대원님들이 추앙하는 프립💙 (최고점 포스트 4개 출력)</h3>
                        </div>
                        <div className="card">
                            <Card />
                        </div>
                    </div>
                </div>
                <div className="card-view">   
                    <div className="maxComment">
                        <div className="maxComment-title">
                            <h3>가장 많은 댓글 포스트 4개 출력</h3>
                        </div>
                        <div className="card">
                            <Card />
                        </div>
                    </div>
                </div>
                <div className="card-view"> 
                    <div className="bestLoveCount">
                        <div className="bestLoveCount-title">
                            <h3>가장 많은 찜 포스트 4개 출력</h3>
                        </div>
                        <div className="card">
                            <Card />
                        </div>
                    </div>
                </div>   
                <div className="card-view">  
                    <div className="bestLowPrice">
                        <div className="bestLowPrice-title">
                            <h3>가장 낮은 가격 포스트 4개 출력</h3>
                        </div>
                        <div className="card">
                            <Card />
                        </div>
                    </div>
                </div>    
            </div>      
            <div className="addBtn-container">
                <div className="addBtn">
                    <button

                    onClick={() => history.push('/Write')}
                    ><BsPlusLg size="25"/></button>
                   >등록버튼</button>
                </div>  
            </div>    
        </>

    )
}

export default Main;