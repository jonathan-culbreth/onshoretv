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
    public class EmployeesController : ApiController
    {
        private OnshoreEntities3 db = new OnshoreEntities3();

        // GET api/Default3
        public IEnumerable<Employee> GetEmployees()
        {
            return db.Employees.AsEnumerable();
        }

        // GET api/Default3/5
        public string[] GetEmployee(int id)
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
                DateTime DOB = Convert.ToDateTime(employee.Date_of_Birth_.ToString());

                if (DOB.ToString("MMMM") == today.ToString("MMMM"))
                {
                    names.Add(employee.Name + "... " + DOB.ToString("MMMM d"));
                    k++;
                }
                i++;
            }
            return names.ToArray();
        }

        // PUT api/Default3/5
        public HttpResponseMessage PutEmployee(int id, Employee employee)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            if (id != employee.Id)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }

            db.Entry(employee).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        // POST api/Default3
        public HttpResponseMessage PostEmployee(Employee employee)
        {
            if (ModelState.IsValid)
            {
                db.Employees.Add(employee);
                db.SaveChanges();

                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, employee);
                response.Headers.Location = new Uri(Url.Link("DefaultApi", new { id = employee.Id }));
                return response;
            }
            else
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
        }

        // DELETE api/Default3/5
        public HttpResponseMessage DeleteEmployee(int id)
        {
            Employee employee = db.Employees.Find(id);
            if (employee == null)
            {
                return Request.CreateResponse(HttpStatusCode.NotFound);
            }

            db.Employees.Remove(employee);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
            }

            return Request.CreateResponse(HttpStatusCode.OK, employee);
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}