import { CustomButtonStyles } from "./styles";

function CustomButton({
  content,
  id,
  classN,
  border,
  borderRadius,
  bgColor,
  color,
  borderColor,
  borderWidth,
  bgColorHover,
  colorHover,
  borderColorHover,
  borderWidthHover,
  py,
  px,
  width,
  onClick,
}) {
  return (
    <CustomButtonStyles
      type="submit"
      id={id}
      className={classN}
      onClick={onClick}
      $border={border}
      $borderRadius={borderRadius}
      $bgColor={bgColor}
      $color={color}
      $borderColor={borderColor}
      $borderWidth={borderWidth}
      $bgColorHover={bgColorHover}
      $colorHover={colorHover}
      $borderColorHover={borderColorHover}
      $borderWidthHover={borderWidthHover}
      $py={py}
      $px={px}
      $width={width}
    >
      {content}
    </CustomButtonStyles>
  );
}
export default CustomButton;
