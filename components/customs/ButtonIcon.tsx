import React from 'react';
import { Button as MuiButton, Theme, useTheme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faSun, faMoon, faBars, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from '@/customs';
import { getButtonStyleSX } from '@/styles';

function getFontAwesomeIconDefinition(icon: Icons): IconDefinition {
  switch (icon) {
    case 'sun': return faSun;
    case 'moon': return faMoon;
    case 'bars': return faBars;
    case 'github': return faGithub;
    case 'eyeSlash': return faEyeSlash;
    case 'eye': return faEye;
  }
}

function getFontSize(size: ButtonSizes): string {
  switch (size) {
    case 'extra large': return '28px';
    case 'large': return '24px';
    case 'medium': return '20px';
  }
}

function getSizes(size: ButtonSizes): {
  height: string;
  minWidth: string;
} {
  switch (size) {
    case 'extra large': return {
      height: '48px',
      minWidth: '48px',
    };
    case 'large': return {
      height: '40px',
      minWidth: '40px',
    };
    case 'medium': return {
      height: '32px',
      minWidth: '32px',
    };
  }
}

export type ButtonIconProps = {
  icon: Icons
  style: ButtonStyles
  size: ButtonSizes
  href?: string
  disabled?: boolean
  onClick?: () => void
};

export default function ButtonIcon({ icon, style, size, href, disabled, onClick }: ButtonIconProps): JSX.Element {
  const theme: Theme = useTheme();

  const iconProp = getFontAwesomeIconDefinition(icon);
  const fontSize = getFontSize(size);

  return (
    <MuiButton
      disabled={disabled}
      disableTouchRipple
      disableElevation
      disableRipple
      disableFocusRipple
      onClick={onClick}
      sx={{
        ...getSizes(size),
        ...getButtonStyleSX(theme, style),
        padding: '0px',
        fontSize: fontSize,
      }}
    >
      <Link href={href}>
        <FontAwesomeIcon width={fontSize} height={fontSize} icon={iconProp} />
      </Link>
    </MuiButton>
  );
}
