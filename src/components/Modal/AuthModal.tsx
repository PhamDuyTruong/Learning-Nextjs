import React, {useEffect} from 'react';
import {
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
  } from "@chakra-ui/react";
  import { useRecoilState } from "recoil";
  import { authModalState } from "../../atoms/authModalAtom";
import ModalWrapper from './ModalWrapper';
import AuthInput from './AuthInput';
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../../firebase/clientApp'
import OauthButtons from './OauthButtons';
import ResetPassword from './ResetPassword';
const AuthModal = () => {
    const [modalState, setModalState] = useRecoilState(authModalState);
    const [user, loading, error] = useAuthState(auth)
    const handleClose = () =>
    setModalState((prev) => ({
      ...prev,
      open: false,
    }));

    const toggleView = (view: string) => {
        setModalState({
          ...modalState,
          view: view as typeof modalState.view,
        });
      };

      useEffect(() => {
        if(user) handleClose();
        console.log("user", user)
      }, [user])

  return (
    <ModalWrapper isOpen={modalState.open} onClose={handleClose}>
      <ModalHeader display="flex" flexDirection="column" alignItems="center">
        {modalState.view === "login" && "Login"}
        {modalState.view === "signup" && "Sign Up"}
        {modalState.view === "resetPassword" && "Reset Password"}
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody 
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          pb={6}
      >
        <Flex
             direction="column"
             alignItems="center"
             justifyContent="center"
             width="70%"
        >
            {modalState.view === "login" || modalState.view === "signup" ? (
                <>
                    <OauthButtons />
                    OR
                    <AuthInput toggleView={toggleView}/>
                </>
            ): (
              <div>
                   <ResetPassword toggleView={toggleView}/>
              </div>
              
            )}
        </Flex>
      </ModalBody>
    </ModalWrapper>
  )
}

export default AuthModal