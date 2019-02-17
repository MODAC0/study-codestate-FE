const studentData = require("../../student.json");
var chai = require('chai')
var expect = chai.expect

describe("student", () => {
  it("put correct name on student.json", () => {
    const rawName =
      "스프린트를 진행하는 수강생분의 이름을 한글로! 적어주세요! 예)존도우";
    expect(studentData.student).not.to.equal(rawName);
  });

  it("put correct class on student.json", () => {
    const rawClass = "기수를 숫자만! 입력해주세요! 예)10";
    expect(studentData.theClass).not.to.equal(rawClass);
  });
});