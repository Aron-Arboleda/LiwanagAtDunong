export const checkNull = (value, fallback = "--") => {
  return value === null || value === undefined ? fallback : value;
};
