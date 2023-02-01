/**
 * 아래는 각 step의 안내 가이드입니다.
 * 안내 가이드를 수정하시고 싶다면 아래에서 스텝에 맞는 텍스트를 수정하시면됩니다.
 */
function step1Description() {
  console.log(
    [
      "STEP ONE:",
      "",
      "여러분의 목표는, 신용카드 번호를 바탕으로 해당 신용카드가 어떠한 발급기관(network)에 속해 있는지 알아낼 수 있는 함수를 작성하는 것입니다.",
      "여러분은 %cdetectNetwork.js%c 파일 안에다 이 함수를 작성하게 될 것입니다.",
      "",
      "%cdetectNetwork.js%c은 브라우저의 <script> 태그를 이용해서 이미 로딩되어 있습니다. 만일 여러분들이 함수에 작은 변화를 만들었다면, 브라우저를 새로고침 해야만 합니다.",
      "앞으로 STEP이 진행될 때마다 브라우저를 새로고침 해야 할텐데, 다행히도 TestBuilder는 여러분이 이전에 완료된 STEP의 대해 진행 상황을 저장합니다.",
      "",
      "지금부터 detectNetwork.js 파일을 살펴보시고, 다음 안내를 따라주세요.",
      "",
      "detectNetwork 함수를 작성 완료하셨나요? 작성이 끝나고 테스트할 준비가 완료됬다면, console창에 아래와 같이 입력해보세요",
      "",
      " %c>%c detectNetwork(%c'38345678901234'%c)",
      "",
      "만일 다음 출력을 보셨다면, 아주 잘 하고 계신겁니다!",
      "",
      ' %c<%c "%cDiner\'s Club%c"',
      "",
      "만일 그렇지 않은 경우는, 다시 돌아가서 함수를 수정할 수 있습니다. 함수를 수정하셨다면, 새로고침 하는 것을 잊지 말아주세요.",
      "",
      "다음은 여러분이 여러분이 작성한 함수가 접두사와 카드번호 길이의 모든 조합에 대해 정상적으로 작동하는지 확인할 수 있는 카드번호 목록입니다.",
      "",
      "38345678901234 (Diner's Club)",
      "39345678901234 (Diner's Club)",
      "343456789012345 (American Express)",
      "373456789012345 (American Express)",
      "",
      "console 에서 위의 카드번호들을 detectNetwork와 함께 실행시켜보세요.",
      "",
      "%c위의 카드번호에서 detectNetwork 함수가 올바른 발급기관을 리턴하나요? 모든 조합이 잘 작동되면 이제 nextStep()을 호출해서 다음 단계로 넘어갈 수 있습니다. %c",
      "",
      "%c>%c nextStep()",
      ""
    ].join("\n"),
    "font-weight:bold",
    "font-weight:normal",
    "font-weight:bold ",
    "font-weight:normal",
    "color:lightgray",
    "color:black",
    "color:#c00",
    "color:black",
    "color:lightgray",
    "color:black",
    "color:#c00",
    "color:black",
    "font-weight:bold",
    "font-weight:normal",
    "color:blue",
    "color:black"
  );
}

function step2Description() {
  console.log(
    [
      "STEP TWO:",
      "잘 하셨습니다! 이젠 Visa 카드와 Mastercard 카드 번호도 알아낼 수 있도록 기능을 확장해볼까요?",
      "",
      "Visa 카드번호는 항상 4로 시작하고 13, 16, 혹은 19자리의 숫자입니다.",
      "MasterCard 카드번호는 항상 51, 52, 53, 54, 혹은 55로 시작하고 16자리의 숫자입니다.",
      "",
      "함수를 변경했다면, 이전에 만들었던 내용이 제대로 작동한다는 보장을 할 수 없으므로 반드시 다시 테스트를 해야 합니다.",
      "이번 단계에서도 Diner's Club과 American Express에 대해서도 계속 지원하는지 확인하세요.",
      "",
      "다음은 여러분이 접두사와 카드번호 길이의 모든 조합에 대해, 함수가 작동되도록 시도할 수 있는 카드번호 목록입니다.",
      "",
      "38345678901234 (Diner's Club)",
      "39345678901234 (Diner's Club)",
      "343456789012345 (American Express)",
      "373456789012345 (American Express)",
      "4123456789012 (Visa)",
      "4123456789012345 (Visa)",
      "4123456789012345678 (Visa)",
      "5112345678901234 (MasterCard)",
      "5212345678901234 (MasterCard)",
      "5312345678901234 (MasterCard)",
      "5412345678901234 (MasterCard)",
      "5512345678901234 (MasterCard)",
      "",
      "console 에서 위의 카드번호들을 detectNetwork와 함께 실행시켜보세요.",
      "",
      "%c위의 카드번호에서 detectNetwork 함수가 올바른 발급기관을 리턴하나요? 모든 조합이 잘 작동되면 이제 nextStep()을 호출해서 다음 단계로 넘어갈 수 있습니다. %c",
      "",
      "%c>%c nextStep()"
    ].join("\n"),
    "font-weight:bold",
    "font-weight:normal",
    "color:blue",
    "color:black"
  );
}

