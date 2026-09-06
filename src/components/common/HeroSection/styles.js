import styled from "styled-components";

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #121026;
  color: #ffffff;
  text-align: center;
  padding: 56px 24px;
`;

export const HeroTitle = styled.h1`
  margin-bottom: 16px;
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--text-4xl--line-height);
`;

export const HeroSubtitle = styled.p`
  color: var(--color-gray-300);
  max-width: var(--container-lg);
  margin-bottom: 24px;
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
`;
