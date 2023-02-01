/**
 * 아래의 detectNetwork 함수는 어떤 카드 번호를 input으로 받아,
 * 카드 회사의 이름('MasterCard', 'American Express)을 return 하는 함수입니다.
 *
 * 예) detectNetwork('343456789012345') // 'American Express'
 *
 * 그럼 어떻게 카드 번호만 가지고, 카드회사를 알 수 있을까요?
 *
 * 2가지 방법이 있습니다.
 *  1. 앞 자리 숫자들 (이번 과제에서는 prefix라 부릅니다.)
 *  2. 숫자들의 길이 (이번 과제에서는 length라고 부릅니다.)
 */

function detectNetwork(cardNumber) {
  let num = cardNumber[0];
  if (
    (cardNumber.startsWith("38") || cardNumber.startsWith("39")) &&
    cardNumber.length === 14
  )
    return "Diner's Club";
  else if (
    (cardNumber.startsWith("34") || cardNumber.startsWith("37")) &&
    cardNumber.length === 15
  )
    return "American Express";
  else if (cardNumber.startsWith("4") && (cardNumber.length === 13 || 16 || 19))
    return "Visa";
  else if (
    (cardNumber.startsWith("51") ||
      cardNumber.startsWith("52") ||
      cardNumber.startsWith("53") ||
      cardNumber.startsWith("54") ||
      cardNumber.startsWith("55")) &&
    cardNumber.length === 16
  )
    return "MasterCard";
  else if (
    ((cardNumber.startsWith("6011") ||
      cardNumber.startsWith("65") ||
      (+num > 643 && +num < 650)) &&
      cardNumber.length === 16) ||
    19
  )
    return "Discover";
}

// you don't have to worry about this code. keep this code.

if (typeof window === "undefined") {
  module.exports = detectNetwork;
}
