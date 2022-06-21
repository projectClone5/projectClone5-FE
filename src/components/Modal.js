import React from 'react';
import "../css/Modal.css";

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <input type="file" placeholder="프로필사진을 변경해주세요"/>
            <input type="text" placeholder="닉네임을 변경해주세요"/>
          </main>
          <footer>
            미리보기????
            <button className="close" onClick={close}>
              수정하기
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default Modal;