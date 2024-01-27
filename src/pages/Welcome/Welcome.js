import React, { useState } from "react";
import Login from "../../component/Login/Login";
import Form from "../../component/Form/Form";

const Welcome = () => {
  const [login, setLogin] = useState(false);

  function loginSuccessfully() {
    setLogin(true);
  }
  return <div>{login ? <Login login={loginSuccessfully} /> : <Form />}</div>;
};

export default Welcome;
