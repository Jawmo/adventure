export type BorderRadiusValue = 0 | 0.125 | 0.25 | 0.5 | 0.75 | 1 | 2 | 5 | 15;

interface BorderRadiusProperties {
  bottomLeft?: BorderRadiusValue;
  bottomRight?: BorderRadiusValue;
  topLeft?: BorderRadiusValue;
  topRight?: BorderRadiusValue;
}

export type BorderRadiusValues = BorderRadiusValue | BorderRadiusProperties;

export function getBorderRadius(borderRadius: BorderRadiusValues | undefined) {
  if (borderRadius === undefined) {
    return {};
  }

  if (isBorderRadiusValue(borderRadius)) {
    return { borderRadius: calcBorderRadius(borderRadius) };
  }

  const { bottomLeft, bottomRight, topLeft, topRight } = borderRadius;

  return {
    borderBottomLeftRadius:
      bottomLeft !== undefined ? `${calcBorderRadius(bottomLeft)}` : undefined,
    borderBottomRightRadius:
      bottomRight !== undefined
        ? `${calcBorderRadius(bottomRight)}`
        : undefined,
    borderTopLeftRadius:
      topLeft !== undefined ? `${calcBorderRadius(topLeft)}` : undefined,
    borderTopRightRadius:
      topRight !== undefined ? `${calcBorderRadius(topRight)}` : undefined,
  };
}

export function calcBorderRadius(borderRadius: BorderRadiusValue) {
  return `${borderRadius * 1}rem`;
}

export function isBorderRadiusValue(
  borderRadius: BorderRadiusValues
): borderRadius is BorderRadiusValue {
  return !isNaN(borderRadius as BorderRadiusValue);
}
