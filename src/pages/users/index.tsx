
import{Text,Box,Flex,Heading,Button,Icon,Table,Thead,Tr,Th,Checkbox,Tbody,Td,useBreakpointValue, Spinner} from '@chakra-ui/react'
import { RiAddLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { SideBar } from '../../components/SideBar';
import Link from 'next/link';
import {useState} from 'react'
import { useUsers } from '../../services/hooks/useUsers';
import {Link as LinkChakra} from '@chakra-ui/react'
import { queryClient } from './../../services/queryClient';
import { api } from '../../services/api';

export default function UserList(){

    const [page, setPage] = useState(1);
    const {data,isLoading, isFetching, error} = useUsers(page);
    
    const isWideVersion = useBreakpointValue({
        base:false,
        lg:true,
    })

    async function handlePrefetchUser(userId: string){
        await queryClient.prefetchQuery(['user',userId], async () =>{
            const response = await api.get(`users/${userId}`)

            return response.data;
        } ,{
            staleTime: 1000 * 60 * 10,
        })
    }

    return(
        <Box>
            <Header/>
            <Flex w="100%" my="6" maxWidth={1200} mx="auto" px="6"> 
                 <SideBar/>
                 <Box flex="1" borderRadius={8} bg="gray.800" p={["4","8"]}>
                     <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">
                            Usuários

                            {!isLoading && isFetching && <Spinner size="sm"  color="gray.500" ml="4" />}
                        </Heading>
                        <Link href="/users/create" passHref>
                            <Button as="a"
                            size="sm"
                            fontSize="sm" 
                            colorScheme="pink"
                            leftIcon={<Icon as={RiAddLine} fontSize="20"/>}>
                                Criar Novo
                            </Button>
                        </Link>
                     </Flex>
                     {isLoading ? (
                         <Flex justify="center">
                             <Spinner/>
                         </Flex>
                     ): error ?(
                        <Flex>
                            <Text>Falha ao obter dados dos usuários.</Text>
                        </Flex>
                     ):(
                        <>
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
                            {data.users.map(user =>{
                                return(
                                    <Tr key={user.id}>
                                        <Td px={["4","4","6"]}>
                                            <Checkbox colorScheme="pink"/>    
                                        </Td>
                                        <Td px={["4","4","6"]}>
                                            <Box>
                                                <LinkChakra color="purple.400" onMouseEnter={()=>{handlePrefetchUser(user.id)}}>
                                                    <Text fontWeight="bold">{user.name}</Text>
                                                </LinkChakra>
                                                <Text fontSize="sm" color="gray.300">{user.email}</Text>
                                            </Box>    
                                        </Td>
                                        {isWideVersion && <Td>{user.createdAt}</Td> }
                                    </Tr>
                                )
                            })}
                           
                         </Tbody>
                        </Table>
                        <Pagination
                            totalCountOfRegisters={data.totalCount}
                            currentPage={page}
                            onPageChange={setPage} />
                        </>
                     )}
                 </Box>
            </Flex>
        </Box>
    );
}