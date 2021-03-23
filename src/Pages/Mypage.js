import React from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './Mypage.css';

const Mypage = (props) => {
  const { dummyTweets } = props;

  const filteredTweets = dummyTweets.filter(
    (tweet) => tweet.username === 'kimcoding'
  );

  return (
    <section className="myInfo">
      <div className="myInfo__container">
        <div className="myInfo__wrapper">
          <div className="myInfo__profile">
            <img src={filteredTweets[0].picture} />
          </div>
          <div className="myInfo__detail">
            <p className="myInfo__detailName">
              {filteredTweets[0].username} Profile
            </p>
            <p>28 팔로워 100 팔로잉</p>
          </div>
        </div>
      </div>
      <ul className="tweets">
        {filteredTweets.map((tweet) => {
          return <Tweet key={tweet.id} tweet={tweet} />;
        })}
      </ul>
      <Footer />
    </section>
  );
};

export default Mypage;
