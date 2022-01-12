import{Stack,Box,Button,Text,Flex} from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem';

interface paginationProps{
    totalCountOfRegisters: number;    //numero total de registros 
    registersPerPage?: number;        //registros por pagina desejados, esta como opcional.
    currentPage?: number;             //pagina atual
    onPageChange: (page:number) => void; //o que acontece quando pagina mudar
}

const siblingsCount = 1 ; // 1... 4 5 6 ...20 exemplo paginação. paginas irmãs       

// Afunção dois parametros, apartir_de(from)  e  para(to) 2 e 5
// retorna um array em branco de 5-2 = 3 posições
//vamos caminhar por cada posição desse array com func map
// p valor não importa _, pegaremos apenas index dessas posições
// depois preenchemos o array com from + index + 1
//[0,0,0]
//[from + index +1]
//[2+0+1, 2+1+1,2+2+1]
//[3,4,5]
function generatePageArray(from: number,to: number){ 
    return [...new Array(to-from)] 
    .map((_,index)=>{
        return from + index + 1;
    }) 
    .filter(page => page > 0)
}

export function Pagination(
    {totalCountOfRegisters,
    registersPerPage =10,
    currentPage = 1, 
    onPageChange,
    } : paginationProps) {

        const lastPage = Math.round(totalCountOfRegisters/ registersPerPage);
        
        const previousPages = currentPage > 1 
        ? generatePageArray(currentPage - 1 - siblingsCount, currentPage - 1 )
         :[]

        const nextPages = currentPage < lastPage
        ?generatePageArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
        :[]
    return (
        <Stack
            direction={["column","row"]}
            mt="8"
            justify="space-between"
            align="center"
            spacing="6">
            <Flex fontSize={["sm","sm"]}>
                <Text mx="1"> {currentPage * registersPerPage - registersPerPage +1}</Text>
                <Text mx="1"> - </Text>
                <Text mx="1">{currentPage * registersPerPage }</Text>
                <Text mx="1"> de </Text>
                <Text mx="1"> {totalCountOfRegisters}</Text>
            </Flex>
            <Stack
                direction="row"
                spacing="2"
            >
                {currentPage > (1+ siblingsCount) && (
                    <>
                        <PaginationItem onPageChange={onPageChange} number={1} />
                        {currentPage > (2 + siblingsCount) &&
                        <Text color="gray.300" width="8" textAlign="center">...</Text>}
                    </>
                )}

                {previousPages.length > 0 && previousPages.map(page =>{
                    return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
                })}
                
                <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />
                
                {nextPages.length > 0 && nextPages.map(page =>{
                    return <PaginationItem onPageChange={onPageChange} key={page} number={page} />
                })}

                {(currentPage + siblingsCount) < lastPage && (
                    <>
                        {(currentPage +1 + siblingsCount) < lastPage &&
                        <Text color="gray.300" width="8" textAlign="center">...</Text>}
                        <PaginationItem onPageChange={onPageChange} number={lastPage} />
                    </>
                )}
            </Stack>
        </Stack>
    );
}