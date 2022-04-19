import React from 'react';
import { Container, Text, Button, Group, useMantineTheme } from '@mantine/core';
import useStyles from './HeroBanner.styles';

export function HeroBanner() {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          Focused on{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'green', to: 'teal' }} inherit>
            Web Standards
          </Text>{' '}
          to build better technologies
        </h1>

        <Text className={classes.description} color="dimmed">
          {`Enable a classy geospatial app or non-spatial development in Indonesia`}
        </Text>

        <Group className={classes.controls}>
          <Button
            component="a"
            href="contact"
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'green', to: 'teal' }}
          >
            Book now
          </Button>
          <Button
            component="a"
            href="contact"
            size="xl"
            variant="outline"
            className={cx(classes.control, classes.githubControl)}
            color={theme.colorScheme === 'dark' ? 'gray' : 'dark'}
          >
            Or Consult
          </Button>
        </Group>
      </Container>
    </div>
  );
}
