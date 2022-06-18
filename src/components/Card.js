import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Detail from '../pages/Detail'
import '../css/Card.css';

const Card = () => {

    const history = useHistory;

    return (

        <div className="Cardbox"
        // onClick={() => history.push('.Detail')}
        >
            {/* 디테일로 이동하는 링크 */}
            <div className="Posting_Image">
                여기에 이미지!
                <button className="LoveButton">찜하기 버튼
                    {/* 버튼은 이미지 안에 배치 */}
                    {/* boolean으로 love값을 전달 default는 false */}
                </button>

            </div>
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
    )
}

export default Card;