function w() {
  console.log(
    [
      "%cSTEP THREE:%c",
      "",
      "잘 하셨습니다! 카드번호를 하나하나 테스트하는 과정이 지루하시지 않으셨나요?",
      "이제는 하나하나 수동으로 테스트하는 고통에서 벗어나, 자동화된 테스트를 해보면 어떨까요!",
      "",
      "자 브라우저 화면이 바뀌지 않았나요??",
      "이번 단계에서는 Mocha 및 Chai가 제공하는 자동화 테스트를 다루어봅니다.",
      "",
      "자동화된 테스트는 개발자로서의 효율성을 위해 반드시 필요합니다.",
      "Mocha 테스트를 작성하게 되면 페이지를 새로고침하는 것만으로도,",
      "함수를 호출하거나 console.log를 확인할 필요없이 함수가 정상적으로 작동하는지 확인할 수 있습니다.",
      "",
      "테스트 모음이 실행될 때마다, Mocha 와 Chai는 브라우저 화면에 보고서를 보여줍니다.",
      "보고서에는 성공한 테스트와 실패한 테스트를 쉽고 명확하게 확인하실 수 있습니다.",
      "",
      "그럼 테스트 보고서를 살펴볼까요?",
      "",
      "각 표제(Diner's Club과 같은)는 다른 테스트 세트이며, 각 표제 아래에는 테스트 목록이 표시됩니다.",
      "테스트가 실패하면 ❌가, 성공하면 ✔️가 표시됩니다.",
      "",
      "우리의 테스트들은 detectNetwork.test.js 파일 안에 존재합니다.",
      "우선 detectNetwork.test.js 파일을 수정해 현재 통과하지 못하는 테스트들을 모두 통과되도록 만들어주세요.",
      "",
      "테스트들을 모두 통과하게 만들어 주셨나요?",
      "그 후, Discover 발급기관도 추가적으로 다룰 수 있도록 detectNetwork 함수를 수정하고, 테스트를 구현해보세요.",
      "",
      "Discover 카드번호는 항상 6011, 65, 644에서 649까지의 숫자로 시작하고 16 또는 19자리의 숫자입니다.",
      "",
      "%cdetectNetwork 함수가 올바른 발급기관을 리턴하나요? 모든 조합이 잘 작동되면 이제 nextStep()을 호출해서 다음 단계로 넘어갈 수 있습니다. %c",
      "",
      "%c>%c nextStep()"
    ].join("\n"),
    "font-weight:bold",
    "font-weight:normal",
    "font-weight:bold",
    "font-weight:normal",
    "color:blue",
    "color:black"
  );
}

function y() {
  console.log(
    [
      "축하합니다! Test Builder의 모든 단계를 통과하셨습니다."
    ].join("\n")
  );
}

function finishedDescription() {
  console.log(
    ["축하합니다! 여러분들은 이 과제의 모든 부분을 완료했습니다."].join("\n")
  );
}

/**
 * 아래의 함수들은 local storage에 해당 스텝이 통과되었다고 저장이 되있지만,
 * 실제로 스텝을 통과하지 못할 때 표시되는 텍스트들입니다.
 */
function f() {
  console.log(
    [
      "STEP ONE이 더이상 올바르게 작동하지 않는 것 같습니다.",
      "",
      "As a reminder, step one was Diner's Club and American Express.",
      "",
      "Diner's Club의 카드 번호는 항상 38 혹은 39로 시작하며 14자리의 숫자입니다. American Express의 카드 번호는 항상 34 혹은 37로 시작하며 15자리의 숫자입니다.",
      "",
      "다음은 여러분이 접두사와 카드번호 길이의 모든 조합에 대해, 함수가 작동되도록 시도할 수 있는 카드번호 목록입니다.",
      "",
      "38345678901234 (Diner's Club)",
      "39345678901234 (Diner's Club)",
      "343456789012345 (American Express)",
      "373456789012345 (American Express)",
      "",
      "%cdetectNetwork 함수를 수정해 카드를 올바르게 판별하도록 한뒤 다음 단계로 넘어가세요.%c",
      "",
      "%c>%c nextStep()",
      ""
    ].join("\n"),
    "font-weight:bold",
    "font-weight:normal",
    "color:blue",
    "color:black"
  );
}

