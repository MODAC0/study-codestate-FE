// TODO : useState를 react로 부터 import 합니다.
import React from "react";
import Footer from "../Footer";
import Tweet from "../Components/Tweet";
import "./Tweets.css";
import dummyTweets from "../static/dummyData";
import { useState } from "react";

const Tweets = () => {
  const getRandomNumber = (min, max) => {
    return parseInt(Math.random() * (Number(max) - Number(min) + 2));
  };

  const [tweetList, setTweetList] = useState(dummyTweets);
  const [username, setUsername] = useState("parkhacker");
  const [msg, setMsg] = useState("");

  const handleButtonClick = (event) => {
    const tweet = {
      id: tweetList.length + 1,
      username: username,
      picture: `https://randomuser.me/api/portraits/women/${getRandomNumber(
        1,
        98
      )}.jpg`,
      content: msg,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setTweetList([tweet, ...tweetList]);
  };

  const handleChangeUser = (event) => {
    // TODO : Tweet input 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setUsername(event.target.value);
  };

  const handleChangeMsg = (event) => {
    // TODO : Tweet textarea 엘리먼트에 입력 시 작동하는 함수를 완성하세요.
    setMsg(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  type="text"
                  defaultValue="parkhacker"
                  placeholder="your username here.."
                  className="tweetForm__input--username"
                  onChange={handleChangeUser}
                ></input>
                <textarea
                  className="tweetForm__input--message"
                  defaultValue=""
                  placeholder=""
                  onChange={handleChangeMsg}
                ></textarea>
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {`total: ${tweetList.length}`}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              <button
                className="tweetForm__submitButton"
                onClick={handleButtonClick}
              >
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="tweet__selectUser"></div>
      <ul className="tweets">
        {tweetList.map((el) => (
          <Tweet tweet={el} key={el.id} />
        ))}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
