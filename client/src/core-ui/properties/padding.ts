export type PaddingValue = 0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5;

interface PaddingProperties {
  bottom?: PaddingValue;
  left?: PaddingValue;
  right?: PaddingValue;
  top?: PaddingValue;
}

export type PaddingValues = PaddingValue | PaddingProperties;

export function getPadding(padding: PaddingValues | undefined) {
  if (padding === undefined) {
    return {};
  }

  if (isPaddingValue(padding)) {
    return { padding: calcPadding(padding) };
  }

  const { bottom, left, right, top } = padding;

  return {
    paddingBottom: bottom !== undefined ? `${calcPadding(bottom)}` : undefined,
    paddingLeft: left !== undefined ? `${calcPadding(left)}` : undefined,
    paddingRight: right !== undefined ? `${calcPadding(right)}` : undefined,
    paddingTop: top !== undefined ? `${calcPadding(top)}` : undefined,
  };
}

export function calcPadding(padding: PaddingValue) {
  return `${padding * 1}rem`;
}

export function isPaddingValue(
  padding: PaddingValues
): padding is PaddingValue {
  return !isNaN(padding as PaddingValue);
}
