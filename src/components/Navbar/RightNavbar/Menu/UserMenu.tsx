import React from 'react';
import { Flex, Icon, MenuDivider, MenuItem } from "@chakra-ui/react";
import { signOut } from "firebase/auth";
import { CgProfile } from "react-icons/cg";
import { MdOutlineLogin } from "react-icons/md";
import { useResetRecoilState } from "recoil";
import {auth} from '../../../../firebase/clientApp'

const UserMenu = () => {
  const logOut = async() => {
    await signOut(auth);

  }
  return (
    <>
       <MenuItem
            fontSize="10pt"
            fontWeight={700}
            _hover={{ bg: "blue.500", color: "white" }}
       >
          <Flex align={"center"}>
             <Icon fontSize={20} mr={2} as={CgProfile} />
             Profile

          </Flex>
       </MenuItem>
       <MenuDivider />
       <MenuItem
          fontSize="10pt"
          fontWeight={700}
          _hover={{ bg: "blue.500", color: "white" }}
          onClick={logOut}
       >
        <Flex alignItems="center">
          <Icon fontSize={20} mr={2} as={MdOutlineLogin} />
          Log Out
        </Flex>
       </MenuItem>
    </>
  )
}

export default UserMenu