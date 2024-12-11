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

export const getIndexPercentageFromValue = (
  value: number,
  values: number[]
) => {
  const index = values.indexOf(value);
  return (index / (values.length - 1)) * 100;
};

export const getNearestValueFromCurrentThumb = (
  value: number,
  rangeValues: number[]
) => {
  return rangeValues.reduce((nearest, current) =>
    Math.abs(current - value) < Math.abs(nearest - value) ? current : nearest
  );
};
