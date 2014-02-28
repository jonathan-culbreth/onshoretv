using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MvcApplication2.Models;

namespace MvcApplication2.Controllers
{
    public class Employees : ApiController
    {
        static readonly IEmployeeRepository repository = new EmployeeRepository();
        // GET api/employees
        public IEnumerable<Employee> Get()
        {
            return repository.GetAll();
        }

        // GET api/employees/5
        public Employee GetEmployee(int id)
        {
            Employee item = repository.Get(id);
            if (item == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return item;
        }
        // POST api/employees
        public void Post([FromBody]string value)
        {
        }

        // PUT api/employees/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/employees/5
        public void Delete(int id)
        {
        }
    }
}
