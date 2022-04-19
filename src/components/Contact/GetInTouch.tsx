import React from 'react';
import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  Container,
  Grid,
} from '@mantine/core';
import useStyles from './GetInTouch.styles';
import { Box } from '../Box';

export function GetInTouch() {
  const { classes, theme } = useStyles();

  return (
    <Container className={classes.wrapper}>
      <Grid gutter={0}>
        <Grid.Col md={8}>
          <Paper shadow="md" radius="lg">
            <div>
              <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
                <Text
                  weight={900}
                  mb="md"
                  variant="gradient"
                  gradient={{ from: 'blue', to: 'cyan' }}
                  sx={{
                    fontSize: theme.fontSizes.md * 2,
                    [theme.fn.largerThan("xs")]: {
                      fontSize: theme.fontSizes.xl * 2,
                    }
                  }}>
                  Talk to our sales team
                </Text>

                <div className={classes.fields}>
                  <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                    <TextInput label="Your name" placeholder="Your name" />
                    <TextInput label="Your email" placeholder="hello@mantine.dev" required />
                  </SimpleGrid>

                  <TextInput mt="md" label="Subject" placeholder="Subject" required />

                  <Textarea
                    mt="md"
                    label="Your message"
                    placeholder="Please include all relevant information"
                    minRows={3}
                  />

                  <Group position="right" mt="md">
                    <Button type="submit" className={classes.control}>
                      Send message
                    </Button>
                  </Group>
                </div>
              </form>

            </div>
          </Paper>
        </Grid.Col>
        <Grid.Col md={4}>
          <Box
            flex
            align="center"
            sx={{
              height: "100%"
            }}>
            <div className={classes.contacts}>
              <div>
                <Text size="lg" weight={700} className={classes.title}>
                  Maesalab mailing address
                </Text>
                <Text>
                  Griya Paniki Indah, Jl. Eidelweeis Utama No. 44<br /> Kota Manado, Sulawesi Utara
                </Text>
              </div>
              <div>
                <Text mt="lg" size="lg" weight={700} className={classes.title}>
                  Phone Number
                </Text>
                <Text>
                  +62 816-234-579
                </Text>
              </div>
              <div>
                <Text mt="lg" size="lg" weight={700} className={classes.title}>
                  Email Address
                </Text>
                <Text>
                  product@maesalab.com
                </Text>
                <Text sx={{ color: '#fff' }}>
                  contact@maesalab.com
                </Text>
              </div>
            </div>
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  );
}