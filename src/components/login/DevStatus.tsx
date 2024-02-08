import React from 'react'
import { Text, Box } from '@chakra-ui/react'

export default function DevStatus() {
  return <Box 
    // bg='#703dba'
    bg='#F6AD55'
    h="0.5"
    position="fixed"
    top="0"
    insetEnd="0"
    insetStart="0"
  >
    <Text 
      bg='#F6AD55' 
      borderRadius='1'
      px="1"
      fontWeight='bold'
      position="fixed"
      top="0"
      insetStart="4"
      fontSize="9px"
    >
      DEVELOPMENT
    </Text>
  </Box>
};
