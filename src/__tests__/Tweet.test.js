import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Tweet from '../Components/Tweet';
import dummyTweets from '../static/dummyData';

const tweetTest = {
  main() {
    const getRandomNumber = (min, max) => {
      return parseInt(Math.random() * (Number(max) - Number(min) + 2));
    };

    describe('각 트윗은', () => {
      const tweet = dummyTweets[0];

      test('트윗 저자의 프로필 사진이 있어야 합니다.', () => {
        const { container } = render(<Tweet tweet={tweet} />);
        const tweetEl = container.querySelector('.tweet');
        const imgs = container.querySelectorAll('img');
        const profileImg = Array.from(imgs).find((img) =>
          img.src.includes('https://randomuser.me/api/portraits')
        );

        expect(tweetEl).toContainElement(profileImg);
        expect(profileImg).toBeInTheDocument();
      });

      test('유져 이름이 있어야 합니다.', () => {
        const { container, queryByText } = render(<Tweet tweet={tweet} />);
        const tweetEl = container.querySelector('.tweet');
        const username = queryByText('kimcoding');

        expect(tweetEl).toContainElement(username);
        expect(username).toHaveClass('tweet__username');
      });

      test('트윗 생성 일자(yyyy. mm. dd.)가 있어야 합니다.', () => {
        const { container, queryByText } = render(<Tweet tweet={tweet} />);
        const tweetEl = container.querySelector('.tweet');
        const createdAt = queryByText('2019. 2. 25.');

        expect(tweetEl).toContainElement(createdAt);
        expect(createdAt).toHaveClass('tweet__createdAt');
      });

      test('트윗 메시지가 있어야 합니다.', () => {
        const { container, queryByText } = render(<Tweet tweet={tweet} />);
        const tweetEl = container.querySelector('.tweet');
        const tweetMessage = queryByText(
          /^모든 국민은 인간으로서의 존엄과 가치를 가지며,/g
        );

        expect(tweetEl).toContainElement(tweetMessage);
        expect(tweetMessage).toHaveClass('tweet__message');
      });
    });

    describe('dummyData 외 다른 트윗도 다룰 수 있어야 합니다.', () => {
      const id = getRandomNumber(0, 1000000).toString(16);
      const username = getRandomNumber(0, 1000000).toString(32);
      const content = getRandomNumber(0, 1000000).toString(36);
      const createdAt = new Date().toLocaleDateString('ko-KR');
      const updatedAt = new Date().toLocaleDateString('ko-KR');

      const tweet = {
        id,
        username,
        picture: `https://randomuser.me/api/portraits/women/${getRandomNumber(
          1,
          99
        )}.jpg`,
        title: 'new Tweet',
        content,
        createdAt,
        updatedAt,
      };

      test('트윗 저자의 프로필 사진이 있어야 합니다.', () => {
        const { container } = render(<Tweet tweet={tweet} />);
        const tweetEl = container.querySelector('.tweet');
        const imgs = container.querySelectorAll('img');
        const profileImg = Array.from(imgs).find((img) =>
          img.src.includes('https://randomuser.me/api/portraits')
        );

        expect(tweetEl).toContainElement(profileImg);
        expect(profileImg).toBeInTheDocument();
      });

      test('유져 이름이 있어야 합니다.', () => {
        const { container, queryByText } = render(<Tweet tweet={tweet} />);
        const tweetEl = container.querySelector('.tweet');
        const usernameEl = queryByText(username);

        expect(tweetEl).toContainElement(usernameEl);
        expect(usernameEl).toHaveClass('tweet__username');
      });

      test('트윗 생성 일자(yyyy. mm. dd.) 가 있어야 합니다.', () => {
        const { container, queryByText } = render(<Tweet tweet={tweet} />);
        const tweetEl = container.querySelector('.tweet');
        const createdAtEl = queryByText(createdAt);

        expect(tweetEl).toContainElement(createdAtEl);
        expect(createdAtEl).toHaveClass('tweet__createdAt');
      });

      test('트윗 메시지가 있어야 합니다.', () => {
        const { container, queryByText } = render(<Tweet tweet={tweet} />);
        const tweetEl = container.querySelector('.tweet');
        const tweetMessage = queryByText(content);

        expect(tweetEl).toContainElement(tweetMessage);
        expect(tweetMessage).toHaveClass('tweet__message');
      });
    });
  },
};

export default tweetTest;
