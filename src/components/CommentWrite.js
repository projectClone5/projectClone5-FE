import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const CommentWrite = () => {

  return (
    <React.Fragment>
      <WriteContainer>
        <ReviewTitle>후기 작성</ReviewTitle>
        <WriteWrap>
          <TitleWrap>
            <StarTitle>
              <span
                style={{
                  marginRight: "10px",
                }}
              >
                별점 선택
              </span>
              <select
                style={{
                  margin: "5px",
                }}
              >
                <option value="">별점</option>
                <option value="1">✭</option>
                <option value="2">✭✭</option>
                <option value="3">✭✭✭</option>
                <option value="4">✭✭✭✭</option>
                <option value="5">✭✭✭✭✭</option>
              </select>
            </StarTitle>
          </TitleWrap>

          <CommentTextWrap>
            <CommentTextTitle style={{ height: "272px" }}>
              후기작성
            </CommentTextTitle>

            <CommentTitleBorder2>
              <CommentTextInput
                placeholder="후기를 작성해주세요!"
              />
            </CommentTitleBorder2>
          </CommentTextWrap>

          <CommentPhotoWrap>
            <CommentPhotoTitle style={{ height: "150px" }}>
              사진등록
            </CommentPhotoTitle>
            <PotoDivWrap>
              <PotoDiv>
                <PhotoUpload>
                  <label>
                    <img
                      alt=""
                      style={{
                        width: "20px",
                        marginTop: "33px",
                        color: "#e2e2e2",
                      }}
                    />
                    <input type="file" />
                  </label>
                </PhotoUpload>
                <PhotoUpload1>
                  <img
                    style={{ width: "80px", marginTop: "5px" }}
                    alt=""
                  />
                </PhotoUpload1>
              </PotoDiv>
              <PhotoDesc>
                사진을 등록해주세요!
              </PhotoDesc>
            </PotoDivWrap>
          </CommentPhotoWrap>
        </WriteWrap>

        <Button
          type="button"
          color="white"
          size="16.5px"
          margin="1px 0 0 0"
        >
          등록하기
        </Button>

      </WriteContainer>
    </React.Fragment>
  );
};

const ReviewTitle = styled.div`
  height: 36px;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;
  letter-spacing: -0.5px;
  display: flex;
  margin-left: 28px;
`;
const StarTitle = styled.div`
  height: 36px;
  font-weight: 500;
  font-size: 15px;
  line-height: 36px;
  letter-spacing: -1px;
  display: flex;
  margin-left: 30px;
`;

const TitleWrap = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  align-content: center;
`;

const WriteWrap = styled.div`
  width: 820px;
`;

const CommentTitleBorder2 = styled.div`
  border-top: 1px solid #dddfe1;
  padding: 10px 0px 10px 10px;
  width: 660px;
  display: flex;
  margin-top: 130px;
`;

const CommentTextWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: -133px;
`;

const CommentTextTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 39px;
  padding: 0 20 222px;
  width: 153px;
  height: 100%;
  border-top: 1px solid #dddfe1;
  background-color: #f7f7f7;
  font-size: 12px;
  color: #666;
  text-overflow: hidden;
  text-align: center;
`;

const CommentTextInput = styled.textarea`
  display: flex;
  width: 100%;
  height: 234px;
  padding: 0 10px;
  border: 1px solid #dddfe1;
  font-size: 12px;
  color: #000;
  line-height: 18px;
  outline: none;
  margin-top: 7px;
  margin-bottom: 100px;
  resize: none;
`;

const CommentPhotoWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: -133px;
  border-bottom: 1px solid #dddfe1;
`;

const PotoDivWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentPhotoTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 41px;
  padding: 0 20 222px;
  width: 151px;
  height: 100%;
  border-top: 1px solid #dddfe1;
  border-bottom: 1px solid #dddfe1;
  background-color: #f7f7f7;
  font-size: 12px;
  color: #666;
  text-overflow: hidden;
  text-align: center;
`;

const PhotoDesc = styled.div`
  display: flex;
  height: 20px;
  padding: 0 10px;
  font-size: 12px;
  text-align: center;
  word-break: inherit;
  color: #666;
  line-height: 18px;
  outline: none;
  margin-bottom: -60px;
  margin-left: 9px;
`;

const PotoDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: -42px 0px 0px 10px;
`;

const PhotoUpload1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 80px;
  height: 80px;
  margin: 10px 0;
  border: none;
  margin: 10px;
  margin-top: 40px;
  padding-bottom: 10px;
  display: block;
`;

const PhotoUpload = styled.div`
  /* background-color: yellow; */
  text-align: center;
  width: 80px;
  height: 80px;
  margin: 10px 0;
  border: 1px solid #dddfe1;
  margin: 10px;
  margin-top: 40px;
  padding-bottom: 10px;
  display: block;
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

const CommentTitleBorder4 = styled.div`
  border-top: 1px solid #dddfe1;
  width: 677px;
  display: flex;
  justify-content: center;
  margin-top: 25.5px;
  margin-left: -600px;
`;

const Button = styled.button`
  margin: 40px auto;
  width: 20%;
  height: 54px;
  border-radius: 3px;
  border: 1px solid #B5C5D6;
  background-color: #B5C5D6;
  cursor: pointer;
  display: block;
  justify-content: center;
  overflow: hidden;
  text-align: center;
`;

const WriteContainer = styled.div`
  width: 820px;
  margin: 0 auto;
  padding: 0px 0px 60px 0px;
`;

export default CommentWrite;