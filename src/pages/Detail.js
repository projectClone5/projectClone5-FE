import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import CommentList from "../components/CommentList";
import "../css/Detail.css";
import { loadPostApi } from "../redux/modules/post";
import _ from "lodash";


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
                return(
                    <div className="post-contatinerBox">
                        <div className="post-container">
                            <div className="post-box">
                                <div className="post-detail">
                                    <img src={list.imgUrl} alt="포스트 사진" />
                                    <div className="post-infor">
                                        <p className="post-title">{list.title} </p>
                                        <p className="post-price">{list.price}</p>
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
                                {list.content}
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
                                <p>{list.totalComment}개 후기</p>
                                
                            </div>
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

export default Detail;