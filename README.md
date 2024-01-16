# Dindin

Seja bem vindo(a)!

---

<details>
<summary><b>Como Usar</b></summary>

1. Clone o Repositório
   * Clone este repositório para o seu computador usando o seguinte comando:
      ```bash
      $ git clone git@github.com:novvais/dindin.git
      ```
2. Encontre o Diretorio
   * Encontre o diretorio usando o código abaixo:
      ```bash
      $ cd didin
      ```
3. Baixe todas as Dependecias do Projeto
   * No terminal utilize o código abaixo para baixar todas as bibliotecas:
      ```bash
      $ npm i
      ```
4. Inicie o Servidor
   * Inicie o servidor usando o código:
      ```bash
      $ npm run dev
      ```
5. Para executar as rotas utilize o Insomnia ou um programa similiar
   * Baixe e instale o Insomnia acessando o link: https://insomnia.rest/download
   * Crie uma conta e se conecte no aplicativo

6. Para gerenciar o Database utilize o Beekeeper Studio
   * Baixe e instale o Beekeeper acessando o link: https://www.beekeeperstudio.io/get

</details>

<details>
<summary><b>Como Usar o Insomnia</b></summary>

### **Passo a Passo**

1. Na página incial do Insomnia, clique no ícone de + no canto superior direito:
   <div><img src="./src/assets/foto_1.png"/></div>

2. Clique na primeira opção:
   <div><img src="./src/assets/foto_2.png"/></div>

3. Dê um nome para a coleção:
   <div><img src="./src/assets/foto_3.png"/></div>

4. Clique no ícone de + para criar uma rota:
   <div><img src="./src/assets/foto_4.png"/></div> 

5. Clique na primeira opção:
   <div><img src="./src/assets/foto_5.png"/></div>

6. Escolha o verbo da rota
   * Adicione o domínio e o caminho da API:
      ```bash
      http://localhost:3000
      ```
   <div><img src="./src/assets/foto_6.png"/></div>

</details>

<details>
<summary><b>Como Testar as Rotas</b></summary>

<details>
<summary>Funções do Insomnia</summary>

<details>
<summary>Body</summary>

-  Para usar o Body:
   -  Clique na caixa com o nome "Body" em seguida clique na opção "JSON" como mostra a imagem abaixo:
      <div><img src="./src/assets/exemplo_body.png"/></div>

</details>

<details>
<summary>Bearer Token</summary>

-  Para usar o Bearer:
   -  Clique na caixa com o nome "Auth": 
      <div><img src="./src/assets/bearer1.png"/></div>
   -  Em seguida clique na opção "Bearer Token"
      <div><img src="./src/assets/bearer2.png"/></div>
   -  Adicione o Token gerado na rota "login" como mostra a imagem abaixo:
      <div><img src="./src/assets/bearer_token.png"/></div>

</details>

</details>

<details>
<summary>Explicando as Rotas</summary>

**Para o código funcionar você precisa adicionar uma senha entre '' da sua escolha no `.env`**

<img src="./src/assets/env_jwt.png"/>


1. Rota **`POST` "cadastroUsuario"** - *Obrigatório o uso do body request*
   * Adicione o dominio e o caminho da API:
      ```bash
      http://localhost:3000/usuario
      ```

   <div><img src="./src/assets/route_register.png"/></div>

   * Exemplo de resposta:
   <div><img src="./src/assets/res_route_register.png"/></div>

2. Rota **`POST` "login"** *Obrigatório o uso do body request*
   * Adicione o dominio e o caminho da API:
      ```bash
      http://localhost:3000/login
      ```
      
   * Adicione os dados do usuário no body:
   <div><img src="./src/assets/route_login.png"/></div>

   * Exemplo de resposta:
   <div><img src="./src/assets/res_route_login.png"/></div>

   **Importante: Use o Token gerado na resposta para realizar os demais testes de rota!**

3. Rota **`GET` "detalharUsuario"** - *Obrigatório o uso do Bearer Token* 
   * Adicione o dominio e o caminho da API.
      ```bash
      http://localhost:3000/usuario
      ```
      
   * Adicione o Token gerado na resposta da rota "login" para continuar o teste.
   <div><img src="./src/assets/bearer_token.png"/></div>

   <div><img src="./src/assets/route_detail_profile.png"/></div>

4. Rota **`PUT` "atualizarUsuario"** - *Obrigatório o uso do Bearer Token* 
   * Adicione o dominio e o caminho da API
      ```bash 
      http://localhost:3000/usuario
      ```

   * Adicione o Token gerado na resposta da rota "login" para continuar o teste.
   <div><img src="./src/assets/route_update.png"/></div>

5. Rota **`GET` "listarCategorias"** - *Obrigatório o uso do Bearer Token*
   * Adicione o dominio e o caminho da API
      ```bash 
      http://localhost:3000/categorias
      ```

   * Adicione o Token gerado na resposta da rota "login" para continuar o teste.
   <div><img src="./src/assets/bearer_token.png"/></div>

   <div><img src="./src/assets/route_categories.png"/></div>

6. Rota **`GET` "listarTransacoesDoUsuario"** - *Obrigatório o uso do Bearer Token*
   * Adicione o dominio e o caminho da API
      ```bash 
      http://localhost:3000/transacao
      ```

   * Adicione o Token gerado na resposta da rota "login" para continuar o teste.
   <div><img src="./src/assets/bearer_token.png"/></div>

   <div><img src="./src/assets/route_list_transactions.png"/></div>

