export const reduceString = (str, numCaracters) => {
  if (str.length > 0) {
    if (str.length <= numCaracters) {
      return str;
    } else {
      return str.slice(0, numCaracters) + "...";
    }
  }
  return "";
};
