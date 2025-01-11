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
  try {
    const response = await fetch(
      "https://facebook-scraper3.p.rapidapi.com/page/details?url=https%3A%2F%2Fwww.facebook.com%2FLiwanagAtDunongProject",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "a77516da66msh527c0a3be893d86p154fbbjsn2b4681c7a26a",
          "x-rapidapi-host": "facebook-scraper3.p.rapidapi.com",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.results; // Returning the fetched data
  } catch (error) {
    console.error("Error fetching Facebook data:", error);
    return { results: { followers: "N/A" } }; // Fallback in case of error
  }
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

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.data; // Returning the fetched data
  } catch (error) {
    console.error("Error fetching Instagram data:", error);
    return { data: { follower_count: "N/A" } }; // Fallback in case of error
  }
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

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.userInfo; // Returning the fetched data
  } catch (error) {
    console.error("Error fetching Tiktok data:", error);
    return { message: "Error fetching Tiktok data:", error: error }; // Fallback in case of error
  }
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

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data; // Returning the fetched data
  } catch (error) {
    console.error("Error fetching Twitter data:", error);
    return { message: "Error fetching Twitter data:", error: error }; // Fallback in case of error
  }
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
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data.meta; // Returning the fetched data
  } catch (error) {
    console.error("Error fetching Youtube data:", error);
    return { message: "Error fetching Youtube data:", error: error }; // Fallback in case of error
  }
};
