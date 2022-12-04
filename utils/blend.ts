import { decomposeColor, hexToRgb, rgbToHex } from '@mui/material';

/**
 * Blend hex color.
 *
 * @param color Color to blend in hex format
 *
 * @param colorAlpha Alpha channel is fraction from 0 to 1
 *
 * @return Blended color
 * */
export default function blend(color: string, colorAlpha: number): string {
  const colorValues = decomposeColor(hexToRgb(color)).values;

  return rgbToHex(`rgba(${colorValues[0]}, ${colorValues[1]}, ${colorValues[2]}, ${colorAlpha})`);
}
