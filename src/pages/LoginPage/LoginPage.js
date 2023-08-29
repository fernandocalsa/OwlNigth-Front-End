import React from "react";
// import { IconComponentNode } from "./IconComponentNode";
// import { IconGoogleFillColoredColorYesRoundYes } from "./IconGoogleFillColoredColorYesRoundYes";
// import { Social40Px } from "./Social40Px";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="desktop">
      <div className="overlap">
        <div className="overlap-group">
          <div className="group">
            <div className="group-wrapper">
              <img className="img" alt="Group" src="" />
            </div>
          </div>
          <div className="text-wrapper">Hello, Welcome back</div>
        </div>
        <div className="div-wrapper">
          <div className="div">
            <input type="text" placeholder="Email" className="input" /></div>
        </div>
        <div className="overlap-2">
          <div className="div">Password</div>
        </div>
        <div className="rectangle" />
        <p className="don-t-you-have-an">
          <span className="span">Don't you have an account? </span>
          <span className="text-wrapper-2">Create account </span>
        </p>
        <div className="text-wrapper-3">Or</div>
        <div className="text-wrapper-4">Remember me</div>
        <div className="text-wrapper-5">Reset Password</div>
        <img className="line" alt="Line" src="" />
        <img className="line-2" alt="Line" src="" />
        {/* <Social40Px className="social" />
        <IconGoogleFillColoredColorYesRoundYes className="social-px" />
        <IconComponentNode className="social-40px" /> */}
      </div>
      <div className="text-wrapper-6">OwlNigth</div>
    </div>
  );
};
export default LoginPage;