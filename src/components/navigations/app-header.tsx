import { Button, Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function AppHeader() {
  const { t } = useTranslation();
  return (
    <Flex as="header" alignItems="center" height={24} padding={2}>
      <Text>0xhiring</Text>
      <Flex ml="auto">
        <Button margin={2}>About</Button>
        <Button margin={2}>Connect</Button>
      </Flex>
    </Flex>
  );
}
