import React, { useEffect, useState, useRef, useSelector } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
// import CKeditor from "../components/CKeditor"

//import DatePicker from "react-datepicker";

const Write = (props) => {
    <></>
    //포스팅 시간
    const now = new Date();
    const Day = now.getDate();
    const month = Number(now.getMonth() + 1);
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const postTime = hours + ":" + minutes;

    //   const DateS = orderDate.toString().split(" ");
    //   const postYM = DateS[3].split("0")[1] + "." + month + "." + DateS[2];
    //   const todayYM = DateS[3].split("0")[1] + "." + month + "." + Day;
    //   console.log(postYM);
    //   console.log(todayYM);
    return (
        <>
            <div className="Write box">
                <div className="Subtitle">게시글 등록</div><br/>
                {/* 입력정보 받기 */}
                <div className="Imageinput">
                    여기로 이미지 받기
                    <input type="file" id="postImage" />
                    {/* imageview를 구현 크기 조정 필요 */}
                </div><br/>
                <div className="Contentinput">
                    여기로 텍스트 입력
                    <input type="text" id="postContent" />
                    {/* 인풋박스 크기 조절 필요 */}
                </div><br/>
                <div className="CategoryBtn">
                    <label className="categorySelect">
                        <button
                            type="radio"
                            id="All"
                            name="radioButton"
                            defaultChecked
                        >전체</button>
                    </label>
                    <label className="categorySelect">
                        <button
                            type="radio"
                            id="TRIP"
                            name="radioButton"
                        >여행</button>
                    </label>
                    <label className="categorySelect">
                        <button
                            type="radio"
                            id="SPORTS"
                            name="radioButton"
                        >운동</button>
                    </label>
                    <label className="categorySelect">
                        <button
                            type="radio"
                            id="COOK"
                            name="radioButton"
                        >요리</button>
                    </label>
                    <label className="categorySelect">
                        <button
                            type="radio"
                            id="BEAUTY"
                            name="radioButton"
                        >뷰티</button>
                    </label>

                </div><br/>

                <div className="Price">
                    가격입력
                    <input placeholder="가격을 입력해주세요!" />
                </div><br/>
                <div className="AddBtn">
                    <button>프립 등록!</button>
                </div><br/>

            </div><br/>
        </>
    )
}

export default Write