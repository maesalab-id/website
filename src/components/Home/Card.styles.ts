import { createStyles } from '@mantine/core';

interface StylesCardProps {
  color: "red" | "blue" | "green" | string;
}

export default createStyles((theme, { color = "red" }: StylesCardProps) => {
  return ({
    card: {
      position: 'relative',
      cursor: 'pointer',
      overflow: 'hidden',
      transition: 'transform 150ms ease, box-shadow 100ms ease',
      padding: theme.spacing.md,
      paddingLeft: theme.spacing.md,

      '&:hover': {
        boxShadow: theme.shadows.md,
        transform: 'scale(1.02)',
      },

      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: 6,
        backgroundImage: ({
          red: theme.fn.linearGradient(0, theme.colors.pink[6], theme.colors.orange[6]),
          blue: theme.fn.linearGradient(0, theme.colors.blue[6], theme.colors.cyan[6]),
          purple: theme.fn.linearGradient(0, theme.colors.violet[6], theme.colors.blue[6]),
          green: theme.fn.linearGradient(0, theme.colors.teal[6], theme.colors.green[6]),
          teal: theme.fn.linearGradient(0, theme.colors.blue[6], theme.colors.teal[6]),
        })[color],
      },
    },
  })
});
