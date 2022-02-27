import React, {useState} from 'react';
import { BrowserRouter} from "react-router-dom";
import './css/App.css';
import {AppRoutes} from './components/Routes';


const doLogin = (username, password, cb, cb_err) => {

    // login
    fetch(`${process.env.REACT_APP_BASE_URL}/api/auth/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password 
        })
    })
    .then(res => res.json()) 
    .then(res => {
        if (!!res?.data?.accessToken) {
            cb(res.data.accessToken);
        } else {
            cb_err('Tài khoản hoặc mật khẩu không đúng')
        }
    });
};

const doRegister = (username, password, cb, cb_err) => {
    // register
    fetch(`${process.env.REACT_APP_BASE_URL}/api/auth/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password 
        })
    })
    .then(res => res.json())
    .then(res => {
        if (res.status === 'SUCCESS') {
            doLogin(username, password, cb, cb_err);
        }else{
            cb_err('Tài khoản đã tồn tại')
        }
    });
};

function App() {
  const [isAuthorized, setAuthorized] = useState(!!localStorage.getItem('accessToken'), false);
  const setAccessToken = (accessToken) => {
      console.log(accessToken);
      localStorage.setItem('accessToken', accessToken);
      setAuthorized(true);
  }

  return (
    <div className="App" style={{display: "block"}}>
        <BrowserRouter>
            <AppRoutes isAuthorized={isAuthorized} setAccessToken={setAccessToken} doLogin={doLogin} doRegister={doRegister}/>
        </BrowserRouter>
    </div>
  );

}
export default App;
