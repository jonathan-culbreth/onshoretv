using MvcApplication2.Models;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MvcApplication2.Controllers
{
    public class ValuesController : ApiController
    {
        // GET api/values
        private OnshoreEntities3 db = new OnshoreEntities3();

        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        public string Get(int id)
        { 
            bool found = false;
            int i = 1;
            DateTime today = DateTime.Now; ;
            while (found == false)
            {
                Employee employee = db.Employees.Find(i);
                if (employee == null)
                {
                    break;
                }
                DateTime DOB = Convert.ToDateTime(employee.Date_of_Birth_.ToString());
               
                if (DOB.ToString("MMM, d") == today.ToString("MMM, d"))
                {
                    return employee.Name + "  " + DOB.ToString("MMM, d");
                }
                i++;
            }
            return "No birthdays for " + today.ToString("MMM, d");
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}