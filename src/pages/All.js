

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import "../css/All.css";
import { loadPostsApi } from "../redux/modules/post";
import _ from "lodash";


import TRIP from "../assets/travel.png";
import cook from "../assets/cook.png";
import sport from "../assets/sport.png";
import metting from "../assets/metting.png";
import { BsPlusLg } from "react-icons/bs"; 
import { BiCategory } from "react-icons/bi";

import Card from "../components/Card";

const All = (list) => {
    const dispatch = useDispatch();
   
    const history = useHistory();
 
    const [checkedInputs, setCheckedInputs] = useState("");
    const category = checkedInputs;
   
 
    const changeRadio = (e) => {
        console.log(e)
        if (e.target.checked) {
            setCheckedInputs(e.target.id);
        }
    };


    return (
        <>
        <div className="All-box">
            <div className="All-container">
                <div className="All-title">
                    <p>전체 보기</p>
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
                        <img src={cook} alt="COOK" />
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
                            
                        ><BiCategory size="45" />
                        <p>전체보기</p>
                        </div>
                            {/* 카테고리 리스트로 이동 */}
                    </label>
                </div>
            </div>
                <div className="All-content">
                    <Card />
                    {/* {checkedInputs=category} */}
                </div>
            </div>
        </div>
        </>
    )
}

export default All;