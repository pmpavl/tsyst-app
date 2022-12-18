import React from 'react';
import { Container, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { MetaContext } from '@/context';
import { ButtonIcon } from '@/components';

export default function Footer(): JSX.Element {
  const theme = useTheme();
  const { isLoading, mode, toggleMode } = React.useContext(MetaContext);
  const mobile = useMediaQuery(theme.breakpoints.down('mobile'));

  if (isLoading) { return <></>; }

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
        minHeight: '56px',
        width: '100%',
      }}
    >
      <Container
        disableGutters
        maxWidth={false}
        sx={{ display: 'flex', maxWidth: 'lg', paddingX: mobile ? '16px' : '32px' }}
      >
        <Toolbar
          disableGutters
          variant='dense'
          sx={{ display: 'flex', justifyContent: 'end', flexGrow: 1, columnGap: 1 }}
        >
          <ButtonIcon icon='github' style='standard' href='https://github.com/pmpavl/tsyst-app' />
          <ButtonIcon icon={mode === 'light' ? 'sun' : 'moon'} style='standard' onClick={toggleMode} />
        </Toolbar>
      </Container>
    </Container>
  );
}
