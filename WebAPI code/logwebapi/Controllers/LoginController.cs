using logwebapi.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace logwebapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
  
    public class LoginController : ControllerBase
    {
        private readonly LoginContext _LoginContext;
      

        public LoginController(LoginContext LoginContext)
        {
            _LoginContext = LoginContext;
        }
    
        // GET: api/<LoginController>
        [HttpGet]
        public IEnumerable<Login> Get()
        {
            return _LoginContext.Logs;

        }

        // GET api/<LoginController>/5
        [HttpGet("{id}")]
        public Login Get(int id)
        {
            return _LoginContext.Logs.SingleOrDefault(x => x.id == id);
        }

        // POST api/<LoginController>
        [HttpPost ]
       
       public void Post([FromBody] Login login)
        {
             

        }

        // PUT api/<LoginController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<LoginController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
