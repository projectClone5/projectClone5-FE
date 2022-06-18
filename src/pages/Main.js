import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

const Main = () => {

    const history = useHistory();

    return (
        <>
        <button onClick={() => history.push('/Login')}>로그인</button>
        <button onClick={() => history.push('/Signup')}>회원가입</button>
        </>
    )
}

export default Main;