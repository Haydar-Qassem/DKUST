import { InputComponentStyles } from "./styles";

function InputComponent(props) {
  const label = props.label;
  const placeholder = props.placeholder;
  const type = props.type;
  const login = props.login;
  const value = props.value;
  const onChange = props.onChange;
  const icon = props.icon;
  const icon2 = props.icon2;
  let iconElement = null;
  let icon2Element = null;
  if (icon) {
    iconElement = (
      <span className="login-input-icon">
        <i className={icon}></i>
      </span>
    );
  }
  if (icon2) {
    icon2Element = (
      <span className="login-input-icon pointer">
        <i className={icon2}></i>
      </span>
    );
  }

  return (
    <InputComponentStyles>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <label htmlFor={label}>{label}</label>
        {login && (
          <a
            href="/forgot-password"
            className="forgot-password-link"
            style={{
              color: "var(--color-green-600)",
              fontSize: "var(--text-xs)",
              fontWeight: "var(--font-weight-medium)",
              lineHeight: "var(--text-xs--line-height)",
            }}
          >
            Forgot Password?
          </a>
        )}
      </div>
      <div className="login-input-group">
        {iconElement}
        <input
          type={type}
          id={label}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {icon2Element}
      </div>
    </InputComponentStyles>
  );
}

export default InputComponent;
