import React, { useState, useEffect } from "react";
import FollowersCountCard from "../components/FollowersCountCard/FollowersCountCard";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { TbBrandX } from "react-icons/tb";
import { CardGridLayout } from "@components/Layouts/Layouts";
import {
  fetchFacebookData,
  fetchInstagramData,
  fetchTiktokData,
  fetchTwitterData,
  fetchYoutubeData,
} from "@utils/gettingFollowersCount";

const AdminHomePage = () => {
  const [data, setData] = useState({
    facebook: { followers: null, loading: true },
    instagram: { followers: null, loading: true },
    tiktok: { followers: null, loading: true },
    twitter: { followers: null, loading: true },
    youtube: { followers: null, loading: true },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const facebook = await fetchFacebookData();
        const instagram = await fetchInstagramData();
        const tiktok = await fetchTiktokData();
        const twitter = await fetchTwitterData();
        const youtube = await fetchYoutubeData();
        console.log("Facebook:", facebook);

        setData({
          facebook: {
            followers: facebook?.followers || "N/A",
            loading: false,
          },
          instagram: {
            followers: instagram?.follower_count || "N/A",
            loading: false,
          },
          tiktok: {
            followers: tiktok?.stats?.followerCount || "N/A",
            loading: false,
          },
          twitter: {
            followers: twitter?.sub_count || "N/A",
            loading: false,
          },
          youtube: {
            followers: youtube?.subscriberCount || "N/A",
            loading: false,
          },
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Home</h1>
      <CardGridLayout sizeOfCard="290px">
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
