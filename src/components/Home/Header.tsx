import { Anchor, Button, Center, Container, Header as MTHeader, Menu, Title } from "@mantine/core"
import { IconChevronDown } from "@tabler/icons"
import NextLink from 'next/link'
import { Box } from "../Box"
import useStyles from "./Header.styles"

interface Links {
  link: string;
  label: string;
  links?: Links[];
}

const links: Links[] = [{
  link: "#product",
  label: "Products",
}, {
  link: "#why",
  label: "Why",
}, {
  link: "#testimonials",
  label: "Testimonials",
}]


export const Header = () => {
  const { classes, theme } = useStyles();
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item
        key={item.link}
        component="a"
        href={item.link}
      >{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          delay={0}
          transitionDuration={0}
          placement="end"
          gutter={1}
          control={
            <Button component="a" href={link.link} variant="subtle" size="xs">
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size={12} />
              </Center>
            </Button>
          }
        >
          {menuItems}
        </Menu>
      );
    }

    return (
      <Button
        key={link.link}
        component="a"
        href={link.link}
        variant="subtle"
        size="xs">
        {link.label}
      </Button>
    );
  });

  return (
    <MTHeader height={60}>
      <Container className={classes.inner}>
        <Box flex grow justify="between">
          <Box>
            <Anchor
              href="/"
              color={"dark"}
            >
              <Title
                order={3}
                sx={{
                  fontWeight: 900,
                }}
              >MaesaLab</Title>
            </Anchor>
          </Box>
          <Box>
            {items}
          </Box>
          <Button component="a" href="contact">Contact us</Button>
        </Box>
      </Container>
    </MTHeader>
  )
}