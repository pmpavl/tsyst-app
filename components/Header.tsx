import React from 'react';
import { AppBar, Toolbar, Container, useTheme } from '@mui/material';
import { AppMetaContext } from '@/context';
import { Account, ButtonHeader, ButtonIcon } from '@/customs';

export default function Header(): JSX.Element {
  const theme = useTheme();

  const { paletteMode, setPaletteMode } = React.useContext(AppMetaContext);

  const onClickPaletteMode = () => {
    setPaletteMode(paletteMode === 'light' ? 'dark' : 'light');
  };

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
        sx={{ display: 'flex', maxWidth: 'lg', paddingX: '32px' }}
      >
        <Toolbar
          disableGutters
          variant='dense'
          sx={{ display: 'flex', justifyContent: 'start', flexGrow: 1, columnGap: 1 }}
        >
          <ButtonHeader style='standard' size='large' href='/'>
            Тестирующая система
          </ButtonHeader>
        </Toolbar>
        <Toolbar
          disableGutters
          variant='dense'
          sx={{ display: 'flex', justifyContent: 'end', flexGrow: 1, columnGap: 1 }}
        >
          <Account />
          <ButtonIcon
            icon={theme.palette.mode === 'light' ? 'moon' : 'sun'}
            style='standard'
            size='large'
            onClick={onClickPaletteMode}
          />
        </Toolbar>
      </Container>
    </AppBar >
  );
}
