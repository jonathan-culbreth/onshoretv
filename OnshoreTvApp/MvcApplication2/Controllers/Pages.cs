using MvcApplication2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MvcApplication2.Controllers
{
    public class Pages : ApiController
    {
        // GET api/<controller>
        private OnshoreEntities3 db = new OnshoreEntities3();
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public bool Get(int id)
        {
            Page page = db.Pages.Find(id);
            if (page.Viewed == 1)
            {
                checkAll();
                return true;
            }
            else
            {
                page.Viewed = 0;
                db.SaveChanges();
            }
            return false;
        }
        public void checkAll()
        {
            //Pages[] pages = db.Pages.Find(1);

        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}