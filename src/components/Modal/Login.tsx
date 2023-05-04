import React from 'react';
import { Button, Flex, Text } from "@chakra-ui/react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import {ModalView} from '../../atoms/authModalAtom';

type LoginProps = {
    toggleView: (view: ModalView) => void;
};

const Login: React.FC<LoginProps> = ({toggleView}) => {
  return (  
    <form>
        
    </form>
  )
}

export default Login