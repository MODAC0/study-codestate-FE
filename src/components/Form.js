import React, { Fragment, useState } from "react";

const Form = ({ discussion, addData }) => {
  // const [state, setState] = useState();
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const url = "http://localhost:4000/discussions";
  const handleButtonClick = (event) => {
    event.preventDefault();
    if (userName === "" || title === "" || content === "") return;
    let newDiscussion = {
      id: discussion[0].id + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      title: title,
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/45",
      author: userName,
      bodyHTML: content,
      avatarUrl:
        "https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4",
    };

    // setState({ ...newDiscussion });

    fetch(url, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(newDiscussion),
    })
      .then((res) => res.json())
      .then((result) => {
        addData(result);
        setUserName("");
        setTitle("");
        setContent("");
      });
  };

  const handleChangeUser = (event) => {
    setUserName(event.target.value);
  };

  const handleChangeTitle = (event) => {
    // TODO : Tweet input 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setTitle(event.target.value);
  };

  const handleChangeContent = (event) => {
    // TODO : Tweet input 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setContent(event.target.value);
  };

  return (
    <Fragment>
      <section className="form__container">
        <h1 className="sec1">My Agora States</h1>
        <div className="form__input--wrapper">
          <div className="form__input--name">
            <input
              onChange={handleChangeUser}
              className="inputbox"
              type="text"
              name="author"
              id="input-name"
              value={userName}
              placeholder="이름을 입력하세요"
              required
            />
          </div>
          <div className="form__input--title">
            <input
              onChange={handleChangeTitle}
              className="inputbox"
              type="text"
              name="title"
              id="input-title"
              value={title}
              placeholder="제목을 입력하세요"
              required
            />
          </div>
          <div className="form__textbox">
            <input
              onChange={handleChangeContent}
              className="inputbox"
              type="text"
              id="input-text"
              value={content}
              placeholder="질문을 작성하세요"
              required
            />
          </div>
          <div className="form__submit">
            <input
              onClick={handleButtonClick}
              className="submitbtn"
              type="submit"
              value="submit"
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Form;
