import React from 'react'
import {Flex, Image} from '@chakra-ui/react'
import Directory from './Directory'
import SearchInput from './SearchInput'
import RightNavbar from './RightNavbar/RightNavbar'

const Navbar: React.FC = () => {
  return (
    <Flex bg="white" height="44px" padding="6px 12px" justifyContent={{ md: "space-between" }}>
        <Flex align="center">
            <Image src='/images/Forum_logo.png' height="30"/>
        </Flex>
        <Directory />
        <SearchInput />
        <RightNavbar />
    </Flex>
  )
}

export default Navbar