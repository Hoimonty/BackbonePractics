using MongoDB.Driver.Builders;
using ServerEndBackbone.Models;
using ServerEndBackbone.Models.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ServerEndBackbone.Controllers
{
    public class HomeController : Controller
    {
        DBConnection context = new DBConnection();
        List<Field> fieldCollectionList = new List<Field>();
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetFieldCollections()
        {
           
            fieldCollectionList.Add(new Field { Id = 1, Type = "SingleLineText" });
            fieldCollectionList.Add(new Field { Id = 1, Type = "Checkbox" });
            fieldCollectionList.Add(new Field { Id = 1, Type = "Number" });
            GetAllEmployees();
            return Json(fieldCollectionList);
        }

        public IEnumerable<Field> GetAllEmployees()
        {
            if (context.ServerIsDown) return null;
            List<Field> newfieldCollectionList = new List<Field>();
            if (Convert.ToInt32(context.PracticsCollection.Count()) > 0)
            {
               

                var fields = context.PracticsCollection.FindAs(typeof(Field), Query.NE("Type", "null"));
                if (fields.Count() > 0)
                {
                    foreach (Field field in fields)
                    {
                        newfieldCollectionList.Add(field);
                    }
                }
            }
            else
            {
                #region add test data if DB is empty

               context.PracticsCollection.RemoveAll();
               foreach (var employee in fieldCollectionList)
                {
                    newfieldCollectionList.Add(employee);

                    Add(employee); // add data to mongo db also
                }

                #endregion
            }

            var result = newfieldCollectionList.AsQueryable();
            return result;
        }

        public Field Add(Field employee)
        {

            context.PracticsCollection.Save(employee);
            return employee;
        }


    }
}
