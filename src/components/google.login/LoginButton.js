import React from 'react';
import GoogleLogin from 'react-google-login';
const LoginButton = () => {

    const responseSuccess = (res) => {
        fetch(`${process.env.REACT_APP_BASE_URL}/api/integration/google-auth`, {
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
    };

    const responseFailure = (res) => {
        console.log(res);
    };

    return (
        // <button onClick={signIn}>Login</button>
        <GoogleLogin
        clientId="905434550263-fe4nhl3ec5u3r1tnkd77pq64053ddb6m.apps.googleusercontent.com"
        render={renderProps => (
            <button className="btn btn-primary d-block w-100 btn-signin" id="sign-in-google"
                    type="button" style={{marginTop:'97px'}}
                    onClick={renderProps.onClick}
            >Sign In with Google
            </button>
        )}
        buttonText="Login"
        isSignedIn={true}
        responseType="code"
        prompt="consent"
        scope="https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/gmail.readonly"
        onSuccess={responseSuccess}
        onFailure={responseFailure}
        cookiePolicy={'single_host_origin'}
      />
    );
};

export default LoginButton;