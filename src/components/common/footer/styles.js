import styled from "styled-components";

export const FooterStyles = styled.footer`
  border-top: solid 1px #e9ecef;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-white);
  padding-block-start: 48px;
  padding-block-end: 24px;

  .footer-columns {
    margin-bottom: calc(var(--spacing) * 10);

    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: calc(var(--spacing) * 8);

    .footer-col {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      gap: 0.5rem;
      padding: 0px;

      h3 {
        color: var(--foreground);
        margin-bottom: calc(var(--spacing) * 4);
        font-size: var(--text-xs);
        line-height: var(--text-xs--line-height);
        font-weight: var(--font-weight-bold);
        letter-spacing: 0.6px;
      }

      ul {
        color: var(--color-gray-500);
        font-size: var(--text-xs);
        line-height: var(--leading-relaxed);
        // display: flex;
        // flex-direction: column;
        // align-items: start;
        // justify-content: start;
        // gap: 0.5rem;

        li {
          margin-block-end: calc(var(--spacing) * 2);
        }
      }

      p {
        color: var(--color-gray-500);
        font-size: var(--text-xs);
        line-height: var(--leading-relaxed);
        margin-bottom: 12px;
      }

      form {
        display: flex;
        gap: 0;
        input {
          padding: 8px 12px;
          margin: 0px;
          color: var(--color-gray-500);
          font-size: var(--text-xs);
          line-height: var(--leading-relaxed);
          border: 1px solid var(--color-gray-300);
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
        }

        button {
          padding: 8px 12px;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: all 0.2s ease;
          font-size: var(--text-xs);
          font-weight: var(--font-weight-medium);
          line-height: var(--text-xs--line-height);

          background-color: var(--color-green-600);
          color: var(--color-white);

          &:hover {
            background-color: var(--color-green-700);
          }
        }
      }
    }
  }
`;

export const BottomFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  div {
    display: flex;
  }

  .social-icon {
    display: flex;
    gap: calc(var(--spacing) * 2);
  }
`;
