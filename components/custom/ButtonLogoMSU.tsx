import React from 'react';
import Image from 'next/image';
import { Button as MuiButton, Theme, useTheme } from '@mui/material';
import { MetaContext } from '@/context';
import { getButtonStyleSX, Link } from '@/components';

const MSU_LIGHT = '/logo/msu-light.png';
const MSU_DARK = '/logo/msu-dark.png';

export type ButtonLogoMSUProps = {
  style: ButtonStyles
  href?: string
  disabled?: boolean
};

export default function ButtonLogoMSU({ style, href, disabled }: ButtonLogoMSUProps): JSX.Element {
  const theme: Theme = useTheme();
  const { mode } = React.useContext(MetaContext);

  return (
    <MuiButton
      disabled={disabled}
      disableTouchRipple
      disableElevation
      disableRipple
      disableFocusRipple
      sx={{
        ...getButtonStyleSX(theme, style),
        padding: '0px',
        height: '48px',
        minWidth: '48px',
      }}
    >
      <Link href={href}>
        <Image
          src={mode === 'light' ? MSU_LIGHT : MSU_DARK}
          width={44}
          height={44}
          quality={100}
          alt='Logo MSU'
          style={{ fontSize: '10px' }}
        />
      </Link>
    </MuiButton>
  );
}
