// 다음 코드는 결과 제출을 위한 코드입니다. 7번째 줄까지는 신경 쓰지 않아도 좋습니다.
if (typeof window === "undefined") {
  require("mocha");
  var chai = require("chai");
  var expect = chai.expect;
  var stringifyJSON = require("../src/stringifyJSON");
}

// 여러분이 구현한 stringifyJSON을 테스트하는데 사용됩니다.
const stringifiableObjects = [
  9,
  null,
  true,
  false,
  "Hello world",
  [],
  [8],
  ["hi"],
  [8, "hi"],
  [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999],
  [8, [[], 3, 4]],
  [[[["foo"]]]],
  {},
  { a: "apple" },
  { foo: true, bar: false, baz: null },
  { "boolean, true": true, "boolean, false": false, null: null },
  // basic nesting
  { a: { b: "c" } },
  { a: ["b", "c"] },
  [{ a: "b" }, { c: "d" }],
  { a: [], c: {}, b: true },
];

// 여러분이 구현한 stringifyJSON을 테스트하는데 사용됩니다.
// hint: JSON은 function과 undefined를 stringify해서는 안됩니다.
// 따라서 여러분들은 아래의 key, value 쌍들을 stringify하지 않도록 해야 합니다.
const unstringifiableValue = {
  functions: function () {},
  undefined: undefined,
};

describe("stringifyJSON는 JSON.stringify 함수를 실행했을 때와 같은 결과를 리턴해야 합니다.", function () {
  stringifiableObjects.forEach(function (test) {
    const stringified = JSON.stringify(test)
    it(`객체는 문자열 "${stringified}"로 변환되어야 합니다`, function (done) {
      const expected = stringified;
      const result = stringifyJSON(test);
      expect(result).to.equal(expected);
      done();
    });
  });

  it("함수와 undefined는 stringify되지 않습니다.", function (done) {
    const expected = JSON.stringify(unstringifiableValue);
    const result = stringifyJSON(unstringifiableValue);
    expect(result).to.equal(expected);
    done();
  });
});
