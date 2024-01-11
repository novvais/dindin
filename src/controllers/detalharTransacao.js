const pool = require('../conexao.js');

const detalharTransacao = async (req, res) => {
  const usuarioId = req.usuario.id;  
  const { id } = req.params;  

  try {
    const { rows } = await pool.query(`
      SELECT t.id, t.tipo, t.descricao, t.valor, t.data, t.usuario_id, t.categoria_id, c.descricao AS categoria_nome
      FROM transacoes t
      JOIN categorias c ON c.id = t.categoria_id
      WHERE t.id = $1 AND t.usuario_id = $2`, [id, usuarioId]);
    
    const transacao = rows[0];
    if (!transacao) {
      return res.status(404).json({ mensagem: "Transação não encontrada." });
    }

    
    return res.status(200).json(transacao);
  } catch (erro) {
    console.error(erro);
    return res.status(500).json({ mensagem: "Erro ao buscar a transação do usuário." });
  }
};

module.exports = { detalharTransacao };