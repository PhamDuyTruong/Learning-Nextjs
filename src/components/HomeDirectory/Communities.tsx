import React, {useState} from 'react';
import { FaReddit } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { Box, Flex, Icon, MenuItem, Text } from "@chakra-ui/react";
import {communityState} from '../../atoms/communitiesAtom';
import {useRecoilValue} from 'recoil';
import {auth} from '../../firebase/clientApp';
import { useAuthState } from "react-firebase-hooks/auth";
import MenuListItem from './MenuListItem';


type CommunitiesProps = {
    menuOpen: boolean
}

const Communities: React.FC<CommunitiesProps> = ({menuOpen}) => {
    const [user] = useAuthState(auth);
    const [open, setOpen] = useState(false);
    const snippetsTool = useRecoilValue(communityState).mySnippets
  return (
    <>
        {snippetsTool.find((item) => item.isModerater) && (
            <Box mt={3} mb={4}>
                <Text pl={3} mb={1} fontSize="7pt" fontWeight={500} color="gray.500">
                    MODERATING
                </Text>
            {snippetsTool
            .filter((item) => item.isModerater)
            .map((snippet) => (
              <MenuListItem
                key={snippet.communityId}
                displayText={`r/${snippet.communityId}`}
                link={`/r/${snippet.communityId}`}
                icon={FaReddit}
                iconColor="brand.100"
              />
            ))}
            </Box>
        )}
        <Box mt={3} mb={4}>
            <Text pl={3} mb={1} fontSize="7pt" fontWeight={500} color="gray.500">
                MY COMMUNITIES
            </Text>
            <MenuItem
                width="100%"
                fontSize="10pt"
                _hover={{ bg: "gray.100" }}
                onClick={() => setOpen(true)}
            >
                <Flex alignItems={"center"}>
                    <Icon fontSize={20} mr={2} as={GrAdd} />
                    Create Community
                </Flex>
            </MenuItem>
        </Box>
        {snippetsTool.map((snippet) => (
          <MenuListItem
            key={snippet.communityId}
            icon={FaReddit}
            displayText={`r/${snippet.communityId}`}
            link={`/r/${snippet.communityId}`}
            iconColor="blue.500"
            imageURL={snippet.imageURL}
          />
        ))}
    </>
  )
}

export default Communities