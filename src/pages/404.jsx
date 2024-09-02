import React from "react";
import image from "../images/404.gif";
import SEO from "../components/SEO";

export default function Page404() {
  return (
    <>
      <SEO meta={[{ name: "robots", content: "noindex" }]} />

      <h1>404 :(</h1>
      <img style={{ maxWidth: "90vw" }} src={image} alt="Not found" />
    </>
  );
}
