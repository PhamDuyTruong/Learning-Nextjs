import React, {useState} from 'react';
import { Button, Flex, Text } from "@chakra-ui/react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import {ModalView} from '../../atoms/authModalAtom';
import InputItem from '../Layout/InputItem';

type LoginProps = {
    toggleView: (view: ModalView) => void;
};



const Login: React.FC<LoginProps> = ({toggleView}) => {
    const [form, setForm] = useState({
        email: "",
        password: "",
      });

  const onChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (  
    <form>
        <InputItem 
           name="email"
           placeholder="Email"
           type="text"
           mb={2}
           onChange={onChange}
        />
        <InputItem 
            name='password'
            placeholder='Password'
            type="password"
            onChange={onChange}
        />
        <Button
        width="100%"
        height="36px"
        mb={2}
        mt={2}
        type="submit"
        //isLoading={loading}
      >
        Log In
      </Button>
      <Flex justifyContent="center" mb={2}>
        <Text fontSize="9pt" mr={1}>
          Forgot your password?
        </Text>
        <Text
          fontSize="9pt"
          color="blue.500"
          cursor="pointer"
          onClick={() => toggleView("resetPassword")}
        >
          Reset
        </Text>
      </Flex>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>New here?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() => toggleView("signup")}
        >
          SIGN UP
        </Text>
      </Flex>
    </form>
  )
}

export default Login