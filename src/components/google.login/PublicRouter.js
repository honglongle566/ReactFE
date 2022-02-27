import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PublicRouter = ({component: Component, ...rest}) => {

    //const { isSignedIn } = useGoogleAuth();
    const isSignedIn = false;

    return (
        <div>
            <Route {...rest} render={props => (
                !isSignedIn ?
                    <Component {...props} /> :
                    <Redirect exact to="/" />
            )} />
        </div>
    );
};

export default PublicRouter;