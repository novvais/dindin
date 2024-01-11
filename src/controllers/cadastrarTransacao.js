const pool = require('../conexao.js');

const cadastrarTransacao = async (req, res) => {
  const usuarioId = req.usuario.id; 
  const { descricao, valor, data, categoria_id, tipo } = req.body;

  
  if (!descricao || !valor || !data || !categoria_id || !tipo) {
    return res.status(400).json({ mensagem: "Todos os campos obrigatórios devem ser informados." });
  }

  
  if (tipo !== "entrada" && tipo !== "saida") {
    return res.status(400).json({ mensagem: "O campo tipo deve ser 'entrada' ou 'saida'." });
  }

  try {
    
    const { rows: categoriaRows } = await pool.query('SELECT * FROM categorias WHERE id = $1', [categoria_id]);
    if (categoriaRows.length === 0) {
      return res.status(404).json({ mensagem: "Categoria não encontrada." });
    }

    
    const { rows } = await pool.query(
      'INSERT INTO transacoes (descricao, valor, data, categoria_id, usuario_id, tipo) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [descricao, valor, data, categoria_id, usuarioId, tipo]
    );

    
    return res.status(201).json(rows[0]);
  } catch (erro) {
    console.error(erro);
    return res.status(500).json({ mensagem: "Erro ao cadastrar a transação." });
  }
};

module.exports = { cadastrarTransacao };