import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Tweets from './Pages/Tweets';
import Mypage from './Pages/Mypage';
import About from './Pages/About';
import './App.css';

const App = (props) => {
  const { dummyTweets } = props;

  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Sidebar />
          <section className="features">
            <Switch>
              <Route path="/mypage">
                <Mypage dummyTweets={dummyTweets} />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route exact path="/">
                <Tweets dummyTweets={dummyTweets} />
              </Route>
            </Switch>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export { App, Sidebar, Footer };