function d() {
  console.log(
    [
      "STEP TWO가 더이상 올바르게 작동하지 않는 것 같습니다.",
      "",
      "Step Two에서는 Visa 와 Mastercard를 검사하였습니다.",
      "",
      "Visa 카드 번호는 항상 4로 시작하고 13, 16 혹은 19자리의 숫자입니다.",
      "MasterCard 카드 번호는 항상 51, 52, 53, 54, 혹은 55로 시작하고  16자리의 숫자입니다.",
      "",
      "함수를 변경하고 나서, 이전에 만들었던 내용이 제대로 작동하는지 테스트해보세요.",
      "",
      "다음은 여러분이 접두사와 카드번호 길이의 모든 조합에 대해, 함수가 작동되도록 시도할 수 있는 카드번호 목록입니다.",
      "",
      "38345678901234 (Diner's Club)",
      "39345678901234 (Diner's Club)",
      "343456789012345 (American Express)",
      "373456789012345 (American Express)",
      "4123456789012 (Visa)",
      "4123456789012345 (Visa)",
      "4123456789012345678 (Visa)",
      "5112345678901234 (MasterCard)",
      "5212345678901234 (MasterCard)",
      "5312345678901234 (MasterCard)",
      "5412345678901234 (MasterCard)",
      "5512345678901234 (MasterCard)",
      "",
      "",
      "%cdetectNetwork 함수를 수정해 카드를 올바르게 판별하도록 한뒤 다음 단계로 넘어가세요.%c",
      "",
      "%c>%c nextStep()"
    ].join("\n"),
    "font-weight:bold",
    "font-weight:normal",
    "color:blue",
    "color:black"
  );
}

function g() {
  console.log(
    [
      "STEP THREE 테스트가 더이상 통과하지 못합니다.",
      "",
      "Step Three에서는 Discover 카드를 확인했고, Mocha로 자동화 테스트를 해보았습니다.",
      "",
      "Discover는 항상 6011, 65, 644에서 649까지의 숫자로 시작하고 16 또는 19자리의 숫자입니다.",
      "",
      "%cdetectNetwork 함수를 수정해 카드를 올바르게 판별하도록 한뒤 다음 단계로 넘어가세요.%c",
      "",
      "%c>%c nextStep()"
    ].join("\n"),
    "font-weight:bold",
    "font-weight:normal",
    "color:blue",
    "color:black"
  );
}

// function p() {
//   console.log(
//     [
//       "",
//       "자 브라우저 창에 테스트 모음이 보이시나요?",
//       "각 표제(Diner's Club과 같은)는 다른 테스트 세트이며, 각 표제 아래에는 테스트 목록이 표시됩니다.",
//       "테스트가 실패하면 ❌가, 성공하면 ✔️가 표시됩니다.",
//       "",
//       "우리의 테스트들은 detectNetwork.test.js 파일 안에 존재합니다.",
//       "우선 detectNetwork.test.js 파일을 수정해 현재 통과하지 못하는 테스트들을 모두 통과되도록 만들어주세요.",
//       "",
//       "테스트들을 모두 통과하게 만들어 주셨나요?",
//       "테스트하려는 동작에 대해 확신할 때까지 detectNetwork.test.js의 테스트를 검사한 다음 테스트가 통과되도록 만드세요. 이렇게 하려면 몇 가지 테스트를 수정해야 할 겁니다. 그 후에, 다음 네트워크를 구현해보세요.",
//       "",
//       "Discover 카드번호는 항상 6011, 65, 644에서 649까지의 숫자로 시작하고 16 또는 19자리의 숫자입니다.",
//       "Maestro 카드번호는 항상 5018, 5020, 5038 또는 6304로 시작하고 12에서부터 19까지 자리의 숫자입니다.",
//       "",
//       "%cdetectNetwork 함수가 올바른 발급기관을 리턴하나요? 모든 조합이 잘 작동되면 이제 nextStep()을 호출해서 다음 단계로 넘어갈 수 있습니다. %c",
//       "",
//       "%c>%c nextStep()"
//     ].join("\n"),
//     "font-weight:bold",
//     "font-weight:normal",
//     "color:blue",
//     "color:black"
//   );
// }

