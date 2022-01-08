import { useQuery } from 'react-query';
import { api } from '../api';

type User = {
    id:string;
    name: string;
    email:string;
    createdAt:string;
}

export async function getUsers() : Promise<User[]>{
        // COM FETCH
        // const response = await  fetch('http://localhost:3000/api/users')
        //const data = await response.json()

        //COM AXIOS
        const {data} = await api.get('users')

        const users = data.users.map(user => {
            return{
                id: user.id,
                name: user.name,
                email: user.email,
                createdAt : new Date(user.createAt).toLocaleDateString('pt-BR',{
                    day: '2-digit',
                    month:'long',
                    year:'numeric'
                })
            };
        });

        return users;
}

export function useUsers(){
    return useQuery('users', getUsers,{    //criar a chave exige o nome para salvar no cache onde irar salvar, e o método
        staleTime:1000*10 // 5 sec
    } ) 
}

//Nesse arquivo desaclopamos a função que busca os usuarios do react-query, 
// ou seja podemos obter os usuarios sem necessitar de chamala por meio do react-query