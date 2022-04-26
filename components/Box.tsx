import { Box as MTBox, BoxProps as MTBoxProps, createStyles, PolymorphicRef, Sx } from "@mantine/core"
import React, { forwardRef } from "react"

interface BoxStylesProps {
  flex?: boolean;
  grow?: boolean;
  shrink?: boolean;
  align?: "start" | "center" | "end" | "stretch" | "baseline";
  justify?: "start" | "center" | "end" | "between";
  wrap?: "no-wrap" | "wrap" | "wrap-reverse";
}

function gv(options: { variant: any, style: Sx }[], value: any): any {
  const result = options.find((option) => option.variant === value)?.style;
  return result;
}

const useStyles = createStyles((theme, {
  grow,
  shrink,
  align,
  justify,
  wrap,
}: BoxStylesProps) => ({
  flex: {
    display: "flex"
  },
  align: gv([{
    variant: "start",
    style: { alignItems: "start" }
  }, {
    variant: "center",
    style: { alignItems: "center" }
  }, {
    variant: "end",
    style: { alignItems: "end" }
  }, {
    variant: "stretch",
    style: { alignItems: "stretch" }
  }, {
    variant: "baseline",
    style: { alignItems: "baseline" }
  }], align),
  justify: gv([{
    variant: "start",
    style: { justifyContent: "flex-start" }
  }, {
    variant: "center",
    style: { justifyContent: "center" }
  }, {
    variant: "end",
    style: { justifyContent: "flex-end" }
  }, {
    variant: "between",
    style: { justifyContent: "space-between" }
  }], justify),
  wrap: gv([{
    variant: "no-wrap",
    style: { wrap: "nowrap" }
  }, {
    variant: "wrap",
    style: { wrap: "wrap" }
  }, {
    variant: "wrap-reverse",
    style: { wrap: "wrap-reverse" }
  }], wrap),
  grow: gv([{
    variant: true,
    style: {
      flexGrow: 1
    }
  }, {
    variant: false,
    style: {
      flexGrow: 0
    }
  }], grow),
  shrink: gv([{
    variant: true,
    style: {
      flexShrink: 1
    }
  }, {
    variant: false,
    style: {
      flexShrink: 0
    }
  }], shrink),
  root: {

  }
}));

interface BoxProps extends MTBoxProps<'div'>, BoxStylesProps { }

export const Box = forwardRef((
  { children, className, grow, shrink, flex, align, justify, wrap, ...others }: BoxProps,
  ref: PolymorphicRef<'div'>
) => {
  const { classes, cx } = useStyles({ grow, shrink, align, justify, wrap});
  return (
    <MTBox
      ref={ref}
      className={cx(
        classes.root,
        grow && classes.grow,
        shrink && classes.shrink,
        flex && classes.flex,
        align && classes.align,
        justify && classes.justify,
        wrap && classes.wrap,
        className
      )}
      {...others}
    >
      {children}
    </MTBox>
  )
})

Box.displayName = "Box";