/* eslint-disable jsx-a11y/alt-text */
// import { Button } from "react-bootstrap";
import React from "react";
import { BrowserRouter, Redirect, Switch, Route, Link } from "react-router-dom";
import SignUp from './SignUp';
import Login from './Login';
import Home from './home/Home';
import BasePage from "./BasePage";
//import { Logout, AuthPage } from "./modules/Auth";

    // {/*<div>
    //     <Button 
    //         variant="primary"
    //         onClick={() => {
    //             doLogin('zachtrong', '123456', (token) => {
    //                 setAccessToken(token);
    //             })
    //         }}
    //     >
    //         Login
    //     </Button>

    //     <Button 
    //         variant="primary"
    //         onClick={() => {
    //             doRegister('account_registration', '123456', (token) => {
    //                 setAccessToken(token);
    //             })
    //         }}
    //     >
    //         Register
    //     </Button>
    // </div> */}
const AuthPage = ({doLogin, doRegister, setAccessToken}) => (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/"} style={{color:'white',fontSize:'15px'}}>
                SYSTEM INTEGRATION
            </Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav">
                    <Link className="navbar-nav1" style={{color: 'white', textDecoration:'none',fontSize:'14px'}} to={"/sign-in"}>Sign in</Link>
                    <p style={{color:'white', marginTop:'15px'}}>/</p>
                    <Link className="navbar-nav2" style={{color: 'white', textDecoration:'none',fontSize:'14px'}} to={"/sign-up"}>Sign up</Link>
                </ul>
              </div>
            </div>
        </nav>
            <div className="outer">
              <div className="inner">
                <Switch>
                  <Route style={{padding: '40px 55px 45px 55px'}} path="/sign-up" render={props => (
                      <SignUp {...props} doRegister={doRegister} setAccessToken={setAccessToken}/>
                  )} />
                  <Route style={{padding: '40px 55px 45px 55px'}} path="/sign-in"
                    render={props => (
                      <Login {...props} doLogin={doLogin} setAccessToken={setAccessToken}/>
                    )}/>
                  
                </Switch>
                <Switch>
                  <Route path="/home" component={Home}/>
                </Switch>
              </div>
            </div>
      </div>
    </BrowserRouter>
);

const Logout = () => (
    <div>
        Logout
    </div>
);

export function AppRoutes({doLogin, doRegister, isAuthorized, setAccessToken}) {

  return (
    <Switch>
      {!isAuthorized ? (
        /*Render auth page when user at `/auth` and not authorized.*/
        <Route>
          <AuthPage doLogin={doLogin} doRegister={doRegister} setAccessToken={setAccessToken} />
        </Route>
      ) : (
        /*Otherwise redirect to root page (`/`)*/
        <Redirect from="/auth" to="/" />
      )}

      {/*<Route path="/error" component={ErrorsPage} />*/}
      <Route path="/logout" component={Logout} />

      {!isAuthorized ? (
        /*Redirect to `/auth` when user is not authorized*/
        <Redirect to="/auth/login" />
      ) : (
        <BasePage />
      )}
    </Switch>
  );
}
