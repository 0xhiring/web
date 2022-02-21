import { PropsWithChildren } from 'react';
import { Container } from 'rsuite';

export default function Page(props: PropsWithChildren<{}>) {
  return <Container>{props.children}</Container>;
}
