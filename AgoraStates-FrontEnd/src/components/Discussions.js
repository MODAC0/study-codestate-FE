import React, { Fragment } from "react";
import Discussion from "./Discussion";
import "./Discussions.css";

const Discussions = ({ discussion }) => {
  return (
    <Fragment>
      <section className="discussion__wrapper">
        <h1 className="sec2">List</h1>
        <ul className="discussions__container">
          {discussion.map((discussion) => {
            return <Discussion discussion={discussion} key={discussion.id} />;
          })}
        </ul>
      </section>
    </Fragment>
  );
};
export default Discussions;
