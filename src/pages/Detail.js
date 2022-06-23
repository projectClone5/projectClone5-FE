import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import CommentList from "../components/CommentList";
import "../css/Detail.css";
import { loadPostApi } from "../redux/modules/post";
import _ from "lodash";
import { FaStar } from 'react-icons/fa';
import styled from "styled-components";

const Detail = (props) => {
    const params = useParams();

    const dispatch = useDispatch();
    const history = useHistory();

    const [click, setClick] = useState(false);

    const btnclick = () => {
        click ? setClick(false) : setClick(true);
    }

    const postId = useParams().postId;

    React.useEffect(() => {
        dispatch(loadPostApi(postId));
    }, []);

    const cardPost = useSelector((state) => state.post.list);

    console.log(cardPost);

    return (
        <>
            {cardPost.map((list, index) => {
                return (
                    <div className="post-contatinerBox">
                        <div className="post-container">
                            <div className="post-box">
                                <div className="post-detail">
                                    <img src={list.imgUrl} alt="포스트 사진" />
                                    <div className="post-infor">
                                        <p className="post-title">{list.title} </p>
                                        <p className="post-price">{list.price}원</p>
                                    </div>
                                    <div className="post-like">
                                        {/* <button className="LoveButton" onClick={btnclick}>
                                            {click ? <FaBookmark size="25" color="red" /> : <FaRegBookmark size="25" color="black" />}
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post-content-container">
                            <div className="post-content">
                                {list.content}
                            </div>
                        </div>
                        <div className="post-avg-container">
                            <Stars>
                                {[1, 2, 3, 4, 5].map((star, i) => {

                                    return (
                                        <FaStar
                                            key={i}
                                            size="35"
                                            style={{ color: list.avgReviewPoint > i ? ('red') : ('gray') }}
                                        />

                                    )

                                })}

                                <p className="post-avg-number">평점{list.avgReviewPoint}</p>
                                <br />

                            </Stars>
                            <p>{list.totalComment}개 후기</p>

                        </div>
                        <div className="post-comment-container">
                            <div className="post-comment">
                            </div>
                        </div>
                    </div>
                )
            }
            )}
            <CommentList postId={postId} />
        </>
    )
}
const Stars = styled.div`
  display: flex;
  padding-top: 5px;
  margin-right : 10px;
  `
export default Detail;