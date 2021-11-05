import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/Section';
import { WorkGridItem } from '../components/grid-item';

import thumbjaegerpanel from '../public/images/projects/jaegerpanel.png';
import thumblinky from '../public/images/projects/linky.png';
import React from 'react';
const Works = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="jaegerpanel"
            title="Jaeger Panel"
            thumbnail={thumbjaegerpanel}
          >
            A Hosting panel with all the features you would ever imagine!
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="linky" title="Linky" thumbnail={thumblinky}>
            A self-hosted link shortener made with TypeScript and MySQL
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Works;
