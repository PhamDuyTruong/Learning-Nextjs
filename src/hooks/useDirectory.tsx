import React, {useEffect} from 'react';
import { useRecoilState, useRecoilValue } from "recoil";
import {useRouter} from 'next/router';
import { FaReddit } from "react-icons/fa";
import {communityState} from '../atoms/communitiesAtom'
import {
    defaultMenuItem,
  DirectoryMenuItem,
  directoryMenuState
} from '../atoms/directoryMenuItem'


const useDirectory = () => {
    const [directoryState, setDirectoryState] = useRecoilState(directoryMenuState);
    const router = useRouter();

    const communityStateValue = useRecoilValue(communityState);

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

      useEffect(() => {
        const {community} = router.query;
        const existingCommunity = communityStateValue.currentCommunity;
        if (existingCommunity.id) {
            setDirectoryState((prev) => ({
              ...prev,
              selectedMenuItem: {
                displayText: `r/${existingCommunity.id}`,
                link: `r/${existingCommunity.id}`,
                icon: FaReddit,
                iconColor: "blue.500",
                imageURL: existingCommunity.imageURL,
              },
            }));
            return;
        }
        setDirectoryState((prev) => ({
            ...prev,
            selectedMenuItem: defaultMenuItem,
        }))
      }, [communityStateValue.currentCommunity])
  return {onSelectMenuItem, toggleMenuOpen, directoryState}
}

export default useDirectory