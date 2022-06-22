import React, { useState, useEffect } from "react";

import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import CommentList from "../components/CommentList";
import "../css/Detail.css"
import { loadPosts } from "../redux/modules/post";
import { loadPostApi } from "../redux/modules/post";
import _ from "lodash";

const Detail = (props) => {

    const dispatch = useDispatch();
    const history = useHistory();


    const [click, setClick] = useState(false);

    const btnclick = () => {
        click ? setClick(false) : setClick(true);
    }

    const postId = useParams().postId;
    const index = useParams().index;
    const is_login = localStorage.getItem("jwtToken");
    React.useEffect(() => {
        dispatch(loadPostApi(postId));
        // dispatch(loadCommentApi(postIdnum));
    }, []);

    const posting = CommentList?.detail;

    const id = posting !== undefined ? posting.postId : null;
    return (
        <>
            {posting !== undefined ? (
                <>


                    <div className="post-contatinerBox">

                        <div className="post-container">
                            <div className="post-box">

                                <div className="post-detail">
                                    <img src={posting.imgURL} />
                                    <div className="post-infor">
                                        <p className="post-title"></p>
                                        <p className="post-price"></p>
                                    </div>
                                    <div className="post-like">
                                        <button className="LoveButton" onClick={btnclick}>
                                            {click ? <FaBookmark size="25" color="red" /> : <FaRegBookmark size="25" color="black" />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post-content-container">
                            <div className="post-content">
                                게시글의 내용
                            </div>
                        </div>
                        <div className="post-avg-container">
                            <div className="post-avg">
                                <AiFillStar color="red" size="40" />
                                <AiFillStar color="red" size="40" />
                                <AiFillStar color="red" size="40" />
                                <AiFillStar color="red" size="40" />
                                <AiFillStar color="red" size="40" />
                                <p className="post-avg-number">5</p>
                                <p>개 후기</p>
                            </div>
                        </div>
                        <div className="post-comment-container">
                            <div className="post-comment">

                            </div>
                        </div>
                    </div>
                </>
            ) : null
            }
            <CommentList postId={postId} />
        </>
    )
}
export default Detail;