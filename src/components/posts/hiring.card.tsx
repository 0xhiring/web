import {
  Avatar,
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

export default function HiringCard() {
  return (
    <Center>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        maxW="3xl"
        direction="column"
        bg={useColorModeValue('white', 'gray.900')}
        padding={4}
      >
        <Flex alignItems="center">
          <Button rounded="full" variant="link" cursor="pointer" minW={0}>
            <Avatar size="sm" src={'https://avatars.dicebear.com/api/identicon/user.svg'} />
          </Button>
          <Heading as="h5" size="sm" px={4}>
            Marmalade
          </Heading>
        </Flex>
        <Heading as="h6" size="xs">
          {'Photoshop & Graphic Design Expert'}
        </Heading>
        <Text fontSize="sm">0.5 USDC/hr</Text>
        <Wrap mt={6}>
          <WrapItem>
            <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight="400">
              #photoshop
            </Badge>
          </WrapItem>

          <WrapItem>
            <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight="400">
              #graphicdesign
            </Badge>
          </WrapItem>
          <WrapItem>
            <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>
              #photoediting
            </Badge>
          </WrapItem>
        </Wrap>
        <Text fontSize="xs">
          {
            'Experience in graphic design, 3D modelling and animation. Excellent knowledge of Photoshop, Illustrator and a wide range of 3D applications: 3ds Max, Cinema 4D, Blender, Vue, Poser, Bryce etc.'
          }
        </Text>
      </Stack>
    </Center>
  );
}
