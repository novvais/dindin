const pool = require("../conexao")
const jwt = require("jsonwebtoken")

const verificarUsuarioLogado = async (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ mensagem: "Não autorizado."})
    }

    const token = authorization.split(' ')[1]

    try {
        const { id } = jwt.verify(token, process.env.JW_SECRET)

        const { rows, rowCount } = await pool.query('SELECT * FROM usuarios WHERE id = $1', [id])

        if (rowCount < 1) {
            return res.status(401).json({ mensagem: "Não autorizado."})
        }

        req.usuario = rows[0]

        next()
    } catch (error) {
        return res.status(500).json({ mensagem: error.message })
    }
}

module.exports = verificarUsuarioLogado