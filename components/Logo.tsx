import Link from 'next/link';
import Image from 'next/image';
import { Text, useColorModeValue } from '@chakra-ui/react';
import styled from '@emotion/styled';

let LogoStyle = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 30px;
  padding: 10px;
  img {
    transition: 200ms ease;
  }
  &:hover img {
    transform: rotate(20deg);
  }
`;

export default function Logo() {
  var image = `/images/NavLogo-${useColorModeValue('black', 'white')}.png`;
  return (
    <Link href="/">
      <a>
        <LogoStyle>
          <Image src={image} width={20} height={20} alt="R in Potra" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="@import url('//fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap');"
            letterSpacing={0}
            fontWeight="light"
            ml={3}
          >
            Rithul Kamesh
          </Text>
        </LogoStyle>
      </a>
    </Link>
  );
}
