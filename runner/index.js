mocha.setup("bdd");

document.addEventListener("DOMContentLoaded", function() {
  /**
   * z
   */
  let mochaTests = undefined;

  function handleStepPassed(step, checkTestPassed) {
    step.mocha && !mochaTests
      ? ((document.getElementById("mocha").innerHTML = ""),
        (mochaTests = mocha.run(checkTestPassed)))
      : checkTestPassed();
  }

  function checkAllTestPassed() {
    return (
      mochaTests &&
      0 === mochaTests.stats.pending &&
      0 === mochaTests.stats.failures &&
      mochaTests.stats.passes === mochaTests.stats.tests
    );
  }

  function appHandler(appSteps) {
    let stepNumber = 0;
    function handleAppStep(step) {
      step
        ? handleStepPassed(step, function() {
            if (step.test()) {
              handleAppStep(appSteps[++stepNumber]);
            } else {
              step.print();
            }
          })
        : finishedDescription();
    }

    handleAppStep(appSteps[stepNumber]);
  }

  /**
   * 아래 moveToNextStep을 사용하는 이유는 stroge에 해당 스텝의 결과가 저장되 있지 않더라도,
   * 다음 스텝으로 넘어가기 위해서입니다.
   */
  let moveToNextStep = false;
  function checkStorage(step) {
    return (
      !(!checkCurrentStep(step) && !moveToNextStep) ||
      ((moveToNextStep = !0), !1)
    );
  }

  const appSteps = [
    {
      print: step1Description,
      test: checkStorage.bind(null, 1),
      mocha: false
    },
    {
      print: consoleTestFailed,
      test: checkStep1,
      mocha: false
    },
    {
      print: previousStepFailedDescription.bind(null, 1, 4),
      test: checkDetectNetworkFuntion.bind(null, 1, [
        checkDinersClub,
        checkAmericanExpress
      ]),
      mocha: false
    },
    {
      print: step2Description,
      test: checkStorage.bind(null, 2),
      mocha: false
    },
    {
      print: consoleTestFailed,
      test: checkStep2,
      mocha: false
    },
    {
      print: previousStepFailedDescription.bind(null, 2, 4),
      test: checkDetectNetworkFuntion.bind(null, 2, [
        checkVisa,
        checkMasterCard
      ]),
      mocha: false
    },
    {
      print: w,
      test: checkStorage.bind(null, 3),
      mocha: true
    },
    // { // 모카를 실행시키는 단계입니다. 현재 자동으로 실행되게 변경해두었습니다.
    //   print: p,
    //   test: D,
    //   mocha: !0
    // },
    {
      print: mochaTestFailedDescription.bind(null, false),
      test: checkStep3,
      mocha: true
    },
    // { expect와 should가 동시에 쓰였는지 검사하는 단계입니다.
    //   print: b,
    //   test: checkExpectShould,
    //   mocha: true
    // },
    {
      print: previousStepFailedDescription.bind(null, 3, 4),
      test: checkDetectNetworkFuntion.bind(null, 3, [
        checkAllTestPassed,
        checkDiscover
      ]),
      mocha: true
    },
    {
      print: y,
      test: checkStorage.bind(null, 4),
      mocha: true
    },
    {
      print: mochaTestFailedDescription.bind(null, !0),
      test: checkStep4,
      mocha: true
    },
    {
      print: previousStepFailedDescription.bind(null, 4, 4),
      test: checkDetectNetworkFuntion.bind(null, 4, [
        checkAllTestPassed,
        checkMaestro,
        checkUnionPay,
        checkSwitch
      ]),
      mocha: true
    }
  ];

  window.nextStep = function() {
    appHandler(appSteps);
  };

  appHandler(appSteps);

  function checkDetectNetworkFuntion(stepNumber, tests) {
    // detectNetwork 함수가 해당 스텝에 카드회사들을 정확히 리턴하는지 테스트
    for (let i = 0; i < tests.length; i++) {
      if (!tests[i]()) {
        return false;
      }
    }

    return (
      checkCurrentStep(stepNumber) ||
        ((moveToNextStep = !1), saveCurrentStep(stepNumber)),
      true
    );
  }

  function previousStepFailedDescription(from, to) {
    const descritions = {
      1: f,
      2: d,
      3: g,
      4: y
    };

    let descriptionPrinted = false;

    for (let step = to; step >= from; step--) {
      if (checkStorage(step) && !descriptionPrinted) {
        console.log(
          [
            "%c%cUh-oh. 이전에 정상적으로 작동하던 code에 문제가 생긴 것 같습니다.",
            "",
            "현재 단계를 진행하기 전 먼저 오류를 수정해주세요.",
            "",
            "아래에서 어느 단계에 문제가 있는지 확인하실 수 있습니다.",
            ""
          ].join("\n"),
          "font-weight:bold",
          "color:#c00"
        );

        // step 3단계 부터는 모카를 표시해야합니다.
        if (from > 2) {
          i(
            {
              mocha: !0
            },
            function() {}
          );
        }
        descriptionPrinted = true;

        descritions[from]();
      }
      descriptionPrinted ||
        console.log(
          [
            "%c접두사와 길이%c의 모든 조합에 대해 함수가 제대로 작동하지 않는 것 같습니다.",
            "다시 시도하십시오!"
          ].join("\n"),
          "font-weight:bold",
          "font-weight:normal"
        );
    }
  }

  // var D = !1;

  // function D() {
  //   return !!D || ((D = !0), !1);
  // }
});
