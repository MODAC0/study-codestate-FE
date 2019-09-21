const https = require("https");
const colors = require('colors')

// Get sutdent data and test results from student.json & result.json
let studentInfo = require("../student.json");
let testResult = require("../result.json")
let { theClass, student, sprint } = studentInfo;
let {passed, failed} = testResult

console.log(['테스트 결과입니다.', `통과된 테스트: ${passed}`.green, `통과하지 못한 테스트: ${failed}`.red].join('\n'))

const options = {
  hostname: "dnl7koxsek.execute-api.ap-northeast-2.amazonaws.com",
  path: "/default/im-submit",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  }
};

const result = new Promise((resolve, reject) => {
  const req = https.request(options, res => {
    let data = '';

    if (res.statusCode === 500) {
      throw new Error("There is an error on submiting")
    }

    res.on("data", chunk => {
      data += chunk;
    });

    res.on("end", () => {
      resolve(JSON.parse(data.toString()))
    });
  });

  req.on("error", e => {
    throw new Error("data did not submit correctly");
  });

  // send the request
  req.write(
    JSON.stringify({
      fields: {
        class: theClass,
        name: student,
        sprint: sprint,
        passed,
        failed
      }
    })
  );
  req.end();
})

result.then(result => {
  if (passed === 0 || failed !== 0) {
    console.log('정상적으로 제출이 되었지만 통과하지 못한 테스트가있습니다.', '\n테스트가 모두 통과할 수 있도록 도전해보세요!'.rainbow)
  } else {
    console.log('정상적으로 제출이 되었고 모든 테스트를 통과하였습니다.'.rainbow)
  }
}).catch(error => {
  console.log('제출이 실패했습니다. 다시 한 번 제출해주세요.'.magenta)
})