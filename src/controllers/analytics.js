import { CONFIG } from "./config";

export const recordPageView = () => {
  fetch(`${CONFIG.BACKEND_API}analytics/page_views/create.php`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ page_url: window.location.pathname }),
  });
};

export const fetchWebsiteStats = async () => {
  try {
    const response = await fetch(
      `${CONFIG.BACKEND_API}admin/stats/get_stats.php`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const responseData = await response.json();

    if (response.ok) {
      return {
        data: responseData.data,
        message: responseData.message,
        success: true,
      };
    } else {
      return {
        message: responseData.message || "Failed to fetch website stats.",
        success: false,
      };
    }
  } catch (error) {
    return { message: "Error: Server error, " + error, success: false };
  }
};

// Visitors

export const recordVisitor = async () => {
  try {
    const response = await fetch(
      `${CONFIG.BACKEND_API}analytics/visitors/create.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      // Successfully tracked the visitor
      return { message: data.message, success: true };
    } else {
      // Handle server error response
      return { message: data.message, success: false };
    }
  } catch (error) {
    // Handle network or other errors
    return { message: "Error: Server error, " + error, success: false };
  }
};

export const callRecordVisitor = async () => {
  if (!sessionStorage.getItem("visitor_tracked")) {
    trackVisitor()
      .then((result) => {
        console.log(result.message);
        if (result.success) {
          sessionStorage.setItem("visitor_tracked", "true"); // Mark as tracked for the session
        }
      })
      .catch((error) => {
        console.error("Tracking failed:", error.message);
      });
  }
};

// Automation

export const recordInitialPageLoadStatistics = async () => {
  await recordPageView();
  await recordVisitor();
};
