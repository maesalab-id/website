import React from 'react';
import { Text, Container, Title, Grid } from '@mantine/core';
import useStyles from './Testimonials.styles';
import { Card } from './Card';
import { IconColorSwatch } from '@tabler/icons';
import { SectionText } from './SectionText';

const products = [{
  color: "blue",
  icon: <IconColorSwatch size={28} />,
  title: "Geospatial Manager",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
}, {
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
  title: "Asset",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
}, {
  color: "yellow",
  icon: <IconColorSwatch size={28} />,
  title: "POS",
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
}];

export function Products() {
  const { classes } = useStyles();

  return (
    <>
      <SectionText
        id={"product"}
        title={<>Check <span className={classes.highlight}>our</span> products</>}
        subTitle={"Products"}
        description={`Its lungs contain an organ that creates electricity. The crackling sound of electricity can be heard when it exhales. Azurill's tail is large and bouncy. It is packed full of the nutrients this Pokémon needs to grow.`}
      />
      <Container pb="xl">
        <Grid gutter="md" justify="center">
          {products.map(({ color, title, description, icon }, index) => (
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
    </>
  );
}
