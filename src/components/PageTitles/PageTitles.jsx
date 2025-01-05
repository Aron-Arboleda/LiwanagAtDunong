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

export const StandardChunkFiveTitle = ({ children, title = "Title" }) => {
  return children ? (
    <h1 className="pageTitleH1 pageTitleH1-style1">{children}</h1>
  ) : (
    <h1 className="pageTitleH1 pageTitleH1-style1">{title}</h1>
  );
};

export const StandardChunkFiveSubTitleH2 = ({ title = "Title" }) => {
  return <h2 className="pageSubTitleH2">{title}</h2>;
};

export const StandardChunkFiveSubTitleH3 = ({ title = "Title", style }) => {
  return (
    <h3 className="pageSubTitleH3" style={style}>
      {title}
    </h3>
  );
};

export const MontserratCardTitle = ({ text }) => {
  return <h3 className="montserratCardTitle">{text}</h3>;
};

export const MontserratCardInfo = ({ text }) => {
  return <p className="montserratCardInfo">{text}</p>;
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

export const MontserratUnorderedList = ({ context, list }) => {
  return (
    <>
      <MontserratCardInfoBiggerText text={context} />
      <ul className="montserratUnorderedList">
        {list.map((list, index) => (
          <MontserratBulletInfo key={index}>{list}</MontserratBulletInfo>
        ))}
      </ul>
    </>
  );
};
