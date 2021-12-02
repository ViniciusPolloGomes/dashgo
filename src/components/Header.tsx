import {Flex, Text,Input,Icon,HStack,Box,Avatar} from '@chakra-ui/react';
import {RiSearchLine,RiNotificationLine,RiUserAddLine} from 'react-icons/ri'

export function Header(){
    return(
        <Flex
            as="header"
            maxWidth={1480} 
            w="100%" 
            h="20"     //horizontal
            mx="auto"           //margin horizontal
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
                ml="8"
                maxWidth={400}
                alignSelf="center"
                color="gray.200"
                position="relative"
                bg="gray.800"
                borderRadius="full"
                minWidth={300}
            >    
                <Input 
                    color="gray.50"
                    variant="unstyled"
                    px="4"
                    mr="4"
                    minWidth={200}
                    placeholder="Buscar na plataforma"
                    _placeholder={{color: 'gray.400'}}

                />
                <Icon as={RiSearchLine} fontSize="20"/>
            </Flex>
            <Flex
                align="center"
                ml="auto"
            >
                <HStack
                    spacing="4"
                    pl="2"
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
                    ml="8"
                >
                    <Box
                        mx="4"
                        textAlign="right"
                    >
                        <Text>Vinicius </Text>
                        <Text
                            color="gray.300"
                            fontSize="small"
                        >
                            Vinicius@gmail.com
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