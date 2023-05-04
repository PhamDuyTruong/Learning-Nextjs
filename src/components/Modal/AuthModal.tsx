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
const AuthModal = () => {
    const [modalState, setModalState] = useRecoilState(authModalState);
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
        <Flex>
            {modalState.view === "login" || modalState.view === "signup" ? (
                <>
                    <AuthInput toggleView={toggleView}/>
                </>
            ): (
                <div></div>
            )}
        </Flex>
      </ModalBody>
    </ModalWrapper>
  )
}

export default AuthModal