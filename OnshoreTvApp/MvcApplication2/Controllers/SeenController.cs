using MvcApplication2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MvcApplication2.Controllers
{
    public class SeenController : ApiController
    {
        private OnshoreEntities3 db = new OnshoreEntities3();
        // GET api/seen
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/seen/5
        public int Get(int id)
        {
            Seen seen =  db.Seens.Find(1);
            if (seen.seen1 == 1)
            {
                seen.seen1 = 0;
                db.SaveChanges();
            }
            else
            {
                seen.seen1 = 1;
                db.SaveChanges();
            }
            return Convert.ToInt32(seen.seen1);
        }

        // POST api/seen
        public void Post([FromBody]string value)
        {
        }

        // PUT api/seen/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/seen/5
        public void Delete(int id)
        {
        }
    }
}
