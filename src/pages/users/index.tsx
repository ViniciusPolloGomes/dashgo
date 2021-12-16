
import{Text,Box,Flex,Heading,Button,Icon,Table,Thead,Tr,Th,Checkbox,Tbody,Td,useBreakpointValue} from '@chakra-ui/react'
import { RiAddLine,RiPencilLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { SideBar } from '../../components/SideBar';

export default function UserList(){
    const isWideVersion = useBreakpointValue({
        base:false,
        lg:true,
    })

    return(
        <Box>
            <Header/>
            <Flex w="100%" my="6" maxWidth={1200} mx="auto" px="6"> 
                 <SideBar/>
                 <Box flex="1" borderRadius={8} bg="gray.800" p={["4","8"]}>
                     <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários</Heading>
                        <Button as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="pink"
                        leftIcon={<Icon as={RiAddLine} fontSize="20"/>}>
                            Criar Novo
                        </Button>
                     </Flex>
                     <Table colorScheme="whiteAlpha">
                         <Thead>
                             <Tr>
                                 <Th px={["4","4","6"]} color="gray.300" width="8">
                                    <Checkbox colorScheme="pink"/>
                                 </Th>
                                 <Th>Usuário</Th>
                                 {isWideVersion && <Th>Data de Cadastro</Th>}
                                 
                             </Tr>
                         </Thead>
                         <Tbody>
                            <Tr>
                                <Td px={["4","4","6"]}>
                                 <Checkbox colorScheme="pink"/>    
                                </Td>
                                <Td px={["4","4","6"]}>
                                    <Box>
                                        <Text fontWeight="bold">Vinícius Pollo Gomes</Text>
                                        <Text fontSize="sm" color="gray.300">ViníciusPolloGomes@gmail.com</Text>
                                    </Box>    
                                </Td>
                                {isWideVersion && <Td>04 abril 2021</Td> }
                                
                            </Tr>
                            <Tr>
                                <Td px={["4","4","6"]}>
                                 <Checkbox colorScheme="pink"/>    
                                </Td>
                                <Td px={["4","4","6"]}>
                                    <Box>
                                        <Text fontWeight="bold">Vinícius Pollo Gomes</Text>
                                        <Text fontSize="sm" color="gray.300">ViníciusPolloGomes@gmail.com</Text>
                                    </Box>    
                                </Td>
                                {isWideVersion && <Td>04 abril 2021</Td> }
                            
                            </Tr>
                            <Tr>
                                <Td px={["4","4","6"]}>
                                 <Checkbox colorScheme="pink"/>    
                                </Td>
                                <Td px={["4","4","6"]}>
                                    <Box>
                                        <Text fontWeight="bold">Vinícius Pollo Gomes</Text>
                                        <Text fontSize="sm" color="gray.300">ViníciusPolloGomes@gmail.com</Text>
                                    </Box>    
                                </Td>
                                {isWideVersion && <Td>04 abril 2021</Td> }
                                
                            </Tr>
                         </Tbody>
                     </Table>
                     <Pagination/>
                 </Box>
            </Flex>
        </Box>
    );
}