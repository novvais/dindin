# Dindin
---

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