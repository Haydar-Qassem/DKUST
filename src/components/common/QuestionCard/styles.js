import styled, { css } from "styled-components";

export const QuestionCardContainer = styled.div`
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius);
  padding: 20px;
  margin-bottom: 24px;
  min-width: 50vw;
`;

export const QuestionStatement = styled.h4`
  font-size: 1rem;
  color: var(--color-gray-800);
  margin-bottom: 16px;
`;

export const OptionItem = styled.li`
  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius);
  margin-bottom: 8px;
  color: var(--color-gray-700);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0;
  overflow: hidden;

  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 12px 16px;
    cursor: ${({ $isSubmitted }) => ($isSubmitted ? "default" : "pointer")};
  }

  ${({ $isSubmitted }) =>
    !$isSubmitted &&
    css`
      &:hover {
        background-color: var(--color-green-50);
        border-color: var(--color-green-300);
      }
      &:has(input:checked) {
        background-color: var(--color-green-50);
        border-color: var(--color-green-500);
        color: var(--color-green-800);
        border: 2px solid;
      }
    `}

  ${({ $isSubmitted, $isCorrectOption, $isUserSelectedOption }) => {
    if ($isSubmitted) {
      if ($isCorrectOption) {
        return css`
          background-color: var(--color-green-50);
          border-color: var(--color-green-500);
          color: var(--color-green-800);
          border: 2px solid;
        `;
      }
      if ($isUserSelectedOption && !$isCorrectOption) {
        return css`
          background-color: var(--color-red-50);
          border-color: var(--color-red-400);
          color: var(--color-red-700);
          border: 2px solid;
        `;
      }
    }
  }}
`;
