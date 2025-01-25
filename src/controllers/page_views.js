import { CONFIG } from "./config";

export const recordPageView = () => {
  fetch(`${CONFIG.BACKEND_API}analytics/page_views/create.php`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ page_url: window.location.pathname }),
  });
};
