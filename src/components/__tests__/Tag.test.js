import {
  cleanup,
  fireEvent,
  render,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Tag } from '../BareMinimumRequirements/Tag';
import { resq$, resq$$ } from 'resq';

const tags = ['CodeStates', 'kimcoding'];

describe('Enter 키 테스트', () => {
  afterEach(() => {
    cleanup();
  });

  it('새로운 태그를 추가하는 기능은 Enter 키에 의해 실행되어야 합니다.', () => {
    const { container } = render(<Tag />);
    const { props } = resq$('input', container);
    expect(props.onKeyUp).toBeTruthy();
  });

  it('Enter 키를 누르면 tag 를 추가하는 addTags 함수가 실행되어야 합니다.', () => {
    const { container } = render(<Tag />);
    const handler = resq$('input', container).props.onKeyUp;

    expect(typeof handler).toBe('function');
    expect(handler.toString()).toMatch('addTags');
  });

  it('Enter키를 누르면 실제 태그가 추가되어야 합니다.', async () => {
    const { queryAllByRole, container } = render(<Tag />);
    const input = container.querySelector('input');

    expect(input).toBeTruthy();

    userEvent.type(input, 'kimcoding');
    fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' });
    await waitFor(() => {
      expect(queryAllByRole('listitem').length).toBeGreaterThan(1);
    });

    await waitFor(() => {
      const tagLength = queryAllByRole('listitem').length;
      expect(
        queryAllByRole('listitem')[tagLength - 1].textContent.slice(0, 9)
      ).toBe(input.value);
    });
  });

  it('아무것도 입력하지 않은 경우, Enter를 눌러도 태그가 추가되지 않아야 합니다.', async () => {
    const { queryAllByRole, container } = render(<Tag />);
    const input = container.querySelector('input');

    expect(input).toBeTruthy();

    userEvent.type(input, '');
    fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' });
    await waitFor(() => {
      expect(queryAllByRole('listitem').length).toBe(2);
    });
  });

  it('중복된 값이 이미 존재하는 경우, Enter를 눌러도 태그가 추가되지 않아야 합니다.', async () => {
    const { queryAllByRole, container } = render(<Tag />);
    const input = container.querySelector('input');

    expect(input).toBeTruthy();

    userEvent.type(input, 'kimcoding');
    fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' });
    await waitFor(() => {
      expect(queryAllByRole('listitem').length).toBe(2);
    });
  });

  it('새로운 태그가 추가되면 입력창은 초기화되어야 합니다.', async () => {
    const { container } = render(<Tag />);
    const input = container.querySelector('input');
    expect(input).toBeTruthy();

    await fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' });
    await waitFor(() => {
      expect(input.value).toBe('');
    });
  });
});

describe('tags의 화면 출력과 제거 기능 테스트', () => {
  afterEach(() => {
    cleanup();
  });

  it('tags 배열의 모든 태그가 화면에 보여져야 합니다.', () => {
    const { getAllByRole } = render(<Tag />);
    expect(getAllByRole('listitem')).toHaveLength(tags.length);
  });

  it('tag 를 삭제할 수 있는 아이콘(x)이 있어야 하며, 해당 아이콘(x)을 클릭하면 removeTags 함수가 실행되어야 합니다.', () => {
    const { container } = render(<Tag />);
    const spans = resq$$('span', container);
    const { node, props } = spans.find(
      (span) => span.props.className === 'tag-close-icon'
    );
    const handler = props.onClick;

    expect(node).toBeTruthy();
    expect(typeof handler).toBe('function');
    expect(handler.toString()).toMatch('removeTags');
  });

  it('삭제 아이콘을 누르면 화면에서 Tag가 삭제되어야 합니다.', async () => {
    const { container, queryAllByRole } = render(<Tag />);
    const closeIcon = container.querySelector('.tag-close-icon');
    expect(closeIcon).toBeTruthy();

    await userEvent.click(closeIcon);
    await waitFor(() => {
      expect(queryAllByRole('listitem').length).toBeLessThan(2);
    });
  });
});
