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

export const StandardChunkFiveTitle = ({
  children,
  title = "Title",
  style,
}) => {
  return children ? (
    <h1 className="pageTitleH1 pageTitleH1-style1" style={style}>
      {children}
    </h1>
  ) : (
    <h1 className="pageTitleH1 pageTitleH1-style1" style={style}>
      {title}
    </h1>
  );
};

export const StandardChunkFiveSubTitleH2 = ({ title = "Title", style }) => {
  return (
    <h2 className="pageSubTitle pageSubTitleH2" style={style}>
      {title}
    </h2>
  );
};

export const StandardChunkFiveSubTitleH3 = ({ title = "Title", style }) => {
  return (
    <h3 className="pageSubTitle pageSubTitleH3" style={style}>
      {title}
    </h3>
  );
};

export const StandardChunkFiveSubTitleH4 = ({ title = "Title", style }) => {
  return (
    <h4 className="pageSubTitle pageSubTitleH4" style={style}>
      {title}
    </h4>
  );
};

export const StandardChunkFiveSubTitleH5 = ({ title = "Title", style }) => {
  return (
    <h5 className="pageSubTitle pageSubTitleH5" style={style}>
      {title}
    </h5>
  );
};

export const WhiteChunkFiveWithSubtleShadow = ({ title = "Title", style }) => {
  return (
    <h6 className="pageSubTitle whiteChunkFiveWithSubtleShadow" style={style}>
      {title}
    </h6>
  );
};

export const MontserratCardTitle = ({ text, style }) => {
  return (
    <h3 className="montserratCardTitle" style={style}>
      {text}
    </h3>
  );
};

export const MontserratCardInfo = ({ text, style }) => {
  return (
    <p className="montserratCardInfo" style={style}>
      {text}
    </p>
  );
};

export const MontserratTextInfo = ({
  text,
  color = "black",
  fontSize = "1rem",
}) => {
  return (
    <p
      className="montserratTextInfo"
      style={{ color: color, fontSize: fontSize }}
    >
      {text}
    </p>
  );
};

export const WhiteChunkFiveTitle = ({ text = "Title" }) => {
  return <h1 className="pageTitleH1 whiteChunkFiveTitle">{text}</h1>;
};

export const MontserratCardInfoBiggerText = ({ text, color = "black" }) => {
  const style = {
    color: color,
  };
  return (
    <p className="montserratCardInfoBiggerText" style={style}>
      {text}
    </p>
  );
};

export const MontserratBulletInfo = ({ children }) => {
  return <li className="montserratBulletInfo">{children}</li>;
};

export const MontserratUnorderedList = ({ context, list, children }) => {
  return children ? (
    <div>
      <MontserratCardInfoBiggerText text={context} />
      <ul className="montserratUnorderedList">{children}</ul>
    </div>
  ) : (
    <div>
      <MontserratCardInfoBiggerText text={context} />
      <ul className="montserratUnorderedList">
        {list.map((list, index) => (
          <MontserratBulletInfo key={index}>{list}</MontserratBulletInfo>
        ))}
      </ul>
    </div>
  );
};
