const review = require("./review.json");
var chai = require('chai')
var expect = chai.expect

describe("REVIEW.md", () => {
  it("should review on REVIEW.md\nYou should leave comments on the improvements section!!\nBare Minimum을 완료하셨다면 student.json, REVIEW.md를 작성하고 Pull request를 만든 뒤 Advanced 진행부탁드립니다!", function() {
    expect(review["improvements-comments"]).not.to.equal(
      '**이 글을 지우고 이곳에 남겨주세요. 남겨주실 내용이 없으면 "없음"이라고 적어주세요!**'
    );
  });
});