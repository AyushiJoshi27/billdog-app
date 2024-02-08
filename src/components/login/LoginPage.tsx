import React from 'react'
import DevStatus from './DevStatus';
import { LoginContent } from './LoginContent';
import { Box } from '@chakra-ui/react';
import LoginPageFooter from './Footer';

export default function LoginPage() {
  return <Box bg='#f8fafc'>
  <DevStatus />
  <LoginContent />
  <LoginPageFooter />
  </Box>
}
