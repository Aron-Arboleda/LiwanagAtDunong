import XButton from "@components/CustomComponents/CustomComponents";
import "./CardContainers.css";

export const CorporateStyledContainer = ({ children, imgSrc }) => {
  return (
    <div className="corporateStyledContainer">
      {imgSrc && <img src={imgSrc} alt="Image Logo" loading="lazy" />}
      {children}
    </div>
  );
};

export const SharpCardLightShadowContainer = ({ children, style }) => {
  return (
    <div className="sharpCardLightShadowContainer" style={style}>
      {children}
    </div>
  );
};

export const CartoonyContainer = ({ children, style, handleClose }) => {
  return (
    <div className="cartoonyContainer" style={style}>
      {handleClose && (
        <XButton
          onClick={() => {
            handleClose();
          }}
        />
      )}
      {children}
    </div>
  );
};
