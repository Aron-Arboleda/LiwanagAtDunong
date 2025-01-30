import numeral from "numeral";

export const checkNull = (value, fallback = "--") => {
  return value === null || value === undefined || value === ""
    ? fallback
    : value;
};

export const formatDate = (value) => {
  const filteredValue = checkNull(value);
  if (filteredValue === "--") return filteredValue;

  const dateOnlyRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (typeof value === "string" && dateOnlyRegex.test(value)) {
    const date = new Date(value);
    const options = { year: "numeric", month: "short", day: "numeric" };
    return isNaN(date)
      ? value
      : new Intl.DateTimeFormat("en-US", options).format(date);
  }

  const date = new Date(value);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return isNaN(date)
    ? value
    : new Intl.DateTimeFormat("en-US", options).format(date);
};

// Helper function to format the month (YYYY-MM -> Jan 2024)
export const formatMonth = (yearMonth) => {
  const date = new Date(yearMonth + "-01"); // Convert to a valid date format
  const options = { month: "short", year: "numeric" }; // Include both abbreviated month and full year
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

export const formatCompressWithLetters = (views) => {
  return numeral(views).format("0a"); // Formats the number in short form (e.g., 1K, 1.3M)
};

// for testing purposes
export const getNextSundayDate = () => {
  const today = new Date();
  const daysUntilSunday = today.getDay() === 0 ? 0 : 7 - today.getDay(); // If today is Sunday, return today
  const nextSunday = new Date(today);
  nextSunday.setDate(today.getDate() + daysUntilSunday);

  return nextSunday.toISOString().split("T")[0]; // Return in YYYY-MM-DD format
};

export const pickRandomFromArray = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};
