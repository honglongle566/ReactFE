import React from 'react';
import '../../css/Home.css';
import Tabs from "./Tabs"
import { BrowserRouter, Redirect, Switch, Route, Link } from "react-router-dom";

export default class Home extends React.Component {
    render(){
        return (
            <div className="Home" style={{display: "block"}}>
                {/*
                <div className="welcome">Chào mừng đến với hệ thống đồng bộ lịch biểu
                <br/>
                    Nhóm 2 - K63T - Tích hợp hệ thống
                </div>
                */}
                <BrowserRouter>
                    <Tabs/>
                </BrowserRouter>
            </div>
        );
    }
    
}

