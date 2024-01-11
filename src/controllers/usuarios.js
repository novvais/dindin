const pool = require("../conexao")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const cadastroUsuario = async (req, res) => {
    const { nome, email, senha } = req.body

    try {
        if (!nome) {
            return res.status(400).json({ mensagem: "O campo nome é obrigário." })
        }

        if (!email) {
            return res.status(400).json({ mensagem: "O campo email é obrigário." })
        }

        if (!senha) {
            return res.status(400).json({ mensagem: "O campo senha é obrigário." })
        }

        const verificarEmail = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email])

        if (verificarEmail.rowCount === 1) {
            return res.status(401).json({ mensagem: "Já existe um usuário cadastrado com o e-mail informado." })
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10)

        const novoUsuario = await pool.query('INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING *', [nome, email, senhaCriptografada])

        return res.status(201).json(novoUsuario.rows[0])
    } catch (error) {
        return res.status(500).json({ mensagem: error.message })
    }
}

const login = async (req, res) => {
    const { email, senha } = req.body

    try {
        if (!email) {
            return res.status(400).json({ mensagem: "O campo email é obrigário." })
        }

        if (!senha) {
            return res.status(400).json({ mensagem: "O campo senha é obrigário." })
        }

        const usuario = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email])

        if (usuario.rowCount < 1) {
            return res.status(404).json({ mensagem: "Email e/ou senha inválido(s)." })
        }
        
        const senhaValida = await bcrypt.compare(senha, usuario.rows[0].senha)

        if (!senhaValida) {
            return res.status(400).json({ mensagem: "Usuário e/ou senha inválido(s)." })
        }

        const token = jwt.sign({ id: usuario.rows[0].id }, process.env.JW_SECRET, { expiresIn: '8h' })
    
        const { senha: _, ...usuarioLogado } = usuario.rows[0]

        return res.status(200).json({ usuario: usuarioLogado, token }) 
    } catch (error) {
        return res.status(500).json({ mensagem: error.message })
    }
} 

const detalharUsuario = async (req, res) => {
    try {
        const usuario = await pool.query('SELECT * FROM usuarios WHERE id = $1', [req.usuario.id])

        const { senha: _, ...dadosUsuario } = usuario.rows[0]

        return res.status(200).json( dadosUsuario )
    } catch (error) {

    }

    return res.json(req.usuario)
}

const atualizarUsuario = async (req, res) => {
    const {nome, email, senha } = req.body

    try {
        if (!nome) {
            return res.status(400).json({ mensagem: "O campo nome é obrigário." })
        }

        if (!email) {
            return res.status(400).json({ mensagem: "O campo email é obrigário." })
        }

        if (!senha) {
            return res.status(400).json({ mensagem: "O campo senha é obrigário." })
        }

        const verificarEmail = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email])

        if (verificarEmail.rowCount === 1) {
            return res.status(401).json({ mensagem: "O e-mail informado já está sendo utilizado por outro usuário." })
        }

        const senhaCriptografada = await bcrypt.hash(senha, 10)

        await pool.query('UPDATE usuarios SET nome = $1, email = $2, senha = $3 WHERE id = $4  RETURNING *', [nome, email, senhaCriptografada, req.usuario.id])

        return res.status(201).json()
    } catch (error) {
        return res.status(500).json({ mensagem: error.message })
    }
}

const listarCategorias = async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT id, descricao FROM categorias ORDER BY id')

        return res.status(200).json(rows)
    } catch (error) {
        return res.status(500).json({ mensagem: error.message })
    }
}

module.exports = {
    cadastroUsuario,
    login,
    detalharUsuario,
    atualizarUsuario,
    listarCategorias
}