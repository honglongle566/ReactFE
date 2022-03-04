import React from 'react';
import '../../css/Home.css';
import Tabs from "./Tabs"
import { BrowserRouter, Redirect, Switch, Route, Link } from "react-router-dom";

export default class Home extends React.Component {
    render(){
        return (
            <div className="Home" style={{display: "block"}}>
                <BrowserRouter>
                    <Tabs/>
                </BrowserRouter>
            </div>
        );
    }
    
}

