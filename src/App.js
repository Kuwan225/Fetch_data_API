import React, { useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import { Routes, Route, Link } from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  const [data, setData] = useState([]);

  axios.get("https://ghibliapi.herokuapp.com/films/").then((result) => {
    // console.log(result.data);
    setData(result.data);
  });

  return (
    <div
      className="App"
      style={{
        padding: "20px",
        display: "flex",
        flexWrap: "wrap",
        overflow: "hidden",
        fontFamily: "arial",
      }}
    >
      {data.map((el) => {
        return (
          <div key={el.id}>
            <Routes>
              <Route
                path="/"
                element={
                  <Link to={el.id}>
                    <Card image={el.image} />
                  </Link>
                }
              />

              <Route
                path={el.id}
                element={
                  <Detail
                    image={el.image}
                    title={el.title}
                    desc={el.description}
                  />
                }
              />
            </Routes>
          </div>
        );
      })}
    </div>
  );
}

export default App;
