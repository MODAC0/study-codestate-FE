const request = require('supertest');
require('jest');

const app = require('../app');

describe('flight Router', () => {
  afterAll(() => {
    app.close();
  });

  test('GET /flight 요청은 파싱 가능한 JSON 문자열을 돌려줘야 합니다', function (done) {
    return request(app)
      .get('/flight')
      .then(res => {
        const isParsable = function (string) {
          try {
            JSON.parse(string);
            return true;
          } catch (e) {
            return false;
          }
        };
        expect(isParsable(res.text)).toEqual(true);
        done();
      });
  });

  test('GET /flight 요청의 응답은 배열의 형태여야 합니다', function (done) {
    return request(app)
      .get('/flight')
      .then(res => {
        const parsedBody = JSON.parse(res.text);
        expect(typeof parsedBody).toEqual('object');
        expect(Array.isArray(parsedBody)).toEqual(true);
        done();
      });
  });

  test('GET /flight 요청의 응답 객체는 `uuid, departure, destination, departure_times, arrival_times`를 포함해야 합니다', function (done) {
    return request(app)
      .get('/flight')
      .then(res => {
        const flight = JSON.parse(res.text);
        expect(flight[0]).toEqual({
          uuid: 'af6fa55c-da65-47dd-af23-578fdba40bed',
          departure: 'ICN',
          destination: 'CJU',
          departure_times: '2021-12-02T12:00:00',
          arrival_times: '2021-12-03T12:00:00'
        });
        done();
      });
  });

  test('GET /flight?departure_times=2021-12-03T12:00:00&arrival_times=2021-12-03T12:00:00를 입력하면 조건에 해당하는 객체를 리턴해야 합니다', function (done) {
    return request(app)
      .get('/flight?departure_times=2021-12-03T12:00:00&arrival_times=2021-12-03T12:00:00')
      .then(res => {
        const flight = JSON.parse(res.text);
        expect(flight[0]).toEqual({
          uuid: 'af6fa55c-da65-47dd-af23-578fdba40byd',
          departure: 'ICN',
          destination: 'PUS',
          departure_times: '2021-12-03T12:00:00',
          arrival_times: '2021-12-03T12:00:00'
        });
        expect(flight[1]).toEqual({
          uuid: 'af6fa55c-da65-47dd-af23-578fdba44bed',
          departure: 'ICN',
          destination: 'CJU',
          departure_times: '2021-12-03T12:00:00',
          arrival_times: '2021-12-03T12:00:00'
        });
        expect(flight[2]).toEqual({
          uuid: 'af6fa55c-da65-47dd-af23-578fdba41bed',
          departure: 'CJU',
          destination: 'ICN',
          departure_times: '2021-12-03T12:00:00',
          arrival_times: '2021-12-03T12:00:00'
        });
        done();
      });
  });

  test('GET /flight?departure=CJU&destination=ICN 을 입력하면 조건에 해당하는 객체를 리턴해야 합니다', function (done) {
    return request(app)
      .get('/flight?departure=CJU&destination=ICN')
      .then(res => {
        const flight = JSON.parse(res.text);
        expect(flight[0]).toEqual({
          uuid: 'af6fa55c-da65-47dd-af23-578fdba42bed',
          departure: 'CJU',
          destination: 'ICN',
          departure_times: '2021-12-03T12:00:00',
          arrival_times: '2021-12-04T12:00:00'
        });
        expect(flight[1]).toEqual({
          uuid: 'af6fa55c-da65-47dd-af23-578fdba41bed',
          departure: 'CJU',
          destination: 'ICN',
          departure_times: '2021-12-03T12:00:00',
          arrival_times: '2021-12-03T12:00:00'
        });
        expect(flight[2]).toEqual({
          uuid: 'af6fa55c-da65-47dd-af23-578fdba99bed',
          departure: 'CJU',
          destination: 'ICN',
          departure_times: '2021-12-03T12:00:00',
          arrival_times: '2021-12-04T12:00:00'
        });
        expect(flight[3]).toEqual({
          uuid: 'af6fa55c-da65-47dd-af23-578fdba50bed',
          departure: 'CJU',
          destination: 'ICN',
          departure_times: '2021-12-02T12:00:00',
          arrival_times: '2021-12-03T12:00:00'
        });
        done();
      });
  });

  test('GET /flight/:id 요청의 응답 객체는 `uuid, departure, destination, departure_times, arrival_times`를 포함해야 합니다', function (done) {
    return request(app)
      .get('/flight/af6fa55c-da65-47dd-af23-578fdba42bed')
      .then(res => {
        const flight = JSON.parse(res.text);
        expect(flight[0]).toEqual({
          uuid: 'af6fa55c-da65-47dd-af23-578fdba42bed',
          departure: 'CJU',
          destination: 'ICN',
          departure_times: '2021-12-03T12:00:00',
          arrival_times: '2021-12-04T12:00:00'
        });
        done();
      });
  });
});

