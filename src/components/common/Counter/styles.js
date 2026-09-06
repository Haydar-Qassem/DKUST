import styled from "styled-components";

export const CounterWrapper = styled.div`
  display: flex;
`;

export const PlusWrapper = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-left: none;
  border-top-right-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  padding: 5px 12px;
  background-color: transparent;
  color: var(--color-gray-500);
  &:hover {
    background-color: var(--color-gray-100);
  }
`;

export const MinusWrapper = styled.button`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  padding: 5px 12px;
  background-color: transparent;
  color: var(--color-gray-500);
  &:hover {
    background-color: var(--color-gray-100);
  }
`;

export const CountWrapper = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 5px 12px;
`;
