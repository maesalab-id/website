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
} from '@mantine/core';
import useStyles from './GetInTouch.styles';
import { Box } from '../Box';

export function GetInTouch() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper}>
      <Box flex>
        <Paper shadow="md" radius="lg">
          <div>
            <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
              <Text
                size="xl"
                weight={900}
                className={classes.title}
                mb="md"
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan' }}>
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
        <Box
          flex
          align="center"
          sx={{
            flex: '0 0 280px',
          }}>
          <div className={classes.contacts}>
            <Text size="lg" weight={700} className={classes.title} sx={{ color: '#fff' }}>
              Maesalab mailing address
            </Text>
            <Text sx={{ color: '#fff' }}>
              88 Colin P Kelly Jr St
              San Francisco, CA 94107
              United States
            </Text>
            <Text mt="lg" size="lg" weight={700} className={classes.title} sx={{ color: '#fff' }}>
              Phone Number
            </Text>
            <Text sx={{ color: '#fff' }}>
              +1 (877) 958-8742
            </Text>
          </div>
        </Box>
      </Box>
    </Container>
  );
}