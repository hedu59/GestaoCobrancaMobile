using Domain;
using InfraData;
using Service.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service
{
	public class AcordoService
	{
		private readonly AcordoRepository _acordoRepository;

		public AcordoService()
		{
			_acordoRepository = new AcordoRepository();

		}


		public AcordoResumoViewModel ObterResumoAcordo(string contId)
		{
			var acordoLista = _acordoRepository.ObterResumoAcordo(contId);
			var Hoje = DateTime.Today;
			var MesAtual = DateTime.Now.Month;

			var acordo = new AcordoResumoViewModel();

			if (acordoLista.Count() > 0)
			{
				acordo.Empresa = acordoLista.FirstOrDefault().FANTASIA;
				acordo.ValorHoje = acordoLista.Where(x => x.DATA_INCLUSAO == Hoje).Sum(u => u.VALOR_ACORDO);
				acordo.ValorMes = acordoLista.Where(x => x.DATA_INCLUSAO.Month == MesAtual).Sum(u => u.VALOR_ACORDO);
				acordo.QuantidadeHoje = acordoLista.Where(x => x.DATA_INCLUSAO == Hoje).Count();
				acordo.QuantidadeMes = acordoLista.Where(x => x.DATA_INCLUSAO.Month == MesAtual).Count();

			}
			else
			{
				acordo.QuantidadeHoje = 0;
				acordo.QuantidadeMes = 0;
				acordo.ValorHoje = 0;
				acordo.ValorMes = 0;
			}
			

			if (acordo.ValorHoje == 0 )
			{
				acordo.ValorHoje = acordoLista.Where(x => x.DATA_INCLUSAO == acordoLista.LastOrDefault().DATA_INCLUSAO).Sum(u => u.VALOR_ACORDO);
				acordo.QuantidadeHoje = acordoLista.Where(x => x.DATA_INCLUSAO == acordoLista.LastOrDefault().DATA_INCLUSAO).Count();
			}

			if(acordo.ValorMes == 0)
			{
				acordo.ValorMes = acordoLista.Where(x => x.DATA_INCLUSAO.Month == acordoLista.LastOrDefault().DATA_INCLUSAO.Month).Sum(u => u.VALOR_ACORDO);
				acordo.QuantidadeMes = acordoLista.Where(x => x.DATA_INCLUSAO.Month == acordoLista.LastOrDefault().DATA_INCLUSAO.Month).Count();
			}

			
			
	
			return acordo;
		}



	}
}
