/**
 * 1. Browser에 존재하는 JSON.stringfy 함수를 직접 구현해 봅니다.
 * JSON.stringfy 함수는 input 값을 JSON 형식으로 변환합니다.
 * 단, undefined와 function은 JSON으로 생략되거나 null로 변환됩니다.
 *
 * 2. stringfyJSON은 아래와 같이 작동합니다.
 * - Boolean이 input으로 주어졌을 경우
 * stringifyJSON(true);                // 'true'
 * - String이 input으로 주어졌을 경우
 * stringifyJSON('foo');               // '"foo"'
 * - Array가 input으로 주어졌을 경우
 * stringifyJSON([1, 'false', false]); // '[1,"false",false]'
 * - Object가 input으로 주어졌을 경우
 * stringifyJSON({ x: 5 });            // '{"x":5}'
 * - undefined, function이 주어졌을 경우
 * stringifyJSON(undefined)            // undefined
 * stringifyJSON(function(){})         // undefined
 * stringifyJSON({ x: undefined, y: function(){} })   // '{}'
 *
 * 3. spec/stringifyJSONSpec.js의 stringifiableObjects 배열을 참고해서 테스트에서 어떤 input 값들이
 * 주어지고, 어떻게 stringify해 주어야 할지 생각해 보세요.
 *
 * 4. 그냥 테스트 통과를 하고 싶으시다면, 다음과 같이 구현하면 될 거예요.
 *  const stringifyJSON = JSON.stringify;
 *
 * 하지만 이 과제의 목적은 재귀를 공부하는 것이니, 처음부터 구현해봐야겠지요?:
 */
function stringifyJSON(obj) {
  if (typeof obj === "boolean" || typeof obj === "number" || obj === null) {
    return String(obj);
  }
  if (typeof obj === "string") {
    return `"${obj}"`;
  }
  if (typeof obj === "undefined" || typeof obj === "function") {
    return "undefined";
  }

  if (Array.isArray(obj)) {
    let newArr = []; //push메소드 쓰지 않고 배열의 요소를 stringifyJSON(item)값으로 치환할 때도 구현 가능
    for (let item of obj) {
      newArr.push(stringifyJSON(item)); //push만 해주고
    }
    return `[${newArr}]`; //`${newArr}` 하면 요소만 나열되고 통째로 문자열
  }

  if (typeof obj === "object" && obj !== null) {
    let str = "";
    for (let key in obj) {
      if (typeof obj[key] === "function" || obj[key] === undefined) {
        return "{}";
      }
      let newKey = stringifyJSON(key); //key
      let newValue = stringifyJSON(obj[key]); //key의 값
      str = str + newKey + ":" + newValue + ",";
    }
    str = str.slice(0, -1); //마지막 쉼표 버리기
    return `{${str}}`;
  }
}
// 다음 코드는 결과 제출을 위한 코드입니다. 신경 쓰지 않아도 좋습니다.
if (typeof window === "undefined") {
  module.exports = stringifyJSON;
}
