import React from 'react';
import { Button as MuiButton, Theme, Typography, useTheme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, getButtonStyleSX } from '@/components';

type ButtonAccountContentProps = { style: ButtonAccountStyles };

function ButtonAccountContent({ style }: ButtonAccountContentProps): JSX.Element {
  switch (style) { // Request user name
    case 'monogram':
      return (
        <Typography
          textAlign='center'
          fontSize='20px'
          fontWeight='600'
        >
          Т
        </Typography>
      );
    case 'avatar':
      return (
        <FontAwesomeIcon icon={faUser} />
      );
  }
}

export type ButtonAccountProps = {
  style: ButtonAccountStyles
  href?: string
  disabled?: boolean
  onClick?: () => void
  visibility?: boolean
};

export default function ButtonAccount({ style, href, disabled, onClick, visibility }: ButtonAccountProps): JSX.Element {
  const theme: Theme = useTheme();

  if (visibility === false) return <></>;

  return (
    <Link href={href}>
      <MuiButton
        disabled={disabled}
        disableTouchRipple
        disableElevation
        disableRipple
        disableFocusRipple
        onClick={onClick}
        sx={{
          ...getButtonStyleSX(theme, 'tonal'),
          padding: '0px',
          height: '40px',
          minWidth: '40px',
          fontSize: '18px',
        }}
      >
        <ButtonAccountContent style={style} />
      </MuiButton>
    </Link>
  );
}
