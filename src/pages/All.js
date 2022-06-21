import React from "react";
import Card from "../components/Card";
import "../css/All.css";

const All = () => {
    return (
        <div className="All-box">
            <div className="All-container">
                <div className="All-title">
                    <p>전체 보기</p>
                </div>
                <div className="All-content">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default All;