import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TestRenderer from 'react-test-renderer';

import Footer from '../Footer';
import MyPage from '../Pages/MyPage';
import Tweet from '../Components/Tweet';
import dummyTweets from '../static/dummyData';

const myPageTest = {
  main() {
    test('주어진 트윗 목록(dummyTweets) 중 현재 유저인 parkhacker의 트윗만 보여야 합니다.', () => {
      const { queryByText } = render(<MyPage dummyTweets={[]} />);
      expect(
        queryByText(
          /형사피고인은 유죄의 판결이 확정될 때까지는 무죄로 추정된다./g
        )
      ).toBeInTheDocument();
    });

    test('MyPage 컴포넌트의 자식인 Tweet 컴포넌트에 props로 각 트윗의 정보(dummyTweets의 요소)가 전달되어야 합니다.', () => {
      const mypageInstance = TestRenderer.create(<MyPage dummyTweets={[]} />)
        .root;
      expect(mypageInstance.findByType(Tweet).props.tweet).toBe(dummyTweets[1]);
    });

    test('MyPage 컴포넌트의 자식 컴포넌트로 Footer 컴포넌트가 있어야 합니다.', () => {
      const mypageInstance = TestRenderer.create(<MyPage dummyTweets={[]} />)
        .root;
      expect(mypageInstance.findByType(Footer).type).toBe(Footer);
    });
  },
};

export default myPageTest;
