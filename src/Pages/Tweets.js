import React from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './Tweets.css';

const Tweets = ({ dummyTweets }) => {
  return (
    <>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile"></div>
          <div className="tweetForm__input">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  {'total: ' + dummyTweets.length}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit"></div>
          </div>
        </div>
      </div>
      <ul className="tweets">
        {dummyTweets.map((tweet) => {
          return <Tweet key={tweet.id} tweet={tweet} />;
        })}
      </ul>
      <Footer />
    </>
  );
};

export default Tweets;
