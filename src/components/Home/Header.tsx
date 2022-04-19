import { Anchor, Button, Center, Container, Header as MTHeader, Menu } from "@mantine/core"
import { useBooleanToggle } from "@mantine/hooks";
import NextLink from "next/link";
import { IconChevronDown } from "@tabler/icons"
import { Box } from "../Box"
import { MaesalabLogo } from "../Maesalab";
import useStyles from "./Header.styles"

interface Links {
  link: string;
  label: string;
  links?: Links[];
}

const links: Links[] = [{
  link: "/#product",
  label: "Products",
}, {
  link: "/#why",
  label: "Why",
}, {
  link: "/#testimonials",
  label: "Testimonials",
}]


export const Header = () => {
  const { classes, cx } = useStyles();
  const [opened, toggleOpened] = useBooleanToggle(false);
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
            <NextLink href={link.link} passHref>
              <Button component="a" variant="subtle" size="xs">
                <Center>
                  <span className={classes.linkLabel}>{link.label}</span>
                  <IconChevronDown size={12} />
                </Center>
              </Button>
            </NextLink>
          }
        >
          {menuItems}
        </Menu>
      );
    }

    return (
      <NextLink key={link.link} href={link.link} passHref>
        <Button
          component="a"
          href={link.link}
          variant="subtle"
          size="xs">
          {link.label}
        </Button>
      </NextLink>
    );
  });

  return (
    <MTHeader height={60}>
      <Container className={classes.inner}>
        <Box flex grow align="center">
          <Box>
            <Anchor
              href="/"
              color={"dark"}
            >
              <MaesalabLogo style={{
                display: "block"
              }} />
            </Anchor>
          </Box>
          <Box className={classes.links}>
            {items}
          </Box>
          <Button component="a" href="contact">Contact us</Button>
        </Box>
      </Container>
    </MTHeader>
  )
}