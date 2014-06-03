using munch_aware.Context;
using munch_aware.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Web.Script.Serialization;

namespace munch_aware.Controllers
{
    public class FoodController : ApiController
    {
        private DatabaseContext db = new DatabaseContext();
        
        // GET api/food
        public IEnumerable<string> Get()
        {
            string retVal = db.Food.ToString();
            Console.WriteLine(retVal);
            return new string[] { "v1", "v2" };
        }

        // GET api/food/5
        public string Get(int id)
        {
            Food retVal = db.Food.Find(id);
            string ret = retVal.Restriction;
            return ret; // "value";
        }

        // GET api/food/name
        public string Get(string name)
        {
            IQueryable<Food> foods = from food in db.Food
                     where food.Restriction == name
                     select food;
            Food restriction = foods.FirstOrDefault();
            StringBuilder builder = new StringBuilder();
            char[] delim = { ',' };
            foreach (String substitute in restriction.Substitutions.Split(delim))
            {
                int sub = Convert.ToInt32(substitute.Trim());
                foods = from food in db.Food 
                        where food.FoodId == sub
                        select food;
                builder.Append(foods.FirstOrDefault().Restriction).Append(" ");
            }
            return builder.ToString(); // "value";
        }

        // POST api/food
        public void Post([FromBody]string value)
        {
        }

        // PUT api/food/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/food/5
        public void Delete(int id)
        {
        }
    }
}
