import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCommentFB, addCommentFB, deleteCommentFB } from "../redux/modules/comment";
import { FaStar } from 'react-icons/fa';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import axios from "axios";

const CommentList = ({ postId }) => {

  const history = useHistory();
  const dispatch = useDispatch();

  const [comment, setComment] = React.useState("");
  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const data = useSelector((state) => state.comment.commentList);

  const handleStarClick = index => {
    let clickStates = [...clicked];
    for (let i = 1; i < 6; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  let reviewPoint = clicked.filter(Boolean).length;
  const pointStar = parseInt(reviewPoint);


 
  console.log(clicked);
  console.log(typeof (reviewPoint));
  console.log(parseInt(reviewPoint));
  console.log(reviewPoint);

  React.useEffect(() => {
    dispatch(loadCommentFB(postId));
  }, []);

  // const addcomment = () => {
  //   dispatch(addCommentFB(
  //     postId, comment, parseInt(reviewPoint)));
  //   setComment("")
   
  // }
  const token = localStorage.getItem("jwtToken");




  const variables = {
    postId: postId,
    comment: comment,
    reviewPoint :pointStar
  }

const addcomment = (e) => {
  axios({
    method: "post",
    url: `http://44.204.90.116/api/post/${postId}/comment`,
    data: JSON.stringify(variables),
    headers: {
        "Content-type": `application/json`,"Authorization": `${token}`
        // "Content-Type": "multipart/form-data"
    }

}).then((res) => {
            alert("게시글 등록 완료!")
            console.log(res);

}).catch(error => {
  console.log(error.response)
});
console.log(variables);
}








  return (
    <div className="Review">
      <CommentListWrap>
        <CommentInfo>
          <li>
            <div
              style={{
                width: "4px",
                height: "4px",
                margin: "7px 8px 0 0",
                backgroundColor: "#514859",
                verticalAlign: "2px",
              }}
            ></div>
            리뷰를 남기는 공간입니다.
          </li>
        </CommentInfo>

        <CommentTable>
          <TableInfo>
            {/*               <InfoItem
                style={{
                  width: "400px",
                  textAlign: "left",
                  marginLeft: "5px",
                  fontSize: "23px",
                }}
              >
                포토후기
              </InfoItem>

              <ReveiwButtonWrap>
                <ReviewButton onClick={() => history.push("/CommentWrite")}>후기작성</ReviewButton>
              </ReveiwButtonWrap> */}
            <Stars>
              {[1, 2, 3, 4, 5].map((el, idx) => {
                return (
                  <FaStar
                    key={idx}
                    size="35"
                    onClick={() => handleStarClick(el)}
                    className={clicked[el] && 'ReadStar'}
                  />
                );
              })}
            </Stars>
            <input type="text" placeholder="후기를 등록해주세요!" value={comment} onChange={(e) => setComment(e.target.value)} />
            <button onClick={addcomment}>작성하기</button>
          </TableInfo>
        </CommentTable>
        {data.map((list, index) => {
          <ReviewTable>
            <InfoName>
              <span
                style={{
                  width: "100px",
                  fontSize: "18px",
                  paddingTop: "15px",
                  fontWeight: "bold",
                }}
              >유저이름
              </span>
              <button className="btn1" onClick={() => history.push("/CommentWrite")}>수정</button>
              <button className="btn2" onClick={() => dispatch(deleteCommentFB(list.commentId))}>삭제</button>
            </InfoName>
            {/*           
            <Reviewphoto>
                후기 사진
            </Reviewphoto> */}

            <InfoItem
              style={{
                textAlign: "left",
                fontSize: "16px",
                marginLeft: "5px",
              }}
            >

            </InfoItem>
          </ReviewTable>
        })}
      </CommentListWrap>
    </div>
  )
}

const CommentListWrap = styled.div`
  margin: 5px auto;
  margin-top: 100px;
  margin-bottom: 80px;
  padding-right: 40px;
  width: 1000px;
`;

const CommentInfo = styled.ul`
  margin: 0;
  padding-left: 0;
  list-style-type: none;
  & > li {
    padding: 0;
    display: flex;
    color: #666666;
    font-size: 14px;
    font-weight: 300;
    line-height: 18px;
    letter-spacing: 0px;
    font-family: "Noto Sans KR", sans-serif;
  }
`;

const CommentTable = styled.div`
  margin-top: 15px;
  border-top: 1px solid #303735;
  border-bottom: 1px solid #303735;
  font-family: "Noto Sans KR", sans-serif;
`;

const ReviewTable = styled.div`
  margin: 2px;
`;

const TableInfo = styled.div`
  width: 100%;
  height: 65.8px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #e3e3e3;
  input {
    width : 70%;
    height: 40px;
    border-radius: 10px;
    border: 1px solid gray;
  }
  button {
    background-color: white;
    border-radius: 10px;
    margin: 5px;
    padding: 0 20px;
    height: 40px;
    width: 100px;
    cursor: pointer;
    border: 1px solid gray;
    font-size: 15px;
  }
`;

const InfoItem = styled.div`
    padding: 25px 0px 23px 0;
    color: #151514;
    line-height: 140%;
    font-weight: 500;
    letter-spacing: 0px;
    vertical-align: middle;
`;

const InfoName = styled.div`
    position : relative;
    display: flex;
    align-items: center;
    color: #151514;
    line-height: 140%;
    width: 100%;
    height: 40px;
    text-align: left;
    margin: 10px 5px;
    padding: 5px;
    .btn1 {
        position: absolute;
        right: 100px;
        background-color: white;
        border-radius: 10px;
        margin: 5px;
        padding: 0 20px;
        height: 30px;
        width: 80px;
        cursor: pointer;
        border: 1px solid gray;
        font-size: 16px;
    }
    .btn2 {
        position: absolute;
        right: 5px;
        background-color: white;
        border-radius: 10px;
        margin: 5px;
        padding: 0 20px;
        height: 30px;
        width: 80px;
        cursor: pointer;
        border: 1px solid gray;
        font-size: 16px;
    }
`;

const Stars = styled.div`
  display: flex;
  padding-top: 5px;
  margin-right : 10px;
  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: red;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .ReadStar {
    color: red;
  }
`;

export default CommentList;