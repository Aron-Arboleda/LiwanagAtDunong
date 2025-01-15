import React, { useState, useEffect } from "react";
import FollowersCountCard from "../components/FollowersCountCard/FollowersCountCard";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { TbBrandX } from "react-icons/tb";
import { CardGridLayout } from "@components/Layouts/Layouts";
import { CONFIG } from "../../../config";
import { StandardChunkFiveSubTitleH4 } from "@components/PageTitles/PageTitles";

const AdminHomePage = () => {
  const [data, setData] = useState({
    facebook: { followers: null, loading: true },
    instagram: { followers: null, loading: true },
    tiktok: { followers: null, loading: true },
    twitter: { followers: null, loading: true },
    youtube: { followers: null, loading: true },
  });

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await fetch(
          `${CONFIG.BACKEND_API}admin/get_all_followers_count.php`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (data.message === "Follower data retrieved successfully.") {
          const socmedFollowersData = data.data;
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
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Error fetching followers:", error);
      }
    };

    // Call the function
    fetchFollowers();
  }, []);

  return (
    <>
      <h1>Home</h1>
      <StandardChunkFiveSubTitleH4
        title="Social Media Followers Tracker"
        style={{ color: "black", margin: "0" }}
      />
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
    </>
  );
};

export default AdminHomePage;
