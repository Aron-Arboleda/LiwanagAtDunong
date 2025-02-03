import { CONFIG } from "@controllers/config";

export async function fetchFacebookData() {
  try {
    const url =
      "https://api.apify.com/v2/datasets/KYnmYS9FNxzFnOS3v/items?token=apify_api_kHxoLYM4jB4oX8x9vRLc5vrNodVDWa46dQgj";
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`Facebook API error: ${response.statusText}`);
    const data = await response.json();
    return data[0] || null;
  } catch (error) {
    throw new Error(`Facebook data fetch failed: ${error.message}`);
  }
}

export async function fetchInstagramData() {
  try {
    const url =
      "https://instagram-scraper-api2.p.rapidapi.com/v1/info?username_or_id_or_url=liwanagatdunong";
    const options = {
      headers: {
        "x-rapidapi-key": "a77516da66msh527c0a3be893d86p154fbbjsn2b4681c7a26a",
        "x-rapidapi-host": "instagram-scraper-api2.p.rapidapi.com",
      },
    };
    const response = await fetch(url, options);
    if (!response.ok)
      throw new Error(`Instagram API error: ${response.statusText}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    throw new Error(`Instagram data fetch failed: ${error.message}`);
  }
}

export async function fetchTiktokData() {
  try {
    const url =
      "https://tiktok-api23.p.rapidapi.com/api/user/info?uniqueId=liwanagatdunong";
    const options = {
      headers: {
        "x-rapidapi-key": "a77516da66msh527c0a3be893d86p154fbbjsn2b4681c7a26a",
        "x-rapidapi-host": "tiktok-api23.p.rapidapi.com",
      },
    };
    const response = await fetch(url, options);
    if (!response.ok)
      throw new Error(`TikTok API error: ${response.statusText}`);
    const data = await response.json();
    return data.userInfo;
  } catch (error) {
    throw new Error(`TikTok data fetch failed: ${error.message}`);
  }
}

export async function fetchTwitterData() {
  try {
    const url =
      "https://twitter-api45.p.rapidapi.com/screenname.php?screenname=liwanagatdunong";
    const options = {
      headers: {
        "x-rapidapi-key": "a77516da66msh527c0a3be893d86p154fbbjsn2b4681c7a26a",
        "x-rapidapi-host": "twitter-api45.p.rapidapi.com",
      },
    };
    const response = await fetch(url, options);
    if (!response.ok)
      throw new Error(`Twitter API error: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    throw new Error(`Twitter data fetch failed: ${error.message}`);
  }
}

export async function fetchYoutubeData() {
  try {
    const url =
      "https://yt-api.p.rapidapi.com/channel/home?forUsername=%40LiwanagatDunong";
    const options = {
      headers: {
        "x-rapidapi-key": "a77516da66msh527c0a3be893d86p154fbbjsn2b4681c7a26a",
        "x-rapidapi-host": "yt-api.p.rapidapi.com",
      },
    };
    const response = await fetch(url, options);
    if (!response.ok)
      throw new Error(`YouTube API error: ${response.statusText}`);
    const data = await response.json();
    return data.meta;
  } catch (error) {
    throw new Error(`YouTube data fetch failed: ${error.message}`);
  }
}

export async function updateFollowers() {
  try {
    const [facebookData, instagramData, twitterData, tiktokData, youtubeData] =
      await Promise.all([
        fetchFacebookData(),
        fetchInstagramData(),
        fetchTwitterData(),
        fetchTiktokData(),
        fetchYoutubeData(),
      ]);

    const updates = [
      { id: 1, followers_count: facebookData?.followers },
      { id: 2, followers_count: instagramData?.follower_count },
      { id: 3, followers_count: twitterData?.sub_count },
      { id: 4, followers_count: tiktokData?.stats?.followerCount },
      { id: 5, followers_count: youtubeData?.subscriberCount },
    ];

    // Validate all follower counts
    for (const update of updates) {
      if (
        typeof update.followers_count === "undefined" ||
        update.followers_count === null
      ) {
        throw new Error(`Invalid followers count for platform ID ${update.id}`);
      }
    }

    // Send update request
    const putUrl = `${CONFIG.BACKEND_API}admin/update_all_followers_count.php`;
    const response = await fetch(putUrl, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ updates }),
    });

    if (!response.ok) {
      throw new Error(`Update failed with status: ${response.status}`);
    }

    const responseData = await response.json();
    return { message: responseData.message, success: true };
  } catch (error) {
    return { message: error.message, success: false };
  }
}
