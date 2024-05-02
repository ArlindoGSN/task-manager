
# Task Manager

O Task Manager é uma aplicação para gerenciamento de tarefas, permitindo criar, listar, atualizar e excluir tarefas.

## Pré-requisitos

Certifique-se de ter o Node.js e o npm instalados em sua máquina.

## Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/ArlindoGSN/task-manager.git
  

2. Instale as dependências do projeto:
   ```bash
   cd task-manager
   yarn install
   ```

## Uso

Para iniciar o servidor em modo de desenvolvimento, execute o seguinte comando:
```bash
yarn dev
```

Para compilar o código TypeScript, execute:
```bash
yarn build
```

Para iniciar o servidor após compilar o código, execute:
```bash
yarn start
```

Para executar os testes, execute:
```bash
yarn test
```

Para executar os testes em modo de observação, execute:
```bash
yarn test:watch
```

O servidor estará disponível em http://localhost:3000 por padrão.

## Rotas

- `POST /tasks`: Cria uma nova tarefa.
  - Parâmetros:
    - `id`: ID da tarefa (opcional)
    - `title`: Título da tarefa
    - `description`: Descrição da tarefa
    - `completed`: Indica se a tarefa está completa (booleano)
    - `due_date`: Data de vencimento da tarefa
- `GET /tasks`: Retorna todas as tarefas.
- `GET /tasks/:id`: Retorna uma tarefa específica com base no ID.
- `PUT /tasks/:id`: Atualiza uma tarefa existente com base no ID.
  - Parâmetros:
    - `title`: Novo título da tarefa
    - `description`: Nova descrição da tarefa
    - `completed`: Indica se a tarefa está completa (booleano)
    - `due_date`: Nova data de vencimento da tarefa
- `GET /tasks/:id/complete`: Marca uma tarefa como completa.
- `DELETE /tasks/:id`: Exclui uma tarefa com base no ID.

## Contribuindo

Sinta-se à vontade para contribuir com este projeto. Abra uma issue para discutir as alterações propostas ou envie um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT - consulte o arquivo [LICENSE](LICENSE) para obter detalhes.
