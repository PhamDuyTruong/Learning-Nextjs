import React from 'react';
import {AuthModalState} from '../../../../atoms/authModalAtom'
import { MenuItem, Flex, Icon } from "@chakra-ui/react";
import { MdOutlineLogin } from "react-icons/md";

type NoUserListProps = {
    setModalState: (value: AuthModalState) => void;
  };

const NoUser: React.FC<NoUserListProps>= ({setModalState}) => {
  return (
    <>
        <MenuItem
              fontSize="10pt"
              fontWeight={700}
              _hover={{ bg: "blue.500", color: "white" }}
              onClick={() => setModalState({ open: true, view: "login" })}
        >
            <Flex align={"center"}>
                <Icon fontSize={20} mr={2} as={MdOutlineLogin} />
                Log In / Sign Up
            </Flex>
        </MenuItem>
    </>
  )
}

export default NoUser