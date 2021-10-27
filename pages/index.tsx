import { Container, Box, Heading } from '@chakra-ui/react';
import React from 'react';
export default function Home() {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg="gray"
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
        </Box>
      </Box>
    </Container>
  );
}
