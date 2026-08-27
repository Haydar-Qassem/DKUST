import styled from "styled-components";

export const CounterWrapper = styled.div`
  display: flex;
`;

export const PlusWrapper = styled.button`
  border: 1px solid var(--border);
  border-left: none;
  border-top-right-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  padding: 5px 12px;
  background-color: transparent;
  color: var(--color-text-gray);
  &:hover {
    background-color: var(--color-gray-bg);
  }
`;

export const MinusWrapper = styled.button`
  border: 1px solid var(--border);
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  padding: 5px 12px;
  background-color: transparent;
  color: var(--color-text-gray);
  &:hover {
    background-color: var(--color-gray-bg);
  }
`;

export const CountWrapper = styled.div`
  border-top: 1px solid var(--border);
  border-right: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 5px 12px;
`;
