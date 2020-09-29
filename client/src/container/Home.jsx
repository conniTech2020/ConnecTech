import React from "react";
import { getAllStudents } from "../api/index";
import Button from "../compontes/Button";

const getStudents = () => {
  console.log("hhhhhhhhhh");
  getAllStudents().then((res) => {
    console.log(res);
  });
};

function Home() {
  return (
    <div>
      <button onClick={getStudents}>click</button>
      <Button onClick={getStudents}>click</Button>
    </div>
  );
}

export default Home;
