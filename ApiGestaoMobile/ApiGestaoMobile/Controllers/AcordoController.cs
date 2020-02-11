using Service;
using Service.ViewModel;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;

namespace ApiGestaoMobile.Controllers
{
	[EnableCors(origins: "*", headers: "*", methods: "*")]
	public class AcordoController : ApiController
    {
		private readonly AcordoService _acordoService;

		public AcordoController()
		{
			_acordoService = new AcordoService();
		}

		[ResponseType(typeof(AcordoResumoViewModel))]
		public IHttpActionResult GetResumoAcordo(int id)
		{
			if (id <= 0)
			{
				return NotFound();
			}

			if (!ModelState.IsValid)
			{
				return BadRequest(ModelState);
			}

			var acordoResumo = _acordoService.ObterResumoAcordo(id.ToString());

			return Ok(acordoResumo);
		}
	}
}
