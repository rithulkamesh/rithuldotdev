import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  ListItem,
  OrderedList,
  List,
  Button
} from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaMapMarkerAlt, FaTwitter } from 'react-icons/fa';
import { BioYear, Bio } from '../components/Bio';
import Paragraph from '../components/paragraph';
import Section from '../components/Section';
export default function Home() {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
        backdropBlur={0.3}
      >
        Hello, I&apos;m a Student-Developer based in India!
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Rithul Kamesh
          </Heading>
          <p>Student, Developer, Musician</p>
          <Link href="//www.google.com/search?q=Bangalore" target="_blank">
            <Button
              variant="ghost"
              leftIcon={<FaMapMarkerAlt />}
              colorScheme="teal"
            >
              Bangalore, Karnataka, India
            </Button>
          </Link>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.900"
            borderWidth={1.5}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/photo.png"
            alt="Picture"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          {' '}
          I am a 15 year-old 11th grader. Currently Studying in BGS National
          Public School, I discovered and fell in love with Node.js around the
          early 2020s. My future interests are in Aeronautical Engineering and
          Aritficial Intelligence. I ❤️ open source and create open source
          projects a lot too.
        </Paragraph>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          My Life
        </Heading>
        <Bio>
          <BioYear>2006</BioYear>
          Born in Vellore (வேலூர்), India.
        </Bio>
        <Bio>
          <BioYear>2009</BioYear>
          Started messing around with computer games (Mario, Snake, Minesweeper)
        </Bio>
        <Bio>
          <BioYear>2012</BioYear>
          Discovered and Tried{' '}
          <Link href="//scratch.mit.edu" target="_blank">
            Scratch
          </Link>{' '}
          for the first time.
        </Bio>
        <Bio>
          <BioYear>2015</BioYear>
          Actually took interest in python after being gifted a book from my
          parents.
        </Bio>
        <Bio>
          <BioYear>2020</BioYear>
          Finally discovered{' '}
          <Link href="//nodejs.dev/" target="_blank">
            Node.js
          </Link>{' '}
          and how to use it. Instantly fell in love. On the side, was learning
          HSQLB in school.
        </Bio>
        <Bio>
          <BioYear>2021</BioYear>
          Started switching to{' '}
          <Link href="//www.typescriptlang.org/" target="_blank">
            {' '}
            TypeScript
          </Link>{' '}
          as it was a better superlative and had extended features
        </Bio>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Favourite Stuff
        </Heading>
        <OrderedList>
          <ListItem>Visual Studio Code</ListItem>
          <ListItem>iTerm2</ListItem>
          <ListItem>Github</ListItem>
          <ListItem>Logic Pro X</ListItem>
          <ListItem>Final Cut Pro X</ListItem>
          <ListItem>IntelliJ Idea</ListItem>
          <ListItem>
            <Link href="//music.youtube.com/playlist?list=PL1jU4FFbs--cpeCIn0hyCErwT9aQIxnjd">
              My Lo-fi Playlist
            </Link>
          </ListItem>
        </OrderedList>
      </Section>
      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Find me on the internet
        </Heading>
        <List>
          <ListItem>
            <Link href="//github.com/rithulkamesh" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<FaGithub />}
              >
                @rithulkamesh
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="//twitter.com/rithulkamesh" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<FaTwitter />}
              >
                @rithulkamesh
              </Button>
            </Link>
            
          </ListItem>
          <ListItem>
            <Link href="mailto:hi@rithul.dev" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<FaTwitter />}
              >
                hi@rithul.dev
              </Button>
            </Link>
          </ListItem>

        </List>
      </Section>
    </Container>
  );
}
