import React from "react";
import Tabs from "./home/Tabs"
import PrivateRouter from './google.login/PrivateRouter';
import PublicRouter from './google.login/PublicRouter';

const BasePage = () => {
    return (
        <div>
            <PublicRouter path="/" component={Tabs} />
            <PrivateRouter path="/" component={Tabs} />
        </div>
    )
}

export default BasePage;