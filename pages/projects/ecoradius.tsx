import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/project';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';
const ecoradius = () => (
  <Layout title="Ecoradius">
    <Container>
      <Title>
        Ecoradius <Badge>November 2021-</Badge>
      </Title>
      <P>
        We all are tired of seeing our environment polluted and when we cannot
        do something on our own. Worry not anymore, Ecoradius solves that
        problem by letting local environmentalists help you in your initiative
        to make our environment better! Just take a 📸 and create a campaign in
        the app, With the gamification it&apos;ll be even more fun! Collab with
        people near you and keep our environment clean.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="//github.com/ecoradius">
            https://github.com/ecoradius <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android / iOS</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React Native, TypeScript, Firebase</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/ecoradius.png" alt="Ecoradius Logo" />
    </Container>
  </Layout>
);

export default ecoradius;
