import React from 'react';
import { Container, Grid } from '@mantine/core';
import useStyles from './Testimonials.styles';
import { Comment } from './Comments';
import { SectionText } from './SectionText';

const testimonials = [{
  postedAt: "Pemerintah Kota Manado",
  body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  author: {
    name: "Imanuel Pundoko",
    image: "https://gravatar.com/avatar/4f5e8b0eb49c6b9bf9c04a3f02c0192e?s=400&d=robohash&r=x"
  }
}, {
  postedAt: "Pemerintah Kota Bitung",
  body: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  author: {
    name: "Edgar Pontoh",
    image: "https://gravatar.com/avatar/3ad16c44a75e2dbb954d5e46d507e260?s=400&d=robohash&r=x"
  }
}, {
  postedAt: "CV. Berkat Baterai Mulia",
  body: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  author: {
    name: "Yohanes Sahante",
    image: "https://gravatar.com/avatar/2720ac25e40d93af82556e2380f272ef?s=400&d=robohash&r=x"
  }
}, {
  postedAt: "Pemerintah Prov. Sulawesi Utara",
  body: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  author: {
    name: "Benny Nanlohy",
    image: "https://gravatar.com/avatar/55b6410eaa8f684afda9d834915363a4?s=400&d=robohash&r=x"
  }
}, {
  postedAt: "Pemerintah Kota Manado",
  body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  author: {
    name: "Imanuel Pundoko",
    image: "https://gravatar.com/avatar/4f5e8b0eb49c6b9bf9c04a3f02c0192e?s=400&d=robohash&r=x"
  }
}, {
  postedAt: "Pemerintah Kota Bitung",
  body: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  author: {
    name: "Edgar Pontoh",
    image: "https://gravatar.com/avatar/3ad16c44a75e2dbb954d5e46d507e260?s=400&d=robohash&r=x"
  }
}, {
  postedAt: "CV. Berkat Baterai Mulia",
  body: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  author: {
    name: "Yohanes Sahante",
    image: "https://gravatar.com/avatar/2720ac25e40d93af82556e2380f272ef?s=400&d=robohash&r=x"
  }
}, {
  postedAt: "Pemerintah Prov. Sulawesi Utara",
  body: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  author: {
    name: "Benny Nanlohy",
    image: "https://gravatar.com/avatar/55b6410eaa8f684afda9d834915363a4?s=400&d=robohash&r=x"
  }
}, {
  postedAt: "Pemerintah Kota Manado",
  body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  author: {
    name: "Imanuel Pundoko",
    image: "https://gravatar.com/avatar/4f5e8b0eb49c6b9bf9c04a3f02c0192e?s=400&d=robohash&r=x"
  }
}, {
  postedAt: "Pemerintah Kota Bitung",
  body: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  author: {
    name: "Edgar Pontoh",
    image: "https://gravatar.com/avatar/3ad16c44a75e2dbb954d5e46d507e260?s=400&d=robohash&r=x"
  }
}, {
  postedAt: "CV. Berkat Baterai Mulia",
  body: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  author: {
    name: "Yohanes Sahante",
    image: "https://gravatar.com/avatar/2720ac25e40d93af82556e2380f272ef?s=400&d=robohash&r=x"
  }
}, {
  postedAt: "Pemerintah Prov. Sulawesi Utara",
  body: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  author: {
    name: "Benny Nanlohy",
    image: "https://gravatar.com/avatar/55b6410eaa8f684afda9d834915363a4?s=400&d=robohash&r=x"
  }
}]

export function Testimonials() {
  const { classes } = useStyles();

  return (
    <>
      <SectionText
        id={"testimonials"}
        title={<>What <span className={classes.highlight}>founders</span> are saying</>}
        subTitle={"Testimonials"}
        description={`Let's see what the founders have to say about our service.`}
      />
      <Container mb="xl">
        <Grid align="stretch">
          {testimonials.map(({ postedAt, body, author }, index) => (
            <Grid.Col key={index} sm={6} md={4}>
              <Comment
                postedAt={postedAt}
                body={body}
                author={author}
              />
            </Grid.Col>))}
        </Grid>
      </Container>
    </>
  );
}