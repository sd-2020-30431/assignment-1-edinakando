using Microsoft.AspNetCore.Mvc;
using WastelessAPI.Application.Logic;
using WastelessAPI.Application.Models.Groceries;

namespace WastelessAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GroceriesController : ControllerBase
    {
        private GroceriesLogic _groceriesLogic;

        public GroceriesController(GroceriesLogic groceriesLogic)
        {
            _groceriesLogic = groceriesLogic;
        }

        [HttpPost]
        [Route("Save")]
        public IActionResult Save([FromBody]Groceries groceries)
        {
            _groceriesLogic.Save(groceries);
            return Ok();
        }
    }
}