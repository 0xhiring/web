import { Icon } from '@rsuite/icons';
import { useTranslation } from 'react-i18next';
import { FiHome, FiMenu } from 'react-icons/fi';
import { Dropdown, Header, Nav, Navbar } from 'rsuite';

export default function AppHeader() {
  const { t } = useTranslation();
  return (
    <Header>
      <Navbar appearance="inverse">
        <Navbar.Brand>
          <a className="navbar-brand logo">0xHiring</a>
        </Navbar.Brand>
        <Nav>
          <Nav.Item icon={<Icon as={FiHome} />}>{t('app:home')}</Nav.Item>
          <Nav.Item>News</Nav.Item>
          <Nav.Item>Products</Nav.Item>
          <Dropdown title="About">
            <Dropdown.Item>Company</Dropdown.Item>
            <Dropdown.Item>Team</Dropdown.Item>
            <Dropdown.Item>Contact</Dropdown.Item>
          </Dropdown>
        </Nav>
        <Nav pullRight>
          <Nav.Item icon={<Icon as={FiMenu} />}>Settings</Nav.Item>
        </Nav>
      </Navbar>
    </Header>
  );
}
