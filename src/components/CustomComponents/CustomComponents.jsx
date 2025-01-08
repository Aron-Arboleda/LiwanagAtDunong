import "./CustomComponents.css";
import Info from "lucide-react/dist/esm/icons/info";
import AlertTriangle from "lucide-react/dist/esm/icons/alert-triangle";
import AlertCircle from "lucide-react/dist/esm/icons/alert-circle";

export const AnnouncementBar = () => {
  return (
    <div className="announcementBar">
      <div className="marquee">
        <p>
          Liwanag at Dunong Project reels and TikTok videos! Follow our social
          media pages for more content like this! #TaraSaKommyu
          #EdukasyonParaSaLahat
        </p>
        <p>
          Liwanag at Dunong Project reels and TikTok videos! Follow our social
          media pages for more content like this! #TaraSaKommyu
          #EdukasyonParaSaLahat
        </p>
      </div>
    </div>
  );
};

export const PageDivider = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "30px",
        backgroundColor: "#fffbe6",
      }}
    ></div>
  );
};

export const PageDividerThin = ({ color = "#fffbe6", margin }) => {
  return (
    <div
      style={{
        width: "100%",
        borderBottom: `1px solid ${color}`,
        margin: margin,
      }}
    ></div>
  );
};

export const Callout = ({ variant = "note", children }) => {
  const variantLegend = {
    note: {
      backgroundColor: "#ffffff",
      color: "#000",
      icon: <Info size={28} />,
    },
    warning: {
      backgroundColor: "#fff1a7",
      color: "#000",
      icon: <AlertTriangle size={28} />,
    },
    error: {
      backgroundColor: "#ff4026",
      color: "#fff",
      icon: <AlertCircle size={28} color="#fff" />,
    },
  };

  const style = {
    backgroundColor: variantLegend[variant].backgroundColor,
    borderColor: variantLegend[variant].borderColor,
    color: variantLegend[variant].color,
  };

  return (
    <div className="callout" style={style}>
      <div className="calloutIcon">{variantLegend[variant].icon}</div>
      <p className="calloutText">{children}</p>
    </div>
  );
};

import { AiOutlineClose } from "react-icons/ai";

const XButton = ({ onClick, size = 24, color = "#000" }) => {
  return (
    <button className="x-button" onClick={onClick} aria-label="Close">
      <AiOutlineClose size={size} color={color} />
    </button>
  );
};

export default XButton;
