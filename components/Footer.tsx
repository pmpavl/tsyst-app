import React from 'react';
import { Container, Toolbar, useTheme } from '@mui/material';
import { ButtonIcon } from '@/customs';

export default function Footer(): JSX.Element {
  const theme = useTheme();

  return (
    <Container
      component='footer'
      disableGutters
      maxWidth={false}
      sx={{
        backgroundColor: theme.palette.sys.background,
        backgroundImage: 'none',
        borderTopWidth: '1px',
        borderTopStyle: 'solid',
        borderTopColor: theme.palette.sys.outlineVariant,
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        position: 'static',
        marginTop: 'auto',
        minHeight: '56px',
        width: '100%',
      }}
    >
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          display: 'flex',
          maxWidth: 'lg',
          paddingX: '32px',
        }}
      >
        <Toolbar
          disableGutters
          variant='dense'
          sx={{
            display: 'flex',
            justifyContent: 'end',
            flexGrow: 1,
            columnGap: 1,
          }}
        >
          <ButtonIcon
            icon='github'
            style='standard'
            size='large'
            href='https://github.com/pmpavl/tsyst-app'
          />
        </Toolbar>
      </Container>
    </Container>
  );
}
