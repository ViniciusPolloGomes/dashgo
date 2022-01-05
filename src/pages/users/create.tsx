
import{Box,Flex,Heading,Divider,VStack,SimpleGrid,HStack,Button,useBreakpointValue} from '@chakra-ui/react'
import { Input } from '../../components/Form/Input';
import { Header } from '../../components/Header';
import { SideBar } from '../../components/SideBar';

import {FieldValues, FormState, SubmitHandler , useForm} from 'react-hook-form'
import Link from 'next/link';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'

type CreateUserFormData={
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

const createUserFormSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('E-mail obrigatório').email('E-mail invalido'), 
    password: yup.string().required('Senha obrigatório').min(6,'No mínimo 6 caracteres'),
    password_confirmation: yup.string().oneOf([
        null, yup.ref('password')
    ], 'As senhas devem ser iguals')
})

export default function CreateUser(){

    const {register, handleSubmit,formState} = useForm({
        resolver: yupResolver(createUserFormSchema)
    })

    const isWideVersion = useBreakpointValue({
        base:false,
        lg:true,
    })
    
    const handleCreateUser : SubmitHandler<CreateUserFormData> = async (values) =>{
        await new Promise (resolve => setTimeout(resolve, 500));

        console.log(values);
    }

    const {errors} = formState;

    return(
        <Box>
            <Header/>
            <Flex w="100%" my="6" maxWidth={1200} mx="auto" px="6"> 
                 <SideBar/>
                 <Box
                   as="form"
                   flex="1"
                   borderRadius={8}
                   bg="gray.800"
                   p={["6","8"]}
                   onSubmit={handleSubmit(handleCreateUser)}>
                    <Heading
                        size="lg"
                        fonteSize="normal"
                        textAlign={["center","start"]}
                    >
                        Criar Usuário
                    </Heading>
                    <Divider my="6" borderColor="gray.700"/>
                    <VStack spacing={["4","8"]} >
                        <SimpleGrid minChildWidth="240px" spacing={["4","8"]} w="100%">
                            <Input
                              name="name"
                              label="Nome Completo"
                              error={errors.name}
                              {...register('name')} />
                            <Input
                              name="email"
                              type="email"
                              label="E-mail"
                              error={errors.email}
                              {...register('email')} />
                        </SimpleGrid>
                        <SimpleGrid minChildWidth="240px" spacing={["4","8"]} w="100%">
                            <Input
                              name="password"
                              type="password"
                              label="Senha"
                              error={errors.password}
                              {...register('password')} />
                           <Input
                              name="password_confirmation"
                              type="password"
                              label="Confirmação da senha"
                              error={errors.password_confirmation}
                              {...register('password_confirmation')} />
                        </SimpleGrid>
                    </VStack>
                    <Divider my={["6","6"]}  borderColor="gray.700"/>
                    <Flex mt={["2","8"]} justify={["center","flex-end"]}>
                        <HStack spacing="4" >
                            <Link href="/users" passHref>
                                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button
                              type="submit"
                              colorScheme="pink" 
                              insLoading={formState.isSubmitting}>
                            Salvar
                            </Button>
                        </HStack>
                    </Flex>
                 </Box>
            </Flex>
        </Box>
    );
}