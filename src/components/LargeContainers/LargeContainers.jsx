import "./LargeContainers.css";

export const MainContainer = ({ children }) => {
  return <div className="main-container">{children}</div>;
};

export const TransparentLargeContainer = ({ children }) => {
  return <div className="transparentlargecontainer">{children}</div>;
};

export const WhiteLargeContainer = ({ children }) => {
  return <div className="whitelargecontainer">{children}</div>;
};

export const CurvyLargeContainer = ({ children, style }) => {
  return (
    <div
      className="curvylargecontainer wrapper cartoonyBorder cartoonyComponentShadow"
      style={style}
    >
      {children}
    </div>
  );
};

export const CardLargeContainer = ({ children }) => {
  return <div className="cardlargecontainer">{children}</div>;
};
