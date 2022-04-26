import React from 'react';
import { Paper, Sx, Text, ThemeIcon } from '@mantine/core';
import useStyles from './Card.styles';

interface CardGradientProps {
  title: string;
  description: JSX.Element | string;
  icon: JSX.Element;
  color: "red" | "blue" | "green" | "teal" | string;
  sx?: Sx;
}

export function Card({ title, description, icon, color, sx }: CardGradientProps) {
  const { classes } = useStyles({ color });
  return (
    <Paper withBorder radius="md" className={classes.card} sx={sx}>
      <ThemeIcon
        size="xl"
        radius="md"
        variant="gradient"
        gradient={{
          "red": { deg: 0, from: 'pink', to: 'orange' },
          "purple": { deg: 0, from: 'violet', to: 'blue' },
          "blue": { deg: 0, from: 'cyan', to: 'blue' },
          "green": { deg: 0, from: 'teal', to: 'green' },
          "teal": { deg: 0, from: 'teal', to: 'blue' },
          "yellow": { deg: 0, from: 'yellow', to: 'orange' },
        }[color]}
      >
        {icon}
      </ThemeIcon>
      <Text size="xl" weight={500} mt="md">
        {title}
      </Text>
      <Text size="sm" mt="sm" color="dimmed">
        {description}
      </Text>
    </Paper>
  );
}