import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/project';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';
const project = () => (
  <Layout title="Linky">
    <Container>
      <Title>
        Linky <Badge>September 2021-</Badge>
      </Title>
      <P>
        Everyone hates long links, and custom link shorteners which allow you to
        set up custom domains can be costly. Linky is designed to solve these
        issues by creating a small, fast, and scalable solution to shorten
        links. This project is designed to be small, allowing you to host it on
        a service like Railway, for completely free of charge too!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="//github.com/rithulkamesh/linky">
            https://github.com/rithulkamesh/linky <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Any Platform (Server or Serverless)</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, TypeScript, MySQL, Express</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/linky.png" alt="Linky Logo" />
    </Container>
  </Layout>
);

export default project;
