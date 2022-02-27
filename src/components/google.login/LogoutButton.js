import React from 'react';
//import { useNavigate } from "react-router-dom";

function LogoutButton(props) {
    return (
        // <button onClick={signOut}>Logout</button>
        <div>
            <button className="btn btn-primary d-block w-30 btn-signin" id="sign-in-google"
                    type="button"
                    style={{position: 'fixed', top: 50, right: 20}}
                    onClick={() => {
                        localStorage.clear();
                        window.location.reload();
                    }}
            >Sign out
            </button>
        </div>
    );
};

export default LogoutButton;