import React from 'react';
import { MDBBtn, MDBIcon } from "mdbreact";
import { useHistory } from "react-router-dom";



const BackButton = ({ url }) => {
    let history = useHistory();
    function handleClick() {
        history.push(url)
    }
    return (
        <div style={{paddingTop: '40px'}}>
            <MDBBtn outline color='black' tag='a' onClick={handleClick}><MDBIcon icon="arrow-circle-left" /></MDBBtn>
        </div>
    );
};

export default BackButton

