import React from 'react'
import {Flex, Image} from '@chakra-ui/react'
import Directory from '../HomeDirectory/Directory'
import SearchInput from './SearchInput'
import RightNavbar from './RightNavbar/RightNavbar';
import { useAuthState } from "react-firebase-hooks/auth";
import {User} from 'firebase/auth'
import {auth} from '../../firebase/clientApp'
import useDirectory from '../../hooks/useDirectory';
import {defaultMenuItem} from "../../atoms/directoryMenuItem";

const Navbar: React.FC = () => {
  const [user] = useAuthState(auth);
  const {onSelectMenuItem} = useDirectory()
  return (
    <Flex bg="white" height="44px" padding="6px 12px" justifyContent={{ md: "space-between" }}>
        <Flex 
          align="center"
          width={{ base: "40px", md: "auto" }}
          mr={{ base: 0, md: 2 }}
          cursor="pointer"
          onClick={() => onSelectMenuItem(defaultMenuItem)}
        
        >
            <Image src='/images/Forum_logo.png' height="30" alt='Logo'/>
        </Flex>
        {user && <Directory />}
        <SearchInput />
        <RightNavbar user={user as User}/>
    </Flex>
  )
}

export default Navbar