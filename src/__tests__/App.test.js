import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import TestRenderer from 'react-test-renderer';
import { resq$, resq$$ } from 'resq'
import { access } from 'fs/promises';
import { join } from 'path';

import tweetTest from './Tweet.test.js';
import aboutTest from './About.test.js';
import myPageTest from './MyPage.test.js';
import tweetsTest from './Tweets.test.js';

import App from '../App';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import Tweets from '../Pages/Tweets';
import MyPage from '../Pages/MyPage';
import About from '../Pages/About';

import dummyTweets from '../static/dummyData';

let ReactRouterDom;

describe('App.js React Router 설치', () => {
  test('react-router-dom을 npm 으로 설치해야 합니다. (react-router-dom)', async () => {
    let isReactRouterDomInstalled = false;
    const defaultPath = join(process.cwd(), 'node_modules', 'react-router-dom');

    try {
      ReactRouterDom = await import('react-router-dom');
      await access(join(defaultPath));
      isReactRouterDomInstalled = true;
    } catch (e) {
      console.log('react-router-dom is not installed');
    }

    expect(isReactRouterDomInstalled).toBe(true);
  });
});

describe('Sidebar.js Sidebar 컴포넌트', () => {
  afterAll(() => {
    cleanup();
  });

  test('Font Awesome을 이용한 Tweets 메뉴 아이콘이 있어야 합니다.(className : ".far .fa-comment-dots")', () => {
    const { BrowserRouter } = ReactRouterDom;
    const { container } = render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );
    const commentIcon = container.querySelector('.far.fa-comment-dots');

    expect(commentIcon).not.toBeNull();
    expect(commentIcon).toBeInstanceOf(HTMLElement);
    expect(commentIcon.tagName).toBe('I');
  });

  test('Font Awesome을 이용한 About 메뉴 아이콘이 있어야 합니다.(className : ".far .fa-question-circle")', () => {
    const { BrowserRouter } = ReactRouterDom;
    const { container } = render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );

    const aboutIcon = container.querySelector('.far.fa-question-circle');

    expect(aboutIcon).not.toBeNull();
    expect(aboutIcon).toBeInstanceOf(HTMLElement);
    expect(aboutIcon.tagName).toBe('I');
  });

  test('Font Awesome을 이용한 MyPage 메뉴 아이콘이 있어야 합니다.(className : ".far .fa-user")', () => {
    const { BrowserRouter } = ReactRouterDom;
    const { container } = render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );

    const mypageIcon = container.querySelector('.far.fa-user');

    expect(mypageIcon).not.toBeNull();
    expect(mypageIcon).toBeInstanceOf(HTMLElement);
    expect(mypageIcon.tagName).toBe('I');
  });
});

describe('Footer.js Footer 컴포넌트', () => {
  afterAll(() => {
    cleanup();
  });

  test('Footer 컴포넌트의 후손 엘리먼트로 시멘틱 엘리먼트 footer가 있어야 합니다.', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');

    expect(footer).toBeInTheDocument();
    expect(footer).toBeInstanceOf(HTMLElement);
    expect(footer.tagName).toBe('FOOTER');
  });
});

describe('Tweet.js Tweet 컴포넌트', () => {
  tweetTest.main();
  cleanup();
});

describe('About.js About 컴포넌트', () => {
  aboutTest.main();
  cleanup();
});

describe('MyPage.js MyPage 컴포넌트', () => {
  myPageTest.main();
  cleanup();
});