7. Rota **`GET` "detalharTransacao"** *Obrigatório o uso do Bearer Token e Params*
   * Adicione o dominio e o caminho da API
      ```bash 
      http://localhost:3000/transacao/1
      ```

   * Adicione o Token gerado na resposta da rota "login" para continuar o teste.
   <div><img src="./src/assets/bearer_token.png"/></div>

   * Adicione o id do usuário após a "/" da URL básica.
   <div><img src="./src/assets/route_detail_transactions.png"/></div>

8. Rota **`POST` "cadastrarTransacao"** - *Obrigatório o uso do Bearer Token e Body*
   * Adicione o dominio e o caminho da API
      ```bash 
      http://localhost:3000/transacao
      ```

   * Adicione o Token gerado na resposta da rota "login" para continuar o teste.
   <div><img src="./src/assets/bearer_token.png"/></div>

   * Adicione as informações da transação para cadastrar no Body.
   <div><img src="./src/assets/route_register_transactions.png"/></div>

8. Rota **`PUT` "atualizarTransacao"** - *Obrigatório o uso do Bearer Token, Params e Body*
   * Adicione o dominio e o caminho da API
      ```bash 
      http://localhost:3000/transacao/1
      ```

   * Adicione o Token gerado na resposta da rota "login" para continuar o teste.
   <div><img src="./src/assets/bearer_token.png"/></div>

   * Adicione o id do usuário após a "/" da URL básica.

   * Adicione as informações da transação para atualizar no Body.
   <div><img src="./src/assets/route_update_transactions.png"/></div>

9. Rota **`DELETE` "excluirTransacao"** - *Obrigatório o uso do Bearer Token e Params*
   * Adicione o dominio e o caminho da API
      ```bash 
      http://localhost:3000/transacao/1
      ```

   * Adicione o Token gerado na resposta da rota "login" para continuar o teste.
   <div><img src="./src/assets/bearer_token.png"/></div>

   * Adicione o id do usuário que vai ser excluído após a "/" da URL básica.
   <div><img src="./src/assets/route_delete_transactions.png"/></div>

10. Rota **`GET` "obterExtrato"** - *Obrigatório o uso do Bearer Token e Params*
   * Adicione o dominio e o caminho da API
      ```bash 
      http://localhost:3000/transacao/extrato
      ```

   <div><img src="./src/assets/route_extract.png"/></div>

   * Adicione o Token gerado na resposta da rota "login" para continuar o teste.
   <div><img src="./src/assets/bearer_token.png"/></div>

</details>

</details>

<details>
<summary><b>Database</b></summary>

<details>
<summary>PostgreSQL</summary>

Para poder usar o Database você precisa baixar e instalar o PostgreSQL, foi o gerenciador de Database utilizado no código.

1. Baixe e instale o PostgreSQL
   * Acesse o link e baixe a última versão disponível: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

2. Execute o arquivo baixado
   <img src="./src/assets/download_postgre.png"/>

3. Em seguida vai ser aberta uma aba para a instalação, clique em "Next"
   <img src="./src/assets/passo1_downloado_post.png"/>

4. Escolha onde vai ser instalado o Postgre e em seguida clique em "Next"
   <img src="./src/assets/passo2_downloado_post.png"/>

5. Selecione somente a primeira e a última opção e em seguida clique em "Next"
   <img src="./src/assets/passo3_downloado_post.png"/>

6. Escolha a paste onde vai ser armazenado o Database e em seguida clique em "Next"
   <img src="./src/assets/passo4_downloado_post.png"/>

7. Cria um senha para acessar o Database
   * Essa senha será usada para acessar o Beekeeper, grave essa senha
   * O usuário para acessar será o padrão "postgres"
   * Em seguida clique em "Next"
   <img src="./src/assets/passo5_downloado_post.png"/>
   
8. A porta usada será a padrão então somente clique em "Next"
   <img src="./src/assets/passo6_downloado_post.png"/>

9. Escolha a lingua
   <img src="./src/assets/passo7_downloado_post.png"/>

10. Agora basta clicar em "Next" até finalizar a instalação.

</details>

<details>
<summary>Como usar o Beekeeper</summary>

1. Após a instalação abra o Beekeeper para iniciar
   <img src="./src/assets/beekeeper_inicio.png"/>

2. Escolha o Database que vai ser usado, nesse caso vai ser o "PostgreSQL"
   <img src="./src/assets/beekeeper_postgres.png"/>

3. Insira seu nome de usuário e a senha criada na instalação do "PostgreSQL" e clique em "Connect"
   * O nome de usuário vai ser o padrão "postgres"
   <img src="./src/assets/beekeeper_password.png"/>
   
-  Para criar o Database utilize o código que está no arquivo `dump.sql`
   -  Copie e cole o código na aba `query` do Beekeeper, execute cada bloco individualmente
   <img src="./src/assets/query.beekeeper.png"/>

**Está quase pronto, agora basta conectar a API com o Database usando o `dotenv`.**

<details>
<summary>Conectando a API com o Database</summary>

1. Crie um arquivo chamado `.env` e use as informações do arquivo `.env.example`
   <img src="./src/assets/env_database.png"/>

2. Adicione do Beekeeper no `.env`
   <img src="./src/assets/connect.env.png/>

* Exemplo
   * Em `DB_DATABASE` você tem que inserir o nome do database criado no Beekeeper que no caso se chama "dindin"
   <img src="./src/assets/example.env.png"/>
</details>

</details>


</details>

---

**Exemplo de conteúdo do Body Request:**
<img src="./src/assets/exemplo_body.png"/>

   * Código:

      ```javascript  
      {
	      "nome": "Foo Ba",
          "email": "foo@bar.com",
          "cpf": "00011122233",
          "data_nascimento": "15/03/2001",
          "telefone": "11999998888",
          "senha": "1234"
      }   

**Exemplo de saída:** 
   <img src="./src/assets/exemplo_res.png"/>
