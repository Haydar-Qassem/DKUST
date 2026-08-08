import styled from "styled-components";

export const RegisterStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0rem;
  .terms-privacy {
    font-weight: bold;
    color: var(--color-green);
    text-decoration: none;
    &:hover {
      color: var(--color-green-hover);
    }
  }
`;
