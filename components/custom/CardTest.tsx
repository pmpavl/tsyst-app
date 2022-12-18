import React from 'react';
import { Container, Theme, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Badge, Button, getCardStyleSX } from '@/components';

export type CardTestProps = {
  name: string
  description: string
  tags: {
    minute: string
    classes: string
  }
};

export default function CardTest({ name, description, tags }: CardTestProps): JSX.Element {
  const theme: Theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('mobile'));

  return (
    <Container
      disableGutters
      sx={{
        ...getCardStyleSX(theme, 'outlined'),
        width: '100%',
        height: '300px',
        paddingInline: mobile ? '16px' : '32px',
        paddingBlock: mobile ? '16px' : '32px',
        alignItems: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
      }}
    >
      <Toolbar // Name of test
        disableGutters
        variant='dense'
        sx={{
          display: 'flex',
          justifyContent: 'start',
          minHeight: 'fit-content',
          flexGrow: 0,
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <Typography fontSize={mobile ? '20px' : '24px'} fontWeight='600'> {name} </Typography>
      </Toolbar>
      <Toolbar // Badges
        disableGutters
        variant='dense'
        sx={{
          display: 'flex',
          justifyContent: 'start',
          minHeight: 'fit-content',
          flexGrow: 0,
          flexWrap: 'wrap',
          gap: '8px',
          marginTop: '8px',
        }}
      >
        <Badge text={tags.classes} />
        <Badge text={tags.minute} />
      </Toolbar>
      <Toolbar // Description
        disableGutters
        variant='dense'
        sx={{
          display: 'flex',
          justifyContent: 'start',
          minHeight: 'fit-content',
          flexGrow: 0,
          flexWrap: 'wrap',
          gap: '8px',
          overflowY: 'scroll',
          marginBlock: '16px',
        }}
      >
        <Typography fontSize='14px' fontWeight='400'>
          {description}
        </Typography>
      </Toolbar>
      <Toolbar // Left Button
        disableGutters
        variant='dense'
        sx={{
          display: 'flex',
          justifyContent: 'start',
          minHeight: 'fit-content',
          flexGrow: 0,
          flexWrap: 'wrap',
          gap: '8px',
          marginTop: 'auto',
        }}
      >
        <Button style='tonal' size='large'> Пройти тест </Button>
        <Toolbar // Right Button
          disableGutters
          variant='dense'
          sx={{
            display: 'flex',
            justifyContent: 'end',
            minHeight: 'fit-content',
            flexGrow: 1,
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <Button style='standard' size='medium' disabled> Подробнее </Button>
        </Toolbar>
      </Toolbar>
    </Container >
  );
}
