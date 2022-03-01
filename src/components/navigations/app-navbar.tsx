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
  MenuItem,
  MenuList,
  Stack,
  Text,
  useBoolean,
  useBreakpoint,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { IconType } from 'react-icons';
import { FiCompass, FiHome, FiMenu, FiPlus, FiSearch, FiSettings, FiStar, FiTrendingUp } from 'react-icons/fi';

const LinkItems: Array<{
  name: string;
  icon: IconType;
}> = [
  { name: 'Home', icon: FiHome },
  { name: 'Trending', icon: FiTrendingUp },
  { name: 'Explore', icon: FiCompass },
  { name: 'Favourites', icon: FiStar },
  { name: 'Settings', icon: FiSettings },
];

export default function AppNavbar({ children }: PropsWithChildren<{}>) {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [variant, changeVariant] = useBoolean();
  const breakpoint = useBreakpoint();

  return (
    <Box minH="100vh">
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Stack
            direction={'row'}
            spacing={3}
            alignItems={'center'}
            justifyContent={'flex-start'}
            w={{ base: 24, md: 60 }}
            minW={{ base: 24, md: 60 }}
          >
            <IconButton
              aria-label="open menu"
              rounded={'full'}
              onClick={() => {
                if (breakpoint === 'base') {
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
            direction={'row'}
            spacing={3}
            alignItems={'center'}
            justifyContent={'center'}
            w={'100%'}
          >
            <InputGroup maxW={'md'}>
              <InputLeftElement pointerEvents="none">
                <FiSearch />
              </InputLeftElement>
              <Input type="tel" placeholder="Search..." />
            </InputGroup>
            <IconButton
              aria-label="Create post"
              rounded={'full'}
              display={{ base: 'none', md: 'flex' }}
              onClick={() => {}}
              icon={<FiPlus />}
            />
            <IconButton
              aria-label="Settings"
              rounded={'full'}
              display={{ base: 'none', md: 'flex' }}
              onClick={() => {}}
              icon={<FiSettings />}
            />
          </Stack>

          <Stack
            display={'flex'}
            direction={'row'}
            spacing={3}
            alignItems={'center'}
            justifyContent={'flex-end'}
            w={{ base: 24, md: 60 }}
            minW={{ base: 24, md: 60 }}
          >
            <IconButton
              aria-label="Search"
              rounded={'full'}
              display={{ base: 'flex', md: 'none' }}
              onClick={() => {}}
              icon={<FiSearch />}
            />
            <Menu>
              <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                <Avatar size={'sm'} src={'https://avatars.dicebear.com/api/identicon/user.svg'} />
              </MenuButton>
              <MenuList alignItems={'center'}>
                <br />
                <Center>
                  <Avatar size={'2xl'} src={'https://avatars.dicebear.com/api/identicon/user.svg'} />
                </Center>
                <br />
                <Center>
                  <p>Username</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem>Your Servers</MenuItem>
                <MenuItem>Account Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Box>

      <Flex h={'calc(100vh - var(--chakra-sizes-16))'}>
        <SidebarContent
          variant={variant ? 'large' : 'small'}
          display={{ base: 'none', md: 'block' }}
          onSelect={() => {}}
        />

        <Flex p="4" flex={1}>
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
    <Box
      transition={'width .2s'}
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={variant === 'large' ? 60 : 24}
      {...rest}
    >
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} label={link.name} variant={variant}></NavItem>
      ))}
    </Box>
  );
};

interface MenuProps extends BoxProps {
  onSelect: () => void;
}

const MenuContent = ({ onSelect, ...rest }: MenuProps) => {
  return (
    <Box
      transition="0.4s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={'full'}
      pos="fixed"
      h="full"
      {...rest}
    >
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} label={link.name} variant={'large'}></NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  label: string;
  variant: 'small' | 'large';
}

const NavItem = ({ icon, label, variant, children, ...rest }: NavItemProps) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        alignItems="center"
        p="4"
        flexDirection={variant === 'large' ? 'row' : 'column'}
        borderRadius="none"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr={variant === 'large' ? '4' : '0'}
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        <Text fontSize={variant === 'large' ? 'medium' : 'small'}>{label}</Text>
      </Flex>
    </Link>
  );
};
