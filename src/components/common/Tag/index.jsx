import { StyledTag } from "./styles";

const Tag = ({ name, variant }) => {
  return (
    <StyledTag variant = {variant}>
      <span>{name}</span>
    </StyledTag>
  );
};

export default Tag;
