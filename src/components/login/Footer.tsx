import { Stack, Text, StackDivider, Container, Center } from '@chakra-ui/react'
import React from 'react'

export default function LoginPageFooter() {
  return (
    <Container maxW='352px' minW='100' maxH='446px' minH='446px' px='2'>
      <Stack direction={['column', 'row']} fontSize='l' w='100%' divider={<StackDivider borderColor='#703dba' fontWeight='800' />} align='stretch' textAlign='center' py='5%'>
        <Text width='50%' color='#703dba' fontWeight='600'><Center>About</Center></Text>
        <Text width='50%' color='#703dba'fontWeight='600'><Center>Terms</Center></Text>
      </Stack>
      <Text fontWeight='bold' textAlign='center' fontSize='3xl' color='#703dba' py='8%'>CARATS</Text>
    </Container>
  )
}
