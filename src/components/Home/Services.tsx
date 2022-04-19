import React from 'react';
import { Container, Text, Box, Grid } from '@mantine/core';
import useStyles from './Testimonials.styles';
import { Card } from './Card';
import { IconColorSwatch } from '@tabler/icons';
import { SectionText } from './SectionText';

const services = [{
  color: "blue",
  icon: <IconColorSwatch size={28} />,
  title: "Mapping Services",
  description: (<Text>
    <Box><strong>WebGIS:</strong> Spatial Editor, GUI Editor, Spacial Analytics</Box>
    <Box><strong>Map API:</strong> Base Maps, Tile Based, Raster, Vector</Box>
  </Text>),
}, {
  color: "red",
  icon: <IconColorSwatch size={28} />,
  title: "Digital Projects",
  description: (<Text>
    <Box><strong>Web Technology:</strong> PHP / Python / NodeJS / ReactJs / express / Laravel / Wordpress / E-Commerce</Box>
    <Box><strong>Data Engineering:</strong> Data Warehousing / Data Administrator / Data Analytics / Database App Dev</Box>
    <Box><strong>Enterprise Consulting:</strong> Information Architecture / Network Architecture</Box>
    <Box><strong>Mobile Technology:</strong> iOS / Android / React Native / Flutter</Box>
  </Text>),
}, {
  color: "green",
  icon: <IconColorSwatch size={28} />,
  title: "Creative Projects",
  description: (<Text>
    <Box><strong>User Experience:</strong> UX Design Package, Product Testing & Evaluation</Box>
    <Box><strong>User Interface:</strong> UI Design Package</Box>
    <Box><strong>Creative  Design:</strong> Illustration, Advertising, Brand Development</Box>
  </Text>),
}, {
  color: "teal",
  icon: <IconColorSwatch size={28} />,
  title: "Smart Projects Services",
  description: (<Text>
    <Box><strong>Internet of Things:</strong> Smart City, Smart Home, Smart Card</Box>
    <Box><strong>Unmanned Aeril Vehicles (UAV):</strong> Drone Mapping, Aerial Photography / Video Graphy</Box>
    <Box><strong>Creative  Design:</strong> Illustration, Advertising, Brand Development</Box>
  </Text>),
}];

export function Services() {
  const { classes } = useStyles();

  return (
    <>
      <SectionText
        id="services"
        title={<>We serve <span className={classes.highlight}>digital</span> needs for you.</>}
        subTitle={"Services"}
        description={`Its lungs contain an organ that creates electricity. The crackling sound of electricity can be heard when it exhales. Azurill's tail is large and bouncy. It is packed full of the nutrients this Pokémon needs to grow.`}
      />
      <Container pb="xl">
        <Grid gutter="md" justify="center">
          {services.map(({ color, title, description, icon }, index) => (
            <Grid.Col key={index} sm={6}>
              <Card
                sx={{ height: "100%" }}
                color={color}
                title={title}
                description={description}
                icon={icon}
              />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </>
  );
}
