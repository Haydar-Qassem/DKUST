import styled from "styled-components";

export const StyledTag = styled.span`
  font-size: 0.85rem;

  ${(props) => {
    const variant = props.variant;
    if (variant === "boxedTag") {
      return `
        color : oklch(44.6% .03 256.802);
        background-color: oklch(96.7% .003 264.542);
        border-radius: var(--radius);
        padding: 3px 12px;
        `;
    } else {
      return `color : var(--color-text-gray);`;
    }
  }}
`;
