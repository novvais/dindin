const express = require("express")
const verificarUsuarioLogado = require("../middleware/autenticacao")
const { listarTransacoesDoUsuario } = require("../controllers/listarTransaçõesDoUsuario")
const { cadastrarTransacao } = require("../controllers/cadastrarTransacao")
const { detalharTransacao } = require("../controllers/detalharTransacao")
const { atualizarTransacao } = require("../controllers/atualizarTransacao")
const { excluirTransacao } = require("../controllers/excluirTransacao")
const { obterExtrato } = require("../controllers/extratoDeTransacoes")

const { 
    cadastroUsuario, 
    login,
    detalharUsuario,
    atualizarUsuario,
    listarCategorias
} = require("../controllers/usuarios")

const rota = express()

rota.post("/usuario", cadastroUsuario)
rota.post("/login", login)

rota.use(verificarUsuarioLogado)

rota.get("/usuario", detalharUsuario)
rota.put("/usuario", atualizarUsuario)
rota.get("/categorias", listarCategorias)
rota.get("/transacao/extrato", obterExtrato)
rota.get("/transacao", listarTransacoesDoUsuario)
rota.post("/transacao", cadastrarTransacao)
rota.get("/transacao/:id", detalharTransacao)
rota.put("/transacao/:id", atualizarTransacao)
rota.delete("/transacao/:id", excluirTransacao)

module.exports = rota