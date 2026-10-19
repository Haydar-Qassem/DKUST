import styled from "styled-components";

export const HeaderStyles = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;

  background-color: var(--bg-header);
  color: var(--color-gray-300);

  ul,
  ul div {
    display: flex;
    align-items: center;
    gap: calc(var(--spacing) * 5);
    justify-content: inline-end;
    margin-bottom: 0;
  }

  .main-nav ul li {
    font-size: var(--text-xs);
    line-height: var(--text-xs--line-height);
    font-weight: var(--font-weight-medium);
    color: var(--color-gray-300);
    transition: color 0.3s ease;

    &:hover {
      color: var(--color-white);
    }
    &.active {
      color: var(--color-green-400);
    }
  }
`;

export const HeaderButton = styled.button`
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  border: 1px solid var(--color-green-400);
  color: var(--color-green-400);
  padding: 6px 16px;
  border-radius: 4px;
  background-color: transparent;
  font-weight: var(--font-weight-semibold);
  line-height: var(--text-xs--line-height);
  letter-spacing: 0.3px;
  tab-size: 8;

  &:hover {
    background-color: var(--color-green-400);
    color: var(--color-white);
  }
`;

export const Logo = styled.span`
  font-size: var(--text-xl);
  letter-spacing: 2px;
  font-weight: 700;
  line-height: var(--text-xl--line-height);
  color: var(--color-white);
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: calc(var(--spacing) * 3);
`;

export const ThemeToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 999px;
  border: 1px solid var(--color-gray-500);
  background: transparent;
  color: var(--color-gray-300);
  cursor: pointer;
  font-size: 16px;

  &:hover {
    border-color: var(--color-green-400);
    color: var(--color-green-400);
  }
`;

export const UserLabel = styled.span`
  color: var(--color-gray-300);
  font-size: var(--text-xs);
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
