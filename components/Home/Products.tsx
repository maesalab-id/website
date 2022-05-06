import React, { FC, useMemo, useState } from 'react';
import { Text, Container, Title, Grid, Tabs, Divider, Collapse, Anchor } from '@mantine/core';
import useStyles from './Testimonials.styles';
import { Card } from './Card';
import { IconColorSwatch } from '@tabler/icons';
import { SectionText } from './SectionText';
import { useMediaQuery } from '@mantine/hooks';

const categories = {
  "geo": "Geospatial",
  "ofs": "Office Suite",
  "iot": "Internet of Things",
  "com": "Commerce",
}

interface Products {
  color: string;
  icon: any;
  title: string;
  description: any;
  categories: string[];
}

const CardDescription: FC<{ excerpt?: any }> = ({ excerpt, children }) => {
  const [opened, setOpen] = useState(false);
  return (
    <>
      <Collapse in={opened}>
        {children}
      </Collapse>
      {!opened &&
        <>
          <Text size="sm">
            {excerpt}{" "}
            <Text inherit component="span" variant="link" onClick={() => setOpen(o => !o)}>more...</Text>
          </Text>
        </>
      }
    </>
  )
}

const _products: Products[] = [{
  color: "blue",
  icon: <IconColorSwatch size={28} />,
  title: "QNTAL",
  description: (
    <div>
      <Text mb="xs">Geospatial Manager</Text>
      <CardDescription excerpt={"Lorem ipsum dolor sit amet"}>
        <Text size="sm">
          <Text inherit>Solusi kemudahan masyarakat untuk menyampaikan laporan atau keluhan mengenai kekurangan dan kelemahan dari pelayanan publik tertentu.</Text>
          <Text inherit>Aplikasi Layanan Aspirasi dan Pengaduan Online (LAPOR) PRISY ini dapat diakses melalui website dan aplikasi mobile pada smartphone.</Text>
        </Text>
      </CardDescription>
    </div>
  ),
  categories: [categories.geo]
}, {
  color: "red",
  icon: <IconColorSwatch size={28} />,
  title: "Prisy",
  description: (
    <div>
      <Text mb="xs">Layanan Aspirasi dan Pengaduan Online</Text>
      <CardDescription excerpt={"Solusi kemudahan masyarakat untuk menyampaikan laporan atau keluhan"}>
        <Text size="sm">
          <Text inherit>Solusi kemudahan masyarakat untuk menyampaikan laporan atau keluhan mengenai kekurangan dan kelemahan dari pelayanan publik tertentu.</Text>
          <Text inherit>Aplikasi Layanan Aspirasi dan Pengaduan Online (LAPOR) PRISY ini dapat diakses melalui website dan aplikasi mobile pada smartphone.</Text>
        </Text>
      </CardDescription>
    </div>
  ),
  categories: [categories.geo, categories.ofs]
}, {
  color: "green",
  icon: <IconColorSwatch size={28} />,
  title: "Katedu",
  description: (
    <div>
      <Text mb="xs">Kinerja dan Absensi Transparan Terpadu</Text>
      <CardDescription excerpt={"Solusi memudahkan instansi atau perusahaan Mendapatkan Data Kinerja"}>

        <Text size="sm">
          <Text inherit>Solusi memudahkan instansi atau perusahaan Mendapatkan Data Kinerja (absensi dan jobdesk Karyawan Secara Akurat, Realtime dan Lebih Hemat.</Text>
          <Text inherit>Melalui platform berbasis aplikasi mobile untuk kelola absensi dan jobdesk karyawan baik karyawan wfo, wfh, dan karyawan lapangan.</Text>
        </Text>
      </CardDescription>
    </div>
  ),
  categories: [categories.geo, categories.ofs]
}, {
  color: "blue",
  icon: <IconColorSwatch size={28} />,
  title: "CTS",
  description: (
    <div>
      <Text mb="xs">Control Tracking System</Text>
      <CardDescription excerpt={"Solusi pimpinan, karyawan, masyarakat dapat menelusuri (tracking) proses penerbitan dokumen kependudukan yang diajukan."}>
        <Text size="sm">
          <Text inherit>Solusi pimpinan, karyawan, masyarakat dapat menelusuri (tracking) proses penerbitan dokumen kependudukan yang diajukan.</Text>
          <Text inherit>Melalui Aplikasi CTS Dukcapil maesalab, penduduk dapat secara online dan mandiri mengajukan permohonan penerbitan dokumen kependudukan dari mana saja tanpa harus datang ke Dinas Kependudukan dan Pencatatan Sipil dengan terlebih dahulu mendaftarkan akun.</Text>
        </Text>
      </CardDescription>
    </div>
  ),
  categories: [categories.geo, categories.ofs]
}, {
  color: "teal",
  icon: <IconColorSwatch size={28} />,
  title: "E-Office",
  description: (
    <div>
      <Text mb="xs">Sistem Manajemen Perkantoran dan Persuratan Elektronik</Text>
      <CardDescription excerpt={"Solusi pengelolaan administrasi perkantoran dan persuratan secara digital"}>
        <Text size="sm">Solusi pengelolaan administrasi perkantoran dan persuratan secara digital untuk berbagai instansi maupun perusahaan.</Text>
      </CardDescription>
    </div>
  ),
  categories: [categories.ofs]
}, {
  color: "purple",
  icon: <IconColorSwatch size={28} />,
  title: "Digital Sign",
  description: (
    <div>
      <CardDescription excerpt={"Solusi Integrasi dengan layanan sertifikasi elektronik untuk kebutuhan tanda tangan digital Tanda Tangan Elektronik (TTE)"}>
        <Text size="sm">
          <Text inherit>Solusi Integrasi dengan layanan sertifikasi elektronik untuk kebutuhan tanda tangan digital Tanda Tangan Elektronik (TTE) surat dan dokumen dengan BSrE BSSN atau penyedia layanan sertifikat elektronik untuk pemenuhan legalitas dokumen di era digital</Text>
          <Text inherit>Kami telah berpengalaman membantu integrasi Tanda Tangan Elektronik (TTE) menggunakan BsRE di Pemkab Minahasa Tenggara dan Kami siap membantu pengembangan integrasi menggunakan penyedia Certificate Authority (CA) lainnya.</Text>
        </Text>
      </CardDescription>
    </div>
  ),
  categories: [categories.ofs]
}, {
  color: "blue",
  icon: <IconColorSwatch size={28} />,
  title: "Asset",
  description: (
    <div>
      <CardDescription excerpt={"Solusi pencatatan aset yang tidak mendetail dalam pengelolaan aset tetap Perusahaan"}>
        <Text size="sm">
          <Text inherit>Solusi pencatatan aset yang tidak mendetail dalam pengelolaan aset tetap Perusahaan sehingga setiap perubahan status aset, penambahan aset dan pergerakkan aset tidak terdokumentasi dengan baik.</Text>
          <Text inherit>Melalui Aplikasi asset maesalab ini instansi atau perusahaan dapat mengelola aset tetap Perusahaan atau instansi dengan metode pencatatan secara rinci dan mendetail sehingga setiap perubahan, penambahan dan pergerakan aset dapat terdokumentasi dengan baik. Bagitu juga dengan pelacakan aset jauh lebih mudah dan efisien menggunakan smartphone.</Text>
        </Text>
      </CardDescription>
    </div>
  ),
  categories: [categories.ofs]
}, {
  color: "red",
  icon: <IconColorSwatch size={28} />,
  title: "Antrian online",
  description: (
    <div>
      <Text mb="xs">Solusi kerumunan antrian di Instansi</Text>
      <CardDescription excerpt={"Aplikasi antrian online maesalab merupakan perangkat lunak yang membantu Anda mengatur lalu lintas antrian secara online."}>
        <Text size="sm">Aplikasi antrian online maesalab merupakan perangkat lunak yang membantu Anda mengatur lalu lintas antrian secara online. masyarakat pun tidak perlu lagi datang hanya untuk registrasi, karena semuanya dapat diakses lewat web browser dan mobile app yang tersedia untuk diunduh secara gratis oleh masyarakat.</Text>
      </CardDescription>
    </div>
  ),
  categories: [categories.ofs],
}, {
  color: "blue",
  icon: <IconColorSwatch size={28} />,
  title: "Ovor",
  description: (
    <div>
      <Text mb="xs">Platform Internet of Things</Text>
      <CardDescription excerpt={"Dari developer untuk developer"}>
        <Text size="sm">OVoRD adalah platform yang terinspirasi dari cara Anda mengerjakan sistem khususnya IoT. Anda dapat menyimpan, melihat dan menyediakan data untuk membangun sistem IoT tanpa banyak membuang waktu.</Text>
      </CardDescription>
    </div>
  ),
  categories: [categories.iot]
}, {
  color: "blue",
  icon: <IconColorSwatch size={28} />,
  title: "IoT Sensor",
  description: (
    <div>
      <Text mb="xs">Edge Device Sensor</Text>
      <CardDescription excerpt={"Sebuah perangkat keras yang mengontrol data antara jaringan"}>
        <Text size="sm">Perangkat ini memungkinkan data dapat tersalurkan dari jaringan local ke internet sehingga dapat dengan memonitor sensor di pelosok daerah.</Text>
      </CardDescription>
    </div>
  ),
  categories: [categories.iot]
}, {
  color: "blue",
  icon: <IconColorSwatch size={28} />,
  title: "River Monitor",
  description: (
    <div>
      <CardDescription excerpt={"Perangkat keras yang bertugas untuk mengawasi aliran sungai"}>
        <Text size="sm">Perangkat keras yang bertugas untuk mengawasi aliran sungai.</Text>
        <Text size="sm">Perangkat ini memungkinkan untuk memonitor aliran sungai secara langsung.</Text>
      </CardDescription>
    </div>
  ),
  categories: [categories.iot]
}, {
  color: "blue",
  icon: <IconColorSwatch size={28} />,
  title: "Air Quality",
  description: (
    <div>
      <CardDescription excerpt={"Perangkat keras yang bertugas untuk mengawasi kualitas Udara"}>
        <Text size="sm">Perangkat keras yang bertugas untuk mengawasi kualitas Udara. Ini memungkinkan untuk memonitor kualitas udara pada titik di daerah tertentu secara langsung.</Text>
      </CardDescription>
    </div>
  ),
  categories: [categories.iot]
}, {
  color: "yellow",
  icon: <IconColorSwatch size={28} />,
  title: "POS",
  description: (
    <div>
      <Text mb="xs">Point Of Sale</Text>
      <CardDescription excerpt={"Solusi untuk memudahkan kasir dalam mengelola proses penjualan."}>
        <Text size="sm">
          <Text inherit>Solusi untuk memudahkan kasir dalam mengelola proses penjualan. Karena adanya kebutuhan untuk membuat proses penjualan menjadi praktis dan cepat sehingga menghindari pelanggan untuk antri dalam waktu lama.</Text>
          <Text inherit>Aplikasi POS, atau aplikasi Point of Sales Maesalab , tidak hanya berfungsi sebagai aplikasi untuk membantu kerja karyawan yang berada di meja kasir saja tetapi berfungsi juga sebagai aplikasi inventory untuk mempermudah dalam mengelola inventaris gudang yang akurat.</Text>
        </Text>
      </CardDescription>
    </div>
  ),
  categories: [categories.com]
}, {
  color: "yellow",
  icon: <IconColorSwatch size={28} />,
  title: "Website",
  description: (
    <div>
      <CardDescription excerpt={"Halaman web yang dapat di akses publik untuk bisnis Anda"}>
        <Text size="sm">
          <Text inherit>Halaman web yang dapat di akses publik untuk bisnis Anda, di era digital pastinya bisnis memerlukan media untuk menaikan pelanggan.</Text>
        </Text>
      </CardDescription>
    </div>
  ),
  categories: [categories.com]
}];

export function Products() {
  const { classes, theme } = useStyles();
  const mediaQuery = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);

  const products = useMemo(() => {
    const res = Object.entries(categories).map((val) => {
      const _p = _products.filter(p => {
        return p.categories?.indexOf(val[1]) !== -1
      });
      return {
        label: val[1],
        items: _p
      };
    })
    return res;
  }, []);

  return (
    <>
      <SectionText
        id={"product"}
        title={<>Check <span className={classes.highlight}>our</span> products</>}
        subTitle={"Products"}
        description={`We provide Spatial, Office Administration, IoT and Business applications.`}
      />

      <Tabs
        position="center"
        variant={mediaQuery ? "pills" : "default"}
        tabPadding="xl">
        {products.map(({ label, items }) => (
          <Tabs.Tab key={label} label={label}>
            <Container pb="xl">
              <Grid gutter="md" justify="center">
                {items.map(({ color, title, description, icon }) => (
                  <Grid.Col key={title} sm={6} md={4}>
                    <Card
                      sx={{ height: "100%" }}
                      color={color}
                      title={title}
                      description={description}
                      icon={icon}
                    />
                  </Grid.Col>
                ))}
              </Grid>
            </Container>
          </Tabs.Tab>))}
      </Tabs>
      {!mediaQuery &&
        <Divider />}
    </>
  );
}
