import {Flex, Box, Text, Avatar} from '@chakra-ui/react'

interface ProfileProps{
    showProfileData?: boolean;
}

export function Profile({showProfileData= true}: ProfileProps){
    return(
        <>
            <Flex align="center" ml="8">
                {showProfileData && (
                    <Box mx="4" textAlign="right">
                      <Text>Vinicius</Text>
                      <Text color="gray.300" fontSize="small">Vinicius@gmail.com</Text>    
                    </Box>
                )}
                <Avatar size="md" 
                        name="Vinicius Pollo"  
                        src="https://avatars.githubusercontent.com/u/55021733?s=40&v=4" />
            </Flex>
        </>
    );
}