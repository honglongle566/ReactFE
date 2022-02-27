import React from "react";
import "../../css/Login-Form-Clean.css"
import "../../bootstrap/css/bootstrap.min.css"
import Alert from 'react-bootstrap/Alert'
import LoginButton from '../../components/google.login/LoginButton'
import LogoutButton from '../../components/google.login/LogoutButton'

class LoginTab extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            visible : false,
            isLogInUETCoursesSuccess : false
        }
    }

    onShowAlert = ()=>{
        this.setState({visible:true},()=>{
            window.setTimeout(()=>{
                this.setState({visible:false})
            },3000)
        });
    }

    submitLoginUetCourses = async() => {

        var serialize = require('form-serialize');
        var form = document.querySelector('#uet-auth-form');

        var uetCreds = serialize(form);
        console.log()

        fetch(`${process.env.REACT_APP_BASE_URL}/api/integration/exchange-uet-token`, {
            method: 'POST',
            body: JSON.stringify({
                'username': form['username'].value,
                'password': form['password'].value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then(res => {
            fetch(`${process.env.REACT_APP_BASE_URL}/api/integration/uet-auth`, {
                method: 'POST',
                body: JSON.stringify(res),
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(res => {
                console.log(res);
            })
        })

        this.onShowAlert();

    }

    render() {
        return (
            <div className="FirstTab">
                <section className="text-center features-icons">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3"/>
                                <section className="login-clean form-login" style={{borderRadius: '10px', height:'430px'}}>
                                    <form id="google-auth-form" style={{height:'375px'}}>
                                        <h2 className="visually-hidden">Login Form</h2>
                                        <div className="illustration" style={{margin:'-11px'}}>
                                            <img src="google.png" alt={"Chrome Logo"} className="google-img" style={{width:'60px'}}/>
                                        </div>
                                        <img className="gmail-img" style={{width:'60px',marginRight:'80px'}} src="gmail-logo.png" alt={"Gmail Logo"}/>
                                        <img className="ggcalendar-img" style={{width:'60px'}} src="google-calendar-logo.png" alt={"Google calendar Logo"}/>
                                        <div className="mb-3">
                                            <div id="g-signin2"
                                                className="justify-content-center align-items-center text-center"
                                                data-width="240" data-height="36" data-longtitle="true"/>
                                            <LoginButton/>
                                        </div>
                                    </form>
                                </section>
                            </div>
                            <div className="col-lg-4">
                                <div className="mx-auto features-icons-item mb-5 mb-lg-0 mb-lg-3"/>
                                <section className="login-clean form-login" style={{borderRadius: '10px'}}>
                                    <form id="uet-auth-form">
                                        <h2 className="visually-hidden">Login Form</h2>
                                        <div className="illustration">
                                            <img src="uet-logo.png" alt={"UET Logo"}/>
                                        </div>
                                        <div className="mb-3">
                                            <input style={{marginLeft:'1px'}} className="form-control" type="text"
                                                id="uet-username-1" name="username"
                                                placeholder="Username"/>
                                            </div>
                                        <div className="mb-3">
                                            <input style={{marginLeft:'1px'}} className="form-control" type="password"
                                            id="uet-password-1" name="password"
                                            placeholder="Password"/>
                                        </div>
                                        <button className="btn btn-primary d-block w-100 btn-signin" type="button"
                                                onClick={this.submitLoginUetCourses}
                                        >Sign In UET Courses</button>
                                        <div className="mb-3"/>
                                    </form>
                                </section>
                            </div>
                            
                        </div>
                    </div>
                </section>


                <div>
                    <Alert color="success" variant="success" show={this.state.visible}>
                        Đăng nhập vào UET courses thành công.
                        Thông tin đăng nhập đã được lưu vào hệ thống
                    </Alert>
                </div>

                <script src="/src/bootstrap/js/bootstrap.min.js"/>
                <script src="/src/js/authen_func/auth-google.js"/>
                <script src="/src/js/authen_func/z-auth.js"/>
                <script src="/src/js/authen_func/authConfig.js"/>
                <script src="/src/js/authen_func/graphConfig.js"/>
                <script src="/src/js/authen_func/authPopup.js"/>
                <script src="/src/js/authen_func/graph.js"/>
            </div>
        );
    }
};
export default LoginTab;
