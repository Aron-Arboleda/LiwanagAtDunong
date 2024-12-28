import Footer from "@components/Footer/Footer";
import NavigationBar from "@components/NavigationBar/NavigationBar";
import React from "react";
import "./Layouts.css";

export const StandardLayout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export const FlexLayout = ({ children }) => {
  return <div className="flex-container">{children}</div>;
};

export const FlexLayoutColumn = ({ children }) => {
  return <div className="flex-container-column">{children}</div>;
};

export const GridLayout = ({ children }) => {
  return <div className="grid-container">{children}</div>;
};

export const GridLayout3Column = ({ children }) => {
  return <div className="grid-container-3">{children}</div>;
};

export const CardGridLayout = ({ children }) => {
  return <div className="card-grid-container">{children}</div>;
};

export const InlineImageAndTextLayout = ({ children }) => {
  return <div className="inlineImageAndTextContainer">{children}</div>;
};
