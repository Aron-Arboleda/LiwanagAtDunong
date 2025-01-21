export const checkNull = (value, fallback = "--") => {
  return value === null || value === undefined ? fallback : value;
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
