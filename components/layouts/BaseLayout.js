import React from 'react';
import Header from '../shared/Header';

const Baselayout = (props) => {
    return (
        <React.Fragment>
            <Header/>
            {props.children}
        </React.Fragment>
    )
}
export default Baselayout;