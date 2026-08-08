import { SocialButtonStyles } from "./styles";

function SocialButton(props) {
  const text = props.text;
  const id = props.id;
  const onClick = props.onClick;
  const img = props.img;
  return (
    <SocialButtonStyles>
      <button type="button" id={id} onClick={onClick}>
        <img src={img} alt={text} width="16" />
        {text}
      </button>
    </SocialButtonStyles>
  );
}

export default SocialButton;
