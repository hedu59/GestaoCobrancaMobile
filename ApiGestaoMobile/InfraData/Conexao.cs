using System;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace InfraData
{
	public class Conexao: IDisposable
	{


		public IDbConnection SqlConnection
		{
			get { return new SqlConnection(ConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString); }
		}

		public SqlConnection Connection()
		{
			return new SqlConnection(ConfigurationManager.ConnectionStrings["ConnectionString"].ConnectionString);
		}

		public void Dispose()
		{
			GC.SuppressFinalize(this);
		}

	}
}
