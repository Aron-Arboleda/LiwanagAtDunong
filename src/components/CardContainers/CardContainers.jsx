import "./CardContainers.css";

export const GreenCardContainer = ({ children, imgSrc }) => {
  return (
    <div className="greencardcontainer">
      {imgSrc && <img src={imgSrc} alt="Image Logo" />}
      {children}
    </div>
  );
};

export const SharpCardLightShadowContainer = ({
  children,
  backgroundColor = "#fffbe6",
}) => {
  const style = {
    backgroundColor: backgroundColor,
  };
  return (
    <div className="sharpCardLightShadowContainer" style={style}>
      {children}
    </div>
  );
};
