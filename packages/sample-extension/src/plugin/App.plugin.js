import React, { useState, useEffect } from "react";

import Users from '../components/Users';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "react-bootstrap";

const plugin = (args, callback) => {
  console.log("args", args);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=10")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      {callback(...args)}
      <Users users={users} buttonDraw={args[1]} />
    </>
  );
};

const header = () => {
  return (
        <Header />
    )
};

const footer = () => {
  return (
      <Footer />
  )
};

const showButton = () => {
  return (
    <Button variant="primary" color="orange">View</Button>
  )
}

export default {
  "App/renderMainContents": {
    function: plugin,
  },
  "App/renderHeaderContents": {
    function: header
  },
  "App/renderFooterContents": {
    function: footer
  },
  "App/MakeButton": {
    "member-function": {
      showButton: () => (
        <Button colorScheme="orange">Class override example</Button>
      ),
    },
  }
};
