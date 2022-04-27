import React from 'react';
import { Text, Container, Title, Grid, Tabs, Divider } from '@mantine/core';
import useStyles from './Testimonials.styles';
import { Card } from './Card';
import { IconColorSwatch } from '@tabler/icons';
import { SectionText } from './SectionText';
import { useMediaQuery } from '@mantine/hooks';

const products = [{
  label: "Geospatial",
  items: [{
    color: "blue",
    icon: <IconColorSwatch size={28} />,
    title: "Geospatial Manager",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  }, {
    color: "red",
    icon: <IconColorSwatch size={28} />,
    title: "Prisy",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  }, {
    color: "red",
    icon: <IconColorSwatch size={28} />,
    title: "Antrian online",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  }, {
    color: "green",
    icon: <IconColorSwatch size={28} />,
    title: "Job Desk",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  }, {
    color: "blue",
    icon: <IconColorSwatch size={28} />,
    title: "CTS",
    description: "Control Tracking System, Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  }]
}, {
  label: "Office Suite",
  items: [{
    color: "teal",
    icon: <IconColorSwatch size={28} />,
    title: "E-Office",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  }, {
    color: "red",
    icon: <IconColorSwatch size={28} />,
    title: "Prisy",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  }, {
    color: "green",
    icon: <IconColorSwatch size={28} />,
    title: "Job Desk",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  }, {
    color: "purple",
    icon: <IconColorSwatch size={28} />,
    title: "Digital Sign",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  }, {
    color: "blue",
    icon: <IconColorSwatch size={28} />,
    title: "Asset",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  }, {
    color: "red",
    icon: <IconColorSwatch size={28} />,
    title: "Antrian online",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  }, {
    color: "blue",
    icon: <IconColorSwatch size={28} />,
    title: "CTS",
    description: "Control Tracking System, Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  }]
}, {
  label: "Internet Of Things",
  items: [{
    color: "blue",
    icon: <IconColorSwatch size={28} />,
    title: "Ovor",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  }, {
    color: "blue",
    icon: <IconColorSwatch size={28} />,
    title: "IoT Sensor",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  }, {
    color: "blue",
    icon: <IconColorSwatch size={28} />,
    title: "River Monitor",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  }, {
    color: "blue",
    icon: <IconColorSwatch size={28} />,
    title: "Air Quality",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  }]
}, {
  label: "Commerce",
  items: [{
    color: "yellow",
    icon: <IconColorSwatch size={28} />,
    title: "POS",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  }, {
    color: "yellow",
    icon: <IconColorSwatch size={28} />,
    title: "Website",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  }]
}];

export function Products() {
  const { classes, theme } = useStyles();
  const mediaQuery = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);

  return (
    <>
      <SectionText
        id={"product"}
        title={<>Check <span className={classes.highlight}>our</span> products</>}
        subTitle={"Products"}
        description={`We provide Spatial, Office Administration, IoT and Business applications.`}
      />

      <Tabs position="center" variant={mediaQuery ? "pills" : "default"} tabPadding="xl">
        {products.map(({ label, items }, index) => (
          <Tabs.Tab key={index} label={label}>
            <Container pb="xl">
              <Grid gutter="md" justify="center">
                {items.map(({ color, title, description, icon }, index) => (
                  <Grid.Col key={index} sm={6} md={4}>
                    <Card
                      sx={{
                        height: "100%"
                      }}
                      color={color}
                      title={title}
                      description={description}
                      icon={icon}
                    />
                  </Grid.Col>
                ))}
              </Grid>
            </Container>
          </Tabs.Tab>))}
      </Tabs>
      <Divider />
    </>
  );
}
