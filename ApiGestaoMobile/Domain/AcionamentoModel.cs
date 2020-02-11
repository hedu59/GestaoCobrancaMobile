using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
	public class AcionamentoModel
	{
		public int QuantidadeTotal { get; set; }
		public string Descricao { get; set; }
		public List<Descricao> DescricaoGeral { get; set; }
	}

	public class Descricao
	{	
		public string Usuario { get; set; }
		public int QuantidadeUsuario { get; set; }
	}

}
