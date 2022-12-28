import React from 'react';
import { cleanup, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { resq$ } from 'resq';

import { Autocomplete } from '../AdvancedChallenges/Autocomplete';

describe('input 기능 테스트', () => {
  afterAll(() => {
    cleanup();
  });

  it('input 엘리먼트에 onChange 이벤트 핸들러가 불려와야 합니다.', () => {
    const { container } = render(<Autocomplete />);
    const handler = resq$('input', container).props.onChange;
    expect(typeof handler).toBe('function');
  });

  it('input 값을 삭제할 수 있는 버튼이 있어야 합니다.', () => {
    const { container } = render(<Autocomplete />);
    const deleteButton = container.querySelector('.delete-button');
    expect(deleteButton).toBeTruthy();
  });

  it('삭제 버튼 클릭 시 input value가 삭제되어야 합니다.', async () => {
    const { container } = render(<Autocomplete />);
    const input = container.querySelector('input');
    const deleteButton = container.querySelector('.delete-button');
    expect(deleteButton).toBeTruthy();

    await userEvent.type(input, 'codestates');
    await userEvent.click(deleteButton);
    await waitFor(() => {
      expect(input.value).toBe('');
    });
  });
});

describe('drop down 기능 테스트', () => {
  afterEach(() => {
    cleanup();
  });

  it('input 값이 포함 된 자동 완성 추천 drop down 리스트가 보여야 합니다.', () => {
    const { queryAllByRole } = render(<Autocomplete />);
    const dropDownItems = queryAllByRole('listitem');
    expect(dropDownItems).toBeTruthy();
  });

  it('drop down 항목을 마우스로 클릭 시, input 값 변경에 따라 drop down 목록이 변경되어야 합니다.', async () => {
    const { queryAllByRole, container } = render(<Autocomplete />);
    const input = container.querySelector('input');
    userEvent.type(input, 'a');
    await waitFor(() => {
      expect(queryAllByRole('listitem').length).toBeGreaterThan(0);
    });
    userEvent.click(queryAllByRole('listitem')[0]);
    await waitFor(() => {
      expect(queryAllByRole('listitem')[0].textContent).toBe(input.value);
    });
  });

  it('drop down 항목을 마우스로 클릭 시, input 값이 변경되어야 합니다.', async () => {
    const { queryAllByRole, container } = render(<Autocomplete />);
    const input = container.querySelector('input');
    userEvent.type(input, 'a');
    await waitFor(() => {
      expect(queryAllByRole('listitem').length).toBeGreaterThan(0);
    });
    userEvent.click(queryAllByRole('listitem')[0]);
    await waitFor(() => {
      expect(queryAllByRole('listitem')[0].textContent).toBe(input.value);
    });
  });

  it('drop down 항목을 마우스로 클릭 시, input 값이 이미 있어도 input 값이 drop down 항목의 값으로 변경되어야 합니다.', async () => {
    const { queryAllByRole, container } = render(<Autocomplete />);
    const input = container.querySelector('input');
    userEvent.type(input, 'a');
    await waitFor(() => {
      expect(queryAllByRole('listitem').length).toBeGreaterThan(0);
    });
    userEvent.click(queryAllByRole('listitem')[0]);
    await waitFor(() => {
      expect(queryAllByRole('listitem')[0].textContent).toBe(input.value);
    });
  });

  // it.todo('input값이 있고, focus가 있을 때 drop down 항목을 키보드 화살표 입력으로 전환할 수 있어야 합니다')
  // it.todo('drop down 항목의 focus를 키보드 화살표 입력으로 전환할 수 있어야 합니다.')
  // it.todo('키보드 엔터 입력 시 focus된 drop down 항목이 input 값으로 변경되어야 합니다.')
});
