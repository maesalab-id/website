import React from 'react';
import { Paper, Text, ThemeIcon } from '@mantine/core';
import useStyles from './Card.styles';

interface CardGradientProps {
  title: string;
  description: string;
  icon: JSX.Element;
  color: "red" | "blue" | "green" | string;
}

export function Card({ title, description, icon, color }: CardGradientProps) {
  const { classes } = useStyles({ color });
  return (
    <Paper withBorder radius="md" className={classes.card}>
      <ThemeIcon
        size="xl"
        radius="md"
        variant="gradient"
        gradient={{
          "red": { deg: 0, from: 'pink', to: 'orange' },
          "blue": { deg: 0, from: 'violet', to: 'blue' },
          "green": { deg: 0, from: 'teal', to: 'green' },
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