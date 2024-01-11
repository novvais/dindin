const pool = require('../conexao.js');

const obterExtrato = async (req, res) => {
  const usuarioId = req.usuario.id;

  try {
    const { rows: entradas } = await pool.query(
      'SELECT SUM(valor) AS total_entrada FROM transacoes WHERE usuario_id = $1 AND tipo = $2',
      [usuarioId, 'entrada']
    );
    const totalEntrada = entradas[0].total_entrada || 0;


    const { rows: saidas } = await pool.query(
      'SELECT SUM(valor) AS total_saida FROM transacoes WHERE usuario_id = $1 AND tipo = $2',
      [usuarioId, 'saida']
      
    );

    
    const totalSaida = saidas[0].total_saida || 0;

    return res.status(200).json({
      entrada: +totalEntrada,
      saida: +totalSaida
    });
  } catch (erro) {
    console.error(erro);
    return res.status(500).json({ mensagem: "Erro ao obter o extrato das transações." });
  }
};

module.exports = { obterExtrato };