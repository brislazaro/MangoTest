export const removeLetters = (value: string) => {
  return value.replace(/[^0-9]/g, "");
};

export const removeLeftZeros = (value: string) => {
  return value.replace(/^0+/, "") || "0";
};

export const parseRangeInput = (value: string) => {
  let newValue = removeLetters(value);
  newValue = removeLeftZeros(newValue);

  return newValue;
};
