import React from 'react';
import { Button as MuiButton, Theme, useTheme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faSun, faMoon, faBars, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link, getButtonStyleSX } from '@/components';

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

export type ButtonIconProps = {
  icon: Icons
  style: ButtonStyles
  href?: string
  disabled?: boolean
  onClick?: () => void
  visibility?: boolean
};

export default function ButtonIcon({ icon, style, href, disabled, onClick, visibility }: ButtonIconProps): JSX.Element {
  const theme: Theme = useTheme();
  const iconProp: IconDefinition = getFontAwesomeIconDefinition(icon);

  if (visibility === false) return <></>;

  return (
    <MuiButton
      disabled={disabled}
      disableTouchRipple
      disableElevation
      disableRipple
      disableFocusRipple
      onClick={onClick}
      sx={{
        ...getButtonStyleSX(theme, style),
        padding: '0px',
        height: '40px',
        minWidth: '40px',
        fontSize: '24px',
      }}
    >
      <Link href={href}>
        <FontAwesomeIcon width={'24px'} height={'24px'} icon={iconProp} />
      </Link>
    </MuiButton>
  );
}
