# Construindo Interfaces Do Futuro

Nesse Projeto foi criado interfaces de um painel administrativo contendo fluxo de autenticação,yup para validação, dashboard, listagem e cadastro usando CHAKRA UI no Next.js e ApexCharts.js para geração de graficos, react-hook-forms para formulários, usei miragejs para simular backend juntamente com faker para geração de dados ficticios, react-query para armazenamento chache e sincronização de dados.

Para mais detalhes leia mais informações abaixo.

## CHAKRA UI 
[Chakra UI](https://chakra-ui.com/) é uma biblioteca de componentes simples, modular e acessível que fornece os blocos de construção de que você precisa para construir seus aplicativos React.

## ApexCharts.Js
Gráficos de código aberto moderno e interativos. [ApexCharts](https://apexcharts.com/) é uma biblioteca de gráficos moderna que ajuda os desenvolvedores a criar visualizações bonitas e interativas para páginas da web.

É um projeto de código aberto licenciado pelo MIT e seu uso é gratuito em aplicativos comerciais.

## React-hook-form
Formulário [React-Hook-Form](https://react-hook-form.com/) - Validação de formulários React simples.
Formulários eficientes, flexíveis e extensíveis com validação fácil de usar.

Pode ser usado Unform também.

## Yup

[Yup](https://github.com/jquense/yup/blob/master/README.md) é um construtor de esquema para análise e validação de valor de tempo de execução. Defina um esquema, transforme um valor para corresponder, afirme a forma de um valor existente ou ambos. Os esquemas Yup são extremamente expressivos e permitem modelar validações complexas e interdependentes ou transformação de valor.

Interface de esquema concisa, porém expressiva, equipada para modelar modelos de dados simples a complexos.
Suporte poderoso para TypeScript. Inferir tipos estáticos do esquema ou garantir que o esquema implemente corretamente um tipo.
Suporte de validação assíncrona integrado. Modelar a validação do lado do servidor e do lado do cliente igualmente bem.
Extensível: adicione seus próprios métodos e esquema de segurança de tipo.
Ricos detalhes de erro, facilite a depuração.

## MirageJs
[Mirage JS](https://miragejs.com/) é uma biblioteca de simulação de API que permite construir, testar e compartilhar um aplicativo JavaScript funcional completo sem ter que depender de nenhum serviço de back-end.

Uso atualmente para testar em tempo real front-end sem depender de um backend pronto, ou seja, o trabalho fica concentrado no front-end e pronto para entrega e integração com backend original.

## Faker
Gera dados ficticios em massa para sua aplicação ajudando no processo de teste e criação.

## ReactQuery
Sincronização de dados eficiente e poderosa para React
Busque, armazene em cache e atualize dados em seus aplicativos React e React Native, tudo sem tocar em nenhum "estado global".[Home Page](https://react-query.tanstack.com/).

APRIMORAMENTO DA FERRAMENTA DEVTOOLS PARA REACT QUERY. [DOCUMENTAÇÃO](https://react-query.tanstack.com/devtools).

#### O React Query substitui Redux, MobX ou outros gerenciadores de estado globais?
Bem, vamos começar com alguns itens importantes:

React Query é uma biblioteca de estado do servidor(*server-state libary*) , responsável por gerenciar operações assíncronas entre seu **servidor e cliente**
Redux, MobX, Zustand, etc. são bibliotecas de estado do cliente que podem ser usadas para armazenar dados assíncronos, embora **ineficientemente quando comparados a uma ferramenta como React Query**
Com esses pontos em mente, a resposta curta é que o **React Query substitui** o código clichê e a fiação relacionada usada para gerenciar dados de cache em seu estado de cliente e os **substitui por apenas algumas linhas de código**.

Para a grande maioria dos aplicativos, o estado do cliente verdadeiramente acessível globalmente que sobra após a migração de todo o seu código assíncrono para React Query é geralmente muito pequeno.

[Documentação](https://react-query.tanstack.com/guides/does-this-replace-client-state).

## Axios
O que é [Axios](https://axios-http.com/docs/intro)?.
[Axios](https://axios-http.com/docs/intro) é um cliente HTTP baseado em promessa para node.js e o navegador. É isomórfico (= pode ser executado no navegador e no nodejs com a mesma base de código). No lado do servidor, ele usa o httpmódulo node.js nativo , enquanto no cliente (navegador) ele usa XMLHttpRequests.

#### COM FETCH
```tsx
                const response = await  fetch('http://localhost:3000/api/users')
                const data = await response.json()
```
#### COM AXIOS
```tsx
                const {data} = await api.get('users')
```
        Porém precisa configurar o axios em um arquivo services/api.ts
```tsx
                import axios from 'axios';

                export const api = axios.create({
                    baseURL: 'http://localhost:3000/api'
                })
```

#### Motivo por qual estou usando.
Estou usando o axios no lugar do fetch devido algumas vantagens, umas delas, é poder usar uma URL base , pra que todas as requisições partam de um endereço inicial,um prefixo no endereço.

## React.js
[React](https://pt-br.reactjs.org/) é uma biblioteca JavaScript para criar interfaces de usuário.

## Next.js
É uma Estrutura React para Produção(FrameWork para React), [Next.js](https://nextjs.org/) oferece a melhor experiência de desenvolvedor com todos os recursos de que você precisa para produção: renderização híbrida estática e de servidor, suporte a TypeScript, agrupamento inteligente, pré-busca de rota e muito mais. Nenhuma configuração necessária.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Extensions visual code
- Auto Import.
- Auto Import - ES6,TS,JSX,TSX.
- Bracket Pair Colorizer.
- CSS Modules.
- Dracula Official.
- Emoji Snippets.
- HTML Preview.
- HTML Snippets.
- Jason test plugin.
- Material Icon Theme.
- Nuget Package Manager.
- Path Intellisense.
- Split HTML Attributes (Bue,React, Angular).
- Vscode-styled components

## Temas abordados no projeto.
#### Configurando PROJETO
- Interface declarativa.
- Criando projeto Next.js.
- Configurando Chakra UI.
- Configurando fonte.

#### Login e DashBoard.
- Página: Sign in.
- Componente: Input.
- Criando Header.
- Finalizando Header.
- Componente: Sidebar.
- Página: Dashboard.

#### Controle de usuários
- Página: Lista de usuários.
- Componente: Pagination.
- Página: Form de usuário.
#### Responsividade
- Separando componentes.
- Responsividade no Chakra.
- Header responsivo.
- Sidebar responsiva.
- Dashboard responsivo.
- Listagem responsiva.
- Cadastro responsivo.
- Fluxo de navegação.
- Sinalizando link ativo.

#### Formulario e validação
- Formulários no React.
- Atualização React Hook Form.
- Form de autenticação.
- Validação dos dados.
- Form de criação de usuário.
- Encerramento do módulo.

#### Data fetching no React
- Configurando MirageJS.
- Factories e seeds.
- Configurando React Query.
- Listagem de usuários.
- Configurando DevTools.  

#### Construindo aplicação
- Sinalizando refetch dos dados
- Configurando Axios
- Criando hook de listagem
- Lógica de paginação
- Componente de paginação
- Trocando de página
- Prefetch de dados
- Utilizando mutations
- SSR no React Query

#### Autenticação e autorização
- JWT
- REST FULL (Projeto paralelo de teste [ignite-reactjs-auth-backend](https://github.com/rocketseat-education/ignite-reactjs-auth-backend)).

sera atualizada essa lista conforme estou desenvolvendo..

#### Comandos de criação e instalações de pacotes no projeto.

Yarn create next-app dashgo

Yarn add typescript @types/react @types/node -D

Yarn add @chakra-ui/react @chakra-ui/core @emotion/react @emotion/styled framer-motion  

Yarn add apexcharts react-apexcharts

Yarn add react-hook-form 

Ao instalar o yup no projeto você utiliza o comando @hookform/resolvers para fazer [integração do Yup com o react-hook-form](https://react-hook-form.com/get-started#SchemaValidation).

Yarn add yup @hookform/resolvers

Yarn add miragejs -D

Yarn add faker -D

Yarn add @types/faker -D

Yarn add react-query

yarn add axios