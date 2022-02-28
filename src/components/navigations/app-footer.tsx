import { Button, Flex, Link } from '@chakra-ui/react';

export default function AppFooter() {
  return (
    <Flex as="footer" alignItems="center" justifyContent="center" height={16} padding={2}>
      <Button as={Link} margin={2}>
        Term of Service
      </Button>
      <Button as={Link} margin={2}>
        Privacy Policy
      </Button>
      <Button as={Link} margin={2}>
        Help
      </Button>
    </Flex>
  );
}
