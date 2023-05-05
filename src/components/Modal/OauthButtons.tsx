import React from 'react';
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import {auth} from '../../firebase/clientApp'

const OauthButtons = () => {
  const [signInWithGoogle, _, loading, error] = useSignInWithGoogle(auth);
  return (
    <Flex direction="column" mb={4} width="100%">
       <Button
           variant="filled"
           mb={2}
           onClick={() => signInWithGoogle()}
           isLoading={loading}
       >
            <Image src='/images/google-logo.png' alt='google' width={30} height={30} mr={4}/>
            Continue with Google
       </Button>
       {error && (
        <Text textAlign="center" fontSize="10pt" color="red" mt={2}>
          {error.toString()}
        </Text>
      )}
    </Flex>
  )
}

export default OauthButtons