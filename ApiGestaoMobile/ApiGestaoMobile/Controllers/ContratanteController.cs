using Domain;
using Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;

namespace ApiGestaoMobile.Controllers
{
	[EnableCors(origins: "*", headers: "*", methods: "*")]
	public class ContratanteController : ApiController
    {
		private readonly ContratanteService _contService;

		public ContratanteController()
		{
			_contService = new ContratanteService();
		}

		[ResponseType(typeof(ContratanteModel))]
		public IHttpActionResult GetContratantes()
		{

			var contratante = _contService.ObterContratantes().OrderBy(x => x.Fantasia);

			return Ok(contratante);
		}
	}
}
