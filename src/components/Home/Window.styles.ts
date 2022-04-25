import { createStyles } from "@mantine/core";

export default createStyles(({ colors, spacing, fontSizes }) => ({
  root: {
    backgroundColor: colors.dark[0],
    padding: spacing.xs / 2,
    paddingTop: 0,
    borderRadius: spacing.xs,
  },
  content: {

  },
  topBar: {
    display: "flex",
    "& .actions": {
      display: "flex",
      paddingTop: spacing.xs / 2,
      paddingBottom: spacing.xs / 2,
      "div": {
        height: spacing.xs,
        width: spacing.xs,
        borderRadius: "100%",
        marginRight: spacing.xs / 2,
        "&.cl": {
          backgroundColor: colors.red[5],
        },
        "&.mx": {
          backgroundColor: colors.yellow[5],
        },
        "&.mn": {
          backgroundColor: colors.blue[5],
        },
      }
    },
    "& .searchbar": {
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      // paddingTop: spacing.xs / 2,
      // paddingBottom: spacing.xs / 2,
      "> div": {
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 2,
        padding: `0 2px`,
        minWidth: "50%",
        "> div": {
          fontSize: 6
        },
        "> div + div": {
          flexGrow: 1,
          textAlign: "center"
        },
      }
    }
  }
}))