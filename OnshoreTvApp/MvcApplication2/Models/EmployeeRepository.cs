using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MvcApplication2.Models
{
   
    public class EmployeeRepository : IEmployeeRepository
    {
        private List<Employee> Employees = new List<Employee>();
        private int _nextId = 1;

        public EmployeeRepository()
        {

        }

        public IEnumerable<Employee> GetAll()
        {
            return Employees;
        }

        public Employee Get(int id)
        {
            return Employees.Find(p => p.Id == id);
        }

        public Employee Add(Employee item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            item.Id = _nextId++;
            Employees.Add(item);
            return item;
        }

        public void Remove(int id)
        {
            Employees.RemoveAll(p => p.Id == id);
        }

        public bool Update(Employee item)
        {
            if (item == null)
            {
                throw new ArgumentNullException("item");
            }
            int index = Employees.FindIndex(p => p.Id == item.Id);
            if (index == -1)
            {
                return false;
            }
            Employees.RemoveAt(index);
            Employees.Add(item);
            return true;
        }
    }
}