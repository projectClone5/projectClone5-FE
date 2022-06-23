

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

const All = (props) => {
    console.log(props)
    const dispatch = useDispatch();

    const history = useHistory();

    const [checkedInputs, setCheckedInputs] = useState(props);
    const category = checkedInputs;
    console.log(category)


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
                                    onClick={setCheckedInputs}


                                >
                                    <img src={TRIP} alt="TRIP" />
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
                                    onClick={setCheckedInputs}
                                >
                                    <img src={sport} alt="SPORTS" />
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
                                    <img src={metting} alt="METTING" />
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
                                    defaultChecked
                                ><BiCategory size="45" />
                                    <p>전체보기</p>
                                </div>
                                {/* 카테고리 리스트를 변경*/}
                            </label>
                        </div>
                    </div>
                    <label>
                        <div className="All-content">
                            <Card />

                        </div>
                    </label>
                </div>
            </div>
        </>
    )
}

export default All;