import React from 'react';
import { Text, Container, Title, SimpleGrid } from '@mantine/core';
import useStyles from './Testimonials.styles';
import { Card } from './Card';
import { IconColorSwatch } from '@tabler/icons';

const products = [{
  color: "red",
  icon: <IconColorSwatch size={28} />,
  title: "Geospatial Manager",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
}, {
  color: "blue",
  icon: <IconColorSwatch size={28} />,
  title: "E-Office",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
}, {
  color: "green",
  icon: <IconColorSwatch size={28} />,
  title: "Job Desk",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
}]

export function Products() {
  const { classes } = useStyles();

  return (
    <>
      <Container id="product" size={700} className={classes.wrapper}>
        <Text className={classes.supTitle}>Products</Text>

        <Title className={classes.title} order={2}>
          Check <span className={classes.highlight}>our</span> products
        </Title>

        <Container size={660} p={0}>
          <Text color="dimmed" className={classes.description}>
            {`Its lungs contain an organ that creates electricity. The crackling sound of electricity can be heard when it exhales. Azurill's tail is large and bouncy. It is packed full of the nutrients this Pokémon needs to grow.`}
          </Text>
        </Container>

      </Container>
      <Container pb="xl">
        <SimpleGrid cols={3}>
          {products.map(({ color, title, description, icon }, index) => (
            <Card
              key={index}
              color={color}
              title={title}
              description={description}
              icon={icon}
            />))}
        </SimpleGrid>
      </Container>
    </>
  );
}