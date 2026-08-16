import React, { useState } from "react";
import InputComponent from "../../../src/components/common/InputComponent/index.jsx";
import CustomButton from "../../../src/components/common/CustomButton/index.jsx";
import SocialButton from "../../../src/components/common/SocialButton/index.jsx";
import AuthCard from "../../../src/components/common/AuthCard/index.jsx";
import { RegisterStyles } from "./styles";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      agreeTerms: agreeTerms,
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
    <main className="login-wrapper py-5">
      <RegisterStyles>
        <AuthCard title="Create Account" subtitle="" onSubmit={handleRegister}>
          <div className="d-flex flex-row gap-3">
          {/*First name*/}
          <InputComponent
            type="text"
            label="First Name"
            placeholder="John"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          {/* Last Name */}
          <InputComponent
            type="text"
            label="Last Name"
            placeholder="Doe"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          </div>

          {/* Email */}
          <InputComponent
            type="email"
            label="Email Address"
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
            icon2="fa-regular fa-eye"
          />

          {/* Confirm Password */}
          <InputComponent
            type="password"
            label="Confirm Password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            icon2="fa-regular fa-eye"
          />

          {/* Agree to Terms */}
          <div className="form-check mb-4">
            <input
              type="checkbox"
              className="form-check-input"
              id="agreeTerms"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="agreeTerms">
              I agree to the{" "}
              <a href="/terms" className="terms-privacy">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/" className="terms-privacy">
                Privacy Policy
              </a>
            </label>
          </div>

          {/* Submit */}
          <CustomButton
            text="CREATE ACCOUNT"
            id="registerBtn"
            classN="form-submit-btn"
          />

          <div className="center-in-login-card">
            <div className="or-continue-with">or sign up with</div>
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
      </RegisterStyles>
    </main>
  );
}

export default Register;
