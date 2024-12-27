import "./CustomComponents.css";

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
