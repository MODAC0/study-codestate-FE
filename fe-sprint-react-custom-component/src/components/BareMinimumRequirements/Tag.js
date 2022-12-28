import { useState } from "react";
import styled from "styled-components";

// TODO: Styled-Component 라이브러리를 활용해 여러분만의 tag 를 자유롭게 꾸며 보세요!

export const TagsInput = styled.div`
  margin: 8rem auto;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  width: 480px;
  padding: 0 8px;
  border: 1px solid rgb(214, 216, 218);
  border-radius: 6px;

  > ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;

    > .tag {
      width: auto;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      padding: 0 8px;
      font-size: 14px;
      list-style: none;
      border-radius: 6px;
      margin: 0 8px 8px 0;
      background: var(--coz-purple-600);
      > .tag-close-icon {
        display: block;
        width: 16px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        font-size: 14px;
        margin-left: 8px;
        color: var(--coz-purple-600);
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
      }
    }
  }

  > input {
    flex: 1;
    border: none;
    height: 46px;
    font-size: 14px;
    padding: 4px 0 0 0;
    :focus {
      outline: transparent;
    }
  }

  &:focus-within {
    border: 1px solid var(--coz-purple-600);
  }
`;

export const Tag = () => {
  const initialTags = ["CodeStates", "kimcoding"];

  const [tags, setTags] = useState(initialTags);

  const removeTags = (indexToRemove) => {
    // TODO : 태그를 삭제하는 메소드를 완성하세요.
    setTags(tags.filter((element, index) => index !== indexToRemove));
  };

  const addTags = (event) => {
    if (
      event.key === "Enter" &&
      event.target.value !== "" &&
      !tags.includes(event.target.value)
    ) {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  return (
    <>
      <TagsInput>
        <ul id="tags">
          {tags.map((tag, index) => (
            <li key={index} className="tag">
              <span className="tag-title">{tag}</span>
              <span
                onClick={() => removeTags(index)}
                className="tag-close-icon"
              >
                X
              </span>
            </li>
          ))}
        </ul>
        <input
          className="tag-input"
          type="text"
          onKeyUp={(e) => {
            addTags(e);
          }}
          placeholder="Press enter to add tags"
        />
      </TagsInput>
    </>
  );
};
