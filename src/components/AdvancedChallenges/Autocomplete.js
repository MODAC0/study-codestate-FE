import { useState, useEffect } from 'react';
import styled from 'styled-components';

const deselectedOptions = [
  'rustic',
  'antique',
  'vinyl',
  'vintage',
  'refurbished',
  '신품',
  '빈티지',
  '중고A급',
  '중고B급',
  '골동품'
];

/* TODO : 아래 CSS를 자유롭게 수정하세요. */
const boxShadow = '0 4px 6px rgb(32 33 36 / 28%)';
const activeBorderRadius = '1rem 1rem 0 0';
const inactiveBorderRadius = '1rem 1rem 1rem 1rem';

export const InputContainer = styled.div`
  margin-top: 8rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border: 1px solid rgb(223, 225, 229);
  border-radius: ${inactiveBorderRadius};
  z-index: 3;
  box-shadow: 0;

  &:focus-within {
    box-shadow: ${boxShadow};
  }

  > input {
    flex: 1 0 0;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    outline: none;
    font-size: 16px;
  }

  > div.delete-button {
    cursor: pointer;
  }
`;

export const DropDownContainer = styled.ul`
  background-color: #ffffff;
  display: block;
  margin-left: auto;
  margin-right: auto;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  margin-top: -1px;
  padding: 0.5rem 0;
  border: 1px solid rgb(223, 225, 229);
  border-radius: 0 0 1rem 1rem;
  box-shadow: ${boxShadow};
  z-index: 3;

  > li {
    padding: 0 1rem;
  }
`;

export const Autocomplete = () => {
  /**
   * Autocomplete 컴포넌트는 아래 3가지 state가 존재합니다. 필요에 따라서 state를 더 만들 수도 있습니다.
   * - hasText state는 input값의 유무를 확인할 수 있습니다.
   * - inputValue state는 input값의 상태를 확인할 수 있습니다.
   * - options state는 input값을 포함하는 autocomplete 추천 항목 리스트를 확인할 수 있습니다.
   */
  const [hasText, setHasText] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState(deselectedOptions);

  // useEffect를 아래와 같이 활용할 수도 있습니다.
  useEffect(() => {
    if (inputValue === '') {
      setHasText(false);
    }
  }, [inputValue]);

  // TODO : input과 dropdown 상태 관리를 위한 handler가 있어야 합니다.
  const handleInputChange = (event) => {
    /**
     * handleInputChange 함수는
     * - input값 변경 시 발생되는 change 이벤트 핸들러입니다.
     * - input값과 상태를 연결시킬 수 있게 controlled component로 만들 수 있고
     * - autocomplete 추천 항목이 dropdown으로 시시각각 변화되어 보여질 수 있도록 상태를 변경합니다.
     *
     * handleInputChange 함수를 완성하여 아래 3가지 기능을 구현합니다.
     *
     * onChange 이벤트 발생 시
     * 1. input값 상태인 inputValue가 적절하게 변경되어야 합니다.
     * 2. input값 유무 상태인 hasText가 적절하게 변경되어야 합니다.
     * 3. autocomplete 추천 항목인 options의 상태가 적절하게 변경되어야 합니다.
     * Tip : options의 상태에 따라 dropdown으로 보여지는 항목이 달라집니다.
     */
  };

  const handleDropDownClick = (clickedOption) => {
    /**
     * handleDropDownClick 함수는
     * - autocomplete 추천 항목을 클릭할 때 발생되는 click 이벤트 핸들러입니다.
     * - dropdown에 제시된 항목을 눌렀을 때, input값이 해당 항목의 값으로 변경되는 기능을 수행합니다.
     *
     * handleInputChange 함수를 완성하여 아래 기능을 구현합니다.
     *
     * onClick 이벤트 발생 시
     * 1. input값 상태인 inputValue가 적절하게 변경되어야 합니다.
     * 2. autocomplete 추천 항목인 options의 상태가 적절하게 변경되어야 합니다.
     */
  };

  const handleDeleteButtonClick = () => {
    /**
     * handleDeleteButtonClick 함수는
     * - input의 오른쪽에 있는 X버튼 클릭 시 발생되는 click 이벤트 핸들러입니다.
     * - 함수 작성을 완료하여 input값을 한 번에 삭제하는 기능을 구현합니다.
     *
     * handleDeleteButtonClick 함수를 완성하여 아래 기능을 구현합니다.
     *
     * onClick 이벤트 발생 시
     * 1. input값 상태인 inputValue가 빈 문자열이 되어야 합니다.
     */
  };

  // Advanced Challenge: 상하 화살표 키 입력 시 dropdown 항목을 선택하고, Enter 키 입력 시 input값을 선택된 dropdown 항목의 값으로 변경하는 handleKeyUp 함수를 만들고,
  // 적절한 컴포넌트에 onKeyUp 핸들러를 할당합니다. state가 추가로 필요한지 고민하고, 필요 시 state를 추가하여 제작하세요.

  return (
    <div className='autocomplete-wrapper'>
      <InputContainer>
        {/* TODO : input 엘리먼트를 작성하고 input값(value)을 state와 연결합니다. handleInputChange 함수와 input값 변경 시 호출될 수 있게 연결합니다. */}
        {/* TODO : 아래 div.delete-button 버튼을 누르면 input 값이 삭제되어 dropdown이 없어지는 handler 함수를 작성합니다. */}
        <div className='delete-button'>&times;</div>
      </InputContainer>
      {/* TODO : input 값이 없으면 dropdown이 보이지 않아야 합니다. 조건부 렌더링을 이용해서 구현하세요. */}
      <DropDown />
    </div>
  );
};

export const DropDown = ({ options, handleComboBox }) => {
  return (
    <DropDownContainer>
      {/* TODO : input 값에 맞는 autocomplete 선택 옵션이 보여지는 역할을 합니다. */}
    </DropDownContainer>
  );
};