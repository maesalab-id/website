import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  inner: {
    display: 'flex',
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: "column",
      paddingTop: theme.spacing.xl,
    },
  },

  content: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    flexShrink: 0,
    maxWidth: 420,

    [theme.fn.largerThan('lg')]: {
      maxWidth: 480,
    },
    [theme.fn.smallerThan('md')]: {
      maxWidth: '50%',
    },
    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    perspective: 1000,
    perspectiveOrigin: "0 50%",
    padding: 0,
    transition: "500ms ease",

    "& > div": {
      transition: "500ms ease",
      transform: "rotateY(0deg)",
    },

    [theme.fn.largerThan('sm')]: {
      "& > div": {
        transform: "rotateY(-25deg)",
      },
      padding: `5%`,
      paddingLeft: 0,

      "&:hover": {
        transform: "scale(1.1)",
        paddingLeft: "7%",
        "& > div": {
          transform: "rotateY(0deg)",
        },
      }
    },
  },
  slider: {
    flexGrow: 1,
    width: 1,
    marginTop: 0,
    [theme.fn.largerThan('lg')]: {
      marginTop: -theme.spacing.md,
    },
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.md,
      flexGrow: 0,
      width: "100%",
    },
    "& .slick-dots li": {
      width: "unset"
    },
    "& .slick-list": {
      margin: `0 -25px`
    },
    "& .slick-slide > div": {
      margin: `0 25px`
    },
    // "& .slick-track > div > div": {
    //   transition: "500ms ease",
    //   opacity: 0,
    // },
    // "& .slick-track > div.slick-active > div": {
    //   opacity: 1,
    // }
  },
}));