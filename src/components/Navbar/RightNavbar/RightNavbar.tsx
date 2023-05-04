import React from 'react';
import {Flex} from '@chakra-ui/react'
import AuthButtons from './AuthButtons';
import AuthModal from '@/components/Modal/AuthModal';

const RightNavbar = () => {
  return (
    <>
      <AuthModal />
      <Flex justifyContent={"center"} alignItems="center">
          <AuthButtons />
      </Flex>
    </>
  )
}

export default RightNavbar