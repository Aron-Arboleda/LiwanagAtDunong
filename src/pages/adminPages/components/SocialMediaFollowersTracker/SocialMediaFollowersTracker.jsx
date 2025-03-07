import { CardGridLayout } from "@components/Layouts/Layouts";
import { StandardChunkFiveSubTitleH4 } from "@components/PageTitles/PageTitles";
import React, { useContext } from "react";
import FollowersCountCard from "../FollowersCountCard/FollowersCountCard";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { TbBrandX } from "react-icons/tb";
import { useState, useEffect } from "react";
import { fetchFollowers } from "@controllers/social_platforms";
import AuthContext from "@contexts/AuthContext";
import { StandardButton } from "@components/Buttons/Buttons";

import RefreshCCW from "lucide-react/dist/esm/icons/refresh-ccw-dot";
import "./SocialMediaFollowersTracker.css";
import { ToastContainer } from "react-toastify";
import { showActionDoneMessage } from "../DataTable/DataTable";
import { updateFollowers } from "@utils/get_latest_followers_counts";

const SocialMediaFollowersTracker = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    facebook: { followers: null, loading: true },
    instagram: { followers: null, loading: true },
    tiktok: { followers: null, loading: true },
    twitter: { followers: null, loading: true },
    youtube: { followers: null, loading: true },
  });

  const loadFollowers = () => {
    fetchFollowers().then((response) => {
      const socmedFollowersData = response.data;
      setData({
        facebook: {
          followers: socmedFollowersData[0]?.followers_count || "N/A",
          loading: false,
        },
        instagram: {
          followers: socmedFollowersData[1]?.followers_count || "N/A",
          loading: false,
        },
        tiktok: {
          followers: socmedFollowersData[3]?.followers_count || "N/A",
          loading: false,
        },
        twitter: {
          followers: socmedFollowersData[2]?.followers_count || "N/A",
          loading: false,
        },
        youtube: {
          followers: socmedFollowersData[4]?.followers_count || "N/A",
          loading: false,
        },
      });
    });
  };

  const handleUpdateFollowers = () => {
    setLoading(true);
    setData({
      facebook: { followers: null, loading: true },
      instagram: { followers: null, loading: true },
      tiktok: { followers: null, loading: true },
      twitter: { followers: null, loading: true },
      youtube: { followers: null, loading: true },
    });

    updateFollowers().then((response) => {
      loadFollowers();
      if (!response.success) {
        setLoading(false);
        showActionDoneMessage(
          "Fetching API failed, Showed the latest followers counts instead.",
          false
        );
        return;
      }
      setLoading(false);
      showActionDoneMessage("Followers count updated successfully.", true);
    });
  };

  useEffect(() => {
    loadFollowers();
  }, []);

  return (
    <>
      <StandardChunkFiveSubTitleH4
        title="Social Media Followers Tracker"
        style={{ color: "black", margin: "0" }}
      />
      {user && user.user_role === "super_admin" && (
        <div className="updateFollowersContainer">
          <StandardButton
            onClick={handleUpdateFollowers}
            buttonText={loading ? "Fetching.." : "Update"}
            Icon={RefreshCCW}
            disabled={loading ? true : false}
          />
          <span>
            Only click this button once per day to avoid hitting the API rate
            limit.
          </span>
        </div>
      )}

      <CardGridLayout sizeOfCard="290px" margin="1rem 0">
        <FollowersCountCard
          title="Facebook"
          count={
            data.facebook.loading
              ? "Loading..."
              : data.facebook.followers.toLocaleString()
          }
          username="@LiwanagAtDunongProject"
          Icon={FaFacebook}
          socmedLink="https://www.facebook.com/LiwanagAtDunongProject"
        />
        <FollowersCountCard
          title="Instagram"
          count={
            data.instagram.loading
              ? "Loading..."
              : data.instagram.followers.toLocaleString()
          }
          username="@liwanagatdunong"
          Icon={FaInstagram}
          socmedLink="https://www.instagram.com/liwanagatdunong"
        />
        <FollowersCountCard
          title="TikTok"
          count={data.tiktok.loading ? "Loading..." : data.tiktok.followers}
          username="@liwanagatdunong"
          Icon={FaTiktok}
          socmedLink="https://www.tiktok.com/@liwanagatdunong"
        />
        <FollowersCountCard
          title="X (Twitter)"
          count={data.twitter.loading ? "Loading..." : data.twitter.followers}
          username="@liwanagatdunong"
          Icon={TbBrandX}
          socmedLink="https://x.com/liwanagatdunong"
        />
        <FollowersCountCard
          title="YouTube"
          count={data.youtube.loading ? "Loading..." : data.youtube.followers}
          username="@LiwanagatDunong"
          Icon={FaYoutube}
          socmedLink="https://www.youtube.com/@LiwanagatDunong"
        />
      </CardGridLayout>
      <ToastContainer />
    </>
  );
};

export default SocialMediaFollowersTracker;
