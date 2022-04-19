import {
  createStyles,
} from '@mantine/core';

export default createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan('sm');

  return {
    wrapper: {
      marginTop: theme.spacing.xl,
      display: 'flex',
      padding: 4,

      [BREAKPOINT]: {
        flexDirection: 'column',
      },
    },

    form: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]}`,
      borderRadius: theme.radius.lg,
      boxSizing: 'border-box',
      flex: 1,
      padding: theme.spacing.lg,
      borderLeft: 0,

      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },

    fields: {
      marginTop: -12,
    },

    fieldInput: {
      flex: 1,

      '& + &': {
        marginLeft: theme.spacing.md,

        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },

    fieldsGroup: {
      display: 'flex',

      [BREAKPOINT]: {
        flexDirection: 'column',
      },
    },

    contacts: {
      boxSizing: 'border-box',
      position: 'relative',
      borderRadius: theme.radius.lg,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      background: theme.fn.linearGradient(45, "violet", "blue"),
      border: '1px solid transparent',
      padding: theme.spacing.md,

      [BREAKPOINT]: {
        borderRadius: theme.radius.lg,
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },

    title: {
      marginBottom: theme.spacing.xs,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xs,
      },
    },

    control: {
      [BREAKPOINT]: {
        flex: 1,
      },
    },
  };
});
