import React from 'react';
import { useRecoilState, useRecoilValue } from "recoil";
import {useRouter} from 'next/router';
import { FaReddit } from "react-icons/fa";
import {
    defaultMenuItem,
  DirectoryMenuItem,
  directoryMenuState
} from '../atoms/directoryMenuItem'


const useDirectory = () => {
    const [directoryState, setDirectoryState] = useRecoilState(directoryMenuState);
    const router = useRouter();

    const onSelectMenuItem = (menuItem: DirectoryMenuItem) => {
            setDirectoryState((prev) => ({
                ...prev,
                selectedMenuItem: menuItem
            }))
    };

    const toggleMenuOpen = () => {
        setDirectoryState((prev) => ({
          ...prev,
          isOpen: !directoryState.isOpen,
        }));
      };
  return {onSelectMenuItem, toggleMenuOpen}
}

export default useDirectory