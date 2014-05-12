using MvcApplication2.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MvcApplication2.Controllers
{
    public class ClientPagesController : ApiController
    {
        private OnshoreEntities3 db = new OnshoreEntities3();
        // GET api/clientpages
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/clientpages/5
        public string[] Get(string id)
        {
            bool found = false;
            int i = 1;
            int k = 0;
            string[] names = new string[30];
            names[k] = "none";
            while (found == false)
            {
                Employee employee = db.Employees.Find(i);
                if (employee == null)
                {
                    break;
                }
                if (employee.Client == id)
                {
                    names[k] = employee.Name;
                    k++;
                }
                i++;
            }
            return names;
        }

        // POST api/clientpages
        public void Post([FromBody]string value)
        {
        }

        // PUT api/clientpages/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/clientpages/5
        public void Delete(int id)
        {
        }
    }
}
