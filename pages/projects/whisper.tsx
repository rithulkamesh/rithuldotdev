import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/project';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const ecoradius = () => (
  <Layout title="Whisper">
    <Container>
      <Title>
        Whisper <Badge>September 2020 - Present</Badge>
      </Title>
      <P>
       Worried about websites stealing/storing your data? Never again, Your data is seen only by the people in your room and destroyed on refresh, Chat safely and anonymously without worries!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="//whisper.gg">
            whisper.gg <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript, Socket.io</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/whisper.png" alt="Whisper Logo" />
    </Container>
  </Layout>
);

export default ecoradius;
