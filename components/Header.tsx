import React from 'react';
import { AppBar, Container, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { MetaContext } from '@/context';
import { ButtonAccount, ButtonHeader, ButtonLogoMSU } from '@/components';

export default function Header(): JSX.Element {
  const theme = useTheme();
  const { isLoading, isAuth } = React.useContext(MetaContext);
  const mobile = useMediaQuery(theme.breakpoints.down('mobile'));

  if (isLoading) { return <></>; }

  return (
    <AppBar
      sx={{
        backgroundColor: theme.palette.sys.background,
        backgroundImage: 'none',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: theme.palette.sys.outlineVariant,
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
          sx={{ display: 'flex', justifyContent: 'start', flexGrow: 1, columnGap: 1 }}
        >
          <ButtonLogoMSU style='standard' href='/' />
          <ButtonHeader style='standard' href='/' size='large' visibility={!mobile}> Тестирующая система </ButtonHeader>
        </Toolbar>
        <Toolbar
          disableGutters
          variant='dense'
          sx={{ display: 'flex', justifyContent: 'end', flexGrow: 1, columnGap: 1 }}
        >
          <ButtonHeader style='standard' href='/tests' size='medium' visibility={isAuth}> Тесты </ButtonHeader>
          <ButtonAccount style='monogram' href='/profile' visibility={isAuth} />
          <ButtonHeader style='standard' href='/login' size='medium' visibility={!isAuth}> Вход </ButtonHeader>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
