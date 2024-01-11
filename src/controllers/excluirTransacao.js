const pool = require('../conexao.js');

const excluirTransacao = async (req, res) => {
  const usuarioId = req.usuario.id; 
  const { id } = req.params; 

  try {
    
    const { rows: transacaoRows } = await pool.query('SELECT * FROM transacoes WHERE id = $1 AND usuario_id = $2', [id, usuarioId]);
    if (transacaoRows.length === 0) {
      return res.status(404).json({ mensagem: "Transação não encontrada ou não pertence ao usuário." });
    }

    
    await pool.query('DELETE FROM transacoes WHERE id = $1 AND usuario_id = $2', [id, usuarioId]);

    
    return res.status(204).send();
  } catch (erro) {
    console.error(erro);
    return res.status(500).json({ mensagem: "Erro ao excluir a transação." });
  }
};

module.exports = { excluirTransacao };