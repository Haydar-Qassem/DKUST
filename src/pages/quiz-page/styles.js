import styled, { css } from "styled-components";

export const SectionTitle = styled.h2`
  font-size: var(--text-2xl);
  color: var(--color-gray-900);
  margin-bottom: 40px;
`;

export const FeedbackWrapper = styled.div`
  width: 50vw;
  border-radius: var(--radius);
  padding: 24px 16px;
  margin-top: 12px;
  margin-bottom: 24px;
  min-width: 50vw;

  ${({ $status }) => {
    if ($status === "poor") {
      return css`
        background-color: var(--color-red-100);
        border: 1px solid var(--color-red-300);
      `;
    }

    if ($status === "perfect") {
      return css`
        background-color: var(--color-green-100);
        border: 1px solid var(--color-green-300);
      `;
    }

    if ($status === "good") {
      return css`
        background-color: var(--color-yellow-100);
        border: 1px solid var(--color-yellow-300);
      `;
    }
  }}
`;

export const BadgeElement = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: 1.5rem;
  padding: 8px 24px;
  font-size: 14px;
  color: var(--color-gray-700);
  min-width: 135px;
  font-weight: bold;
  font-size: 16px;


  ${({ status }) => {
    if (status === "poor") {
      return css`
        background-color: var(--color-red-500);
        // border: 1px solid var(--color-red-300);
        color: var(--color-white);
      `;
    }

    if (status === "perfect") {
      return css`
        background-color: var(--color-green-500);
        // border: 1px solid var(--color-green-300);
        color: var(--color-white);
      `;
    }

    if (status === "good") {
      return css`
        background-color: var(--color-yellow-500);
        // border: 1px solid var(--color-yellow-300);
        color: var(--color-white);
      `;
    }
  }}
`;
