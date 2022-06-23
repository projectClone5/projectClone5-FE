import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Detail from '../pages/Detail';
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import '../css/Card.css';
import card from "../assets/card.png";
import { loadPosts } from "../redux/modules/post";
import { loadPostsApi } from "../redux/modules/post";
import _ from "lodash";


const Card = (props) => {
    // const dispatch = useDispatch();

    const history = useHistory();
    const dispatch = useDispatch();
    const card_list = useSelector((state) => state.post.list);

    useEffect(() => {
        dispatch(loadPostsApi());
    }, [dispatch]);

    const [click, setClick] = useState(false);

    const btnclick = () => {
        click ? setClick(false) : setClick(true);
    }

    return (
        <div className="AllCardbox">
            {card_list.map((card_list, index) => {
                return (
                    <div className="Cardbox">
                        <div className="Card" onClick={() => { history.push("/Detail/" + index + "/" + `${card_list.postId}`) }}>
                            <div className="Cardbox-content" category={card_list.category}>
                                <div className="Posting_Image">
                                    <img src={card_list.imgUrl} alt="test-card" />
                                    <button className="LoveButton" onClick={btnclick}>
                                        {click ? <FaBookmark size="25" color="red" /> : <FaRegBookmark size="25" color="white" />}
                                    </button>
                                </div>
                                <div className="contentbox">
                                    <div className="PostName">
                                        <p>{card_list.title}</p>
                                    </div>
                                </div>
                                <span className="wall-width"></span>
                                <div className="Price">
                                    <p>{card_list.price}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
};

export default Card;