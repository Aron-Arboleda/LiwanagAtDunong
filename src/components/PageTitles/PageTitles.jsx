import "./PageTitles.css";

export const BrownCircleTitle = ({
  title = "Title",
  id = "brownCircleTitle",
}) => {
  return (
    <div className="circleContainer">
      <div className="brownCircle">
        <h1 id={id} className="pageTitleH1 pageTitleH1-style2-2">
          {title}
        </h1>
      </div>
    </div>
  );
};

export const CorbenWhiteCurvyTitle = ({ title = "Title" }) => {
  return <h1 className="pageTitleH1 pageTitleH1-style2">{title}</h1>;
};

export const SharpBrightWhiteShadowTitle = ({ title = "Title" }) => {
  return <h1 className="pageTitleH1 pageTitleH1-style3">{title}</h1>;
};

export const StandardChunkFiveTitle = ({ title = "Title" }) => {
  return <h1 className="pageTitleH1 pageTitleH1-style1">{title}</h1>;
};

export const StandardChunkFiveSubTitleH2 = ({ title = "Title" }) => {
  return <h2 className="pageSubTitleH2">{title}</h2>;
};
