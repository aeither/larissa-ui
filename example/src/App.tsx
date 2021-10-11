import {
  ChakraProvider,
  Button as ChakraButton,
  Heading,
  Box,
} from '@chakra-ui/react';
import { Button, QButton, Switch, customTheme } from '../../.';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Box p="16">
        <Heading>Custom Design Library</Heading>
        <Button variant="outline">Hello OK 23</Button>
        <QButton variant="outline">Hello OK 23</QButton>
        <ChakraButton variant="outline">Hello OK 23</ChakraButton>
        <Switch />
      </Box>
    </ChakraProvider>
  );
}

export default App;
