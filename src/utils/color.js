export function parseRGB(rgbString) {
  const rgb = rgbString.match(/\d+/g);
  return [parseInt(rgb[0]), parseInt(rgb[1]), parseInt(rgb[2])];
}

export function brightenColor(rgbString, percent) {
  const [r, g, b] = parseRGB(rgbString);

  const newR = Math.min(255, r + Math.round(255 * (percent / 100)));
  const newG = Math.min(255, g + Math.round(255 * (percent / 100)));
  const newB = Math.min(255, b + Math.round(255 * (percent / 100)));

  return `rgb(${newR}, ${newG}, ${newB})`;
}
