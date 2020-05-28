import React from "react";
import Form from "./Form";
import Navigation from "./Navigation";

const Header = ({ history, handleSubmit }) => {

  // console.log(history+"88888888888"+handleSubmit)
  return (
    <div>
      <h2>SnapShot</h2>
      <Form history={history} handleSubmit={handleSubmit} />
      <Navigation />


    </div>
  );
};

export default Header;
