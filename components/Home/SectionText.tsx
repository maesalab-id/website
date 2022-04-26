import { Container, Text, Title } from "@mantine/core"
import useStyles from "./SectionText.styles"

interface SectionTextProps {
  id?: string;
  title: JSX.Element | string;
  subTitle: JSX.Element | string;
  description?: JSX.Element | string;
}

export const SectionText: React.FC<SectionTextProps> = ({
  id,
  title,
  subTitle,
  description
}) => {
  const { classes } = useStyles();
  return (
    <Container id={id} size={700} className={classes.wrapper}>
      <Text className={classes.supTitle}>{subTitle}</Text>

      <Title className={classes.title} order={2}>
        {title}
      </Title>

      <Container size={660} p={0}>
        <Text color="dimmed" className={classes.description}>
          {description}
        </Text>
      </Container>

    </Container>
  )
}