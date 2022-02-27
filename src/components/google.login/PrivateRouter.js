import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRouter = ({component: Component, ...rest}) => {

    //const { isSignedIn } = useGoogleAuth();
    const isSignedIn = false;

    return (
        <div>
            <Route {...rest} render={props => (
                isSignedIn ?
                    <Component {...props} />:
                    <Redirect exact from="/private" to="/" />
            )} />
        </div>
    );
};

export default PrivateRouter;