import { Stack } from '@chakra-ui/react';

import HiringCard from '../../components/posts/hiring.card';

export default function HomePage() {
  return (
    <Stack direction="column" width="full" overflowY="scroll" spacing={4}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => {
        return <HiringCard key={el} />;
      })}
    </Stack>
  );
}
