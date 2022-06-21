import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "../components/Card";
import "../css/CategoryDetail.css";

const CategoryDetail = () => {
    return (
        <div className="CategoryDetail-box">
            <div className="CategoryDetail-container">
                <div className="CategoryDetail-title">
                    <p>카테고리 이름</p>
                </div>
                <div className="CategoryDetail-content">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default CategoryDetail;