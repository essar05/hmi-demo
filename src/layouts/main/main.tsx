import React, { ReactNode } from "react";
import "./main.scss";
import { Header } from "./header/header";
import { Content } from "./content/content";
import { Footer } from "./footer/footer";

export interface IMainLayoutProps {
  children?: ReactNode;
}

/**
 * Main layout
 */
export const MainLayout: React.FunctionComponent<IMainLayoutProps> = ({children}) => {
  return (
    <div className="hmi-main">
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </div>
  );
};