// import { apis } from "../../shared/api";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


const Comment = () => {
  const dispatch = useDispatch();
  const comment_list = useSelector((state) => state.comment.list);
  const card = comment_list?.data.existingComment;
  console.log(comment_list);


  return(
    <>
    <div>
        <div className="CommentInputBox">
            <input className="CommentInPut" type="text" placeholder="후기를 남겨주세요" autoFocus/>
            <button className="CommentBtn">후기 등록</button>
        </div>
        {card.map((list, index)=>{

            return(
                <div className="commentBox" key={index}>

                </div>
            );
        })}
    </div>
    </>
  );


};

export default Comment;