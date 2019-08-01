import React from "react";
import Header from "./components/Header";

import "./App.css";
import PostList from "./components/PostList";

function App(props) {
  return (
    <>
      <Header />
      <PostList />
    </>
  );
}

export default App;
