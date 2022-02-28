import { extendTheme } from '@chakra-ui/react';

import { ButtonTheme } from './buttons';

const theme = extendTheme({
  components: {
    Button: ButtonTheme,
  },
});

export default theme;
