import { useState, useEffect } from "react";
import styled from "styled-components";

const deselectedOptions = [
  "rustic",
  "antique",
  "vinyl",
  "vintage",
  "refurbished",
  "신품",
  "빈티지",
  "중고A급",
  "중고B급",
  "골동품",
];

/* TODO : 아래 CSS를 자유롭게 수정하세요. */
const boxShadow = "0 4px 6px rgb(32 33 36 / 28%)";
const activeBorderRadius = "1rem 1rem 0 0";
const inactiveBorderRadius = "1rem 1rem 1rem 1rem";

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
   * - inputValue state는 input값의 상태를 확인할 수 있습니다.
   * - hasText state는 input값의 유무를 확인할 수 있습니다.
   * - options state는 input값을 포함하는 autocomplete 추천 항목 리스트를 확인할 수 있습니다.
   */
  const [hasText, setHasText] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState(deselectedOptions);

  // useEffect를 아래와 같이 활용할 수도 있습니다.
  useEffect(() => {
    if (inputValue === "") {
      setHasText(false);
    }
  }, [inputValue]);

  // TODO : input과 dropdown 상태 관리를 위한 handler가 있어야 합니다.
  const handleInputChange = (event) => {
    // 타이핑되면 setinputvalue에 저장
    setInputValue(event.target.value);
    // 텍스트가 있는 경우
    setHasText(true);
    // 옵션에 저장된 애들중 입력된 값과 같은 것들을 리스트에 노출시킨다
    setOptions(deselectedOptions.filter((e) => e.includes(event.target.value)));
  };

  const handleDropDownClick = (clickedOption) => {
    setInputValue(clickedOption);
    setOptions(deselectedOptions.filter((e) => e.includes(clickedOption)));
  };

  const handleDeleteButtonClick = () => {
    setInputValue("");
  };

  // Advanced Challenge: 상하 화살표 키 입력 시 dropdown 항목을 선택하고, Enter 키 입력 시 input값을 선택된 dropdown 항목의 값으로 변경하는 handleKeyUp 함수를 만들고,
  // 적절한 컴포넌트에 onKeyUp 핸들러를 할당합니다. state가 추가로 필요한지 고민하고, 필요 시 state를 추가하여 제작하세요.

  return (
    <div className="autocomplete-wrapper">
      <InputContainer>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        ></input>
        <div onClick={handleDeleteButtonClick} className="delete-button">
          &times;
        </div>
      </InputContainer>
      {hasText ? (
        <DropDown options={options} handleComboBox={handleDropDownClick} />
      ) : null}
    </div>
  );
};

export const DropDown = ({ options, handleComboBox }) => {
  return (
    <DropDownContainer>
      {options.map((e) => (
        <li onClick={() => handleComboBox(e)}>{e}</li>
      ))}
    </DropDownContainer>
  );
};
