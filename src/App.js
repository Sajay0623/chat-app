import { Box, Button, Container, Input, VStack } from "@chakra-ui/react";

 
 

function App() {
  return (
    <Box bg = {"red.50"} >
      <Container h = {"100vh"} bg = {"white"} >
        <VStack h = {"full"} bg = {"telegram.100"} >
          <Button w  = {"full"} colorScheme={'teal'} >Logout</Button>
       
     <VStack>
         <form><Input></Input>
<Button>Send</Button></form>
     
     </VStack>
     </VStack>
      </Container>
    </Box>
  );
}

export default App;
