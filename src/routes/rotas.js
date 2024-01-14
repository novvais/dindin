const express = require("express")
const verificarUsuarioLogado = require("../middleware/autenticacao")
const transacoes = require("../controllers/transacoes")

const usuarios = require("../controllers/usuarios")

const rota = express()

rota.post("/usuario", usuarios.cadastroUsuario)
rota.post("/login", usuarios.login)

rota.use(verificarUsuarioLogado)

rota.get("/usuario", usuarios.detalharUsuario)
rota.put("/usuario", usuarios.atualizarUsuario)
rota.get("/categorias", usuarios.listarCategorias)

rota.get("/transacao", transacoes.listarTransacoesDoUsuario)
rota.get("/transacao/:id", transacoes.detalharTransacao)
rota.post("/transacao", transacoes.cadastrarTransacao)
rota.put("/transacao/:id", transacoes.atualizarTransacao)
rota.delete("/transacao/:id", transacoes.excluirTransacao)
rota.get("/transacao/extrato", transacoes.obterExtrato)

module.exports = rota