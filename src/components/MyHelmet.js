import React from 'react';
import {Helmet} from "react-helmet";

const MyHelmet = ({children}) => {
    return (
        <Helmet>
            <title>{children}</title>
        </Helmet>
    );
};

export default MyHelmet;