import React, {useState} from "react";
import CalendarTab from "./CalendarTab"
import LoginTab from "./LoginTab"
import { BrowserRouter, Redirect, Switch, Route, Link } from "react-router-dom";

export default function Tabs(props) {
    const [activeTab, setActiveTab] = useState("tab1");
    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("tab1");
    };
    const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("tab2");
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to={"/"} style={{color:'white',fontSize:'15px'}}>
                    SYSTEM INTEGRATION
                </Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav">
                        <Link className="navbar-nav1" style={{color: 'white', textDecoration:'none', fontSize:'14px'}} to={"/"} onClick={e => {
                            e.preventDefault();
                            fetch(`${process.env.REACT_APP_BASE_URL}/api/integration/synchronize-calendars`, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
                                }
                            })
                            .then(res => {
                                console.log(res);
                            });
                        }}>Sync</Link>
                        <p style={{color:'white', marginTop:'15px'}}>/</p>
                        <Link className="navbar-nav2" style={{color: 'white', textDecoration:'none', fontSize:'14px'}} to={"/sign-in"} onClick={e => {
                            e.preventDefault();
                            localStorage.clear();
                            window.location.href = '/index.html';
                        }}>Logout</Link>
                    </ul>
                </div>
                </div>
            </nav>
            <div className="Tabs" style={{marginTop: 72}}>
                {/* Tab nav */}
                <ul className="nav">
                    <li className={activeTab === "tab1" ? "active" : ""}
                        onClick={handleTab1}>
                        Connect
                    </li>
                    <li className={activeTab === "tab2" ? "active" : ""}
                        onClick={handleTab2}>Calendar</li>
                </ul>
                <div className="outlet">
                    {activeTab === "tab1" ? <LoginTab /> : <CalendarTab />}
                </div>
            </div>    
        </>
    );
};