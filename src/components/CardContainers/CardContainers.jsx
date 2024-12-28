import "./CardContainers.css";

export const GreenCardContainer = ({ children, imgSrc }) => {
  return (
    <>
      <div className="greencardcontainer">
        {imgSrc && <img src={imgSrc} alt="Image Logo" />}
        {children}
      </div>
    </>
  );
};
