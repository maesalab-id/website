import React from 'react';
import { Text, Container, ActionIcon, Group, Title } from '@mantine/core';
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
  title: "About",
  links: [{
    label: "Features",
    link: "features"
  }, {
    label: "Features",
    link: "features"
  }, {
    label: "Features",
    link: "features"
  }, {
    label: "Features",
    link: "features"
  }, {
    label: "Features",
    link: "features"
  },]
}, {
  title: "Project",
  links: [{
    label: "Features",
    link: "features"
  }, {
    label: "Features",
    link: "features"
  }, {
    label: "Features",
    link: "features"
  }, {
    label: "Features",
    link: "features"
  }, {
    label: "Features",
    link: "features"
  },]
}, {
  title: "Community",
  links: [{
    label: "Features",
    link: "features"
  }, {
    label: "Features",
    link: "features"
  }, {
    label: "Features",
    link: "features"
  }, {
    label: "Features",
    link: "features"
  }, {
    label: "Features",
    link: "features"
  },]
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