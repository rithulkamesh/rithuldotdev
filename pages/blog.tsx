import { Container, Heading } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import React from 'react';
import Section from '../components/Section';
import Paragraph from '../components/paragraph';
const Works = () => (
  <Layout title="Projects">
    <Container>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Blog
        </Heading>
        <Paragraph>
          {' '}
          This page is under development and will be released really soon!
        </Paragraph>
      </Section>
    </Container>
  </Layout>
);

export default Works;
