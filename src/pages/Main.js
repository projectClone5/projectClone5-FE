import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

//components
import{Card} from '../components/Card'
   
const Main = () => {
    const history = useHistory();


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
      
      
     
       
        <button onClick={() => history.push('/Login')}>로그인</button>
        <button onClick={() => history.push('/Signup')}>회원가입</button>
            </div>

        </>
    )
}

export default Main;