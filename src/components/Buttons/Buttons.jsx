import "./Buttons.css";

export const StandardButton = ({
  buttonText = "Button",
  Icon,
  onClick,
  variant = "normal",
  disabled = false,
}) => {
  const variants = {
    normal: "normalButton",
    critical: "criticalButton",
  };

  return (
    <button
      className={`standardButton ${variants[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon size={18} />}
      {buttonText}
    </button>
  );
};
