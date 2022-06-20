import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Detail from '../pages/Detail';
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import '../css/Card.css';
import card from "../assets/card.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";

const Card = () => {

    const history = useHistory;

    const [click, setClick] = useState(false);

    const btnclick = () => {
        click ? setClick(false) : setClick(true);
    }

    return (

        <div className="Cardbox"
        // onClick={() => history.push('.Detail')}
        >
        <div className="Card">
            <div className="Cardbox-content">
                <div className="Posting_Image">
                    <img src={card} alt="test-card" />
                        <button className="LoveButton" onClick={btnclick}>
                             {/* 버튼은 이미지 안에 배치 */}
                        {/* boolean으로 love값을 전달 default는 false */}
                            {click ?  <FaBookmark size="25" color="red" /> : <FaRegBookmark size="25" color="white" />}
                        </button>
                </div>
                <div className="contentbox">
                    <div className="PostName">
                        <p>한강 선셋 패들보드</p>
                    </div>
                    <div className="Avg-count">
                        <div className="AvgReviewPoint" >
                            <AiFillStar color="red" />
                            <AiFillStar color="red" />
                            <AiFillStar color="red" />
                            <AiFillStar color="red" />
                            <AiFillStar color="red" />
                        </div>
                        <div className="CommentCount">
                            <p>후기 68</p>
                        </div>
                    </div>
                    <span className="wall-width"></span>
                    <div className="Price">
                       <p>30,000원</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="Card">
            <div className="Cardbox-content">
                <div className="Posting_Image">
                    <img src={card} alt="test-card" />
                        <button className="LoveButton" onClick={btnclick}>
                             {/* 버튼은 이미지 안에 배치 */}
                        {/* boolean으로 love값을 전달 default는 false */}
                            {click ?  <FaBookmark size="25" color="red" /> : <FaRegBookmark size="25" color="white" />}
                        </button>
                </div>
                <div className="contentbox">
                    <div className="PostName">
                        <p>한강 선셋 패들보드</p>
                    </div>
                    <div className="Avg-count">
                        <div className="AvgReviewPoint" >
                            <AiFillStar color="red" />
                            <AiFillStar color="red" />
                            <AiFillStar color="red" />
                            <AiFillStar color="red" />
                            <AiFillStar color="red" />
                        </div>
                        <div className="CommentCount">
                            <p>후기 68</p>
                        </div>
                    </div>
                    <span className="wall-width"></span>
                    <div className="Price">
                       <p>30,000원</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="Card">
            <div className="Cardbox-content">
                <div className="Posting_Image">
                    <img src={card} alt="test-card" />
                        <button className="LoveButton" onClick={btnclick}>
                             {/* 버튼은 이미지 안에 배치 */}
                        {/* boolean으로 love값을 전달 default는 false */}
                            {click ?  <FaBookmark size="25" color="red" /> : <FaRegBookmark size="25" color="white" />}
                        </button>
                </div>
                <div className="contentbox">
                    <div className="PostName">
                        <p>한강 선셋 패들보드</p>
                    </div>
                    <div className="Avg-count">
                        <div className="AvgReviewPoint" >
                            <AiFillStar color="red" />
                            <AiFillStar color="red" />
                            <AiFillStar color="red" />
                            <AiFillStar color="red" />
                            <AiFillStar color="red" />
                        </div>
                        <div className="CommentCount">
                            <p>후기 68</p>
                        </div>
                    </div>
                    <span className="wall-width"></span>
                    <div className="Price">
                       <p>30,000원</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="Card">
            <div className="Cardbox-content">
                <div className="Posting_Image">
                    <img src={card} alt="test-card" />
                        <button className="LoveButton" onClick={btnclick}>
                             {/* 버튼은 이미지 안에 배치 */}
                        {/* boolean으로 love값을 전달 default는 false */}
                            {click ?  <FaBookmark size="25" color="red" /> : <FaRegBookmark size="25" color="white" />}
                        </button>
                </div>
                <div className="contentbox">
                    <div className="PostName">
                        <p>한강 선셋 패들보드</p>
                    </div>
                    <div className="Avg-count">
                        <div className="AvgReviewPoint" >
                            <AiFillStar color="red" />
                            <AiFillStar color="red" />
                            <AiFillStar color="red" />
                            <AiFillStar color="red" />
                            <AiFillStar color="red" />
                        </div>
                        <div className="CommentCount">
                            <p>후기 68</p>
                        </div>
                    </div>
                    <span className="wall-width"></span>
                    <div className="Price">
                       <p>30,000원</p>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    )
}

export default Card;