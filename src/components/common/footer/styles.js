import styled from "styled-components";

export const FooterStyles = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding-top: 5rem;
  background-color: var(--color-white);
  border-top: solid 1px #e9ecef;

  .footer-col ul {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    gap: 0.5rem;
  }

  .footer-bottom {
    border-top: solid 1px #e9ecef;
  }
`;
