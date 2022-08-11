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
    const props = ['uuid', 'departure', 'destination', 'departure_times', 'arrival_times'];
    return request(app)
      .get('/flight')
      .then(res => {
        const flight = JSON.parse(res.text);
        const keys = Object.keys(flight[0])
        const hasAllKeys = props.every(prop => keys.includes(prop))
        expect(hasAllKeys).toEqual(true)
        done();
      });
  });

  test('GET /flight?departure_times=2021-12-03T12:00:00&arrival_times=2021-12-03T12:00:00를 입력하면 조건에 해당하는 객체를 응답으로 보냅니다', function (done) {
    return request(app)
      .get('/flight?departure_times=2021-12-03T12:00:00&arrival_times=2021-12-03T12:00:00')
      .then(res => {
        const flights = JSON.parse(res.text);
        const departure_times = '2021-12-03T12:00:00';
        const arrival_times = '2021-12-03T12:00:00';
        const hasAllRightTimes = flights.every(flight => flight.departure_times === departure_times && flight.arrival_times === arrival_times);
        expect(hasAllRightTimes).toEqual(true)
        done();
      });
  });

  test('GET /flight?departure=CJU&destination=ICN 을 입력하면 조건에 해당하는 객체를 응답으로 보냅니다', function (done) {
    return request(app)
      .get('/flight?departure=CJU&destination=ICN')
      .then(res => {
        const flights = JSON.parse(res.text);
        const departure = 'CJU';
        const destination = 'ICN';
        const hasAllRightPlace = flights.every(flight => flight.departure === departure && flight.destination === destination);
        expect(hasAllRightPlace).toEqual(true);
        done();
      });
  });


  test('GET /flight/:uuid 요청의 응답 객체는 `uuid, departure, destination, departure_times, arrival_times`를 포함해야 합니다', function (done) {
    const props = ['uuid', 'departure', 'destination', 'departure_times', 'arrival_times'];
    return request(app)
      .get('/flight/af6fa55c-da65-47dd-af23-578fdba42bed')
      .then(res => {
        const flights = JSON.parse(res.text);
        const keys = Object.keys(flights[0]);
        const hasAllKeys = props.every(prop => keys.includes(prop));
        expect(hasAllKeys).toEqual(true)
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


  test('POST /book 요청시, uuid, name, phone 데이터가 booking 배열에 객체 형태로 저장되어야 합니다.', function (done) {
    const data = {
      booking_uuid: "1c69bd78-9404-4138-9e01-9b66db9d65ff",
      flight_uuid: 'af6fa55c-da65-47dd-af23-578fdba44bed',
      name: '김코딩',
      phone: '010-1234-5678'
    };
    return request(app)
      .post('/book')
      .send(data)
      .then(() => {
        return request(app)
          .get('/book')
          .then(res => {
            const bookdata = JSON.parse(res.text);
            const keys = Object.keys(data)
            const hasAllKeys = keys.every(key => Object.keys(bookdata[0]).includes(key));
            expect(hasAllKeys).toEqual(true)
            done();
          });
      });
  });
  
  test('GET /book/:phone 요청은 특정 예약자 전화번호에 대한 예약 데이터를 응답으로 보냅니다', function (done) {
    const data = {
      flight_uuid: 'af6fa55c-da65-47dd-af23-578fdba50bed',
      name: '최배열',
      phone: '010-4321-5678'
    }
    return request(app)
      .post('/book')
      .send(data)
      .then(() => {
        return request(app)
          .get('/book/010-4321-5678')
          .then(res => {
            const bookdata = JSON.parse(res.text);
            delete bookdata[0].booking_uuid;
            expect(bookdata[0]).toEqual(data);
            done();
          });
      });
  });

  test('GET /book/:phone/:flight_uuid 요청은 특정 항공편의 예약자 전화번호에 대한 예약 데이터를 응답으로 보냅니다', function (done) {
    const data = {
      flight_uuid: 'af6fa55c-da65-47dd-af23-578fdba50bed',
      name: '최배열',
      phone: '010-4321-5678'
    }
    return request(app)
      .post('/book')
      .send(data)
      .then(() => {
        return request(app)
          .get('/book/010-4321-5678/af6fa55c-da65-47dd-af23-578fdba50bed')
          .then(res => {
            const bookdata = JSON.parse(res.text);
            delete bookdata[0].booking_uuid;
            expect(bookdata[0]).toEqual(data);
            done();
          });
      });
  });
});

describe('Advanced Challenges', function () {
  afterAll(() => {
    app.close();
  });

  test('PUT /flight/:uuid 요청의 업데이트 된 객체를 응답으로 보냅니다', function (done) {
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

  test('PUT /flight/:uuid 요청의 일부 데이터만 업데이트 된 객체를 응답으로 보냅니다', function (done) {
    return request(app)
      .put('/flight/af6fa55c-da65-47dd-af23-578fdba99bed')
      .send({
        departure: 'CJU',
        destination: 'ICN'
      })
      .then(res => {
        const flight = JSON.parse(res.text);
        expect(flight).toEqual({
          uuid: 'af6fa55c-da65-47dd-af23-578fdba99bed',
          departure: 'CJU',
          destination: 'ICN',
          departure_times: '2021-12-02T11:00:00',
          arrival_times: '2021-12-04T15:00:00'
        });
        done();
      });
  });
});
