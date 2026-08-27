import styled from "styled-components";

export const HeaderStyles = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;

  padding: 1rem;
  background-color: var(--color-navy-dark);
  color: var(--color-white);

  .main-nav ul li a {
    font-size: 0.85rem;
    font-weight: 600;
    color: #a0a5b1;
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-white);
    }
  }
`;
