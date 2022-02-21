import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

const NavLink = forwardRef<HTMLAnchorElement, { href: string }>(({ href, children, ...rest }, ref) => (
  <Link ref={ref} to={href} {...rest}>
    {children}
  </Link>
));

NavLink.displayName = 'NavLink';

export default NavLink;
