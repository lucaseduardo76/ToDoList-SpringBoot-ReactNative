# Todo List - Projeto de Prática

## Descrição

Este é um projeto de lista de tarefas (todo list) desenvolvido para praticar e aprimorar conhecimentos em tecnologias modernas de desenvolvimento de software. O projeto utiliza **Spring Boot** para o back-end e **React Native** para o front-end, criando uma aplicação completa e funcional.

## Tecnologias Utilizadas

- **Back-end**: [Spring Boot](https://spring.io/projects/spring-boot)
- **Front-end**: [React Native](https://reactnative.dev/)
- **API para Requisições**: [Axios](https://axios-http.com/)
- **Controle de Estado e Ciclo de Vida**: Hooks do React (useState, useEffect)

## Funcionalidades

- **Cadastro de Tarefas**: Adicione novas tarefas à sua lista.
- **Visualização de Tarefas**: Veja tarefas cadastradas, em aberto e finalizadas.
- **Marcação e Exclusão de Tarefas**: Marque tarefas como concluídas ou exclua-as.
- **Interface Intuitiva**: Design responsivo e interativo com React Native.

## Estrutura do Projeto

### Back-end (Spring Boot)

- **Responsável por**: Gerenciar dados de tarefas, autenticação de usuários e fornecimento de endpoints para o front-end.
- **Principais Endpoints**:
  - `GET /api/users/{id}`: Retorna dados do usuário e suas tarefas.
  - `POST /api/users/add`: Adicionar usuario

### Front-end (React Native)

- **Responsável por**: Interface do usuário, exibição e manipulação de dados recebidos do back-end.
- **Componentes Principais**:
  - **Home**: Tela principal que exibe a lista de tarefas, com funcionalidades para adicionar, marcar como concluída e excluir tarefas.

## Instalação e Execução

### Back-end

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/lucaseduardo76/ToDoList-SpringBoot-ReactNative
   cd ToDoList-SpringBoot-ReactNative
