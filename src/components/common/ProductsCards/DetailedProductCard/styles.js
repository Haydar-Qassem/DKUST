import styled, { css } from "styled-components";

export const CardContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  // position: relative;
  padding-left: 0;
  background-color: var(--color-white);
  height: minmax(400px, auto);
`;

export const ImageBox = styled.div`
  background-color: #0b3b24;
  width: 50em;
`;

export const ContentBox = styled.div`
  height: 100%;
  width: 50em;
  padding: 32px;
`;

export const CardHeader = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
  color: var(--color-gray-900);
  font-size: var(--text-2xl);
  line-height: var(--text-2xl--line-height);
  font-weight: var(--font-weight-bold);
`;

export const DescriptionText = styled.p`
  color: var(--color-gray-600);
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
  margin-bottom: calc(var(--spacing) * 6);
`;

export const ActionRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1.5rem;
  align-items: center;
`;

export const PriceBlock = styled.div`
  display: flex;
  align-items: baseline;
`;

export const PriceAmount = styled.span`
  font-weight: var(--font-weight-bold);
  font-size: var(--text-3xl);
  line-height: var(--tw-leading, var(--text-3xl--line-height));
  color: var(--color-green-600);
`;

export const PriceMonth = styled.span`
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
  color: var(--color-gray-400);
`;

export const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  transition: all 0.2s ease;

  ${(props) => {
    if (props.variant === "outline") {
      return css`
        background-color: transparent;
        border: 1px solid var(--color-gray-300);
        color: var(--color-gray-600);

        &:hover {
          border-color: var(--color-green-500);
          color: var(--color-green-600);
        }
      `;
    } else if (props.variant === "green") {
      return css`
        background-color: var(--color-green-600);
        color: var(--color-white);

        &:hover {
          background-color: var(--color-green-700);
        }
      `;
    } else if (props.variant === "green-outline") {
      return css`
        color: var(--color-green-600);
        border: 1px solid var(--color-green-600);
        background-color: transparent;

        &:hover {
          background-color: var(--color-green-50);
          border: 1px solid var(--color-green-600);
          color: var(--color-green-600);
        }
      `;
    }
  }}
`;

export const FeaturesList = styled.ul`
  color: var(--color-gray-700);
  font-size: var(--text-sm);
  line-height: var(--tw-leading, var(--text-sm--line-height));
  list-style-type: disc;
  list-style-position: inside;
`;

export const BadgeItem = styled.span`
  font-size: var(--text-xs);
  line-height: var(--text-xs--line-height);

  font-weight: var(--font-weight-bold);
  border-radius: 12px;
  margin-top: 16px;
  padding: 4px 16px;
  background-color: var(--color-green-500);
  color: var(--color-white);
`;
