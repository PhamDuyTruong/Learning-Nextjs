import React from 'react';
import {Flex} from '@chakra-ui/react'
import AuthButtons from './AuthButtons';
import AuthModal from '@/components/Modal/AuthModal';
import {User} from 'firebase/auth';
import Icons from './Icons'


type RightContentProps = {
  user: User;
};

const RightNavbar: React.FC<RightContentProps> = ({user}) => {
  return (
    <>
      <AuthModal />
      <Flex justifyContent={"center"} alignItems="center">
          {user ? <Icons /> : <AuthButtons />}
          
      </Flex>
    </>
  )
}

export default RightNavbar