import {
  cleanup,
  fireEvent,
  render,
  waitFor,
  waitForElementToBeRemoved,
  configure,
} from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import '@testing-library/jest-dom/extend-expect';
import Search from '../pages/component/Search';
import Main from '../pages/Main';
import { resq$ } from 'resq';
import * as Api from '../api/FlightDataApi';
import nock from 'nock';
import { readFileSync } from 'fs';

configure({
  getElementError: (message, container) => {
    return new Error(message);
  },
});

console.error = function (msg) {
  if (
    msg
      .toString()
      .includes(
        'Warning: An update to Main inside a test was not wrapped in act'
      )
  ) {
    return () => {};
  } else {
    return console.error;
  }
};

describe('💡 Part 1: 항공권 목록 필터링', () => {
  describe('🧩 Main 컴포넌트에서 항공편을 조회합니다', () => {
    afterEach(() => {
      cleanup();
    });

    test('Main 컴포넌트 내 `search` 함수는 검색 조건을 담고 있는 상태 객체 `condition`을 업데이트해야 합니다', () => {
      const { getByTestId, container } = render(<Main />);
      act(() => {
        global.search({ departure: 'ICN', destination: 'CJU' });
      });

      const element = getByTestId('condition');
      expect(element.textContent).toBe(
        '{"departure":"ICN","destination":"CJU"}'
      );
    });
  });

  describe('🧩 Search 컴포넌트를 통해 상태 끌어올리기를 학습합니다', () => {
    const container = document.createElement('div');

    afterEach(() => {
      cleanup();
    });

    test('검색 화면이 Search 컴포넌트로 분리되어야 합니다', () => {
      const { container } = render(<Search />);
      expect(container.querySelector('#input-departure')).not.toBeNull();
      expect(container.querySelector('#input-destination')).not.toBeNull();
      expect(container.querySelector('#search-btn')).not.toBeNull();
    });

    test('Search 컴포넌트에는 상태 변경 함수 `search`가 `onSearch` props로 전달되어야 합니다', () => {
      const { container } = render(<Main />);
      const onSearch = resq$('Search', container).props.onSearch;

      expect(typeof onSearch).toBe('function');
      expect(onSearch.name).toBe('search');
    });

    test('상태 변경 함수 `search`는 Search 컴포넌트의 `검색` 버튼 클릭 시 실행되어야 합니다', () => {
      const searchFn = jest.fn();
      const { getByRole } = render(<Search onSearch={searchFn} />, {
        container,
      });
      const btn = getByRole('button', { name: '검색' });
      fireEvent.click(btn);

      expect(searchFn).toHaveBeenCalled();
    });
  });
});

describe('💡 Part 2: AJAX 요청', () => {
  describe('🧩 Side Effect는 useEffect에서 다뤄야 합니다', () => {
    afterEach(() => {
      cleanup();
    });

    test('검색 조건이 바뀔 때마다, FlightDataApi의 getFlight를 검색 조건과 함께 요청해야 합니다', (done) => {
      const getFlightSpy = jest.spyOn(Api, 'getFlight');

      const { getByRole, container } = render(<Main />);
      const btn = getByRole('button', { name: '검색' });
      const input = container.querySelector('#input-destination');

      fireEvent.change(input, { target: { value: 'CJU' } });
      fireEvent.click(btn);

      waitFor(() => {
        expect(getFlightSpy).toHaveBeenCalled();
        done();
      });
    });

    test('getFlight의 결과를 받아, flightList 상태를 업데이트해야 합니다', async () => {
      const { getByRole, queryAllByText, container } = render(<Main />);
      const btn = getByRole('button', { name: '검색' });
      const input = container.querySelector('#input-destination');

      fireEvent.change(input, { target: { value: 'CJU' } });
      fireEvent.click(btn);

      await waitFor(() => {
        expect(queryAllByText('🛬 CJU').length).toBe(5); // 도착지가 CJU이면, 결과가 다섯개입니다

        // 다른 도착지는 화면에 표시되지 않습니다
        expect(queryAllByText('🛬 BKK').length).toBe(0);
        expect(queryAllByText('🛬 PUS').length).toBe(0);
      });
    });

    test('더이상, 컴포넌트 내 필터 함수 `filterByCondition`를 사용하지 않습니다', () => {
      expect(
        Main.toString().split('return __jsx')[1].includes('filterByCondition')
      ).toBe(false);
    });

    test('더이상, 하드코딩된 flightList JSON을 사용하지 않습니다 (초기값은 빈 배열로 둡니다)', () => {
      // HINT: 주석 처리하지 말고, 해당 내용을 지워야 테스트에 통과합니다
      const file = readFileSync(__dirname + '/../pages/Main.js').toString();
      expect(
        file.includes("import json from '../resource/flightList'") ||
          file.includes('import json from "../resource/flightList"')
      ).toBe(false);
    });

    test('getFlight 요청이 다소 느리므로, 로딩 상태에 따라 LoadingIndicator 컴포넌트를 표시해야 합니다', async () => {
      const { getByRole, queryByAltText, container } = render(<Main />);
      const btn = getByRole('button', { name: '검색' });
      const input = container.querySelector('#input-destination');

      fireEvent.change(input, { target: { value: 'CJU' } });
      fireEvent.click(btn);

      expect(queryByAltText('now loading...')).not.toBeNull();
      await waitForElementToBeRemoved(() => queryByAltText('now loading...'));
    });
  });

  describe('🧩 FlightDataApi에서 기존 구현 대신, REST API를 호출하도록 바꿉니다', () => {
    test('검색 조건과 함께 StatesAirline 서버에서 항공편 정보를 요청(fetch)합니다', (done) => {
      const result = [
        {
          uuid: 'af6fa55c-da65-47dd-af23-578fdba40bod',
          departure: 'ICN',
          destination: 'CJU',
          departure_times: '2021-12-02T12:00:00',
          arrival_times: '2021-12-03T12:00:00',
        },
      ];

      const scope = nock(
        'http://ec2-13-124-90-231.ap-northeast-2.compute.amazonaws.com:81'
      )
        .persist()
        .get('/flight?departure=ICN&destination=CJU')
        .reply(200, result);

      Api.getFlight({ departure: 'ICN', destination: 'CJU' }).then((json) => {
        expect(json).toEqual(result);
        const ajaxCallCount = scope.interceptors[0].interceptionCounter;
        expect(ajaxCallCount).toEqual(1); // ajax call이 1회 발생
        expect(scope.interceptors[0].statusCode).toEqual(200);
        done();
      });
    });
  });
});
