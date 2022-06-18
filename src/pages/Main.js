import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

//components

import Card from '../components/Card'

const Main = (list) => {

    const history = useHistory();


    return (
 
            <div>
                <div className="banner">
                    광고 이미지
                </div><br />
                <div className="category">
                    <label>
                        <div
                            className="CategoryCheck"
                            type="radio"
                            id="All"
                            name="radioButton"
                            defaultChecked
                        >카테고리 버튼/전체</div>
                        {/* 카테고리 리스트로 이동 */}
                    </label>
                    <label>
                        <div
                            className="CategoryCheck"
                            type="radio"
                            id="1"
                            name="radioButton"
                        >카테고리 버튼/1</div>
                    </label>
                    <label>
                        <div
                            className="CategoryCheck"
                            type="radio"
                            id="2"
                            name="radioButton"
                        >카테고리 버튼/2</div>
                    </label>
                    <label>
                        <div
                            className="CategoryCheck"
                            type="radio"
                            id="3"
                            name="radioButton"
                        >카테고리 버튼/3</div>
                    </label>
                </div><br />
                <div className="bastReviewPoint">
                    최고점 포스트 4개 출력
                    <div className="card">
                        <Card />
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