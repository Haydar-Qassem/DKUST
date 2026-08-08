import styled from "styled-components";

export const CustomButtonStyles = styled.div`
  .center-in-login-card {
    display: flex;
    justify-content: center;
  }

  .form-submit-btn {
    width: 100%;
    background-color: var(--color-green);
    color: var(--color-white);
    border: none;
    padding: 0.85rem;
    border-radius: 0.375rem;
    font-weight: 700;
    font-size: 1rem;
    transition: background-color 0.3s ease;
    margin-bottom: 1.5rem;

    &:hover {
      background-color: var(--color-green-hover);
    }
  }
`;
