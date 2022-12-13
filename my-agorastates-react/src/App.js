import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

import Form from "./components/Form";
import Discussions from "./components/Discussions";

function App() {
  const [discussion, setDiscussion] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/discussions")
      .then((res) => res.json())
      .then((data) => {
        setDiscussion(data);
      });
  }, []);

  return (
    <Fragment>
      <BrowserRouter>
        <main>
          <Form
            action=""
            method="get"
            className="form"
            discussion={discussion}
            addData={setDiscussion}
          />

          <Discussions discussion={discussion} />
        </main>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
