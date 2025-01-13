// const APP_ACCESS_TOKEN =
//   "EAArWKXGdZANUBOZBdp0ZCB9cgipo3O5lTEeB0PGM7Qs0qdbkxQk4BnERc58CCqV1g6k9RzzP4ytdFPVRNkBuxP8lmmxAOnnStpPeRqHgqGSbmBp6q0xfrzbHSxKsRJfUYtBct3Xdvj1nQAlN8f3qgVV5B5YZAAsNVz2v1FlD98XPIbB6lEYFPmIkEdK7OSK4jyzRf467o9zsGSsIggEZD";
// const TARGET_PAGE_ID = "Pspxi1l71apjg";

// export const getPublicPageFollowers = async () => {
//   try {
//     const response = await fetch(
//       `https://graph.facebook.com/v21.0/${TARGET_PAGE_ID}?fields=followers_count,name&access_token=${APP_ACCESS_TOKEN}`
//     );

//     if (!response.ok) {
//       throw new Error("Failed to fetch data");
//     }

//     const data = await response.json();
//     console.error("Data:", data);
//     return {
//       name: data.name,
//       followers: data.followers_count,
//     };
//   } catch (error) {
//     console.error("Error:", error);
//     return null;
//   }
// };

export const fetchFacebookData = async () => {
  // const response = await fetch(
  //   "https://facebook-scraper3.p.rapidapi.com/page/details?url=https%3A%2F%2Fwww.facebook.com%2FLiwanagAtDunongProject",
  //   {
  //     method: "GET",
  //     headers: {
  //       "x-rapidapi-key": "a77516da66msh527c0a3be893d86p154fbbjsn2b4681c7a26a",
  //       "x-rapidapi-host": "facebook-scraper3.p.rapidapi.com",
  //     },
  //   }
  // );

  // if (!response.ok) {
  //   throw new Error("Failed fetching the Facebook API followers count");
  // }

  // const data = await response.json();
  // return data.results; // Returning the fetched data

  const response = await fetch(
    "https://api.apify.com/v2/datasets/IZwRHjih25iv2AymE/items?token=apify_api_kHxoLYM4jB4oX8x9vRLc5vrNodVDWa46dQgj",
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error("Failed fetching the Facebook API followers count");
  }

  const data = await response.json();
  return data[0]; // Returning the fetched data
};

export const fetchInstagramData = async () => {
  const url =
    "https://instagram-scraper-api2.p.rapidapi.com/v1/info?username_or_id_or_url=https%3A%2F%2Fwww.instagram.com%2Fliwanagatdunong";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "a77516da66msh527c0a3be893d86p154fbbjsn2b4681c7a26a",
      "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Failed fetching the Instagram API followers count");
  }

  const data = await response.json();
  return data.data; // Returning the fetched data
};

export const fetchTiktokData = async () => {
  const url =
    "https://tiktok-api23.p.rapidapi.com/api/user/info?uniqueId=liwanagatdunong";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "a77516da66msh527c0a3be893d86p154fbbjsn2b4681c7a26a",
      "x-rapidapi-host": "tiktok-api23.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Failed fetching the TikTok API followers count");
  }

  const data = await response.json();
  return data.userInfo; // Returning the fetched data
};

export const fetchTwitterData = async () => {
  const url =
    "https://twitter-api45.p.rapidapi.com/screenname.php?screenname=liwanagatdunong";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "a77516da66msh527c0a3be893d86p154fbbjsn2b4681c7a26a",
      "x-rapidapi-host": "twitter-api45.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Failed fetching the Twitter API followers count");
  }

  const data = await response.json();
  return data; // Returning the fetched data
};

export const fetchYoutubeData = async () => {
  const url =
    "https://yt-api.p.rapidapi.com/channel/home?forUsername=%40LiwanagatDunong";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "a77516da66msh527c0a3be893d86p154fbbjsn2b4681c7a26a",
      "x-rapidapi-host": "yt-api.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error("Failed fetching the YouTube API followers count");
  }

  const data = await response.json();
  return data.meta; // Returning the fetched data
};

export const updateFollowers = async () => {
  try {
    const facebookData = await fetchFacebookData();
    const instagramData = await fetchInstagramData();
    const twitterData = await fetchTwitterData();
    const tiktokData = await fetchTiktokData();
    const youtubeData = await fetchYoutubeData();

    const updates = [
      { id: 1, followers_count: facebookData?.followers },
      { id: 2, followers_count: instagramData?.follower_count },
      { id: 3, followers_count: twitterData?.sub_count },
      { id: 4, followers_count: tiktokData?.stats?.followerCount },
      { id: 5, followers_count: youtubeData?.subscriberCount },
    ];

    for (const update of updates) {
      if (!update.followers_count) {
        throw new Error(`Invalid followers count for id ${update.id}`);
      }
    }

    const response = await fetch(
      `http://liwanagatdunong.ct.ws/includes/admin/update_all_followers_count.php`,
      {
        method: "PUT", // Use PUT for updates
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ updates }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      console.log("Successfully updated the followers count in the database.");
      console.log(data.message); // Success message
    } else {
      console.error("Error:", data.message, data.error);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

// await updateFollowers();
// // const facebookData = await fetchFacebookData();
// // console.log(facebookData?.followers);
