import styled, { css } from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f7f8fc;
`;

export const CategoryList = styled.div`
  display: flex;
  gap: calc(var(--spacing) * 2);
  flex-wrap: wrap;
`;

export const CategoryButton = styled.button`
  padding: 6px 16px;
  border: 1px solid
    ${(props) =>
      props.active ? "var(--color-green-600)" : "var(--color-gray-300)"};
  background-color: ${(props) =>
    props.active ? "var(--color-green-600)" : "var(--color-white)"};
  color: ${(props) =>
    props.active ? "var(--color-white)" : "var(--color-gray-600)"};
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  font-size: 12px;

  &:hover {
    border-color: ${(props) =>
      props.active ? "var(--color-green-600)" : "var(--color-green-500)"};
    color: ${(props) =>
      props.active ? "var(--color-white)" : "var(--color-green-600)"};
  }
`;

export const ViewControls = styled.div`
  display: flex;
  align-items: center;
  gap: calc(var(--spacing) * 3);
`;

export const SortContainer = styled.div`
  position: relative;
`;

export const SortButton = styled.div`
  padding: 8px 12px;
  border: 1px solid ${(props) => (props.isOpen ? "#00a843" : "#d1d1d1")};
  border-radius: 10px;
  background-color: white;
  color: var(--color-gray-600);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: normal;
  font-size: 12px;
  min-width: 142px;
  font-weight: 400;
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  background-color: white;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 10;
`;

export const DropdownItem = styled.li`
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: #333;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#aed0ff" : "transparent")};

  &:hover {
    background-color: #aed0ff;
  }
`;
export const ToggleContainer = styled.div`
  display: flex;
  border: 1px solid #d1d1d1;
  border-radius: 8px;
  overflow: hidden;
`;

export const ToggleBtn = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: ${(props) => (props.active ? "#00a843" : "#ffffff")};
  color: ${(props) => (props.active ? "#ffffff" : "#666666")};
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
`;

export const ResultsText = styled.div`
  color: var(--color-gray-400);
  font-size: var(--text-xs);
  margin-bottom: 20px;
  line-height: var(--text-xs--line-height);
`;

export const GridWrapper = styled.div`
  // max-width: 1200px;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: calc(var(--spacing) * 6);

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const CardContainer = styled.div`
  padding: ${(props) => (props.layout == "grid" ? "0px" : "20px")};

  border: 1px solid #eeeeee;
  border-radius: 14px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  background-color: var(--color-white);
  gap: 20px;

  ${(props) => {
    if (props.layout === "grid") {
      return css`
        display: block;
      `;
    } else {
      return css`
        display: flex;
        //justify-content: space-between;
      `;
    }
  }}
`;

export const ImageBox = styled.div`
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  background-color: #0b3b24;
  height: ${(props) =>
    props.layout === "list" ? "calc(var(--spacing) * 24);" : "160px"};
  width: ${(props) =>
    props.layout === "list" ? "calc(var(--spacing) * 24);" : "100%"};
  ${(props) =>
    props.layout === "list" ? "border-radius: calc(var(--radius) + 4px);" : ""}
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentBox = styled.div`
  padding: ${(props) => (props.layout == "list" ? "0px" : "20px")};
  display: flex;
  flex-direction: column;
  ${(props) => (props.layout === "list" ? "" : "height: 200px;")}
`;

export const BadgeItem = styled.span`
  font-size: var(--text-xs);
  line-height: var(--text-xs--line-height);
  font-weight: 600;
  border-radius: 12px;

  ${(props) => {
    if (props.layout === "list") {
      return css`
        padding: 2px 8px;
        margin-bottom: 4px;
        color: var(--color-green-700);\
        background-color: var(--color-green-100);
        `;
    } else {
      return css`
        position: absolute;
        top: 12px;
        left: 12px;

        padding: 2px 10px;
        color: var(--color-white);
        background-color: var(--color-green-500);
      `;
    }
  }}
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const DescriptionText = styled.p`
  color: var(--color-gray-500);
  font-size: var(--text-xs);
  line-height: var(--text-xs--line-height);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 2rem;

  ${(props) => {
    if (props.layout === "list") {
      return css`
        font-size: var(--text-sm);
        line-height: var(--text-sm--line-height);
        margin-top: 8px;
      `;
    }
  }}
`;

export const ActionRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: ${(props) => (props.layout === "list" ? "12px" : "16px")};
  justify-content: space-between;
  align-items: center;
`;

export const PriceBlock = styled.div`
  display: flex;
  align-items: baseline;
`;

export const PriceAmount = styled.span`
  font-weight: 700;
  color: var(--color-green-600);

  font-size: var(--text-base);
  line-height: 24px;

  ${(props) => {
    if (props.layout === "list") {
      return css`
        font-size: var(--text-lg);
        line-height: 28px;
      `;
    }
  }}
`;

export const PriceMonth = styled.span`
  font-size: var(--text-xs);
  line-height: var(--text-xs--line-height);
  color: var(--color-gray-400);
`;

export const ActionButton = styled.button`
  padding: 6px 12px;
  border-radius: var(--radius);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.2s ease;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  line-height: var(--text-xs--line-height);

  ${(props) => {
    if (props.variant === "outline") {
      return css`
        background-color: transparent;
        border: 1px solid var(--color-gray-300);
        color: var(--color-gray-600);

        &:hover {
          border-color: var(--color-green-500);
          color: var(--color-green-600);
        }
      `;
    } else if (props.variant === "green") {
      return css`
        background-color: var(--color-green-600);
        color: var(--color-white);

        &:hover {
          background-color: var(--color-green-700);
        }
      `;
    } else if (props.variant === "green-outline") {
      return css`
        color: var(--color-green-600);
        border: 1px solid var(--color-green-600);
        background-color: transparent;

        &:hover {
          background-color: #00a843;
          border: 1px solid #00a843;
          color: #fff;
        }
      `;
    }
  }}
`;
