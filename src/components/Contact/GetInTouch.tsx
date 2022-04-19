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
import { useFormik } from 'formik';
import * as Yup from "yup";
import { client } from '../client';
import { useRouter } from 'next/router';
import { showNotification } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons';

const Schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().required(),
  company: Yup.string().required(),
  message: Yup.string().required(),
  phone: Yup.string().required(),
})

export function GetInTouch() {
  const { classes, theme } = useStyles();
  const router = useRouter();

  const { errors, isSubmitting, handleChange, handleSubmit } = useFormik({
    validationSchema: Schema,
    initialValues: {
      company: "",
      email: "",
      name: "",
      message: "",
      phone: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      console.log(values);
      try {
        const res = await client.create("/api/sendmail", values);
        console.log(res);
        showNotification({
          "icon": <IconCheck size={18} />,
          "message": "Thank You :)"
        });
        router.push("thankyou");
      } catch (err: any) {
        console.error("ERROR");
        console.error(err.message);
        showNotification({
          "icon": <IconX size={18} />,
          "message": "Something went wrong"
        });
      }
      setSubmitting(false);
    }
  });

  return (
    <Container className={classes.wrapper}>
      <Grid gutter={0}>
        <Grid.Col md={8}>
          <Paper shadow="md" radius="lg">
            <div>
              <form
                className={classes.form}
                onSubmit={handleSubmit}>
                <Text
                  weight={900}
                  mb="md"
                  variant="gradient"
                  gradient={{ from: 'teal', to: 'green' }}
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
                    <TextInput
                      name="name"
                      label="Your name"
                      placeholder="Your name"
                      error={errors.name}
                      onChange={handleChange}
                    />
                    <TextInput
                      name="email"
                      label="Your email"
                      placeholder="hello@maesalab.com"
                      error={errors.email}
                      onChange={handleChange}
                    />
                  </SimpleGrid>

                  <TextInput
                    mt="md"
                    name="phone"
                    label="Phone"
                    placeholder="Phone"
                    error={errors.phone}
                    onChange={handleChange}
                  />
                  <TextInput
                    mt="md"
                    name="company"
                    label="Company"
                    placeholder="Company"
                    error={errors.company}
                    onChange={handleChange}
                  />

                  <Textarea
                    mt="md"
                    name="message"
                    label="Your message"
                    placeholder="Please include all relevant information"
                    error={errors.message}
                    minRows={3}
                    onChange={handleChange}
                  />

                  <Group position="right" mt="md">
                    <Button type="submit" loading={isSubmitting} className={classes.control}>
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