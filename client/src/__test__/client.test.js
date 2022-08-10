import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom';
import App from '../App';

const LOCAL_SERVER = 'https://localhost:4000';
const userInfo = {
  id: '0',
  userId: 'kimcoding',
  password: '1234',
  email: 'kimcoding@authstates.com',
  name: '김코딩',
  position: 'Frontend Developer',
  location: 'Seoul, South Korea',
  bio: '경제적, 사회적 배경에 상관없이 누구나 잠재력을 발휘할 수 있도록 현장에 필요한 교육을 제공합니다.',
};

const server = setupServer(
  rest.post(`${LOCAL_SERVER}/login`, (req, res, ctx) => {
    const { userId, password } = req.body.loginInfo;
    if (userId !== 'kimcoding' || password !== '1234') {
      return res(ctx.status(401), ctx.body('Not Authorized'));
    }
    return res(ctx.cookie('cookieId', '0'), ctx.json(userInfo));
  }),
  rest.post(`${LOCAL_SERVER}/logout`, (req, res, ctx) => {
    return res(ctx.cookie('cookieId', 'null'), ctx.status(205));
  }),
  rest.get(`${LOCAL_SERVER}/userinfo`, (req, res, ctx) => {
    const { cookieId } = req.cookies;

    if (cookieId === '0') {
      return res(ctx.json(userInfo));
    }
    return res(ctx.status(401), ctx.body('Not Authorized'));
  })
);

describe('Auth - Client', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('🧩 유저 정보가 충분하지 않은 상태에서 로그인 버튼을 누를 시 에러메시지가 나타나야 합니다.', async () => {
    render(<App />);
    const idInput = screen.queryByTestId('id-input');
    const loginBtn = screen.queryByText('LOGIN');

    userEvent.type(idInput, 'kimcoding');
    userEvent.click(loginBtn);

    const alertMessage = await screen.findByTestId('alert-message');
    expect(alertMessage).toBeInTheDocument();
    expect(alertMessage).toHaveTextContent('아이디와 비밀번호를 입력하세요');
  });
  test('🧩 로그인 버튼 클릭 시 성공적으로 로그인되어야 합니다.', async () => {
    render(<App />);
    const idInput = screen.getByTestId('id-input');
    const passwordInput = screen.getByTestId('password-input');
    const loginBtn = screen.getByText('LOGIN');

    userEvent.type(idInput, 'kimcoding');
    userEvent.type(passwordInput, '1234');
    userEvent.click(loginBtn);

    const logoutBtn = await screen.findByText('LOGOUT');
    expect(loginBtn).not.toBeInTheDocument();
    expect(logoutBtn).toBeInTheDocument();
  });
  test('🧩 로그아웃 버튼 클릭 시 성공적으로 로그아웃되어야 합니다.', async () => {
    render(<App />);
    const idInput = screen.getByTestId('id-input');
    const passwordInput = screen.getByTestId('password-input');
    const loginBtn = screen.getByText('LOGIN');

    userEvent.type(idInput, 'kimcoding');
    userEvent.type(passwordInput, '1234');
    userEvent.click(loginBtn);

    const logoutBtn = await screen.findByText('LOGOUT');
    userEvent.click(logoutBtn);

    const checkbox = await screen.findByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });
  test('🧩 존재하지 않는 유저의 정보로 로그인할 시 에러메시지가 나타나야 합니다.', async () => {
    render(<App />);
    const idInput = screen.getByTestId('id-input');
    const passwordInput = screen.getByTestId('password-input');
    const loginBtn = screen.getByText('LOGIN');

    userEvent.type(idInput, 'parkhacker');
    userEvent.type(passwordInput, 'malicious');
    userEvent.click(loginBtn);

    const alertMessage = await screen.findByTestId('alert-message');
    expect(alertMessage).toBeInTheDocument();
    expect(alertMessage).toHaveTextContent('로그인에 실패했습니다.');
  });
});
