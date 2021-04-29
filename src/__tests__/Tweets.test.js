import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestRenderer from 'react-test-renderer';

import Footer from '../Footer';
// import Tweets from '../Tweets';
import Tweet from '../Components/Tweet';
import dummyTweets from '../static/dummyData';

const tweetsTest = {
  main(Tweets) {
    test('하나의 트윗이 아니라, 주어진 트윗(dummyTweets) 개수에 맞게 보여줘야 합니다.', () => {
      const { queryByText } = render(<Tweets dummyTweets={[]} />);
      for (let i = 0; i < dummyTweets.length; i += 1) {
        expect(queryByText(dummyTweets[i].content)).toBeInTheDocument();
      }
    });

    test('Tweets 컴포넌트의 자식 컴포넌트로 Footer 컴포넌트가 있어야 합니다.', () => {
      const tweetsInstance = TestRenderer.create(<Tweets dummyTweets={[]} />)
        .root;

      expect(tweetsInstance.findByType(Footer).type).toBe(Footer);
    });
  },
};

export default tweetsTest;
