import React, { useState } from "react";
import Head from "next/head";

function Header({ children }) {
  return (
    <>
      <Head>
        <title>Rachmawan Personal Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Hello!, if you're reading this, this is my personal portfolio created using Next Js."
        ></meta>
      </Head>
      {children}
    </>
  );
}

export default Header;
