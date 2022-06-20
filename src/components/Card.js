import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Detail from '../pages/Detail'
import '../css/Card.css';
import card from "../assets/card.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";

const Card = () => {

    const history = useHistory;

    return (

        <div className="Cardbox"
        // onClick={() => history.push('.Detail')}
        >
            <div className="Cardbox-content">
                <div className="Posting_Image">
                    <img src={card} alt="test-card" />
                        <button className="LoveButton">찜하기 버튼
                        {/* 버튼은 이미지 안에 배치 */}
                        {/* boolean으로 love값을 전달 default는 false */}
                        </button>
                </div>
            </div>
            <div className="contentbox">
                <div className="PostName">
                    포스트 제목
                </div>
                <div className="AvgReviewPoint">
                    별점 출력
                </div>
                <div className="CommentCount">
                    후기 개수 출력
                </div>
                {/* 별점과 후기는 한줄로 출력 */}
                {/* 가격과 별점/후기 사이에 line 한줄 배치 */}
                <div className="Price">
                    가격 출력
                </div>
            </div>
        </div>  
    )
}

export default Card;