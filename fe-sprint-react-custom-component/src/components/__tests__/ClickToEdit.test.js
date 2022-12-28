import * as React from 'react';
import { cleanup, render, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { resq$ } from 'resq';

import { MyInput } from '../AdvancedChallenges/ClickToEdit';

describe('input 창 클릭 기능 테스트', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it('입력 가능 상태로 변경할 수 있는 onClick 이벤트 핸들러가 span 엘리먼트에 있어야 합니다.', () => {
    const { container } = render(<MyInput />);
    const handler = resq$('span', container).props.onClick;
    expect(typeof handler).toBe('function');
  });

  it('포커스가 제외되는 이벤트 onBlur의 핸들러가 input 엘리먼트에 있어야 합니다.', async () => {
    const { container } = render(<MyInput />);
    const textField = container.querySelector('span');
    await userEvent.click(textField);

    const input = container.querySelector('input');
    const handler = resq$('input', container).props.onBlur;
    expect(input).toBeTruthy();
    expect(typeof handler).toBe('function');
  });

  it('텍스트 영역을 클릭하면 입력 가능 상태로 변경되어야 합니다.', async () => {
    const { container } = render(<MyInput value='' handleValueChange={() => {}} />);
    const textField = container.querySelector('span');
    await userEvent.click(textField);
    const input = container.querySelector('input');
    expect(input).toBeTruthy();
  });

  it('입력 가능 상태일 때 변화가 감지되면 새로운 값을 설정하는 메소드가 실행되어야 합니다.', async () => {
    const { container } = render(<MyInput value='' handleValueChange={() => {}} />);
    const textField = container.querySelector('span');
    userEvent.click(textField);
    const input = container.querySelector('input');
    fireEvent.change(input, { target: { value: 'codestates' } });
    await waitFor(() => {
      expect(input.value).toBe('codestates');
    });
  });

  it('입력 가능 상태일 때 input이 아닌 다른 곳을 클릭하면 입력 불가 상태가 되어야 합니다.', async () => {
    const { container } = render(<MyInput value='' handleValueChange={() => {}} />);

    const textField = container.querySelector('span');
    await userEvent.click(textField);

    const inputView = container.querySelector('div');
    await userEvent.click(inputView);

    await waitFor(() => {
      const input = container.querySelector('input');
      const span = container.querySelector('span');
      expect(input).toBeFalsy();
      expect(span).toBeTruthy();
    });
  });

  it('입력 가능 상태일 때 input이 아닌 다른 곳을 클릭하면 input의 값이 span에 담겨야 합니다.', async () => {
    const useStateForName = jest.spyOn(React, 'useState');
    let fakeState = '';
    useStateForName.mockImplementation((init) => {
      fakeState = init;
      return [init, jest.fn().mockImplementation((newValue) => {
        if (typeof newValue === 'function') {
          fakeState = newValue(fakeState);
        } else {
          fakeState = newValue;
        }
      })];
    });

    const [init, setInput] = useStateForName('wow');

    const wrapper = jest.fn().mockImplementation((newValue) => {
      return setInput(newValue);
    });

    const { container } = render(<MyInput value={init} handleValueChange={wrapper} />);
    const textField = container.querySelector('span');
    await userEvent.click(textField);
    const input = container.querySelector('input');
    fireEvent.change(input, { target: { value: 'codestates' } });

    const inputView = container.querySelector('div');
    const handler = resq$('input', container).props.onBlur;
    expect(typeof handler).toBe('function');

    await userEvent.click(inputView);
    await waitFor(() => {
      const input = container.querySelector('input');
      expect(input).toBeFalsy();
      expect(typeof handler).toBe('function');
      expect(wrapper).toHaveBeenCalled();
      expect(fakeState).toBe('codestates');
    });
  });
});
