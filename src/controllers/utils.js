import { CONFIG } from "./config";

export const updateFollowersCounts = async () => {
  try {
    const response = await fetch(
      `${CONFIG.BACKEND_API}utils/get_latest_followers_counts.php`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      return { message: "Updating Followers Success!", success: true };
    } else {
      return { message: "Updating Followers Failed!", success: false };
    }
  } catch (error) {
    return { message: "Error: Archiving failed " + error, success: false };
  }
};