describe('Tweets.js Tweets 컴포넌트', () => {
  tweetsTest.main(Tweets);
  cleanup();
});
describe('App.js React Router 컴포넌트 적용', () => {
  test('Route path가 "/" 인 Tweets 컴포넌트가 있어야 합니다.', () => {
    const { Switch } = ReactRouterDom;
    const rootPath = '/';
    const appInstance = TestRenderer.create(<App />).root;

    const hasPath = appInstance
      .findByType(Switch)
      .props.children.filter((child) => child.props.path === rootPath);

    expect(hasPath.length).toBeGreaterThan(0);
    expect(hasPath[0].props.path).toBe(rootPath);
    expect(hasPath[0].props.children.type).toBe(Tweets);
  });

  test('Route path가 "/about" 인 About 컴포넌트가 있어야 합니다.', () => {
    const { Switch } = ReactRouterDom;
    const aboutPath = '/about';
    const appInstance = TestRenderer.create(<App />).root;

    const hasPath = appInstance
      .findByType(Switch)
      .props.children.filter((child) => child.props.path === aboutPath);

    expect(hasPath.length).toBeGreaterThan(0);
    expect(hasPath[0].props.path).toBe(aboutPath);
    expect(hasPath[0].props.children.type).toBe(About);
  });

  test('Route path가 "/mypage" 인 MyPage 컴포넌트가 있어야 합니다.', () => {
    const { Switch } = ReactRouterDom;
    const myPagePath = '/mypage';
    const appInstance = TestRenderer.create(<App />).root;

    const hasPath = appInstance
      .findByType(Switch)
      .props.children.filter((child) => child.props.path === myPagePath);

    expect(hasPath.length).toBeGreaterThan(0);
    expect(hasPath[0].props.path).toBe(myPagePath);
    expect(hasPath[0].props.children.type).toBe(MyPage);
  });

  test('React Router의 Link 컴포넌트가 3개 있어야 합니다.', () => {
    const { BrowserRouter, Link } = ReactRouterDom;
    const sidebarInstance = TestRenderer.create(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    ).root;

    expect(sidebarInstance.findAllByType(Link)).toHaveLength(3);
  });

  test('Tweets 아이콘의 Link 컴포넌트는 "/" 로 연결되어야 합니다.', () => {
    const { BrowserRouter, Link } = ReactRouterDom;
    const sidebarInstance = TestRenderer.create(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    ).root;
    const rootPath = '/';

    const linkInstanceWithRootPath = Array.from(
      sidebarInstance.findByType(Sidebar).findAllByType(Link)
    ).find((child) => child.props.to === rootPath);

    expect(linkInstanceWithRootPath).toBeTruthy();
    expect(linkInstanceWithRootPath.type).toBe(Link);
    expect(linkInstanceWithRootPath.findByType('i')).toBeTruthy();
    expect(linkInstanceWithRootPath.findByType('i').props.className.includes("far fa-comment-dots")).toBeTruthy();
  });

  test('About 아이콘의 Link 컴포넌트는 "/about" 로 연결되어야 합니다.', () => {
    const { BrowserRouter, Link } = ReactRouterDom;
    const sidebarInstance = TestRenderer.create(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    ).root;
    const aboutPath = '/about';

    const linkInstanceWithSidebarPath = Array.from(
      sidebarInstance.findByType(Sidebar).findAllByType(Link)
    ).find((child) => child.props.to === aboutPath);

    expect(linkInstanceWithSidebarPath).toBeTruthy();
    expect(linkInstanceWithSidebarPath.type).toBe(Link);
    expect(linkInstanceWithSidebarPath.findByType('i')).toBeTruthy();
    expect(linkInstanceWithSidebarPath.findByType('i').props.className.includes("far fa-question-circle")).toBe(true);
  });

  test('MyPage 아이콘의 Link 컴포넌트는 "/mypage" 로 연결되어야 합니다.', () => {
    const { BrowserRouter, Link } = ReactRouterDom;
    const sidebarInstance = TestRenderer.create(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    ).root;
    const myPageLink = '/mypage';

    const linkInstanceWithMyPageLink = Array.from(
      sidebarInstance.findByType(Sidebar).findAllByType(Link)
    ).find((child) => child.props.to === myPageLink);

    expect(linkInstanceWithMyPageLink).toBeTruthy();
    expect(linkInstanceWithMyPageLink.type).toBe(Link);
    expect(linkInstanceWithMyPageLink.findByType('i')).toBeTruthy();
    expect(linkInstanceWithMyPageLink.findByType('i').props.className.includes("far fa-user")).toBe(true);
  });
});

describe('React Router로 SPA 구현하기', () => {
  afterAll(() => {
    cleanup();
  });

  test('처음 접속 시, URL path가 "/" 이여야 합니다.', async () => {
    const { Route } = ReactRouterDom;
    const rootPath = '/';
    const routeInstance = TestRenderer.create(<App />).root;

    expect(routeInstance.findByType(Route).props.exact).toBe(true);
    expect(routeInstance.findByType(Route).props.path).toBe(rootPath);
    expect(location.pathname).toBe(rootPath);
  });

  test('About 메뉴를 누르면 URL path가 /about으로 라우트 되어야 합니다.', async () => {
    const { Route } = ReactRouterDom;
    const aboutPath = '/about';
    const { container } = render(<App />);

    const aboutIcon = container.querySelector('.far.fa-question-circle');
    userEvent.click(aboutIcon);

    const routeInstance = TestRenderer.create(<App />).root;

    expect(routeInstance.findByType(Route).props.path).toBe(aboutPath);
    expect(location.pathname).toBe(aboutPath);
  });

  test('MyPage 메뉴를 누르면 URL path가 /mypage로 라우트 되어야 합니다.', async () => {
    const { Route } = ReactRouterDom;
    const myPagePath = '/mypage';
    const { container } = render(<App />);

    const mypageIcon = container.querySelector('.far.fa-user');
    userEvent.click(mypageIcon);

    const routeInstance = TestRenderer.create(<App />).root;

    expect(routeInstance.findByType(Route).props.path).toBe(myPagePath);
    expect(location.pathname).toBe(myPagePath);
  });
});

