
import{Box,Flex,Heading,Divider,VStack,SimpleGrid,HStack,Button,useBreakpointValue} from '@chakra-ui/react'
import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { SideBar } from '../../components/SideBar';
import Link from 'next/link';

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
                 <Box flex="1" borderRadius={8} bg="gray.800" p={["6","8"]}>
                    <Heading
                        size="lg"
                        fonteSize="normal"
                        textAlign={["center","start"]}>
                        Criar Usuário
                    </Heading>
                    <Divider my="6" borderColor="gray.700"/>
                    <VStack spacing={["4","8"]} >
                        <SimpleGrid minChildWidth="240px" spacing={["4","8"]} w="100%">
                            <Input name="name" label="Nome Completo"/>
                            <Input name="email" type="email" label="E-mail"/>
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing={["4","8"]} w="100%">
                            <Input name="password" type="password" label="Senha"/>
                            <Input name="password_confirmation" type="password" label="Confirmação da senha"/>
                        </SimpleGrid>
                    </VStack>
                    <Divider my={["6","6"]}  borderColor="gray.700"/>
                    <Flex mt={["2","8"]} justify={["center","flex-end"]}>
                        <HStack spacing="4" >
                            <Link href="/users" passHref>
                                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button colorScheme="pink">Salvar</Button>
                        </HStack>
                    </Flex>
                 </Box>
            </Flex>
        </Box>
    );
}