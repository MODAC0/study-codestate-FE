/**
 * detectNetwork 함수 자체가 실제로 정확한 값을 return 하는지
 * 확인하는 함수들 입니다.
 */
function checkDinersClub() {
  return (
    "Diner's Club" === detectNetwork("38345678901234") &&
    "Diner's Club" === detectNetwork("39345678901234")
  );
}

function checkAmericanExpress() {
  return (
    "American Express" === detectNetwork("343456789012345") &&
    "American Express" === detectNetwork("373456789012345")
  );
}

function checkVisa() {
  return (
    "Visa" === detectNetwork("4123456789012") &&
    "Visa" === detectNetwork("4123456789012345") &&
    "Visa" === detectNetwork("4123456789012345678")
  );
}

function checkMasterCard() {
  return (
    "MasterCard" === detectNetwork("5112345678901234") &&
    "MasterCard" === detectNetwork("5212345678901234") &&
    "MasterCard" === detectNetwork("5312345678901234") &&
    "MasterCard" === detectNetwork("5412345678901234") &&
    "MasterCard" === detectNetwork("5512345678901234")
  );
}

function checkDiscover() {
  const prefixes = [6011, 644, 645, 646, 647, 648, 649, 65];

  let testResult = true;

  prefixes.forEach(function(prefix) {
    testResult =
      testResult &&
      "Discover" === detectNetwork(cardNumberFactory(prefix, 16)) &&
      "Discover" === detectNetwork(cardNumberFactory(prefix, 19));
  });

  return testResult;
}

function checkMaestro() {
  let testResult = true;

  for (let length = 12; length <= 19; length++)
    testResult =
      testResult &&
      "Maestro" === detectNetwork(cardNumberFactory("5018", length)) &&
      "Maestro" === detectNetwork(cardNumberFactory("5020", length)) &&
      "Maestro" === detectNetwork(cardNumberFactory("5038", length)) &&
      "Maestro" === detectNetwork(cardNumberFactory("6304", length));

  return testResult;
}

function checkUnionPay() {
  let testResult = true;

  for (let length = 16; length <= 19; length++) {
    for (let prefix = 622126; prefix <= 622925; prefix++)
      testResult =
        testResult &&
        "China UnionPay" === detectNetwork(cardNumberFactory(prefix, length));
    for (let prefix = 624; prefix <= 626; prefix++)
      testResult =
        testResult &&
        "China UnionPay" === detectNetwork(cardNumberFactory(prefix, length));
    for (let prefix = 6282; prefix <= 6288; prefix++)
      testResult =
        testResult &&
        "China UnionPay" === detectNetwork(cardNumberFactory(prefix, length));
  }

  return testResult;
}

function checkSwitch() {
  const prefixes = [
    "4903",
    "4905",
    "4911",
    "4936",
    "564182",
    "633110",
    "6333",
    "6759"
  ];
  const lengths = [16, 18, 19];

  let result = true;

  prefixes.forEach(function(prefix) {
    lengths.forEach(function(length) {
      result =
        result && "Switch" === detectNetwork(cardNumberFactory(prefix, length));
    });
  });

  return result;
}

function cardNumberFactory(prefix, length) {
  const cardNumber =
    prefix.toString() +
    new Array(length + 1 - prefix.toString().length).join("0");

  return cardNumber;
}