describe('Tweets.js 트윗 전송 폼 테스트', () => {
  afterAll(() => {
    cleanup();
  });

  test('유저 이름을 작성할 수 있는 input 엘리먼트가 있어야 합니다. (className : "tweetForm__input--username")', () => {
    const { queryAllByRole } = render(<Tweets />);
    const textboxes = queryAllByRole('textbox');
    const input = textboxes.find(textbox => textbox.tagName === "INPUT" && textbox.classList.contains('tweetForm__input--username'))
    expect(input).toBeInTheDocument();
    expect(input.type).toBe('text');
    // expect(input.placeholder).toBeTruthy();
    expect(input).toHaveClass('tweetForm__input--username', { exact: true });
  });

  test('트윗을 작성할 수 있는 textarea 엘리먼트가 있어야 합니다. (className : "tweetForm__input--message")', () => {
    const { queryAllByRole } = render(<Tweets />);
    const textboxes = queryAllByRole('textbox');
    const textarea = textboxes.find(textbox => textbox.tagName === "TEXTAREA" && textbox.classList.contains('tweetForm__input--message'))
    expect(textarea).toBeInTheDocument();
    // expect(textarea.placeholder).toBeTruthy();
    expect(textarea).toHaveClass('tweetForm__input--message', { exact: true });
  });

  test('트윗을 전송할 수 있는 button 엘리먼트가 있어야 합니다. (className : "tweetForm__submitButton")', () => {
    const { container } = render(<Tweets />);
    const submitButton = container.querySelector('.tweetForm__submitButton');
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveTextContent('Tweet');
  });

  test('<input>의 값이 변경될 때 onChange 이벤트 핸들러가 불려야 합니다.', () => {
    const { container } = render(<Tweets />);
    const { node, props } = resq$('input', container)

    expect(node).toHaveClass('tweetForm__input--username');
    expect(props.onChange).toBeTruthy();
  })

  test('<textarea>의 값이 변경될 때 onChange 이벤트 핸들러가 불려야 합니다.', () => {
    const { container } = render(<Tweets />);
    const { node, props } = resq$('textarea', container)

    expect(node).toHaveClass('tweetForm__input--message');
    expect(props.onChange).toBeTruthy();
  })

  test('<button>의 값이 변경될 때 onClick 이벤트 핸들러가 불려야 합니다.', () => {
    const { container } = render(<Tweets />);
    const buttons = resq$$('button', container)
    const { node, props } = buttons.find(button => button.props.className === 'tweetForm__submitButton')

    expect(node).toHaveClass('tweetForm__submitButton');
    expect(props.onClick).toBeTruthy();
  })

  describe('유저 이름과 트윗을 작성하고, 트윗 버튼을 누르면 새로운 트윗이 추가되어야 합니다.', () => {
    test('기존 dummyTweets를 모두 보여줘야 합니다.', () => {
      const { queryByText } = render(<Tweets />);
      for (let i = 0; i < dummyTweets.length; i += 1) {
        expect(queryByText(dummyTweets[i].content)).toBeInTheDocument();
      }
    });

    test('새로 추가된 트윗을 포함하여 보여줘야 합니다.', () => {
      const { queryByText, container, queryAllByRole } = render(
        <Tweets />
      );

      const textboxes = queryAllByRole('textbox');
      const input = textboxes.find(textbox => textbox.tagName === "INPUT" && textbox.classList.contains('tweetForm__input--username'));
      const textarea = textboxes.find(textbox => textbox.tagName === "TEXTAREA" && textbox.classList.contains('tweetForm__input--message'));

      const submitButton = container.querySelector('.tweetForm__submitButton');
      const username = 'codestates!';
      const msg = 'education for real world!';

      fireEvent.change(input, { target: { value: username } });
      fireEvent.change(textarea, {
        target: { value: msg },
      });
      fireEvent.click(submitButton);
      userEvent.clear(textarea);

      expect(queryByText(msg)).toBeInTheDocument();
      for (let i = 0; i < dummyTweets.length; i += 1) {
        expect(queryByText(dummyTweets[i].content)).toBeInTheDocument();
      }
    });

    test('새로 추가된 트윗이 최 상단에 위치하여야 합니다.', () => {
      const { queryByText, container, queryAllByRole } = render(
        <Tweets />
      );

      const textboxes = queryAllByRole('textbox');
      const input = textboxes.find(textbox => textbox.tagName === "INPUT" && textbox.classList.contains('tweetForm__input--username'));
      const textarea = textboxes.find(textbox => textbox.tagName === "TEXTAREA" && textbox.classList.contains('tweetForm__input--message'));

      const submitButton = container.querySelector('.tweetForm__submitButton');
      const username = 'codestates!';
      const msg = 'education for real world!';

      fireEvent.change(input, { target: { value: username } });
      fireEvent.change(textarea, {
        target: { value: msg },
      });
      fireEvent.click(submitButton);
      userEvent.clear(textarea);

      const selectedTweets = container.querySelectorAll('.tweet__message');
      expect(selectedTweets[0]).toBe(queryByText(msg));
    });
  });
});
