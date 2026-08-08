import { AuthCardStyles } from "./styles";

function AuthCard(props) {
    const title = props.title;
    const subtitle = props.subtitle;
    const  onSubmit = props.onSubmit;
  return (
      <AuthCardStyles>
        <div className="login-header">
          <h2 className="login-title">{title}</h2>
          <p className="login-subtitle">{subtitle}</p>
        </div>

        <form className="login-form" onSubmit={onSubmit}>
          
          {props.children}

        </form>
      </AuthCardStyles>
  );
}

export default AuthCard;