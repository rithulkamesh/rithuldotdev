import Image from 'next/image';
import {
  Box,
  Center,
  Text,
  Stack,
  Link,
  useColorModeValue
} from '@chakra-ui/react';

export default function BlogCard({ slug, image, brief, title }) {
  return (
    <Center py={6}>
      <Link href={`https://blog.rithulk.me/${slug}`}>
        <Box
          maxW={'445px'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}
        >
          <Box
            h={'210px'}
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}
          >
            <Image src={image} layout={'fill'} />
          </Box>
          <Stack>
            <Text
              color={'blue.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}
            >
              {title}
            </Text>
            <Text color={'gray.500'}>w {brief}</Text>
          </Stack>
        </Box>
      </Link>
    </Center>
  );
}
