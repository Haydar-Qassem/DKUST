import styled, { css } from "styled-components";

export const StyledTag = styled.span`
  font-size: var(--text-xs);
  line-height: var(--tw-leading, var(--text-xs--line-height));

  ${(props) => {
    const variant = props.variant;
    if (variant === "boxedTag") {
      return css`
        color : oklch(44.6% .03 256.802);
        background-color: oklch(96.7% .003 264.542);
        border-radius: var(--radius);
        padding: 3px 12px;
        margin-bottom: 12px;
        `;
    } else {
      return css`
        color: var(--color-gray-400);
        margin-bottom: calc(var(--spacing) * 1);
      `;
    }
  }}
`;
