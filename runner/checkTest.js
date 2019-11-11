const spyDetectNetwork = sinon.spy(window, "detectNetwork");
const chaiSpyShould = sinon.spy(window.chai, "should");
const chaiSpyExpect = sinon.spy(window.chai, "expect");
/**
 * 이 파일에서는 mocha에 실제로 카드 번호를 검사하는 테스트가 작성되었는지 아닌지를 검사합니다.
 *
 * 스텝별 테스트를 변경하시고 싶으면 아래에서 Step에 해당된 테스트를
 * 다른 스텝으로 옮기면 됩니다.
 */
function checkStep1() {
  return checkCurrentStep(1) || (checkDinersClubTest() && checkAmericanTest());
}

function checkStep2() {
  return (
    checkCurrentStep(2) ||
    (checkDinersClubTest() &&
      checkAmericanTest() &&
      checkVisaTest() &&
      checkMasterTest())
  );
}

function checkStep3() {
  return checkDiscoverTest();
}

function checkStep4() {
  return checkMaestroTest() && checkUnionTest() && checkSwitchTest();
}

// 여기서 부터 카드 하나를 테스트하는 함수들입니다.
function checkDinersClubTest() {
  return checkCombination([38, 39], [14], spyDetectNetwork);
}

function checkAmericanTest() {
  return checkCombination([34, 37], [15], spyDetectNetwork);
}

function checkVisaTest() {
  return checkCombination([4], [13, 16, 19], spyDetectNetwork);
}

function checkMasterTest() {
  return checkCombination([51, 52, 53, 54, 55], [16], spyDetectNetwork);
}

function checkDiscoverTest() {
  return checkCombination(
    [6011, 644, 645, 646, 647, 648, 649, 65],
    [16, 19],
    spyDetectNetwork
  );
}

function checkMaestroTest() {
  return checkCombination(
    [5018, 5020, 5038, 6304],
    [12, 13, 14, 15, 16, 17, 18, 19],
    spyDetectNetwork
  );
}

function checkUnionTest() {
  const prefixes = [];

  for (let t = 622126; t <= 622925; t++) prefixes.push(t);
  for (let t = 624; t <= 626; t++) prefixes.push(t);
  for (let t = 6282; t <= 6288; t++) prefixes.push(t);

  return checkCombination(prefixes, [16, 17, 18, 19], spyDetectNetwork);
}

function checkSwitchTest() {
  return checkCombination(
    [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759],
    [16, 18, 19],
    spyDetectNetwork
  );
}

// function checkExpectShould() {
//   return 0 === chaiSpyExpect.callCount || 0 === chaiSpyShould.callCount;
// }

function checkCombination(prefixs, lengths, spyDetectNetwork) {
  // 모든 카드 조합이 담겨인는 테이블을 만듭니다.
  const combinationTable = creatCombinationTable(prefixs, lengths);

  // 이때까지 detectNetwork함수에 실행된 카드번호와 프리픽스를 대조해보면서
  // 모든 테스트가 수행됬는지 검사합니다.
  spyDetectNetwork.args.forEach(function(cardNumArr) {
    // 카드 넘버가 배열에 담겨있어 배열을 카드 번호로 바꾼다.
    let cardNum = cardNumArr[0];

    // 조합 테이블에서 실행된 카드 번호를 찾아 해당 조합을 true로 변경합니다.
    for (let prefix in combinationTable) {
      // 테스트한 카드번호에 prefix가 있는지 확인합니다.
      if (checkPrefixCardNumber(prefix, cardNum)) {
        // 있다면 길이가 있는지 확인합니다.
        if (combinationTable[prefix].hasOwnProperty(cardNum.length)) {
          // 모두 있다면 조합 테이블에서 해당 조합을 true로 변경합니다.
          combinationTable[prefix][cardNum.length] = true;
        }
      }
    }
  });

  // 조합 테이블에서 false가 하나라도 있으면 false를 리턴합니다.
  for (let prefix in combinationTable) {
    for (let len in combinationTable[prefix]) {
      if (!combinationTable[prefix][len]) {
        return false;
      }
    }
  }

  // 조합 테이블 검사에서 모두 통과했다면 true를 리턴합니다.
  return true;
}

/**
 * table 예시
 * {
 *  65: {16: false, 19: false},
 *  644: {16: false, 19: false},
 * }
 */
function creatCombinationTable(prefixs, lenghts) {
  const table = {};

  prefixs.forEach(function(prefix) {
    // 가능 한 모든 조합을 만들고 조합의 값을 false로
    lenghts.forEach(function(len) {
      if (!(prefix in table)) {
        table[prefix] = {};
      }
      table[prefix][len] = false;
    });
  });

  return table;
}

function checkPrefixCardNumber(prefix, cardNum) {
  // 카드 넘버와 프리픽스가 일치하는지 확인합니다.
  return prefix === cardNum.slice(0, prefix.length);
}
