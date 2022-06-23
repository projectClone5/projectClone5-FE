import React, { useEffect, useState, useRef, useSelector } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createPost } from "../redux/modules/post";
// import CKeditor from "../components/CKeditor"
import axios from "axios";
import "../css/Write.css";


//import DatePicker from "react-datepicker";

const Write = (props) => {
    const history = useHistory();
    const dispatch = useDispatch;
    const addPosts = createPost

    // 카테고리 선택

    //set state
    const [category, setCategory] = useState("");
    const [PostingImage, setPostingImage] = useState("");
    const [postTitle, setPostTitle] = useState("");
    const [content, setContent] = useState("");
    const [Price, setPrice] = useState("");
    let postImage = document.getElementById("postImage");


    const changeRadio = (e) => {
        if (e.target.checked) {
            setCategory(e.target.id);
        }
    };
    //image preview
    const reader = new FileReader();
    const preview = (e) => {
        reader.readAsDataURL(postImage.files[0]);
        return new Promise((resolve) => {
            reader.onload = () => {
                setPostingImage({ name: postImage.files[0], url: reader.result });
                resolve();
            };
        });
    };
    const addPost = (e) => {
        if (postTitle === '' || PostingImage === '' || content === '' || Price === '') {
            alert('빈칸을 다 채워주세요.');
            return;
        }

        let frm = new FormData();

        frm.append("title", postTitle)
        frm.append("price", Price)
        frm.append("content", content)
        frm.append("category", category)
        frm.append("imgUrl", postImage.files[0])
        console.log(postImage.files[0])
        console.log(postTitle);
        console.log(content);
        console.log(Price);
        console.log(category);
        const token = localStorage.getItem("jwtToken");

        axios({
            method: "post",
            url: "http://44.204.90.116/api/posts",
            data: frm,
            headers: { 'Content-Type': 'multipart/form-data',"Authorization": `${token}` }
        }).then(
            alert("게시글 등록 완료!")
        )
        // ).then(
        //   navigate("/")
        // )
        //    dispatch(addPosts(frm));
        console.log(frm);
        preview([]);
        history("/");
    }
    //포스팅 시간
    // const now = new Date();
    // const Day = now.getDate();
    // const month = Number(now.getMonth() + 1);
    // const hours = now.getHours();
    // const minutes = now.getMinutes();
    // const postTime = hours + ":" + minutes;



    //   const DateS = orderDate.toString().split(" ");
    //   const postYM = DateS[3].split("0")[1] + "." + month + "." + DateS[2];
    //   const todayYM = DateS[3].split("0")[1] + "." + month + "." + Day;
    //   console.log(postYM);
    //   console.log(todayYM);
    return (
        <>

            <div className="Write-box">
                <div className="write-container">
                    <div className="Subtitle">게시글 등록</div><br />
                        <div enctype="multipart/form-data">
                        {/* 입력정보 받기 */}
                        <div className="Titleinput">
                            <input type="text"
                                placeholder="제목을 입력해주세요"
                                onChange={(e) => {
                                    setPostTitle(e.target.value);
                                }}
                                value={postTitle} id="postContent" />
                            {/* 인풋박스 크기 조절 필요 */}
                        </div>
                        <div className="Imageinput">
                            <input type="file" onChange={preview} id="postImage" />
                            {/* imageview를 구현 크기 조정 필요 */}
                        </div>
                    <div className="Category-price">
                        <div className="CategoryBtn">
                            {/* <label className="CategorySelect">
                                <button
                                    type="radio"
                                    id="All"
                                    name="radioButton"
                                    onClick={(e) => setCategory(e.target.value)}
                                    value="All"
                                    defaultChecked
                                >전체</button>
                            </label> */}
                            <label className="CategorySelect">
                                <button
                                    type="radio"
                                    id="TRIP"
                                    name="radioButton"
                                    onClick={(e) => setCategory(e.target.value)}
                                    value="TRIP"
                                >여행</button>
                            </label>
                            <label className="CategorySelect">
                                <button
                                    type="radio"
                                    id="SPORTS"
                                    name="radioButton"
                                    onClick={(e) => setCategory(e.target.value)}
                                    value="SPORTS"
                                >운동</button>
                            </label>
                            <label className="CategorySelect">
                                <button
                                    type="radio"
                                    id="COOK"
                                    name="radioButton"
                                    onClick={(e) => setCategory(e.target.value)}
                                    value="COOK"
                                >요리</button>
                            </label>
                            <label className="CategorySelect">
                                <button
                                    type="radio"
                                    id="MEETING"
                                    name="radioButton"
                                    onClick={(e) => setCategory(e.target.value)}
                                    value="MEETING"
                                >모임</button>
                            </label>
                        </div>
                        <div className="Price">
                            <input type="num" placeholder="가격을 입력해주세요!"
                                onChange={(e) => {
                                    setPrice(e.target.value);
                                }}
                                value={Price} />
                        </div>
                    </div>
                    <div className="Contentinput">
                            <input type="text"
                                placeholder="내용을 적어주세요"
                                onChange={(e) => {
                                    setContent(e.target.value);
                                }}
                                value={content} id="postContent" />
                            {/* 인풋박스 크기 조절 필요 */}
                    </div>
                    <div className="AddBtn">
                        <button
                            onClick={() => {
                                addPost();
                                
                            }}>프립 등록!</button>
                        {/* 등록 성공시 메인페이지로 이동 */}
                    </div>
                </div>
            </div>
        </div>
    </>

    )
}

export default Write