import React from "react";
import { google, slack, dropbox, githubMarkBlack, githubLogoBlack, atlassian, shopify, githubLogoWhite, githubMark } from "./imports";
import "./brand.css";
const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <a href="#"> <img src={githubMarkBlack} alt="google" className="github" /> </a>
      </div>
      <div>
        <img src={slack} alt="slack" className="brand-img" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" className="brand-img" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" className="brand-img" />
      </div>
      <div>
        <img src={shopify} alt="shopify" className="brand-img" />
      </div>
    </div>
  );
};

export default Brand;
