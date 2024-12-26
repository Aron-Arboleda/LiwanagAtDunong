import ContentArea from "@components/ContentArea/ContentArea";

const Section = ({ children, backgroundColor = "transparent" }) => {
  const style = {
    backgroundColor,
    minHeight: "700px",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    padding: "4rem 0",
  };
  return (
    <div style={style}>
      <ContentArea>{children}</ContentArea>
    </div>
  );
};

export default Section;
