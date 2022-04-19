import React from 'react';
import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col, Container } from '@mantine/core';
import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode } from '@tabler/icons';
import useStyles from './WhyMaesa.styles';

const features = [
  {
    icon: IconReceiptOff,
    title: 'Free and open source',
    description: 'All packages are published under MIT license, you can use Mantine in any project',
  },
  {
    icon: IconFileCode,
    title: 'TypeScript based',
    description: 'Build type safe applications, all components and hooks export types',
  },
  {
    icon: IconCircleDotted,
    title: 'No annoying focus ring',
    description:
      'With new :focus-visible selector focus ring will appear only when user navigates with keyboard',
  },
  {
    icon: IconFlame,
    title: 'Flexible',
    description:
      'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
  },
];

export function WhyMaesa() {
  const { classes } = useStyles();

  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'green', to: 'teal' }}
      >
        <feature.icon size={26} />
      </ThemeIcon>
      <Text size="lg" mt="sm" weight={500}>
        {feature.title}
      </Text>
      <Text color="dimmed" size="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <Container id="why" my="xl">
      <div className={classes.wrapper}>
        <Grid gutter={"lg"}>
          <Col span={12} md={5}>
            <Title className={classes.title} order={2}>
              Why Choose {' '}
              <Text component="span" variant="gradient" gradient={{ from: 'green', to: 'teal' }} inherit>
                Maesalab
              </Text>{' '}
            </Title>
            <Text color="dimmed">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            </Text>

            <Button
              component="a"
              href="#contact"
              variant="gradient"
              gradient={{ deg: 133, from: 'green', to: 'teal' }}
              size="lg"
              radius="md"
              mt="lg"
            >
              Get started
            </Button>
          </Col>
          <Col span={12} md={7}>
            <SimpleGrid cols={2} spacing={"lg"} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
              {items}
            </SimpleGrid>
          </Col>
        </Grid>
      </div>
    </Container>
  );
}