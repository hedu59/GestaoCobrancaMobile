using Dapper;
using Domain;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InfraData
{
	public class AcionamentoRepository: Conexao
	{

		public List<AcionamentoResumo> ObterResumoAcionamentoContagem(string contId, DateTime dataIni, DateTime dataFim)
		{
			using (var conn = SqlConnection)
			{
				const string sql = @"SELECT DISTINCT(DESCRICAO),(COUNT(USUARIO_INCLUSAO)) AS QUANTIDADETOTAL, A.ACAO_ID AS ACAOID
										FROM TBDEVEDOR_ACIONAMENTO A 
										INNER JOIN TBACAO_COBRANCA C ON A.ACAO_ID = C.ACAO_ID 
										WHERE A.CONT_ID = @contratante	 
										AND C.SE_ATIVO = 'S'
										AND A.DATA_ACIONAMENTO_FIM BETWEEN @dataUm and @dataDois
										GROUP BY DESCRICAO, A.ACAO_ID
										ORDER BY 2 DESC";

					return conn.Query<AcionamentoResumo>(sql, new { contratante = contId, dataUm = dataIni, dataDois = dataFim }).ToList();
				
			}
		}


		public List<AcionamentoModel> ObterAcionamentoDetalhes(int acaoId, DateTime dataIni, DateTime dataFim)
		{
			using (var conn = SqlConnection)
			{
				const string sql = @"SELECT DISTINCT(DESCRICAO),(COUNT(USUARIO_INCLUSAO)) AS QUANTIDADETOTAL, USUARIO_INCLUSAO as USUARIO
										FROM TBDEVEDOR_ACIONAMENTO A 
										INNER JOIN TBACAO_COBRANCA C ON A.ACAO_ID = C.ACAO_ID 
										WHERE A.ACAO_ID = @acao	 
										AND C.SE_ATIVO = 'S'
										AND A.DATA_ACIONAMENTO_FIM BETWEEN @dataUm and @dataDois
										GROUP BY DESCRICAO,A.USUARIO_INCLUSAO, usuario_inclusao, A.acao_id
										ORDER BY 1,2 DESC";

				return conn.Query<AcionamentoModel>(sql, new { acao = acaoId, dataUm = dataIni, dataDois = dataFim }).ToList();
			}
		}

		public List<Descricao> ObterAcionamentoDescicaoLista(int acaoId, DateTime dataIni, DateTime dataFim)
		{
			using (var conn = SqlConnection)
			{
				const string sql = @"SELECT DISTINCT(DESCRICAO),(COUNT(USUARIO_INCLUSAO)) AS QUANTIDADEUSUARIO, USUARIO_INCLUSAO as USUARIO
										FROM TBDEVEDOR_ACIONAMENTO A 
										INNER JOIN TBACAO_COBRANCA C ON A.ACAO_ID = C.ACAO_ID 
										WHERE A.ACAO_ID = @acao	 
										AND C.SE_ATIVO = 'S'
										AND A.DATA_ACIONAMENTO_FIM BETWEEN @dataUm and @dataDois
										GROUP BY DESCRICAO,A.USUARIO_INCLUSAO, usuario_inclusao, A.acao_id
										ORDER BY 1,2 DESC";

				return conn.Query<Descricao>(sql, new { acao = acaoId, dataUm = dataIni, dataDois = dataFim }).ToList();
			}
		}

		public DateTime ObterDataAcionamentoPorContratante(string contId)
		{
			using (var conn = SqlConnection)
			{
				const string sql = @"SELECT MAX(DATA_ACIONAMENTO_FIM) FROM TBDEVEDOR_ACIONAMENTO WHERE CONT_ID = @contratante";
				return conn.Query<DateTime>(sql, new { contratante = contId }).FirstOrDefault();

			}
		}

	}
}
