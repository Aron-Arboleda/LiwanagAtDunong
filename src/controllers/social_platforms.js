import { CONFIG } from "@controllers/config";

export const fetchFollowers = async () => {
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

    const fetchedResponse = await response.json();

    return {
      message: fetchedResponse.message,
      success: true,
      data: fetchedResponse.data,
    };
  } catch (error) {
    return {
      message: error.message,
      success: false,
    };
  }
};
