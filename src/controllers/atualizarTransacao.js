const pool = require('../conexao.js');

const atualizarTransacao = async (req, res) => {
  const usuarioId = req.usuario.id;  
  const { id } = req.params; 
  const { descricao, valor, data, categoria_id, tipo } = req.body;

  
  if (!descricao || valor == null || !data || !categoria_id || !tipo) {
    return res.status(400).json({ mensagem: "Todos os campos obrigatórios devem ser informados." });
  }

  
  if (tipo !== "entrada" && tipo !== "saida") {
    return res.status(400).json({ mensagem: "O campo tipo deve ser 'entrada' ou 'saida'." });
  }

  try {
    
    const { rows: transacaoRows } = await pool.query('SELECT * FROM transacoes WHERE id = $1 AND usuario_id = $2', [id, usuarioId]);
    if (transacaoRows.length === 0) {
      return res.status(404).json({ mensagem: "Transação não encontrada ou não pertence ao usuário." });
    }

    
    const { rows: categoriaRows } = await pool.query('SELECT * FROM categorias WHERE id = $1', [categoria_id]);
    if (categoriaRows.length === 0) {
      return res.status(404).json({ mensagem: "Categoria não encontrada." });
    }

 
    await pool.query(
      'UPDATE transacoes SET descricao = $1, valor = $2, data = $3, categoria_id = $4, tipo = $5 WHERE id = $6 AND usuario_id = $7',
      [descricao, valor, data, categoria_id, tipo, id, usuarioId]
    );

  
    return res.status(204).send();
  } catch (erro) {
    console.error(erro);
    return res.status(500).json({ mensagem: "Erro ao atualizar a transação." });
  }
};

module.exports = { atualizarTransacao };