import {
  Avatar,
  Box,
  BoxProps,
  Button,
  Center,
  Drawer,
  DrawerContent,
  Flex,
  FlexProps,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Stack,
  Switch,
  Text,
  useBoolean,
  useBreakpoint,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { IconType } from 'react-icons';
import { FiBookmark, FiClock, FiEdit, FiHeart, FiHome, FiMenu, FiMoon, FiSearch, FiSettings } from 'react-icons/fi';
import { Link as RouterLink, useMatch, useNavigate } from 'react-router-dom';

const NavItems: Array<{
  name: string;
  icon: IconType;
  path: string;
}> = [
  { name: 'Home', icon: FiHome, path: '' },
  { name: 'Following', icon: FiHeart, path: 'following' },
  { name: 'Bookmarks', icon: FiBookmark, path: 'bookmarks' },
  { name: 'History', icon: FiClock, path: 'history' },
];

const MetadataItems: Array<{
  name: string;
  path: string;
}> = [
  { name: 'About', path: '/about' },
  { name: 'FAQ and Support', path: '/faq-support' },
  { name: 'Community Guidelines', path: '/guidelines' },
  { name: 'Terms', path: '/terms' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
];

export default function AppNavbar({ children }: PropsWithChildren<{}>) {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [variant, changeVariant] = useBoolean(true);
  const breakpoint = useBreakpoint();
  const navigate = useNavigate();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box minH="100vh">
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
            justifyContent="flex-start"
            w={{ base: 24, md: 60 }}
            minW={{ base: 24, md: 60 }}
          >
            <IconButton
              aria-label="open menu"
              rounded="full"
              onClick={() => {
                if (breakpoint === 'base' || breakpoint === 'sm') {
                  onOpen();
                } else {
                  changeVariant.toggle();
                }
              }}
              icon={<FiMenu />}
            />
            <Box>Logo</Box>
          </Stack>

          <Stack
            display={{ base: 'none', md: 'flex' }}
            direction="row"
            spacing={3}
            alignItems="center"
            justifyContent="center"
            w="100%"
          >
            <InputGroup maxW="md">
              <InputLeftElement pointerEvents="none">
                <FiSearch />
              </InputLeftElement>
              <Input type="tel" placeholder="Search..." />
            </InputGroup>
            <IconButton
              aria-label="Post"
              rounded="full"
              display={{ base: 'none', md: 'flex' }}
              onClick={() => {
                navigate('/post');
              }}
              icon={<FiEdit />}
            />
            <IconButton
              aria-label="Settings"
              rounded="full"
              display={{ base: 'none', md: 'flex' }}
              onClick={() => {
                navigate('/settings');
              }}
              icon={<FiSettings />}
            />
          </Stack>

          <Stack
            display="flex"
            direction="row"
            spacing={3}
            alignItems="center"
            justifyContent="flex-end"
            w={{ base: 24, md: 60 }}
            minW={{ base: 24, md: 60 }}
          >
            <IconButton
              aria-label="Search"
              rounded="full"
              display={{ base: 'flex', md: 'none' }}
              onClick={() => {}}
              icon={<FiSearch />}
            />
            <Menu>
              <MenuButton as={Button} rounded="full" variant="link" cursor="pointer" minW={0}>
                <Avatar size="sm" src={'https://avatars.dicebear.com/api/identicon/user.svg'} />
              </MenuButton>
              <MenuList alignItems="center">
                <br />
                <Center>
                  <Avatar size="2xl" src={'https://avatars.dicebear.com/api/identicon/user.svg'} />
                </Center>
                <br />
                <Center>
                  <p>Username</p>
                </Center>
                <br />
                <MenuDivider />

                <MenuGroup>
                  <MenuItem
                    onClick={() => {
                      navigate('/post');
                    }}
                  >
                    <Stack alignItems="center" direction="row" spacing={4}>
                      <Icon as={FiEdit} />
                      <Text>Post</Text>
                    </Stack>
                  </MenuItem>
                </MenuGroup>

                <MenuDivider />

                <MenuGroup>
                  <MenuItem closeOnSelect={false}>
                    <Stack alignItems="center" direction="row" spacing={4}>
                      <Icon as={FiMoon} />
                      <Text>Night mode</Text>
                      <Switch size="md" isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
                    </Stack>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      navigate('/settings');
                    }}
                  >
                    <Stack alignItems="center" direction="row" spacing={4}>
                      <Icon as={FiSettings} />
                      <Text>Settings</Text>
                    </Stack>
                  </MenuItem>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Box>

      <Flex h={'calc(100vh - var(--chakra-sizes-16))'} maxW="100%">
        <SidebarContent
          variant={variant ? 'large' : 'small'}
          display={{ base: 'none', md: 'flex' }}
          onSelect={() => {}}
        />

        <Flex p={4} flex={1}>
          {children}
        </Flex>
      </Flex>

      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs"
      >
        <DrawerContent mt={16} display={{ base: 'block', md: 'none' }}>
          <MenuContent
            onSelect={() => {
              onClose();
            }}
          />
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  variant: 'small' | 'large';
  onSelect: () => void;
}

