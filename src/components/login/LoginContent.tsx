import React from 'react';
import { Heading, AbsoluteCenter, Box, Container, Button, Flex, Link, Stack, Text, StackDivider, Divider, color } from '@chakra-ui/react';
// import PhoneInput from 'react-phone-input-2';
import ReactPhoneInput, { PhoneInputProps } from 'react-phone-input-2';
import "react-phone-input-2/lib/style.css";
import { colors } from '../../theme/colorShades/colors';
import styled from '@emotion/styled';

const StyleInput = styled(ReactPhoneInput)({
  'input:disabled': {
    opacity: '0.4',
  },
  '.country-list .country': {
    color: '#6b6b6b',
  },
  '.search-box': {
    color: '#6b6b6b',
  },
  '.invalid-number-message': {
    fontSize: '15px',
    background: 'bottom!important',
    left: ' 0 !important',
    top: '44px!important',
  },
});

export function PhoneInputContent() {
  const [phone, setPhone] = React.useState('');

  return <>
    <ReactPhoneInput
      country={"in"}
      onChange={number => setPhone(number)}
      value={phone}
    />
  </>
};

export function LoginContent() {
  return <Container minH='464px' maxH='100%' maxW='752px' minW='100'>
    <Container maxW='352px' minW='100' maxH='446px' minH='446px' px='2'>
      <Heading as='h1' size='3xl' color='#703dba' textAlign='center' pt='28%'>
        BILLDOG
      </Heading>
      <Flex flexDirection='column' justifyContent='space-between' maxH='160px' minH='140px' my='22%'>
        <PhoneInputContent />
        <Button
          type="submit"
          variant="@primary"
          color='white'
          m="auto"
          w="100%"
          bg='#703dba'
        >
          Login
        </Button>
        <Link color='#703dba' href='#' fontWeight='600'>Link with QR code</Link>
      </Flex>
    </Container>
  </Container>
}


// h={{ sm: '60ch', md: '80ch', lg: '100ch', xl: '140ch', full: '100%' }}

// Response: {
//   "name": "Sample",
//   "job": "Software Engineer",
//   "id": "293",
//   "createdAt": "2021-11-27T04:03:14.690Z"
// }

// fetch users

// {
//   "data": {
//     "id": 293,
//     "email": "sample@xyz.com",
//     "name": "Sample"
//   }
// }

// https://0f9be47b-b4ef-440a-8197-b24e21eaf910.mock.pstmn.io/createUser
// https://0f9be47b-b4ef-440a-8197-b24e21eaf910.mock.pstmn.io/getUsers