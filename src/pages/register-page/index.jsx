import React, { useState } from "react";
import * as Yup from "yup";
import InputComponent from "../../../src/components/common/InputComponent/index.jsx";
import CustomButton from "../../../src/components/common/CustomButton/index.jsx";
import SocialButton from "../../../src/components/common/SocialButton/index.jsx";
import AuthCard from "../../../src/components/common/AuthCard/index.jsx";
import { RegisterStyles } from "./styles";
import { useFormik } from "formik";

const registerSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  isAgreed: Yup.boolean().oneOf(
    [true],
    "You must agree to the terms and conditions",
  ),
});

function Register() {
  const handleRegister = (e) => {
    e.preventDefault();
    const userData = {
      firstName: formik.values.firstName,
      lastName: formik.values.lastName,
      email: formik.values.email,
      password: formik.values.password,
      confirmPassword: formik.values.confirmPassword,
      isAgreed: formik.values.isAgreed,
    };
    console.log(userData);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      isAgreed: false,
    },
    validationSchema: registerSchema,
    onSubmit: handleRegister,
  });

  const signInWithGoogle = () => console.log("Sign in with Google");
  const signInWithFB = () => console.log("Sign in with Facebook");
  const forgotPassword = (e) => {
    e.preventDefault();
    console.log("Forgot password");
  };

  return (
    <main className="py-5" style={{ backgroundColor: "rgb(26, 58, 110)" }}>
      <RegisterStyles>
        <AuthCard title="Create Account" subtitle="" onSubmit={handleRegister}>
          <div className="d-flex flex-row gap-3">
            {/*First name*/}
            <InputComponent
              type="text"
              label="First Name"
              placeholder="John"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {/* Last Name */}
            <InputComponent
              type="text"
              label="Last Name"
              placeholder="Doe"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          {/* Email */}
          <InputComponent
            type="email"
            label="Email Address"
            placeholder="you@example.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            icon="fa-regular fa-envelope"
          />

          {/* Password */}
          <InputComponent
            type="password"
            label="Password"
            placeholder="Min. 6 characters"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            icon2="fa-regular fa-eye"
          />

          {/* Confirm Password */}
          <InputComponent
            type="password"
            label="Confirm Password"
            placeholder="Confirm your password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            icon2="fa-regular fa-eye"
          />

          {/* Agree to Terms */}
          <div className="form-check mb-4">
            <input
              type="checkbox"
              className="form-check-input"
              id="agreeTerms"
              checked={formik.values.agreeTerms}
              onChange={formik.handleChange}
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
            {formik.touched.isAgreed && formik.errors.isAgreed ? (
              <div
                style={{ color: "red", fontSize: "0.8rem", marginTop: "5px" }}
              >
                {formik.errors.isAgreed}
              </div>
            ) : null}
          </div>

          {/* Submit */}
          <CustomButton
            content="CREATE ACCOUNT"
            id="registerBtn"
            classN="form-submit-btn"
            width="100%"
            bgColor="var(--color-green-600)"
            color="var(--color-white)"
            bgColorHover="var(--color-green-700)"
            borderRadius="0.375rem"
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
              or sign up with
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
          <div className="login-signup-text">
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
      </RegisterStyles>
    </main>
  );
}

export default Register;
