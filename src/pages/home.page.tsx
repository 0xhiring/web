import { Flex, Heading, Image, Input, Stack, Text } from '@chakra-ui/react';

import AppFooter from '../components/navigations/app-footer';
import AppHeader from '../components/navigations/app-header';

export default function HomePage() {
  return (
    <Flex flexDirection="column">
      <AppHeader />
      <Flex flexDirection="column" alignSelf="center" maxWidth="5xl" width="full">
        <Heading alignSelf="center">Get your next job done</Heading>
        <Input placeholder="Search for tag" />
        <Stack direction="column" spacing={4} marginTop={8}>
          {[1, 2, 3, 4, 5, 6].map((el) => {
            return (
              <Flex
                key={el}
                alignItems="center"
                borderRadius="2xl"
                sx={{
                  width: '100%',
                  height: '96px',
                  backgroundColor: 'gray',
                }}
              >
                <Image
                  src="https://remoteok.com/cdn-cgi/image/format=auto,fit=contain,width=100,height=100,quality=50/https://remoteok.com/assets/img/jobs/0191c60e9664b8f7345293e6013a08931643446806.png?1643446806"
                  borderRadius="full"
                  marginLeft="12px"
                  marginRight="8px"
                  sx={{
                    height: '48px',
                    width: '48px',
                    backgroundColor: 'white',
                    objectFit: 'scale-down',
                    objectPosition: 'center',
                  }}
                />
                <Flex flexDirection="column" justifyContent="center" height="100%">
                  <Text>Vimeo</Text>
                  <Text>Product Growth Manager Activation</Text>
                </Flex>
              </Flex>
            );
          })}
        </Stack>
      </Flex>
      <AppFooter />
    </Flex>
  );
}
