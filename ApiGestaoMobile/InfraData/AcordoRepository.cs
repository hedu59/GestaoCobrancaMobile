using Dapper;
using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InfraData
{
	public class AcordoRepository: Conexao
	{
		public List<AcordoModel> ObterResumoAcordo(string contId)
		{
			using (var conn = SqlConnection)
			{
				const string sql = @"SELECT  SUBSTRING(FANTASIA,1,25) as FANTASIA,T.DEVEDOR_ID, A.VALOR_ACORDO, A.DATA_INCLUSAO FROM TBTITULO T 
									INNER JOIN TBACORDO A ON T.CONT_ID = A.CONT_ID AND T.DEVEDOR_ID = A.DEVEDOR_ID
									INNER JOIN TBCONTRATANTE C ON C.CONTRATANTE_ID = T.CONT_ID
									WHERE TIPO_TITULO_ID = 0
									AND T.CONT_ID = @contratante
									AND T.VALOR > 0
									AND A.CANCEL <> 0
									AND A.PAGO <> 0
									AND A.DATA_INCLUSAO >= GETDATE() - 200
									GROUP BY FANTASIA,T.DEVEDOR_ID, A.VALOR_ACORDO, A.DATA_INCLUSAO";

				return conn.Query<AcordoModel>(sql, new { contratante = contId }).ToList();
			}
		}
	}
}
