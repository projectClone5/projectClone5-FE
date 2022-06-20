import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Comment from "../components/Comment";
import card from "../assets/card.png";
import "../css/Detail.css"

const Detail = (list) => {
    
    return (
        <>
    <div className="post-container">
        <div className="post-box">
            <div className="post-detail">
                <img src={card} alt="게시글 사진" />
                <div className="post-infor">
                    <p>제목</p>
                    <p>가격</p>
                </div>
            </div>
            <div className="post-content">
                게시글의 내용
            </div>
            <div className="post-avg">
                <p>별점 및 평균</p>
                <p>몇개 후기</p>
            </div>
            <div className="post-comment">
              
            </div>
        </div>
    </div>
    </>
    )
}
export default Detail;