import "./CustomComponents.css";
import { Info, AlertTriangle, AlertCircle } from "lucide-react";

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
