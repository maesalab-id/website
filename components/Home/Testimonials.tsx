import React from 'react';
import { Container, Grid } from '@mantine/core';
import useStyles from './Testimonials.styles';
import { Comment } from './Comments';
import { SectionText } from './SectionText';

const testimonials = [{
  postedAt: "Pemerintah Kota Manado",
  body: "Katedu telah membantu perusahaan kami mengelola kehadiran karyawan dan meja kerja dengan lebih efisien. Platform berbasis aplikasi mobile memudahkan kita untuk mendapatkan data performa secara real time. Kami sekarang dapat lebih akurat melacak kehadiran dan jobdesk karyawan kami, baik WFO maupun WFH.",
  author: {
    name: "Imanuel Pundoko",
    image: "https://gravatar.com/avatar/4f5e8b0eb49c6b9bf9c04a3f02c0192e?s=400&d=robohash&r=x"
  }
}, {
  postedAt: "Pemerintah Kota Bitung",
  body: "Saya menemukan bahwa Katedu memberikan solusi yang akurat, real-time dan efisien untuk data kinerja. Aplikasi seluler mudah digunakan dan membantu saya melacak kehadiran karyawan dan meja kerja. Ini telah membantu saya untuk meningkatkan produktivitas saya di tempat kerja.",
  author: {
    name: "Edgar Pontoh",
    image: "https://gravatar.com/avatar/3ad16c44a75e2dbb954d5e46d507e260?s=400&d=robohash&r=x"
  }
}, {
  postedAt: "CV. Berkat Baterai Mulia",
  body: "Kasir telah membantu perusahaan saya untuk mengelola kehadiran karyawan dan tugas pekerjaan dengan lebih efisien. Aplikasi seluler sangat ramah pengguna dan datanya diambil secara akurat secara real-time. Hal ini telah membantu kami untuk meningkatkan produktivitas kerja dan operasional kami.",
  author: {
    name: "Yohanes Sahante",
    image: "https://gravatar.com/avatar/2720ac25e40d93af82556e2380f272ef?s=400&d=robohash&r=x"
  }
}, {
  postedAt: "Politeknik Manado",
  body: "E-Office telah membantu merampingkan administrasi kantor dan manajemen dokumen kami. Solusi digital yang ditawarkan oleh E-Office nyaman dan efisien. Kami sangat merekomendasikan layanan mereka kepada perusahaan dan institusi lain.",
  author: {
    name: "Djorkaef Sengka",
    image: "https://gravatar.com/avatar/2abe2989ee26f56d92531127eeebb795?s=400&d=robohash&r=x"
  }
}, {
  postedAt: "Pemkab. Minahasa Utara",
  body: "Melalui Aplikasi CTS Dukcapil Maesalab saya dapat mengajukan permohonan penerbitan dokumen kependudukan saya secara online tanpa harus pergi ke Kantor Kependudukan dan Pencatatan Sipil. Prosesnya sangat lancar dan efisien, dan saya sangat terkejut melihat betapa cepatnya saya menerima dokumen saya. Saya akan sangat merekomendasikan layanan ini kepada siapa saja yang perlu mengajukan permohonan dokumen kependudukan.",
  author: {
    name: "Ridho Sembadah",
    image: "https://gravatar.com/avatar/4cb51cdee04647e75ab2876eda17b0af?s=400&d=robohash&r=x"
  }
}, {
  postedAt: "Pemerintah Prov. Sulawesi Utara",
  body: "Saya menemukan aplikasi LAPOR sangat ramah pengguna dan membantu. Ini adalah platform yang bagus bagi publik untuk menyuarakan keluhan dan aspirasi mereka tentang layanan publik. Respon time dari instansi terkait juga cepat dan memuaskan. Saya pasti akan merekomendasikan aplikasi ini kepada orang lain.",
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