function consoleTestFailed() {
  console.log(
    [
      "주어진 모든 카드번호에 대해서 detectNetwork가 작동하는 것이 확실한가요?",
      "",
      "코드가 작동될거라고 느껴지시는 게 당연합니다. 이 과정에서 좌절감을 얻을 수도 있겠죠. 그러나 이렇게 하나하나 테스트하지 않는다면, 앞으로 생길 수 있는 예상치 못한 결과에 대응할 수가 없습니다. 다소 지루한 작업처럼 느껴질 수 있겠지만, 각 입력에 대해 실제로 함수를 테스트해보세요.",
      "",
      "%c항상 콘솔에 길이와 접두사의 모든 조합에 대해 detectNetwork 함수를 호출하고 올바른 발급기관을 리턴하는지 확인하세요!%c, 이 작업을 수행할 때까지, 다음 단계로 넘어갈 수가 없습니다. 함수를 수정하면 페이지를 새로 고침하고, 모든 접두사와 길이 조합에 대해 다시 테스트를 시도해야 합니다. 이는, 함수를 변경하고 나서도 기존의 기능이 잘 작동되는지를 확인하기 위함입니다.",
      "",
      "예를 들어, detectNetwork를 다음과 같이 시도했을 때에는, American Express가 리턴되어야 합니다.",
      "   - 카드번호가 34로 시작하고, 15 자리 숫자인 경우",
      "   - 카드번호가 37로 시작하고, 15 자리 숫자인 경우",
      "detectNetwork를 다음과 같이 시도했을 때에는, Diner's Club이 리턴되어야 합니다.",
      "   - 카드번호가 38로 시작하고, 14 자리 숫자인 경우",
      "   - 카드번호가 39로 시작하고, 14 자리 숫자인 경우",
      "",
      "모든 길이와 접두어의 조합에 대해 detectNetwork를 실행했으면, nextStep을 호출하여 다음 단계로 넘어갈 수 있습니다.",
      "",
      "%c>%c nextStep()"
    ].join("\n"),
    "font-weight:bold",
    "font-weight:normal",
    "color:blue",
    "color:black"
  );
}

function mochaTestFailedDescription(step4) {
  let message = [
    "Mocha 테스트에서 %c모든 테스트 범위%c를 커버하지 못했어요! 각 카드의 각 접두어와 길이 조합에 대해 테스트가 존재하는지 확인해주세요.",
    "",
    "예를 들어 American Express의 경우 다음과 같은 테스트가 있는지 확인하십시오.",
    "   - 카드번호가 34로 시작하고, 15자리 숫자인 경우",
    "   - 카드번호가 37로 시작하고, 15자리 숫자인 경우",
    ""
  ].join("\n");
  let style = ["font-weight:bold", "font-weight:normal"];
  // step3, 4 단계 에서는 테스트 검사가 실패할 때
  if (step4) {
    const forLoopMessage = forLoopDescription();

    message += forLoopMessage.message;
    style = style.concat(forLoopMessage.format);
  }

  console.log.apply(console, [message].concat(style));
}

// function b() {
//   console.log(
//     [
//       "모든 테스트를 꼼꼼하게 작성해 주셨지만 테스트에 한가지 문제가 있습니다.",
//       "테스트를 작성할 때 %cshould 혹은 expect 중에 하나만%c 사용하는것이 좋습니다. 같이 사용하지 마세요.",
//       "",
//       "더 진행하기 전에 should 혹은 expect 둘 중 하나만 사용하도록 테스트를 수정해주세요."
//     ].join("\n"),
//     "font-weight:bold",
//     "font-weight:normal"
//   );
// }

function forLoopDescription() {
  return {
    message: [
      "모든 테스트 케이스를 반복적으로 쓸 수도 있겠지만, 우리는 반복문을 배운 사람들이기 때문에, 각 테스트를 반복문을 통해 생성하면 더 좋겠죠?",
      "",
      "도움말: 아래 코드는 for 루프 안쪽에 생성되는 테스트의 예제입니다.",
      "",
      "%cfor (var prefix = 644; prefix <= 649; prefix++) {",
      "  it('has a prefix of ' + prefix + ' and a length of 16', function() {",
      "    console.log(prefix);",
      "  });",
      "  it('has a prefix of ' + prefix + ' and a length of 19', function() {",
      "    console.log(prefix);",
      "  });",
      "}",
      "",
      "%c위와 같이 코드를 작성하다보면, 콘솔 출력을 하는 prefix와, 테스트 케이스를 만드는 부분의 prefix가 서로 값이 다른 경우가 생길 것입니다.",
      "이는 scope와 관련된 문제로, it 함수의 인자로 들어가는 함수가 별개의 scope를 생성하기 때문입니다. 이 문제를 해결하려면, let 키워드나, IIFE(즉시 실행 함수)가 필요할 수 있습니다."
    ].join("\n"),
    format: ["color:blue", "font-weight: normal"]
  };
}
