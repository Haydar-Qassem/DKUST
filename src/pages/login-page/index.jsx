import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import InputComponent from "../../../src/components/common/InputComponent/index.jsx";
import CustomButton from "../../../src/components/common/CustomButton/index.jsx";
import SocialButton from "../../../src/components/common/SocialButton/index.jsx";
import AuthCard from "../../../src/components/common/AuthCard/index.jsx";
import { Main } from "./styles.js";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/auth/authSelectors.js";
import { login } from "../../store/auth/authSlice.js";
import { useNavigate } from "react-router-dom";

const loginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function Login() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = {
      email: formik.values.email,
      password: formik.values.password,
      rememberMe: formik.values.rememberMe,
    };
    console.log(userData);
    dispatch(login(formik.values.email));
    navigate("/");
  };

  const signInWithGoogle = () => console.log("Sign in with Google");
  const signInWithFB = () => console.log("Sign in with Facebook");
  const forgotPassword = (e) => {
    e.preventDefault();
    console.log("Forgot password");
  };

  return (
    <Main>
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
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          icon="fa-regular fa-envelope"
        />

        {/* Password */}
        <InputComponent
          login
          type="password"
          label="Password"
          placeholder="Min. 6 characters"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          icon="fa-solid fa-lock"
          icon2="fa-regular fa-eye"
        />

        {/* Submit */}
        <CustomButton
          content="SIGN IN"
          id="signInBtn"
          classN="form-submit-btn"
          width="100%"
          bgColor="var(--color-green-600)"
          color="var(--color-white)"
          bgColorHover="var(--color-green-700)"
          borderRadius="0.325rem"
          border="none"
          py="12px"
        />

        <div
          className="center-in-login-card"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              marginBottom: "16px",
              color: "var(--color-gray-400)",
              fontSize: "var(--text-xs)",
              lineHeight: "var(--tw-leading, var(--text-xs--line-height))",
            }}
          >
            or continue with
          </span>
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
        <div
          className="login-signup-text"
          style={{ color: "var(--color-gray-400)" }}
        >
          Don't have an account?{" "}
          <a
            href="/signup"
            className="login-signup-link"
            style={{ color: "var(--color-green-600)" }}
          >
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
    </Main>
  );
}

export default Login;
