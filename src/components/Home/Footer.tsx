import React from 'react';
import { Text, Container, ActionIcon, Group, Title, Anchor } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';
import useStyles from "./Footer.styles";
import { Box } from '../Box';
import { MaesalabLogo } from '../Maesalab';

interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}

const data: FooterLinksProps["data"] = [{
  title: "Products",
  links: [{
    label: "Geospatial Manager",
    link: "products/geospatial-manager"
  }, {
    label: "E-Office",
    link: "products/e-office"
  }, {
    label: "Prisy",
    link: "products/prisy"
  }, {
    label: "Job Desk",
    link: "products/job-desk"
  }, {
    label: "Digital Sign",
    link: "products/digital-sign"
  },]
}, {
  title: "",
  links: [{
    label: "Ovor",
    link: "products/ovor"
  }, {
    label: "IoT Sensor",
    link: "products/iot-sensor"
  }, {
    label: "Asset",
    link: "products/asset"
  }, {
    label: "POS",
    link: "products/pos"
  }, {
    label: "Antrian Online",
    link: "products/antrian-online"
  }, {
    label: "CTS",
    link: "products/cts"
  }]
}, {
  title: "Services",
  links: [{
    label: "Mapping Services",
    link: "services/mapping"
  }, {
    label: "Digital Projects",
    link: "services/digital"
  }, {
    label: "Creative Project",
    link: "services/creative"
  }, {
    label: "Smart Projects Services",
    link: "services/smart"
  }]
}]



export function Footer() {
  const { classes } = useStyles();
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });
  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Box>
            <MaesalabLogo />
          </Box>
          <Text size="xs" color="dimmed" className={classes.description}>
            Build fully functional accessible web applications faster than ever
            <br />
            Telp: <Anchor size="xs" target={"_blank"} href={`https://api.whatsapp.com/send?phone=+62816-234-579`}>+62 816-234-579</Anchor>
            <br />
            Email: contact@maesalab.com
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © 2022 PT. Maesalab Tech Indonesia. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}