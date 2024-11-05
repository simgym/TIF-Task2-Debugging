import Head from "next/head";
import React from "react";

interface ILayoutProps {
  children?: React.ReactNode;
  title?: string;
}

const Layout: React.FC<ILayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} | Form` : "Form"}</title>
      </Head>
      {children}
    </>
  );
};

export default Layout;
