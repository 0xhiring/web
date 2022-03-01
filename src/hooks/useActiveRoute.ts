import { useMatch } from 'react-router-dom';

export default function useActiveRoute(endRoute: string) {
  const match = useMatch(endRoute);
  return match;
}