const SidebarContent = ({ variant, onSelect, ...rest }: SidebarProps) => {
  return (
    <Flex
      flexDirection="column"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={variant === 'large' ? 60 : 24}
      {...rest}
    >
      {NavItems.map((link) => (
        <NavItem key={link.name} variant={variant} {...link} />
      ))}
      <Flex flex={1} />
      {variant === 'large' ? MetadataItems.map((link) => <MetadataItem key={link.name} {...link} />) : null}
    </Flex>
  );
};

interface MenuProps extends BoxProps {
  onSelect: () => void;
}

const MenuContent = ({ onSelect, ...rest }: MenuProps) => {
  return (
    <Flex
      flexDirection="column"
      transition="0.4s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w="full"
      pos="fixed"
      h="full"
      {...rest}
    >
      {NavItems.map((link) => (
        <NavItem key={link.name} variant="large" {...link} />
      ))}
      <Flex flex={1} />
      {MetadataItems.map((link) => (
        <MetadataItem key={link.name} {...link} />
      ))}
    </Flex>
  );
};

interface NavItemProps extends FlexProps {
  icon?: IconType;
  name: string;
  path: string;
  variant: 'small' | 'large';
}

const NavItem = ({ icon, name, path, variant, children, ...rest }: NavItemProps) => {
  const hoverColor = useColorModeValue('transparent', 'gray.700');
  const fontColor = useColorModeValue('gray.800', 'whiteAlpha.900');

  const { params } = useMatch('/app/*') || {};
  const isActive = params?.['*'] === path;

  return (
    <Link as={RouterLink} to={path} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        alignItems="center"
        p={4}
        flexDirection={variant === 'large' ? 'row' : 'column'}
        borderRadius="none"
        role="group"
        cursor="pointer"
        sx={{
          backgroundColor: isActive ? 'blue.300' : 'transparent',
          color: isActive ? 'whiteAlpha.900' : fontColor,
        }}
        _hover={
          isActive
            ? undefined
            : {
                bg: hoverColor,
                color: 'blue.300',
              }
        }
        {...rest}
      >
        {icon && (
          <Icon
            mr={variant === 'large' ? 4 : 0}
            fontSize="16"
            _groupHover={
              isActive
                ? undefined
                : {
                    color: 'blue.300',
                  }
            }
            as={icon}
          />
        )}
        <Text fontSize={variant === 'large' ? 'medium' : 'small'}>{name}</Text>
      </Flex>
    </Link>
  );
};

interface MetadataItemProps extends FlexProps {
  name: string;
  path: string;
}

const MetadataItem = ({ name, path, children, ...rest }: MetadataItemProps) => {
  return (
    <Link as={RouterLink} to={path} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        pl={4}
        mb={3}
        borderRadius="none"
        cursor="pointer"
        _hover={{
          color: 'blue.300',
        }}
        {...rest}
      >
        <Text fontSize="xs">{name}</Text>
      </Flex>
    </Link>
  );
};
