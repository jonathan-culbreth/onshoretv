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
    public class PagesController : ApiController
    {
        // GET api/<controller>
        private OnshoreEntities3 db = new OnshoreEntities3();
        public IEnumerable<Page> GetPages()
        {
            return db.Pages.AsEnumerable();
        }


        // GET api/<controller>/5
        public int GetPage(int id)
        {
            bool open = false;
            int page;
            Random random = new Random();
            page = 0;
            int i = 1;
            bool allViewed = true;
            while (open == false)
            {

                int randomNumber = random.Next(1, 27);
                Page pages = db.Pages.Find(randomNumber);
                if (pages == null)
                {
                    break;
                }
                if (pages.Viewed == 0)
                {
                    page = pages.Id;
                    pages.Viewed = 1;
                    db.SaveChanges();
                    open = true;
                    allViewed = false;
                }
                if (i > 100000)
                {
                    break;
                }
                i++;
            }

            open = false;
            if (allViewed == true)
            {
                i = 1;
                while (open == false)
                {

                    Page pages = db.Pages.Find(i);
                    if (pages == null)
                    {
                        break;
                    }
                    pages.Viewed = 0;
                    i++;
                }
                db.SaveChanges();
                page = 0;
            }
            return page;
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