import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

import "../css/Main.css";
import banner from '../assets/banner.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import travel from "../assets/travel.png";
import cook from "../assets/cook.png";

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
                            id="All"
                            name="radioButton"
                            onChange={changeRadio}
                            value={checkedInputs}

                            defaultChecked
                            >카테고리 버튼/전체
                        </div>
                            {/* 카테고리 리스트로 이동 */}
                    </label>
                    <label>
                        <div
                            className="CategoryCheck"
                            type="radio"
                            id="TRIP"
                            name="radioButton"
                            onChange={changeRadio}
                            value={checkedInputs}
                        >
                        <img src={travel} alt="Travel"/>
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
                            value={checkedInputs}
                        >
                        <img src={cook} alt="cook"/>
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
                            >카테고리 버튼/3
                        </div>
                    </label>
<label>
                        <div
                            className="CategoryCheck"
                            type="radio"
                            id="BEAUTY"
                            name="radioButton"
                            onChange={changeRadio}
                            value={checkedInputs}
                            >카테고리 버튼/4
                        </div>
                    </label>
                </div>
            </div>
                <div className="bastReviewPoint">
                    최고점 포스트 4개 출력
                    <div className="card">
                        <Card /><Card /><Card /><Card />
                    </div>
                </div><br />
                <div className="maxComment">
                    가장 많은 댓글 포스트 4개 출력
                    <div className="card">
                        <Card />
                    </div>
                </div><br />
                <div className="bestLoveCount">
                    가장 많은 찜 포스트 4개 출력
                    <div className="card">
                        <Card />
                    </div>
                </div><br />
                <div className="bestLowPrice">
                    가장 낮은 가격 포스트 4개 출력
                    <div className="card">
                        <Card />
                    </div>
                </div><br />
                <div className="addBtn">
                    <button
                    onClick={() => history.push('/Write')}
                    >등록버튼</button>
                </div>
            </>

    )

}

export default Main;