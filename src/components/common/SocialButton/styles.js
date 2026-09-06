import styled from "styled-components";

export const SocialButtonStyles = styled.div`
  flex: 1;

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background-color: transparent;
    border: 1px solid var(--color-gray-300);
    padding: 10px 0;
    border-radius: 0.375rem;
    font-weight: 500;
    font-size: 0.9rem;
    color: var(--color-gray-600);
    transition: background-color 0.3s ease;

    &:hover {
      background-color: var(--color-gray-50);
    }
  }
`;
