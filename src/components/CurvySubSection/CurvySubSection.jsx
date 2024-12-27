import "./CurvySubSection.css";

const CurvySubSection = ({ children }) => {
  return (
    <div className="curvysubsection wrapper cartoonyBorder cartoonyComponentShadow">
      {children}
    </div>
  );
};

export default CurvySubSection;
