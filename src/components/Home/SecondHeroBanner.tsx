import React from 'react';
import { Title, Text, Button, Container, useMantineTheme } from '@mantine/core';
import { Dots } from './Dots';
import useStyles from './SecondHeroBanner.styles';

export function SecondHeroBanner() {
  const { classes } = useStyles();
  const theme = useMantineTheme();

  return (
    <Container id="contact" className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Automated AI{' '}
          <Text component="span" color={theme.primaryColor} inherit>
            code reviews
          </Text>{' '}
          for any stack
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            Build more reliable software with AI companion. AI is also trained to detect lazy
            developers who do nothing and just complain on Twitter.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button
            component="a"
            href="contact"
            className={classes.control}
            size="lg"
            variant="default"
            color="gray">
            Book Now
          </Button>
          <Button
            component="a"
            href="contact"
            className={classes.control}
            size="lg">
            Contact
          </Button>
        </div>
      </div>
    </Container>
  );
}