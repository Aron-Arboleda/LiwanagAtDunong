import "./Section.css";

export const ContentArea = ({ children, fullWidth = false }) => {
  return (
    <div className={fullWidth ? "content-area-full" : "content-area"}>
      {children}
    </div>
  );
};

const Section = ({
  children,
  backgroundColor = "transparent",
  fullContentArea = false,
}) => {
  const style = {
    backgroundColor,
  };
  return (
    <div className="section" style={style}>
      <ContentArea fullWidth={fullContentArea}>{children}</ContentArea>
    </div>
  );
};

export default Section;
