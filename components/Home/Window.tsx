import { Text } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import React from "react";
import useStyles from "./Window.styles";

interface WindowProps {
  title?: string;
}

export const Window: React.FC<WindowProps> = ({
  title,
  children
}) => {
  const { classes, theme } = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.topBar}>
        <div className="actions">
          <div className="cl"></div>
          <div className="mx"></div>
          <div className="mn"></div>
        </div>
        <div className="searchbar">
          <div>
            <div>
              <IconSearch size={5} display="block"/>
            </div>
            <div>
              {title}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.content}>
        {children}
      </div>
    </div>
  )
}