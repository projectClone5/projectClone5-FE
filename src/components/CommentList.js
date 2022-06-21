import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from 'react-router-dom';

const CommentList = () => {

    const history = useHistory();

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
              <InfoItem
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
              </ReveiwButtonWrap>

            </TableInfo>
          </CommentTable>
  
          <ReviewTable>
            <InfoName>
              <span
                style={{
                  width: "100px",
                  fontSize: "18px",
                  paddingTop: "15px",
                }}
              >유저 닉네임
              </span>
              <button className="btn1">수정</button>
              <button className="btn2">삭제</button>
            </InfoName>
          
            <Reviewphoto>
                후기 사진
            </Reviewphoto>

            <InfoItem
              style={{
                textAlign: "left",
                fontSize: "16px",
                marginLeft: "5px",
              }}
            >
            후기 내용
            </InfoItem>
          </ReviewTable>
        </CommentListWrap>
      </div>
    )}

const CommentListWrap = styled.div`
  margin: 5px auto;
  margin-top: 100px;
  margin-bottom: 80px;
  padding-right: 40px;
  width: 1050px;
`;

const Star = styled.div`
  font-size: 38px;
  display: inline-block;
  vertical-align: middle;
`;

const LitteStar = styled.div`
  font-size: 15px;
  display: inline-block;
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
`;

const Reviewphoto = styled.div`
  width: 150px;
  height: 150px;
  margin: 5px;
  display: flex;
  justify-content: flex-start;
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

const ReveiwButtonWrap = styled.div`
  padding: 10px 0px;
  width: 100%;
  height: 95px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const ReviewButton = styled.button`
  padding: 0;
  width: 128px;
  height: 30px;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  background-color: transparent;
  color: black;
  border: 1px solid #042b0a;
  border-radius: 5px;
  cursor: pointer;
  box-sizing: content-box;
  &:hover {
    background-color: #B5C5D6;
    color: white;
  }
`;

export default CommentList;