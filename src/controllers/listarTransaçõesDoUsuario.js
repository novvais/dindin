const pool = require('../conexao')

const listarTransacoesDoUsuario = async (req, res) => {
  const usuarioId = req.usuario.id;
  const filtros = req.query.filtro; 

  try {
    let query = `
      SELECT t.id, t.tipo, t.descricao, t.valor, t.data, t.categoria_id, c.descricao AS categoria_nome
      FROM transacoes t
      INNER JOIN categorias c ON t.categoria_id = c.id
      WHERE t.usuario_id = $1
    `;

    const queryParams = [usuarioId];

    
    if (filtros) {
    
      const filtroArray = Array.isArray(filtros) ? filtros : [filtros];    
      const placeholders = filtroArray.map((_, index) => `$${index + 2}`).join(', ');
    
      query += `AND c.descricao IN (${placeholders})`;
      queryParams.push(...filtroArray);
    }

    
    const { rows } = await pool.query(query, queryParams);
    return res.status(200).json(rows);
  } catch (erro) {
    console.error(erro);
    return res.status(500).json({ mensagem: "Erro ao listar as transações com filtro." });
  }
}

module.exports = { listarTransacoesDoUsuario }