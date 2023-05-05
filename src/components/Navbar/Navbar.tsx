import React from 'react'
import {Flex, Image} from '@chakra-ui/react'
import Directory from '../HomeDirectory/Directory'
import SearchInput from './SearchInput'
import RightNavbar from './RightNavbar/RightNavbar';
import { useAuthState } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import {User} from 'firebase/auth'
import {auth} from '../../firebase/clientApp'

const Navbar: React.FC = () => {
  const [user] = useAuthState(auth)
  return (
    <Flex bg="white" height="44px" padding="6px 12px" justifyContent={{ md: "space-between" }}>
        <Flex align="center">
            <Image src='/images/Forum_logo.png' height="30" alt='Logo'/>
        </Flex>
        <Directory />
        <SearchInput />
        <RightNavbar user={user as User}/>
    </Flex>
  )
}

export default Navbar