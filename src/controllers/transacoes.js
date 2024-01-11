const pool = require("../conexao");

const atualizarTransacao = async (req, res) => {
  const usuarioId = req.usuario.id;
  const { id } = req.params;
  const { descricao, valor, data, categoria_id, tipo } = req.body;

  if (!descricao || valor == null || !data || !categoria_id || !tipo) {
    return res
      .status(400)
      .json({ mensagem: "Todos os campos obrigatórios devem ser informados." });
  }

  if (tipo !== "entrada" && tipo !== "saida") {
    return res
      .status(400)
      .json({ mensagem: "O campo tipo deve ser 'entrada' ou 'saida'." });
  }

  try {
    const { rows: transacaoRows } = await pool.query(
      "SELECT * FROM transacoes WHERE id = $1 AND usuario_id = $2",
      [id, usuarioId]
    );
    if (transacaoRows.length === 0) {
      return res.status(404).json({
        mensagem: "Transação não encontrada ou não pertence ao usuário.",
      });
    }

    const { rows: categoriaRows } = await pool.query(
      "SELECT * FROM categorias WHERE id = $1",
      [categoria_id]
    );
    if (categoriaRows.length === 0) {
      return res.status(404).json({ mensagem: "Categoria não encontrada." });
    }

    await pool.query(
      "UPDATE transacoes SET descricao = $1, valor = $2, data = $3, categoria_id = $4, tipo = $5 WHERE id = $6 AND usuario_id = $7",
      [descricao, valor, data, categoria_id, tipo, id, usuarioId]
    );

    return res.status(204).send();
  } catch (erro) {
    console.error(erro);
    return res.status(500).json({ mensagem: "Erro ao atualizar a transação." });
  }
};

const cadastrarTransacao = async (req, res) => {
  const usuarioId = req.usuario.id;
  const { descricao, valor, data, categoria_id, tipo } = req.body;

  if (!descricao || !valor || !data || !categoria_id || !tipo) {
    return res
      .status(400)
      .json({ mensagem: "Todos os campos obrigatórios devem ser informados." });
  }

  if (tipo !== "entrada" && tipo !== "saida") {
    return res
      .status(400)
      .json({ mensagem: "O campo tipo deve ser 'entrada' ou 'saida'." });
  }

  try {
    const { rows: categoriaRows } = await pool.query(
      "SELECT * FROM categorias WHERE id = $1",
      [categoria_id]
    );
    if (categoriaRows.length === 0) {
      return res.status(404).json({ mensagem: "Categoria não encontrada." });
    }

    const { rows } = await pool.query(
      "INSERT INTO transacoes (descricao, valor, data, categoria_id, usuario_id, tipo) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [descricao, valor, data, categoria_id, usuarioId, tipo]
    );

    return res.status(201).json(rows[0]);
  } catch (erro) {
    console.error(erro);
    return res.status(500).json({ mensagem: "Erro ao cadastrar a transação." });
  }
};

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
      const placeholders = filtroArray
        .map((_, index) => `$${index + 2}`)
        .join(", ");

      query += `AND c.descricao IN (${placeholders})`;
      queryParams.push(...filtroArray);
    }

    const { rows } = await pool.query(query, queryParams);
    return res.status(200).json(rows);
  } catch (erro) {
    console.error(erro);
    return res
      .status(500)
      .json({ mensagem: "Erro ao listar as transações com filtro." });
  }
};

module.exports = {
  listarTransacoesDoUsuario,
  atualizarTransacao,
  cadastrarTransacao,
  detalharTransacao,
  excluirTransacao,
  obterExtrato
};
