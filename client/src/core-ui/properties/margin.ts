export type MarginValue = 0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 8;

interface MarginProperties {
  bottom?: MarginValue;
  left?: MarginValue;
  right?: MarginValue;
  top?: MarginValue;
}

export type MarginValues = MarginValue | MarginProperties;

export function getMargin(margin: MarginValues | undefined) {
  if (margin === undefined) {
    return {};
  }

  if (isMarginValue(margin)) {
    return { margin: calcMargin(margin) };
  }

  const { bottom, left, right, top } = margin;

  return {
    marginBottom: bottom !== undefined ? `${calcMargin(bottom)}` : undefined,
    marginLeft: left !== undefined ? `${calcMargin(left)}` : undefined,
    marginRight: right !== undefined ? `${calcMargin(right)}` : undefined,
    marginTop: top !== undefined ? `${calcMargin(top)}` : undefined,
  };
}

export function calcMargin(margin: MarginValue) {
  return `${margin * 1}rem`;
}

export function isMarginValue(margin: MarginValues): margin is MarginValue {
  return !isNaN(margin as MarginValue);
}
