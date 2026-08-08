import { CustomButtonStyles } from "./styles";

function CustomButton(props) {
    const text = props.text;
    const id = props.id;
    const classN = props.classN;
  return (
    <CustomButtonStyles>
      <div className="center-in-login-card">
        <button type="submit" id={id} className={classN}>
          {text}
        </button>
      </div>
    </CustomButtonStyles>
  );
}
export default CustomButton;
