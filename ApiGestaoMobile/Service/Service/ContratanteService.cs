using Domain;
using InfraData;
using System.Collections.Generic;

namespace Service
{
	public class ContratanteService
	{
		private readonly ContratanteRepository _contRepository;

		public ContratanteService()
		{
			_contRepository = new ContratanteRepository();

		}


		public List<ContratanteModel> ObterContratantes()
		{
			var contratante = _contRepository.ObterContratantes();

			return contratante;
		}
	}
}
