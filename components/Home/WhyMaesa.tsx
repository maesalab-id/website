import React from 'react';
import { Title, SimpleGrid, Text, Button, ThemeIcon, Grid, Col, Container } from '@mantine/core';
import { IconFileCode, IconMap, IconWand, IconCpu } from '@tabler/icons';
import useStyles from './WhyMaesa.styles';

const features = [
  {
    icon: IconMap,
    title: 'Mapping Service',
    description: 'WebGIS, Map API like Raster or Vector Tiles',
  },
  {
    icon: IconFileCode,
    title: 'Digital Projects',
    description: 'Web Technology, Data Engineering, Enterprise Consulting, Mobile Technology',
  },
  {
    icon: IconWand,
    title: 'Creative Projects',
    description:
      'User Experience, User Interface and Creative Design',
  },
  {
    icon: IconCpu,
    title: 'Smart Projects Services',
    description:
      'Internet of Things, Unmanned Aerill Vehicles (UAV)',
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
              Assist all types of companies and governments in Indonesia in utilizing a reliable and integrated information system
            </Text>

            <Button
              component="a"
              href="contact"
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