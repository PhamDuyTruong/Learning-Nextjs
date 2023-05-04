import { Flex } from "@chakra-ui/react";
import React from 'react';
import {ModalView, authModalState} from '../../atoms/authModalAtom';
import { useRecoilState, useRecoilValue } from "recoil";
import Login from './Login'
import Signup from "./Signup";

type AuthInputsProps = {
    toggleView: (view: ModalView) => void;
  };

const AuthInput: React.FC<AuthInputsProps> = ({toggleView}) => {
    const modalState = useRecoilValue(authModalState);
  return (
    <Flex direction="column" alignItems="center" width="100%" mt={4}>
        {modalState.view === "login" ? (
             <Login toggleView={toggleView} />
        ): (
            <Signup toggleView={toggleView}/>
        )}
    </Flex>
  )
}

export default AuthInput