describe('Book Router', () => {
  afterAll(() => {
    app.close();
  });

  test('GET /book 요청의 응답은 배열의 형태여야 합니다', function (done) {
    return request(app)
      .get('/book')
      .then(res => {
        const parsedBody = JSON.parse(res.text);
        expect(typeof parsedBody).toEqual('object');
        expect(Array.isArray(parsedBody)).toEqual(true);
        done();
      });
  });

  test('GET /book 요청은 파싱 가능한 JSON 문자열을 돌려줘야 합니다', function (done) {
    return request(app)
      .get('/book')
      .then(res => {
        const isParsable = function (string) {
          try {
            JSON.parse(string);
            return true;
          } catch (e) {
            return false;
          }
        };
        expect(isParsable(res.text)).toEqual(true);
        done();
      });
  });

  test('POST /book 요청시, flight_uuid, name, phone 데이터가 객체로 저장되어야 합니다', function (done) {
    return request(app)
      .post('/book')
      .send({
        flight_uuid: 'af6fa55c-da65-47dd-af23-578fdba44bed',
        name: '김코딩',
        phone: '010-1234-5678'
      })
      .then(() => {
        return request(app)
          .get('/book')
          .then(res => {
            const bookdata = JSON.parse(res.text);
            expect(bookdata[0]).toEqual({
              flight_uuid: 'af6fa55c-da65-47dd-af23-578fdba44bed',
              name: '김코딩',
              phone: '010-1234-5678'
            });
            done();
          });
      });
  });

  test('GET /book?flight_uuid=af6fa55c-da65-47dd-af23-578fdba50bed 요청은 특정 항공편에 대한 모든 예약 객체를 반환해야 합니다', function (done) {
    return request(app)
      .post('/book')
      .send({
        flight_uuid: 'af6fa55c-da65-47dd-af23-578fdba50bed',
        name: '최배열',
        phone: '010-4321-5678'
      })
      .then(() => {
        return request(app)
          .get('/book?flight_uuid=af6fa55c-da65-47dd-af23-578fdba50bed')
          .then(res => {
            const bookdata = JSON.parse(res.text);
            expect(bookdata[0]).toEqual({
              flight_uuid: 'af6fa55c-da65-47dd-af23-578fdba50bed',
              name: '최배열',
              phone: '010-4321-5678'
            });
            done();
          });
      });
  });

  test('GET /book?phone=010-1234-5678 요청은 번호에 해당하는 에약 내역을 반환해야 합니다', function (done) {
    return request(app)
      .get('/book?phone=010-1234-5678')
      .then(res => {
        const bookdata = JSON.parse(res.text);
        expect(bookdata).toEqual({
          flight_uuid: 'af6fa55c-da65-47dd-af23-578fdba44bed',
          name: '김코딩',
          phone: '010-1234-5678'
        });
        done();
      });
  });

  test('DELETE /book?phone=010-1234-5678 요청을 하면 예약 목록에서 파라미터 phone에 해당하는 데이터가 삭제되어야 합니다', function (done) {
    return request(app)
      .delete('/book?phone=010-1234-5678')
      .then(res => {
        const bookdata = JSON.parse(res.text);
        expect(bookdata.length).toEqual(1);
        done();
      });
  });
});

describe('Advanced Challenges', function () {
  afterAll(() => {
    app.close();
  });

  test('PUT /flight/:id 요청의 업데이트 된 객체를 반환해야 합니다', function (done) {
    return request(app)
      .put('/flight/af6fa55c-da65-47dd-af23-578fdba99bed')
      .send({
        departure: 'ICN',
        destination: 'CJU',
        departure_times: '2021-12-02T11:00:00',
        arrival_times: '2021-12-04T15:00:00'
      })
      .then(res => {
        const flight = JSON.parse(res.text);
        expect(flight).toEqual({
          uuid: 'af6fa55c-da65-47dd-af23-578fdba99bed',
          departure: 'ICN',
          destination: 'CJU',
          departure_times: '2021-12-02T11:00:00',
          arrival_times: '2021-12-04T15:00:00'
        });
        done();
      });
  });
});
