import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f7f8fc;
`;

export const Banner = styled.div`
  background-color: #121026;
  color: #ffffff;
  text-align: center;
  padding: 4rem 2rem;
`;

export const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 5%;
  border-bottom: 1px solid #e0e0e0;
`;

export const CategoryList = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const CategoryButton = styled.button`
  padding: 0.5rem 1.5rem;
  border: 1px solid ${(props) => (props.active ? "#00a843" : "#d1d1d1")};
  background-color: ${(props) => (props.active ? "#00a843" : "transparent")};
  color: ${(props) => (props.active ? "#ffffff" : "#333333")};
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
`;

export const ViewControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SortContainer = styled.div`
  position: relative;
`;

export const SortButton = styled.div`
  padding: 0.5rem 1rem;
  border: 1px solid ${(props) => (props.isOpen ? "#00a843" : "#d1d1d1")};
  border-radius: 8px;
  background-color: white;
  color: #666;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.9rem;
  min-width: 180px;
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
  padding: 1rem 5%;
  font-weight: 600;
  color: #666666;
`;

export const GridWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 1rem 5% 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ListWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem 5% 4rem;
`;

export const CardContainer = styled.div`
  border: 1px solid #eeeeee;
  border-radius: 12px;
  overflow: hidden;
  display: ${(props) => (props.layout === "list" ? "flex" : "block")};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  position: relative;
  background-color: #ffffff;
`;

export const ImageBox = styled.div`
  background-color: #0b3b24;
  height: ${(props) => (props.layout === "list" ? "auto" : "200px")};
  width: ${(props) => (props.layout === "list" ? "250px" : "100%")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export const ContentBox = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const BadgeItem = styled.span`
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: #00e676;
  color: #ffffff;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: bold;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`;

export const DescriptionText = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4;
`;

export const ActionRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
  padding-top: 1.5rem;
  justify-content: ${(props) =>
    props.layout === "list" ? "flex-end" : "space-between"};
  align-items: center;
`;

export const PriceBlock = styled.div`
  display: flex;
  align-items: baseline;
`;

export const PriceAmount = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: #00a843;
`;

export const PriceMonth = styled.span`
  font-size: 0.9rem;
  color: #888;
`;

export const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: all 0.2s ease;

  ${(props) =>
    props.variant === "outline"
      ? `
    background-color: transparent;
    border: 1px solid #d1d1d1;
    color: #333;
  `
      : `
    background-color: #00a843;
    border: 1px solid #00a843;
    color: #fff;
  `}
`;
