import {createServer,Factory, Model} from 'miragejs'
import faker from 'faker';
import routes from 'next/router'
type User={
    name: string;
    email: string;
    created_at: string;
};

export function makeServer(){
     const server = createServer({
        models:{
            user: Model.extend<Partial<User>>({})    //modelo usuarios do tipo User podendo conter parcialmente as mesmas variaveis.
        },

        factories:{ //conceito para gerar dados em massa
            user: Factory.extend({
                name(i){
                    return `User ${i+1}`;
                },
                email(){
                    return faker.internet.email().toLowerCase();
                },
                createdAt(){
                    return faker.date.recent(10);
                },

            })
        },
        
        seeds(server){ //criar dados assim que servidor for iniciado
            server.createList('User',200);
        },

        routes(){
            this.namespace= 'api';

            this.timing= 750; //delay para tentar tratar casos de tempo de resposta....

            this.get('/users'); //mirage busca os dados de usuarios automatico
            this.post('/users');  //envia usuarios automaticamente no banco de da dos
            
            this.namespace='';
            this.passthrough()   //todas as chamadas para endereço api passem pelo mirage, caso não sejam detectadas pelas rotas do mirage, elas passam adiante para rotas original delas, ou pagina e função disponivel..
        }
     })

     return server;
}
