import React, { useState } from "react";
import Login from "../../component/Login/Login";
import Form from "../../component/Form/Form";

const Home = () => {
  const [login, setLogin] = useState(false);

  function loginSuccessfully() {
    setLogin(true);
  }
  return <div>{login ? <Form /> : <Login login={loginSuccessfully} />}</div>;
};

export default Home;
