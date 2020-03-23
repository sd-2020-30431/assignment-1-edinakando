using Microsoft.AspNetCore.Mvc;
using WastelessAPI.Application.Logic;
using WastelessAPI.DataAccess.Models;

namespace WastelessAPI.Controllers
{
    [Route("api/[controller]")]
    public class AuthenticationController : Controller
    {
        private UserLogic _userLogic;
        public AuthenticationController(UserLogic userLogic)
        {
            _userLogic = userLogic;
        }

        [HttpPost]
        [Route("Register")]
        public IActionResult Register([FromBody]User user)
        {
            User newUser = _userLogic.InsertNewUser(user);
            if (newUser == null)
            {
                return BadRequest("please");
            }
            //login if success
            else return new OkObjectResult("it works");
        }
    }
}
