const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: fs.createReadStream("REVIEW.md")
});

let studentInfo = require("../../student.json");
let { theClass, student, sprint } = studentInfo;

let review = {
  sprint: sprint,
  class: theClass,
  name: student,
  "objectives-achevied": "",
  "objectives-failed": "",
  improvements: [],
  "improvements-comments": "",
  "others-comments": ""
};

let section;

rl.on("line", line => {
  if (line.includes(":")) {
    getAnswerFromQuestion(line);
  }
  if (line.includes("-")) {
    getAnswerFromChocies(line);
  }
  if (line.includes("#")) {
    if (line.includes("##")) {
      let text = getTextFromLine(line, "#");
      section = text;
    }
  }
}).on("close", function() {
  fs.writeFileSync("test/student/review.json", JSON.stringify(review));
});

const getTextFromLine = (line, character) => {
  let text = line
    .split(character)
    .pop()
    .trim();
  return text;
};

const getAnswerFromQuestion = line => {
  if (line.includes("Comments:")) {
    if (section === "Improvements") {
      let text = getTextFromLine(line, ":");
      review["improvements-comments"] = text;
    }
    if (section === "Others") {
      let text = getTextFromLine(line, ":");
      review["others-comments"] = text;
    }
  }
};

const getAnswerFromChocies = line => {
  if (section === "Objectives") {
    if (line.includes("- [ ]") || line.includes("- []")) {
      let text = getTextFromLine(line, "]");
      review["objectives-failed"] = review["objectives-failed"] + text + "\n";
    }
    if (line.includes("- [x]")) {
      let text = getTextFromLine(line, "]");
      review["objectives-achevied"] =
        review["objectives-achevied"] + text + "\n";
    }
  }
  if (section === "Improvements") {
    if (line.includes("- [x]")) {
      let text = getTextFromLine(line, "]");
      review["improvements"].push(text);
    }
  }
};