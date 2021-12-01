import {Flex, Text,Input,Icon,HStack,Box,Avatar} from '@chakra-ui/react';
import {RiSearchLine,RiNotificationLine,RiUserAddLine} from 'react-icons/ri'

export function Header(){
    return(
        <Flex
            as="header"
            w="100%"   //largura
            maxWidth={1480}
            h="20"     //horizontal
            mx="4"     //margin horizontal
            mt="4"     //margin top
            px="6"     //padding horizontal
            align="center"
        >
            <Text 
                fontSize="3xl"
                fontWeight="bold"
                letterSpacing="tight"
                w="64"
            >

                DashGo
                <Text as="span" ml="1" color="pink.500">.</Text>
            </Text>
            <Flex
                as="label"
                flex="1"
                py="4"      //Padding Vertical 1rem or16px 
                px="8"      //padding horizontal
                ml="6"      //margin left
                mr="auto"
                maxWidth={400}
                alignSelf="center"
                color="gray.200"
                position="relative"
                bg="gray.800"
                borderRadius="full"
            >    
                <Input 
                    color="gray.50"
                    variant="unstyled"
                    px="4"
                    mr="4"
                    placeholder="Buscar na plataforma"
                    _placeholder={{color: 'gray.400'}}

                />
            <Icon as={RiSearchLine}/>
            </Flex>
            <Flex
                align="center"
                mk="auto"
            >
                <HStack
                    spacing="4"
                    mx="8"
                    pr="8"
                    py="1"
                    color="gray.300"
                    borderRightWidth={1}
                    borderColor="gray.700"
                >    
                    <Icon as={RiNotificationLine} fontSize="20"/>
                    <Icon as={RiUserAddLine} fontSize="20"/>
                </HStack>
                <Flex
                    align="center"
                >
                    <Box
                        mr="4"
                        textAlign="right"
                    >
                        <Text>Vinicius Pollo</Text>
                        <Text
                            color="gray.300"
                            fontSize="small"
                        >
                            ViniciusPolloGomes@gmail.com
                        </Text>    
                    </Box>
                    <Avatar
                        size="md"
                        name="Vinicius Pollo"
                        src="https://avatars.githubusercontent.com/u/55021733?s=40&v=4"
                    >
                    </Avatar>
                </Flex>
            </Flex>
        </Flex>
    );
}