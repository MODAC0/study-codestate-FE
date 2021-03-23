import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestRenderer from 'react-test-renderer';

import { Footer } from '../../App';
import Mypage from '../Mypage';
import Tweet from '../../Components/Tweet';
import { dummyTweets } from '../../static/dummyData';

describe('Mypage.js Components', () => {
  test('Mypage 컴포넌트의 자식 컴포넌트로 Tweet, Footer 컴포넌트가 있어야 합니다.', () => {
    const mypageInstance = TestRenderer.create(
      <Mypage dummyTweets={dummyTweets.slice(0, 1)} />
    ).root;

    expect(mypageInstance.findByType(Tweet).type).toBe(Tweet);
    expect(mypageInstance.findByType(Footer).type).toBe(Footer);
  });
});

describe('Mypage 데이터 렌더링 테스트', () => {
  describe('kimcoding이 작성한 트윗이 한 개인 경우', () => {
    test('한 개의 트윗이 보여야 합니다.', () => {
      const { queryByText } = render(
        <Mypage dummyTweets={dummyTweets.slice(0, 1)} />
      );
      expect(queryByText('kimcoding')).toHaveTextContent(
        dummyTweets[0].username
      );
    });
  });

  describe('kimcoding이 작성한 트윗이 세 개인 경우', () => {
    test('세 개의 트윗이 보여야 합니다.', () => {
      const testTweets = [];

      let addIdx = 1;
      for (let i = 0; i < 3; i++) {
        testTweets.push(
          Object.assign({}, ...dummyTweets.slice(0, 1), { id: addIdx++ })
        );
      }
      const { queryAllByText } = render(<Mypage dummyTweets={testTweets} />);

      expect(queryAllByText('kimcoding')).toHaveLength(3);
    });
  });
});
