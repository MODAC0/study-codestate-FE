import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import dummyTweets from './static/dummyData';

ReactDOM.render(
  <App dummyTweets={dummyTweets} />,
  document.getElementById('root')
);
