import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestRenderer from 'react-test-renderer';

import { Footer } from '../../App';
import Tweets from '../Tweets';
import Tweet from '../../Components/Tweet';
import { dummyTweets } from '../../static/dummyData';

describe('Tweets.js Components', () => {
  test('Tweets 컴포넌트의 자식 컴포넌트로 Tweet, Footer 컴포넌트가 있어야 합니다.', () => {
    const tweetsInstance = TestRenderer.create(
      <Tweets dummyTweets={dummyTweets.slice(0, 1)} />
    ).root;

    expect(tweetsInstance.findByType(Tweet).type).toBe(Tweet);
    expect(tweetsInstance.findByType(Footer).type).toBe(Footer);
  });
});

describe('Tweets 데이터 렌더링 테스트', () => {
  describe('트윗 한 개가 주어진 경우', () => {
    test('한 개의 트윗이 보여야 합니다.', () => {
      const { queryByText } = render(
        <Tweets dummyTweets={dummyTweets.slice(0, 1)} />
      );
      expect(queryByText('kimcoding')).toHaveTextContent(
        dummyTweets[0].username
      );
    });
    describe('트윗 세 개가 주어진 경우', () => {
      test('세 개의 트윗이 보여야 합니다.', () => {
        const { queryByText } = render(
          <Tweets dummyTweets={dummyTweets.slice(0, 3)} />
        );

        expect(queryByText('kimcoding')).toHaveTextContent(
          dummyTweets[0].username
        );
        expect(queryByText('parkhacker')).toHaveTextContent(
          dummyTweets[1].username
        );
        expect(queryByText('leedesign')).toHaveTextContent(
          dummyTweets[2].username
        );
      });
    });
  });
});
