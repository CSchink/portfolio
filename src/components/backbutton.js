import React from "react";
import { MDBBtn, MDBIcon } from "mdbreact";
import { useHistory } from "react-router-dom";

const BackButton = ({ url }) => {
  let history = useHistory();
  function handleClick() {
    history.push(url);
  }
  return (
    <div style={{ paddingTop: "10px" }}>
      <MDBBtn size='sm' outline color="black" rounded onClick={handleClick}>
      <MDBIcon icon="arrow-left" />
      </MDBBtn>
    </div>
  );
};

export default BackButton;
