using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using MvcApplication2.Models;
namespace MvcApplication2.Controllers
{
    public class HireDatesController : ApiController
    {
        private OnshoreEntities3 db = new OnshoreEntities3();

        // GET api/hiredates
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/hiredates/5
        public string[] Get(int id)
        {
            bool found = false;
            int i = 1;
            DateTime today = DateTime.Now; ;
            List<string> names = new List<string>();
            int k = 0;
            while (found == false)
            {
                Employee employee = db.Employees.Find(i);
                if (employee == null)
                {
                    break;
                }
                DateTime DOB = Convert.ToDateTime(employee.Hire_Date.ToString());

                if ((DOB.ToString("MMM") == today.ToString("MMM")) && (today.ToString("yyyy")!=(DOB.ToString("yyyy"))))
                {
                    int years = Convert.ToInt32(today.ToString("yyyy")) - Convert.ToInt32(DOB.ToString("yyyy"));
                    if (years == 1)
                    {
                        names.Add(employee.Name + "  " + DOB.ToString("MMM, d") + "   " + years + "year");
                    }
                    else
                    {
                        names.Add(employee.Name + "  " + DOB.ToString("MMM, d") + "   " + years + "years");
                    }
                        k++;
                }
                i++;
            }
            return names.ToArray();
        }

        // POST api/hiredates
        public void Post([FromBody]string value)
        {
        }

        // PUT api/hiredates/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/hiredates/5
        public void Delete(int id)
        {
        }
    }
}
