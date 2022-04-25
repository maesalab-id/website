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
    width: "100%",
    maxWidth: 480,
    flexShrink: 0,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '50%',
      marginRight: 0,
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
    padding: `10%`,
    paddingLeft: 0,

    "& > div": {
      transform: "rotateY(-25deg)",
      "-webkit-backface-visibility": "hidden",
    }
  },
  slider: {
    flexGrow: 1,
    width: 1,
    
    [theme.fn.smallerThan('sm')]: {
      flexGrow: 0,
      width: "100%",
    },
    "& .slick-dots li": {
      width: "unset"
    }
  },
}));