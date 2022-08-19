import React from "react";
import { Container, Text, Timeline, TimelineItem } from "@mantine/core";
import useStyles from "./Testimonials.styles";
import {
  IconCircles,
  IconDirections,
  IconFlame,
  IconRocket,
} from "@tabler/icons";
import { SectionText } from "./SectionText";

export function About() {
  const { classes } = useStyles();

  return (
    <>
      <SectionText
        id="about"
        title={
          <>
            Who are <span className={classes.highlight}>MaesaLab</span>?
          </>
        }
        subTitle={"About"}
      />
      <Container size={"xs"} pb="xl">
        <Text component="p" mb="xl" mt={0}>
          <Text
            component="span"
            weight="bold"
            variant="gradient"
            gradient={{ from: "green", to: "teal" }}
          >
            PT. MAESALAB TECH INDONESIA
          </Text>{" "}
          adalalah perusahaan perangkat lunak yang didedikasikan untuk
          mengembangkan solusi dan memecahkan masalah paling penting dalam
          industri spasial, smart city dan bisnis di Sulawesi utara.
        </Text>
        <Timeline reverseActive active={4}>
          <TimelineItem
            title="Future"
            lineVariant="dotted"
            bulletSize={24}
            bullet={<IconDirections size={18} />}
          >
            <Text component="p" color={"dimmed"} my={0}>
              Melahirkan banyak produk-produk solusi untuk yang didedikasikan
              untuk mengembangan solusi dan memecahkan masalah di industri{" "}
              <Text variant="link" component="span">
                spatial
              </Text>
              ,{" "}
              <Text variant="link" component="span">
                smart city
              </Text>{" "}
              dan{" "}
              <Text variant="link" component="span">
                bisnis
              </Text>{" "}
              di Sulawesi Utara.
            </Text>
          </TimelineItem>
          <TimelineItem
            title={`Now ${new Date().getFullYear()}`}
            bulletSize={24}
            bullet={<IconFlame size={18} />}
          >
            <Text component="p" color={"dimmed"} my={0}>
              Keep Hustling and scouting more Human Resource
            </Text>
            <Text size="xs">4 Services</Text>
            <Text size="xs">10 Employees</Text>
            <Text size="xs">11 Products</Text>
            <Text size="xs">100+ Clients</Text>
          </TimelineItem>
          <TimelineItem
            title="2021 Launch"
            bulletSize={24}
            bullet={<IconRocket size={18} />}
            lineVariant="dashed"
          >
            <Text component="p" color={"dimmed"} my={0}>
              Mendirikan perusahan perangkat lunak yang bernama{" "}
              <Text variant="link" component="span">
                PT. Maesalab Tech Indonesia
              </Text>{" "}
              yang memiliki pengalaman dan komitmen untuk selalu menciptakan
              produk yang berkualitas dalam hal design, daya tarik visual,
              performa, fungsi, dan keamanan.
            </Text>
          </TimelineItem>
          <TimelineItem active title="2018">
            <Text component="p" color={"dimmed"} my={0}>
              Digitalisasi di bidang administrasi untuk pemerintahan seperti,{" "}
              <Text variant="link" component="span">
                surat-menyurat
              </Text>
              ,{" "}
              <Text variant="link" component="span">
                tanda tangan
              </Text>
              ,{" "}
              <Text variant="link" component="span">
                antrian
              </Text>
              , dan{" "}
              <Text variant="link" component="span">
                lainnya
              </Text>
              .
            </Text>
          </TimelineItem>
          <TimelineItem title="2017">
            <Text component="p" color={"dimmed"} my={0}>
              Pengembangan aplikasi{" "}
              <Text
                variant="link"
                component="a"
                href="https://en.wikipedia.org/wiki/Geospatial_(disambiguation)"
              >
                Geospatial
              </Text>{" "}
              pertama yang berbasis web untuk kemudahan pengguna untuk mengedit
              dan mengvisualisasikan data.
            </Text>
          </TimelineItem>
          <TimelineItem
            title="2016 Scouting"
            bullet={<IconCircles size={12} />}
          >
            <Text component="p" color={"dimmed"} my={0}>
              Merekrut anak-anak muda{" "}
              <Text
                variant="link"
                component="a"
                href="https://id.wikipedia.org/wiki/Sulawesi_Utara"
              >
                Sulawesi Utara
              </Text>{" "}
              untuk memberikan pengalaman di dunia Digitalisasi dengan
              pengalaman yang profesional
            </Text>
          </TimelineItem>
        </Timeline>
        {/* <Grid gutter="md" justify="center">
          {services.map(({ color, title, description, icon }, index) => (
            <Grid.Col key={index} sm={6}>
              <Card
                sx={{ height: "100%" }}
                color={color}
                title={title}
                description={description}
                icon={icon}
              />
            </Grid.Col>
          ))}
        </Grid> */}
      </Container>
    </>
  );
}
