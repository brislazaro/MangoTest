export const getDistanceFromSliderStartToThumb = (
  mousePosition: number,
  sliderStartPosition: number
) => {
  return mousePosition - sliderStartPosition;
};

export const calculateThumbPercentage = (
  thumbDistanceFromStart: number,
  sliderWidth: number
) => {
  return (thumbDistanceFromStart / sliderWidth) * 100;
};

export const calculateThumbValueFromPercentage = (
  min: number,
  max: number,
  percentage: number
) => {
  return Math.round(min + ((max - min) * percentage) / 100);
};

export const getNewThumbValue = (
  mousePosition: number,
  sliderRect: DOMRect,
  min: number,
  max: number
) => {
  const thumbDistanceFromStart = getDistanceFromSliderStartToThumb(
    mousePosition,
    sliderRect.left
  );

  const newThumbPercent = calculateThumbPercentage(
    thumbDistanceFromStart,
    sliderRect.width
  );

  const newValue = calculateThumbValueFromPercentage(min, max, newThumbPercent);

  return newValue;
};
