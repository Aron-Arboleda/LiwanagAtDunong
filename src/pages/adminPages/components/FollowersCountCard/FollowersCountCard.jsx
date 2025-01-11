import "./FollowersCountCard.css";

import { FaFacebook } from "react-icons/fa";

const FollowersCountCard = ({
  title = "Title",
  count = "6,234",
  username = "@liwanagatdunong",
  socmedLink = "https://www.facebook.com/liwanagatdunong",
  Icon = FaFacebook,
}) => {
  return (
    <div className="followersCountContainer">
      <div className="followersCountContainer-row1">
        <div>
          <h2>{title}</h2>
          <p>{count}</p>
        </div>
        <div className="followersCountIcon">
          <Icon color="#347928" size={36} />
        </div>
      </div>
      <a href={socmedLink}>{username}</a>
    </div>
  );
};

export default FollowersCountCard;
