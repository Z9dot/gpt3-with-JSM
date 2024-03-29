import React from "react";
import {
  google,
  slack,
  dropbox,
  atlassian,
  shopify,
} from "./imports";
import "./brand.css";
const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="google" className="brand-img" />
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
