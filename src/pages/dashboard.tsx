import {Header} from '../components/Header';
import {Flex, SimpleGrid, Box, Text} from '@chakra-ui/react'
import { SideBar } from '../components/SideBar';

export function DashBoard (){
    return(
        <Flex direction="column" h="100vh">
            <Header/>
 
            <Flex 
                w="100%" 
                my="6" 
                maxWidth={1480} 
                mx="auto" 
                px="6"
            >
                <SideBar/>

                <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
                    <Box p="8"  bg="gray.800" borderRadius={8}>
                        <Text fontSize="lg" mb="4">Inscritos da Semana</Text>
                    </Box>
                    <Box p="8"  bg="gray.800" borderRadius={8}>
                        <Text fontSize="lg" mb="4">Taxa de abertura</Text>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    );
}