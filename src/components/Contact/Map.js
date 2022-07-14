/** @jsx jsx */
import { jsx, css } from "@emotion/core";
// import React from "react";

const Map = () => (
  <div css={styles} className="mapouter">
  <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d54149.64658256261!2d35.89311894459144!3d31.978447292291666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1siframe%20jordan!5e0!3m2!1sen!2sjo!4v1657188428237!5m2!1sen!2sjo" width="600" height="450"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 50%;
  min-height: 60vh;
  iframe {
    width: 100%;
    height: 100%;
    display: block;
    border: none;
  }
  @media (max-width: 1200px) {
    max-width: 100%;
    height: 60vh;
  }
`;

export default Map;
