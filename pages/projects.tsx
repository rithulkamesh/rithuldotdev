import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/Section';
import { WorkGridItem } from '../components/grid-item';

import thumbWhisper from '../public/images/projects/whisper.png';

import React from 'react';
const Works = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="whisper" title="Whisper" thumbnail={thumbWhisper}>
            A simple, anonymous chatting application made with socket.io.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Works;
