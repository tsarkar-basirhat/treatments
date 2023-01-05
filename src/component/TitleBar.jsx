import React from "react";
import {Helmet} from "react-helmet";

const TitleBar = (props) => {

    return(
        <>
            <Helmet>
                <title>Treatments | {props.title}</title>
            </Helmet>
        </>
    )
}

export default TitleBar;