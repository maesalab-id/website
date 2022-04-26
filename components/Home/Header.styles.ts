import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
  inner: {
    height: 60,
    display: 'flex',
    alignItems: 'center',
    ["> div"]: {
      justifyContent: "space-between",
      // [theme.fn.smallerThan('sm')]: {
      //   justifyContent: "flex-start",
      // }
    }
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}))