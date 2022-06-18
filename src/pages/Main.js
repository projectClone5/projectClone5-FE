import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import{Card} from '../components/Card'

const Main = () => {
    <>
    
    
    
    </>

    return (
        <>
            <div>
                <div className="banner">
                    광고 이미지
                </div><br/>
                <div className="category">
                    카테고리 컴포넌트 위치
                </div><br/>
                <div className="bastReviewPoint">
                    최고점 포스트 4개 출력
                </div><br/>
                <div className="maxComment">
                    가장 많은 댓글 포스트 4개 출력
                </div><br/>
                <div className="bestLoveCount">
                    가장 많은 찜 포스트 4개 출력
                </div><br/>
                <div className="bestLowPrice">
                    가장 낮은 가격 포스트 4개 출력
                </div><br/>
            </div>
        </>
    )
}

export default Main;