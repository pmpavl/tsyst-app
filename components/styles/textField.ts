import { Theme } from '@mui/material';
import { blend, blendBackground } from '@/utils';

export type TextFieldStyleSX = {
  caretColor: string;
  label: {
    color: string;
    '&.Mui-focused': {
      color: string;
    };
    '&.Mui-error': {
      color: string;
    };
    '&.Mui-disabled': {
      color: string;
    };
    '&.Mui-error.MuiFormLabel-filled, &.Mui-focused.Mui-error': {
      color: string;
    };
  };
  '.MuiOutlinedInput-root': {
    '& fieldset, &:hover fieldset': {
      borderWidth: string;
      borderRadius: string;
      borderStyle: string;
      borderColor: string;
    };
    '&.Mui-focused fieldset': {
      borderWidth: string;
      borderColor: string;
    };
    '&.Mui-error': {
      'input, fieldset, &:hover fieldset, &.Mui-focused fieldset': {
        caretColor: string;
        borderWidth: string;
        borderColor: string;
      };
      '&.Mui-disabled': {
        'input, fieldset, &:hover fieldset, &.Mui-focused fieldset': {
          borderWidth: string;
          borderColor: string;
        };
      };
    };
    '&.Mui-disabled': {
      fieldset: {
        borderColor: string;
      };
    };
  };
  '.MuiFilledInput-root': {
    backgroundColor: string;
    borderTopLeftRadius: string;
    borderTopRightRadius: string;
    ':hover': {
      backgroundColor: string;
    };
    '::before, &:hover::before': {
      borderBottomWidth: string;
      borderColor: string;
    };
    '::after': {
      borderBottomWidth: string;
      borderColor: string;
    };
    '&.Mui-error': {
      '&::after, input': {
        caretColor: string;
        borderColor: string;
      };
    };
    '&.Mui-disabled': {
      backgroundColor: string;
      '::before, ::after': {
        borderTopWidth: string;
        borderLeftWidth: string;
        borderRightWidth: string;
        borderBottomWidth: string;
        borderStyle: string;
        borderColor: string;
      };
    };
  };
  '.MuiInput-root': {
    ':hover::after': {
      borderBottomWidth: string,
      borderColor: string,
    },
    '::before, &:hover::before': {
      borderBottomWidth: string;
      borderColor: string;
    };
    '::after, &.Mui-focused:hover::after': {
      borderBottomWidth: string;
      borderColor: string;
    };
    '&.Mui-error': {
      '&::after, input': {
        caretColor: string;
        borderColor: string;
      };
    };
    '&.Mui-disabled': {
      '::before, ::after': {
        borderTopWidth: string;
        borderLeftWidth: string;
        borderRightWidth: string;
        borderBottomWidth: string;
        borderStyle: string;
        borderColor: string;
      };
    };
  };
  '.MuiFormHelperText-root': {
    '&.Mui-error': {
      color: string;
    };
    '&.Mui-disabled': {
      color: string;
    };
  };
};

export default function getTextFieldStyleSX(theme: Theme): TextFieldStyleSX {
  return {
    caretColor: theme.palette.sys.primary,
    'label': {
      color: theme.palette.sys.onBackground,
      '&.Mui-focused': {
        color: theme.palette.sys.primary,
      },
      '&.Mui-error': {
        color: theme.palette.sys.onBackground,
      },
      '&.Mui-disabled': {
        color: blend(theme.palette.sys.onBackground, theme.opacities.opacity38),
      },
      '&.Mui-error.MuiFormLabel-filled, &.Mui-focused.Mui-error': {
        color: theme.palette.sys.error,
      },
    },
    '.MuiOutlinedInput-root': {
      '& fieldset, &:hover fieldset': {
        borderWidth: '1px',
        borderRadius: '10px',
        borderStyle: 'solid',
        borderColor: theme.palette.sys.outline,
      },
      '&.Mui-focused fieldset': {
        borderWidth: '2px',
        borderColor: theme.palette.sys.primary,
      },
      '&.Mui-error': {
        'input, fieldset, &:hover fieldset, &.Mui-focused fieldset': {
          caretColor: theme.palette.sys.error,
          borderWidth: '2px',
          borderColor: theme.palette.sys.error,
        },
        '&.Mui-disabled': {
          'input, fieldset, &:hover fieldset, &.Mui-focused fieldset': {
            borderWidth: '1px',
            borderColor: blend(theme.palette.sys.outline, theme.opacities.opacity38),
          },
        },
      },
      '&.Mui-disabled': {
        'fieldset': {
          borderColor: blend(theme.palette.sys.outline, theme.opacities.opacity38),
        },
      },
    },
    '.MuiFilledInput-root': {
      backgroundColor: theme.palette.sys.surfaceVariant,
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
      ':hover': {
        backgroundColor: blendBackground(theme.palette.sys.surfaceVariant, theme.palette.sys.onSurfaceVariant, theme.opacities.opacity8),
      },
      '::before, &:hover::before': {
        borderBottomWidth: '1px',
        borderColor: theme.palette.sys.outline,
      },
      '::after': {
        borderBottomWidth: '2px',
        borderColor: theme.palette.sys.primary,
      },
      '&.Mui-error': {
        '&::after, input': {
          caretColor: theme.palette.sys.error,
          borderColor: theme.palette.sys.error,
        },
      },
      '&.Mui-disabled': {
        backgroundColor: theme.palette.sys.surfaceVariant,
        '::before, ::after': {
          borderTopWidth: '0px',
          borderLeftWidth: '0px',
          borderRightWidth: '0px',
          borderBottomWidth: '1px',
          borderStyle: 'solid',
          borderColor: blend(theme.palette.sys.outline, theme.opacities.opacity38),
        },
      },
    },
    '.MuiInput-root': {
      ':hover::after': {
        borderBottomWidth: '1px',
        borderColor: theme.palette.sys.outline,
      },
      '::before, &:hover::before': {
        borderBottomWidth: '1px',
        borderColor: theme.palette.sys.outline,
      },
      '::after, &.Mui-focused:hover::after': {
        borderBottomWidth: '2px',
        borderColor: theme.palette.sys.primary,
      },
      '&.Mui-error': {
        '&::after, input': {
          caretColor: theme.palette.sys.error,
          borderColor: theme.palette.sys.error,
        },
      },
      '&.Mui-disabled': {
        '::before, ::after': {
          borderTopWidth: '0px',
          borderLeftWidth: '0px',
          borderRightWidth: '0px',
          borderBottomWidth: '1px',
          borderStyle: 'solid',
          borderColor: blend(theme.palette.sys.outline, theme.opacities.opacity38),
        },
      },
    },
    '.MuiFormHelperText-root': {
      '&.Mui-error': {
        color: theme.palette.sys.error,
      },
      '&.Mui-disabled': {
        color: blend(theme.palette.sys.onBackground, theme.opacities.opacity38),
      },
    },
  };
}
