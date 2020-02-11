using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.ViewModel
{
	public class AcordoResumoViewModel
	{


		public string Empresa { get; set; }
		public decimal? ValorHoje { get; set; }
		public decimal? ValorMes { get; set; }
		public int? QuantidadeHoje { get; set; }
		public int? QuantidadeMes { get; set; }


	}
}
