import React from 'react';
import { Text, Avatar, Group, TypographyStylesProvider, Paper } from '@mantine/core';
import useStyles from './Comments.styles';

interface CommentHtmlProps {
  postedAt: string;
  body: string;
  author: {
    name: string;
    image: string;
  };
}

export function Comment({ postedAt, body, author }: CommentHtmlProps) {
  const { classes } = useStyles();
  return (
    <Paper withBorder radius="md" p={"md"} className={classes.comment}>
      <Group spacing="sm">
        <Avatar src={author.image} alt={author.name} radius="xl" />
        <div>
          <Text size="sm">{author.name}</Text>
          <Text size="xs" color="dimmed">
            {postedAt}
          </Text>
        </div>
      </Group>
      <TypographyStylesProvider className={classes.body}>
        <div className={classes.content} dangerouslySetInnerHTML={{ __html: body }} />
      </TypographyStylesProvider>
    </Paper>
  );
}