import styled from "styled-components";

export const InputComponentStyles = styled.div`
  margin-bottom: 1.25rem;
  label {
    font-weight: 600;
    font-size: 0.85rem;
    color: var(--color-text-dark);
    display: block;
    margin-bottom: 0.5rem;
  }

  .login-input-group {
    display: flex;
    align-items: center;
    border: 1px solid #ced4da;
    border-radius: 0.375rem;
    overflow: hidden;
    background-color: var(--color-white);
    transition: border-color 0.2s ease;

    &:focus-within {
      border-color: var(--color-green);
      box-shadow: 0 0 0 0.2rem rgba(0, 166, 81, 0.25);
    }
  }

  .login-input-icon {
    padding: 0.75rem 1rem;
    color: #adb5bd;
  }

  input {
    border: none;
    outline: none;
    padding: 0.75rem 0.75rem;
    font-size: 0.9rem;
    color: var(--color-text-dark);
    background-color: transparent;
    width: 100%;
  }
`;
