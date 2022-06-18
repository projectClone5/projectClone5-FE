import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../css/Main.css'

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

        <div className="main">
            <div className="banner">
                광고 이미지
            </div><br />
            <div className="CategoryBtn">
                <label className="categorySelect">
                    <button
                        type="radio"
                        id="All"
                        name="radioButton"
                        onChange={changeRadio}
                        value={checkedInputs}
                        defaultChecked
                    >전체</button>
                </label>
                <label className="categorySelect">
                    <button
                        type="radio"
                        id="TRIP"
                        name="radioButton"
                        onChange={changeRadio}
                        value={checkedInputs}
                    >여행</button>
                </label>
                <label className="categorySelect">
                    <button
                        type="radio"
                        id="SPORTS"
                        name="radioButton"
                        onChange={changeRadio}
                        value={checkedInputs}
                    >운동</button>
                </label>
                <label className="categorySelect">
                    <button
                        type="radio"
                        id="COOK"
                        name="radioButton"
                        onChange={changeRadio}
                        value={checkedInputs}
                    >요리</button>
                </label>
                <label className="categorySelect">
                    <button
                        type="radio"
                        id="BEAUTY"
                        name="radioButton"
                        onChange={changeRadio}
                        value={checkedInputs}
                    >뷰티</button>
                </label>

            </div><br />
            <div className="bastReviewPoint">
                최고점 포스트 4개 출력
                <label className="Card">
                    <Card /><Card /><Card /><Card />
                </label>
            </div><br />
            <div className="maxComment">
                가장 많은 댓글 포스트 4개 출력
                <div className="Card">
                    <Card />
                </div>
            </div><br />
            <div className="bestLoveCount">
                가장 많은 찜 포스트 4개 출력
                <div className="Card">
                    <Card />
                </div>
            </div><br />
            <div className="bestLowPrice">
                가장 낮은 가격 포스트 4개 출력
                <div className="Card">
                    <Card />
                </div>
            </div><br />




            <button onClick={() => history.push('/Login')}>로그인</button>
            <button onClick={() => history.push('/Signup')}>회원가입</button>
            <div className="addBtn">
                <button
                    onClick={() => history.push('/Write')}
                >등록버튼</button>
            </div>
        </div>


    )

}

export default Main;