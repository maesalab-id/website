import React, { useMemo } from 'react';
import { Container, Text, Button, Group, Title, Image, AspectRatio } from '@mantine/core';
import useStyles from './HeroBanner.styles';
import { NextLink } from '@mantine/next';
import Slider from "react-slick";
import { Window } from './Window';

export function HeroBanner() {

  const { classes } = useStyles();
  const slider = useMemo(() => [{
  //   image: "/image/akademik.png",
  //   label: "https://akademik.maesalab.com"
  // }, {
  //   image: "/image/digisign.jpg",
  //   label: "https://digisign.maesalab.com"
  // }, {
  //   image: "/image/easpirasi.png",
  //   label: "https://easpirasi.maesalab.com"
  // }, {
    image: "/image/elan.jpg",
    label: "https://elan.maesalab.com"
  }, {
    image: "/image/eoffice.png",
    label: "https://eoffice.maesalab.com"
  }, {
    image: "/image/jobdesk.jpg",
    label: "https://jobdesk.maesalab.com"
  // }, {
  //   image: "/image/ovor.png",
  //   label: "https://ovor.maesalab.com"
  // }, {
  //   image: "/image/pos.png",
  //   label: "https://pos.maesalab.com"
  // }, {
  //   image: "/image/website.jpg",
  //   label: "https://website.maesalab.com"
  }], []);
  return (
    <Container size={"lg"}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Focused on <Text inherit component="span" variant="gradient" gradient={{ from: "green", to: "teal" }}>Web Standards</Text > to build better technologies
          </Title>
          <Text color="dimmed" mt="md">
            Enable a classy geospatial app or non-spatial development in Indonesia
          </Text>
          <Group mt={30}>
            <Button component={NextLink} href="/contact" radius="sm" size="md" className={classes.control}>
              Book now
            </Button>
            <Button component={NextLink} href="/contact" variant="default" radius="sm" size="md" className={classes.control}>
              Or Consult
            </Button>
          </Group>
        </div>
        <div className={classes.slider}>
          <Slider
            autoplay
            autoplaySpeed={3000}
            // infinite
            arrows={false}
          >
            {slider.map(({ image, label }, index) => (
              <div key={index} className={classes.image} >
                <Window title={label}>
                  <AspectRatio ratio={16 / 9}>
                    <Image src={image} alt={label} />
                  </AspectRatio>
                </Window>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </Container>
  );
}
