import styled from "styled-components";

export const CardContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  border: 1px solid #eeeeee;
  border-radius: var(--radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  padding-left: 0;
  background-color: #ffffff;
`;

export const ImageBox = styled.div`
  background-color: #0b3b24;
  width: 50em;
  height: calc(var(--spacing) * 28);
`;

export const ContentBox = styled.div`
  // display: flex;
  // flex-direction: column;
  // height: auto;
  // justify-content: space-between;
  width: 50em;
  padding: 16px;
  border-color: var(--border);
`;

export const CardHeader = styled.h4`
  font-size: var(--text-sm);
  line-height: var(--text-sm--line-height);
  font-weight: var(--font-weight-semibold);
  margin: 0;
  padding: 0;
  color: var(--color-gray-800);
`;

export const DescriptionText = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

export const ActionRow = styled.div`
  margin-top: 8px;
  font-size: var(--text-sm);
  line-height: var(--text-sm--line-height);
  font-weight: var(--font-weight-bold);
`;

export const PriceBlock = styled.div`
  display: flex;
  align-items: baseline;
`;

export const PriceAmount = styled.span`
  color: var(--color-green-600);
`;

export const PriceMonth = styled.span`
  color: var(--color-gray-400);
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));
  font-weight: var(--font-weight-normal);
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
    const variant = props.variant;
    switch (variant) {
      case "green":
        return `
          background-color: var(--color-green);
          border: 1px solid var(--color-green);
          color: #fff;
  `;
      case "white":
        return `
          background-color: transparent;
        border: 1px solid var(--color-green);
        color:  var(--color-green);
        `;
      case "outline":
        return `
          background-color: transparent;
          border: 1px solid #d1d1d1;
          color: #333;
  `;
    }
  }}
`;

export const BadgeItem = styled.span`
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: #00e676;
  color: #ffffff;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: bold;
`;

export const FeaturesList = styled.ul`
  list-style-type: disc;
  list-style-position: inside;
`;
