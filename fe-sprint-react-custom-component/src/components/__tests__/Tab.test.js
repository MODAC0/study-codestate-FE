import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { resq$ } from 'resq';

import { Tab } from '../BareMinimumRequirements/Tab';

describe('Tab Menu는 map을 이용한 반복을 통해 보여야 합니다.', () => {
  afterAll(() => {
    cleanup();
  });

  it('ul 엘리먼트 아래에는 li 엘리먼트가 3개 있어야 합니다.', () => {
    const { container } = render(<Tab />);
    expect(container.querySelectorAll('ul > li').length).toBe(3);
  });
});

describe('Tab Menu 조작을 위한 currentTab 상태가 존재해야 합니다.', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup()
  });

  it('currentTab 초기값은 0번째 인덱스여야 합니다.', () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    const initialValues = [];
    useStateSpy.mockImplementation((init) => {
      initialValues.push(init);
      return [init, setState];
    });

    render(<Tab />);
    expect(useStateSpy).toBeCalled();
    expect(initialValues).toEqual(expect.arrayContaining([0])); // 상태의 초기값이 0번째 인덱스여야 합니다.
    useStateSpy.mockRestore();
  });
});

describe('Tab Menu를 클릭하면 currentTab 상태가 변경되어야 합니다.', () => {
  afterEach(() => {
    cleanup()
  });

  it('Tab 메뉴를 클릭하면 selectMenuHandler 함수가 실행되고, 해당 Tab 메뉴의 index 값이 인자로 전달됩니다', () => {
    const { container } = render(<Tab />);

    const handler = resq$('li', container).props.onClick;
    expect(typeof handler).toBe('function'); // <li> 엘리먼트 클릭시 이벤트 핸들러가 존재합니다
    expect(handler.toString()).toMatch('selectMenuHandler');
  });

  it('클릭한 Tab 메뉴만 className 이 "submenu focused"로 변경됩니다.', () => {
    const { container } = render(<Tab />);

    userEvent.click(container.querySelectorAll('li')[1]); // 1번째 li를 클릭하면
    expect(container.querySelectorAll('li')[1].className).toEqual(
      'submenu focused'
    ); // 현재 선택된 메뉴 클래스명이 변경됩니다.

    userEvent.click(container.querySelectorAll('li')[2]); // 2번째 li를 클릭하면
    expect(container.querySelectorAll('li')[1].className).toEqual('submenu');
    // 1번째 li의 클래스명은 submenu 로 변경됩니다.
    expect(container.querySelectorAll('li')[2].className).toEqual(
      'submenu focused'
    ); // 현재 선택된 메뉴 클래스명이 변경됩니다.
  });
});
