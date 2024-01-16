const express = require("express")
const verifyUserLogged = require("../middleware/auth")
const transactions = require("../controllers/transactions")
const users = require("../controllers/users")

const route = express()

route.post("/usuario", users.registerUser)
route.post("/login", users.login)

route.use(verifyUserLogged)

route.get("/usuario", users.detailUser)
route.put("/usuario", users.updateUser)
route.get("/categorias", users.listCategories)

route.get("/transacao", transactions.listUserTransactions)
route.get("/transacao/:id", transactions.detailTransaction)
route.post("/transacao", transactions.registerTransaction)
route.put("/transacao/:id", transactions.updateTransaction)
route.delete("/transacao/:id", transactions.deleteTransaction)
route.get("/transacao/extrato", transactions.getExtract)

module.exports = route