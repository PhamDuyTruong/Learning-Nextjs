import React from 'react';
import {Flex} from '@chakra-ui/react'
import AuthButtons from './AuthButtons';

const RightNavbar = () => {
  return (
    <>
      <Flex justifyContent={"center"} alignItems="center">
          <AuthButtons />
      </Flex>
    </>
  )
}

export default RightNavbar