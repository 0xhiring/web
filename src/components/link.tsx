import { ComponentWithAs, forwardRef, Link as OriginalLink, LinkProps as OriginalLinkProps } from '@chakra-ui/react';
import { NavLink as RouterLink, NavLinkProps as RouterLinkProps } from 'react-router-dom';

type CombinedProps = OriginalLinkProps & RouterLinkProps;

const ErasedLink: ComponentWithAs<'a', CombinedProps> = OriginalLink;

const Link = forwardRef(({ children, ...props }: CombinedProps) => (
  <ErasedLink as={RouterLink as any} {...props}>
    {children}
  </ErasedLink>
));

export default Link;
