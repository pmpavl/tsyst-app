import { decomposeColor, hexToRgb, rgbToHex } from '@mui/material';
import { normal } from 'color-blend';

/**
 * Blend two colors with the `normal` blend mode use package `color-blend`.
 *
 * @param background Main color in hex or `#rrggbbaa` format
 *
 * @param foreground Second color in hex format
 *
 * @param foregroundAlpha Alpha channel for second color is fraction from 0 to 1
 *
 * @return Blended color
 * */
export default function blendBackground(background: string, foreground: string, foregroundAlpha: number): string {
  const backgroundValues = decomposeColor(hexToRgb(background)).values;
  const foregroundValues = decomposeColor(hexToRgb(foreground)).values;

  const backgroundValuesA = backgroundValues.length === 4 ? backgroundValues[3] : 1;

  const blend = normal(
    {
      r: backgroundValues[0],
      g: backgroundValues[1],
      b: backgroundValues[2],
      a: backgroundValuesA,
    },
    {
      r: foregroundValues[0],
      g: foregroundValues[1],
      b: foregroundValues[2],
      a: foregroundAlpha,
    },
  );

  if (blend.a === 1) {
    return rgbToHex(`rgb(${blend.r}, ${blend.g}, ${blend.b})`);
  }

  return rgbToHex(`rgba(${blend.r}, ${blend.g}, ${blend.b}, ${blend.a})`);
}
