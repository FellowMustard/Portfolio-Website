import React, { useState } from "react";
import Head from "next/head";

function Header({ children }) {
  return (
    <>
      <Head>
        <title>Rachmawan Personal Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </>
  );
}

export default Header;
