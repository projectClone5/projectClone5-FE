import React from "react";
import Card from "../components/Card";
import profile from "../assets/user.png";
import "../css/Mypage.css";
import { BiEditAlt } from "react-icons/bi";
import Modal from "../components/Modal";

const Mypage = () => {

    const [modalOpen, setModalOpen] = React.useState(false);

    const openModal = () => {
      setModalOpen(true);
    };
    const closeModal = () => {
      setModalOpen(false);
    };

    return (
        <div className="Mypage-container">
            <div className="Mypage-content">
                <div className="user-content">
                    <div className="user">
                        <img src={profile} alt="프로필"/>
                    </div>
                    <div className="nickname-title">
                        <p>닉네임 자리입니다.</p>
                        <button onClick={openModal}><BiEditAlt size="30" /></button>
                        <Modal open={modalOpen} close={closeModal} header="수정하기"></Modal>
                    </div>
                </div>
                <div className="my-post-content">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Mypage;