import "./PageLists.scss";

export const GradientOrderedList = ({ list }) => {
  return (
    <ol className="gradient-list">
      {list.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>
  );
};
