using Domain;
using Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;

namespace ApiGestaoMobile.Controllers
{
	[EnableCors(origins: "*", headers: "*", methods: "*")]
	
	[RoutePrefix("api/Acionamento")]
	public class AcionamentoController : ApiController
    {
		private readonly AcionamentoService _acaoService;

		public AcionamentoController()
		{
			_acaoService = new AcionamentoService();
		}

		[HttpGet]
		[ResponseType(typeof(AcionamentoResumo))]
	
		public IHttpActionResult GetAcionamentoResumo(int id)  //Passando o Contratate
		{
			var data = DateTime.Today;
			var dataAnterior = data.AddDays(-200);
			var acionamentos = _acaoService.ObterAcionamentoResumo(id.ToString(), dataAnterior, data);

			if (acionamentos.Count() > 0)
			{
				return Ok(acionamentos);
			}
			else
			{
				return Json("Nenhum valor encontrado!");
			}		

		}

		[HttpGet]
		[Route("resumo/{id}/")]
		[ResponseType(typeof(List<AcionamentoResumo>))]
		
		public IHttpActionResult GetAcionamentoDetalhesComData(int id, DateTime dataIni, DateTime dataFim)  //Passando o AcaoId
		{
			var acionamentos = _acaoService.ObterAcionamentoResumo(id.ToString(), dataIni, dataFim);
			if (acionamentos.Count > 0)
			{				
				return Json(acionamentos);
			}
			else
			{
				return Json("Não encontrado!");
			}
			
		}

		[HttpGet]
		[Route("detalhes/{id}/")]
		[ResponseType(typeof(AcionamentoModel))]
		
		public IHttpActionResult GetAcionamentoDetalhes(int id, string dataIni, string dataFim)  //Passando o AcaoId
		{
			if (dataIni == dataFim || dataIni == null)
			{
				var dataAnterior = DateTime.Today.AddDays(-200);
				dataIni = dataAnterior.ToString();
			}

			var acionamentoDetalhes = _acaoService.ObterAcionamentoDetalhes2(id, dataIni, dataFim);

			if (acionamentoDetalhes != null) 
			{
				return Json(acionamentoDetalhes);
			}
			else
			{
				return Json("Não encontrado!");
			}			
		}

	}
}
