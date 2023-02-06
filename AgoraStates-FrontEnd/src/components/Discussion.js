import React, { Fragment } from "react";

const Discussion = ({ discussion }) => {
  const { url, author, avatarUrl, title, createdAt, answer } = discussion;
  return (
    <Fragment>
      <li className="discussion__container">
        <div className="discussion__avatar--wrapper">
          <img
            className="discussion__avatar--image"
            src={avatarUrl}
            alt={`avatar of ${author}`}
          />
        </div>
        <div className="discussion__content">
          <h2 className="discussion__title">
            <a href={url}>{title}</a>
          </h2>
          <div className="discussion__information">{`${author} / ${new Date(
            createdAt
          ).toLocaleString()}`}</div>
        </div>
        <div className="discussion__answered">
          <p className="tag">{answer ? "답변완료" : "답변중"}</p>
        </div>
      </li>
    </Fragment>
  );
};

export default Discussion;
