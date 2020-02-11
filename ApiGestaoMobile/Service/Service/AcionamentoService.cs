using Domain;

using InfraData;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Service
{
	public class AcionamentoService
	{
		private readonly AcionamentoRepository _acionamentoRepository;

		public AcionamentoService()
		{
			_acionamentoRepository = new AcionamentoRepository();
		}


		public List<AcionamentoResumo> ObterAcionamentoResumo(string contId, DateTime dataIni,DateTime dataFim)
		{
			var acionamentoListaResumo = _acionamentoRepository.ObterResumoAcionamentoContagem(contId,dataIni,dataFim);
			return acionamentoListaResumo;		
		}


		public AcionamentoModel ObterAcionamentoDetalhes2(int acaoId, string dataIni, string dataFim)
		{
			var data1 = Convert.ToDateTime(dataIni);
			var data2 = Convert.ToDateTime(dataFim);

			var acionamentoLista = _acionamentoRepository.ObterAcionamentoDetalhes(acaoId, data1, data2);
			var acionamento = new AcionamentoModel();
		
			var desc = ObterListaAcionamentoDescricao(acaoId, data1, data2);

			acionamento.Descricao = acionamentoLista.FirstOrDefault().Descricao;
			acionamento.QuantidadeTotal = acionamentoLista.Sum(x => x.QuantidadeTotal);
			acionamento.DescricaoGeral = desc;
			return acionamento;
					
		}


		public List<Descricao> ObterListaAcionamentoDescricao(int acaoId, DateTime ini, DateTime fim)
		{			
			var descricaoLista = _acionamentoRepository.ObterAcionamentoDescicaoLista(acaoId, ini, fim);			
			var descricao = new List<Descricao>();
			
			foreach (var item in descricaoLista)
			{						
				descricao.Add(item);
			}

			return descricao;
		}

	}
}
