using Dapper;
using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InfraData
{
	public class ContratanteRepository: Conexao
	{
		public List<ContratanteModel> ObterContratantes()
		{
			using (var conn = SqlConnection)
			{
				const string sql = @"SELECT CONTRATANTE_ID AS CONTID, SUBSTRING(FANTASIA,1,25) AS FANTASIA FROM TBCONTRATANTE TC WHERE SE_ATIV = 'S'
									AND (SELECT COUNT(*) TBPARAMENTRO_ACORDO WHERE CONTRATANTE_ID = TC.CONTRATANTE_ID) > 0";

				return conn.Query<ContratanteModel>(sql).ToList();
			}
		}
	}
}
