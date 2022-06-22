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

const Card = (props) => {
    // const dispatch = useDispatch();
    const history = useHistory();
    const dispatch = useDispatch();
    const card_list = useSelector((state) => state.post.list);
    const category = props.checkedInputs;
    const Cards = card_list.postId;
    // const Cards = card_list.posts;

    // const filteredCategory =
    // Cards !== undefined && Cards.filter((v) => v.postCategory === category);

    useEffect(() => {
        dispatch(loadPostsApi());
    }, [dispatch]);


    console.log(props)
    console.log(card_list[0])
    console.log(Cards)
    const [click, setClick] = useState(false);

    const btnclick = () => {
        click ? setClick(false) : setClick(true);
    }
    const filteredCategory =
        Cards !== undefined && Cards.filter((v) => v.postCategory === category);



    return (
        <>
        { card_list !== undefined || category === "All"
            ? ( card_list.map((card_list, index) => {
                console.log(card_list)
                return (
                    <div className="Cardbox"
                        key={index}
                        // onClick={() => {
                        //     history(`/detail/${list.postId}`);
                        // }}
                    >
                        <div className="Card" >
                            <div className="Cardbox-content" category={card_list.category}>
                                <div className="Posting_Image">
                                    <img src={card_list.imgUrl} alt="test-card"
                                    onClick={() => { history.push("/Detail/" + index + "/" + `${card_list.postId}`)}}
                                    />
                                    <button className="LoveButton" onClick={btnclick}>
                                        {/* 버튼은 이미지 안에 배치 */}
                                        {/* boolean으로 love값을 전달 default는 false */}
                                        {click ? <FaBookmark size="25" color="red" /> : <FaRegBookmark size="25" color="white" />}
                                    </button>
                                    </div>
                                    <div className="contentbox">
                                        <div className="PostName">
                                            <p>{card_list.title}</p>
                                        </div>
                                        <div className="Avg-count">
                                            <div className="AvgReviewPoint" >
                                                {card_list.avgReviewPoint }
                                                {/* <AiFillStar color="red" />
                                                <AiFillStar color="red" />
                                                <AiFillStar color="red" />
                                                <AiFillStar color="red" />
                                                <AiFillStar color="red" /> */}
                                            </div>
                                            <div className="CommentCount">
                                                <p>{card_list.totalComment}</p>
                                            </div>
                                        </div>
                                        <span className="wall-width"></span>
                                        <div className="Price">
                                            <p>{card_list.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }))
                : Cards !== undefined &&
                filteredCategory.map((card_list, postId) => {
                    return (
                        <div className="Cardbox"
                            key={postId}
                            // onClick={() => {
                            //     history(`/detail/${card_list.postId}`);
                            // }}
                        >
                            <div className="Card">
                            <div className="Cardbox-content" category={card_list.category}>
                                    <div className="Posting_Image">
                                        <img src={card} alt="test-card"
                                            postImage={card_list.imgUrl }
                                        />
                                        <button className="LoveButton" onClick={btnclick}>
                                            {/* 버튼은 이미지 안에 배치 */}
                                            {/* boolean으로 love값을 전달 default는 false */}
                                            {click ? <FaBookmark size="25" color="red" /> : <FaRegBookmark size="25" color="white" />}
                                        </button>

                                    </div>
                                    <div className="contentbox">
                                        <div className="PostName">
                                            <p>{card_list.title }</p>
                                        </div>
                                        <div className="Avg-count">
                                            <div className="AvgReviewPoint" >
                                                {card_list.avgReviewPoint }
                                                <AiFillStar color="red" />
                                                <AiFillStar color="red" />
                                                <AiFillStar color="red" />
                                                <AiFillStar color="red" />
                                                <AiFillStar color="red" />
                                            </div>
                                            <div className="CommentCount">
                                                <p>{card_list.totalComment}</p>
                                            </div>
                                        </div>
                                        <span className="wall-width"></span>
                                        <div className="Price">
                                            <p>{card_list.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </>
                
        )       
    };
    


export default Card;