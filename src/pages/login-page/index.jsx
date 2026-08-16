import React, { useState } from "react";
// import InputComponent from "D:/FrontEnd Course/my-first-app/src/components/common/InputComponent/index.jsx"
import InputComponent from "../../../src/components/common/InputComponent/index.jsx";
import CustomButton from "../../../src/components/common/CustomButton/index.jsx";
import SocialButton from "../../../src/components/common/SocialButton/index.jsx";
import AuthCard from "../../../src/components/common/AuthCard/index.jsx";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
      rememberMe: rememberMe,
    };
    console.log(userData);
  };

  const signInWithGoogle = () => console.log("Sign in with Google");
  const signInWithFB = () => console.log("Sign in with Facebook");
  const forgotPassword = (e) => {
    e.preventDefault();
    console.log("Forgot password");
  };

  return (
    <main className="login-wrapper d-flex flex-column align-items-center justify-content-center py-5">
      <AuthCard
      title="Welcome Back"
      subtitle="Sign in to your DKUST account"
      onSubmit={handleLogin}
    >
      {/* Email */}
      <InputComponent
        type="email"
        label="Email-Address"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        icon="fa-regular fa-envelope"
      />

      {/* Password */}
      <InputComponent
        type="password"
        label="Password"
        placeholder="Min. 6 characters"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        icon="fa-solid fa-lock"
        icon2="fa-regular fa-eye"
      />

      {/* Submit */}
      <CustomButton text="SIGN IN" id="signInBtn" classN="form-submit-btn" />

      <div className="center-in-login-card">
        <div className="or-continue-with">or continue with</div>
      </div>

      <div className="login-social-group">
        <SocialButton
          text="Google"
          id="googleBtn"
          onClick={signInWithGoogle}
          img="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
        />
        <SocialButton
          text="Facebook"
          id="facebookBtn"
          onClick={signInWithFB}
          img="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
        />
      </div>

      {/* Sign Up Link */}
      <div className="login-signup-text">
        Don't have an account?{" "}
        <a href="/signup" className="login-signup-link">
          Sign up
        </a>
      </div>
    </AuthCard>

      {/* Back to Home */}
      <a
        href="/"
        className="text-white mt-4 text-decoration-underline opacity-75"
      >
        Back to Home
      </a>
    </main>
  );
}

export default Login;