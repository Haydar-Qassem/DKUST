import styled, { css } from "styled-components";

export const CustomButtonStyles = styled.button`
  ${({
    $border,
    $borderRadius,
    $bgColor,
    $color,
    $borderColor,
    $borderWidth,
    $bgColorHover,
    $colorHover,
    $borderColorHover,
    $borderWidthHover,
    $py,
    $px,
    $width,
  }) => {
    return css`
      background-color: ${$bgColor};
      color: ${$color};
      border-color: ${$borderColor};
      border-width: ${$borderWidth};
      padding-top: ${$py};
      padding-bottom: ${$py};
      padding-left: ${$px};
      padding-right: ${$px};
      display: flex;
      justify-content: center;
      width: ${$width};
      border-radius: var(--radius);
      border-radius: ${$borderRadius};
      transition: background-color 0.3s ease;
      margin-bottom: 1.5rem;
      border: ${$borderWidth} solid ${$borderColor};
      border: ${$border};

      &:hover {
        background-color: ${$bgColorHover};
        color: ${$colorHover};
      }
    `;
  }}
  .form-submit-btn {
    font-weight: 700;
    font-size: 1rem;
  }
`;
