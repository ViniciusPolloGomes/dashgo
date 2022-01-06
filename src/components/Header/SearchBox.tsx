import {Flex, Input, Icon} from '@chakra-ui/react'
import { useRef} from 'react';
import { RiSearchLine } from "react-icons/ri";

export function SearchBox(){
    //CONTROLLED COMPONENTS:
    //const [search, setSearch] = useState('');

    //UNCONTROLLED COMPONENTS
    //IMPERATIVO VS DECLARATIVO
    const searchInputRef = useRef<HTMLInputElement>(null)

    //console.log(searchInputRef.current.value)

    //SsearchInputRef.current.focus()  (IMPERATIVO)

    return(
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
                ref={searchInputRef}
                //value={search}
                //onChange={event => setSearch(event.target.value)}

            />
                <Icon as={RiSearchLine} fontSize="20"/>
        </Flex>
    );
}