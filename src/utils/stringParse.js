export function transformStrForURL(inputString) {
    const transformedString = inputString.toLowerCase().replace(/\s/g, '-');
    return transformedString;
  }