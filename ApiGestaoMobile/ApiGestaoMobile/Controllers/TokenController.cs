using ApiGestaoMobile.Models;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;


namespace ApiGestaoMobile.Controllers
{
	[EnableCors(origins: "*", headers: "*", methods: "*")]
	public class TokenController : ApiController
    {

		[System.Web.Http.AllowAnonymous]
		[System.Web.Http.HttpPost]
		public IHttpActionResult RequestToken([FromBody] Operador request)
		{
			if (request.Nome == "Edu" && request.Senha == "123")
			{

				return Json("4dahKJAdyuhjw717360*&@&@¨#hsjah73029023848jsaDH7874M4M392324,jhsHDHWG72HHSGAggdgsjyy3jakk39*&@@()__((@*#&@");

			}
			else
			{
				//Response.StatusCode = (int)HttpStatusCode.InternalServerError;
				//return Json(new { IsCreated = false, ErrorMessage = "Usuario Deslogado!" });

				return ResponseMessage(Request.CreateErrorResponse(HttpStatusCode.Unauthorized, "Credenciais Inválidas!"));

			}
		
		}

	}
}
