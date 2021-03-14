import React from "react";
import "./main.scss";
import { Header } from "./header/header";
import { Content } from "./content/content";
import { Footer } from "./footer/footer";

export interface IMainLayoutProps {}

/**
 * Main layout
 */
export const MainLayout: React.FunctionComponent<IMainLayoutProps> = () => {
  return (
    <div className="hmi-main">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};