import { Theme } from '@mui/material';

export type DividerStyleSX = {
  borderColor: string;
};

export default function getDividerStyleSX(theme: Theme): DividerStyleSX {
  return {
    borderColor: theme.palette.sys.outline,
  };
}
