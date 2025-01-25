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

export const FlexLayoutColumn = ({ children, style }) => {
  return (
    <div className="flex-container-column" style={style}>
      {children}
    </div>
  );
};

export const GridLayout = ({ children }) => {
  return <div className="grid-container">{children}</div>;
};

export const GridLayout3Column = ({ children }) => {
  return <div className="grid-container-3">{children}</div>;
};

export const CardGridLayout = ({
  children,
  sizeOfCard = "200px",
  margin = "2rem 0",
  textAlign = "center",
}) => {
  const style = {
    gridTemplateColumns: `repeat(auto-fill, minmax(${sizeOfCard}, 1fr))`,
    textAlign: textAlign,
    margin: margin,
  };
  return (
    <div style={style} className="card-grid-container">
      {children}
    </div>
  );
};

export const InlineImageAndTextLayout = ({ children, style }) => {
  return (
    <div className="inlineImageAndTextContainer" style={style}>
      {children}
    </div>
  );
};
