import {Flex, Icon, IconButton, useBreakpointValue} from '@chakra-ui/react';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';
import {Logo} from './Logo'
import { useSideBarDrawer } from '../../contexts/SideBarDrawerContexts';
import { RiMenuLine } from 'react-icons/ri';

export function Header(){
    const {onOpen} = useSideBarDrawer();
    const isWideVersion = useBreakpointValue({
        base:false,
        lg: true,
    })

    return(
        <Flex
            as="header"
            maxWidth={1200}
            w={["100%vh","100%"]}  
            h="20"     //horizontal
            mx="auto"           //margin horizontal
            mt="4"     //margin top
            px="6"     //padding horizontal
            align="center"  
        >

            {!isWideVersion &&(
                <IconButton
                    aria-label='Open navigation'
                    icon={<Icon as={RiMenuLine}/>}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2"
                >
                </IconButton>
            )}
            <Logo/> 

            {isWideVersion && <SearchBox/>}

            <Flex align="center" ml="auto">
                <NotificationsNav/>
                <Profile showProfileData={isWideVersion}/>
            </Flex>
        </Flex>
    );
}