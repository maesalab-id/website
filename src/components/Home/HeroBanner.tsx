import React, { useMemo } from 'react';
import { Container, Text, Button, Group, useMantineTheme, Title, List, ThemeIcon, Image, AspectRatio, Badge } from '@mantine/core';
import useStyles from './HeroBanner.styles';
import { NextLink } from '@mantine/next';
import Slider from "react-slick";
import { Window } from './Window';

import slider_akademik from "./assets/akademik.png";
import slider_digisign from "./assets/digisign.jpg";
// import slider_easpirasi from "./assets/easpirasi.png";
// import slider_elan from "./assets/elan.jpg";
// import slider_eoffice from "./assets/eoffice.png";
import slider_jobdesk from "./assets/jobdesk.jpg";
// import slider_ovor from "./assets/ovor.png";
import slider_pos from "./assets/pos.png";
import slider_website from "./assets/website.jpg";

export function HeroBanner() {

  const { classes } = useStyles();
  const slider = useMemo(() => [{
    image: slider_akademik,
    label: "https://akademik.maesalab.com"
  }, {
    image: slider_digisign,
    label: "https://digisign.maesalab.com"
  // }, {
  //   image: slider_easpirasi,
  //   label: "https://easpirasi.maesalab.com"
  // }, {
  //   image: slider_elan,
  //   label: "https://elan.maesalab.com"
  // }, {
  //   image: slider_eoffice,
  //   label: "https://eoffice.maesalab.com"
  }, {
    image: slider_jobdesk,
    label: "https://jobdesk.maesalab.com"
  // }, {
  //   image: slider_ovor,
  //   label: "https://ovor.maesalab.com"
  }, {
    image: slider_pos,
    label: "https://pos.maesalab.com"
  }, {
    image: slider_website,
    label: "https://website.maesalab.com"
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
                    <Image src={image.src} alt={label} />
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
