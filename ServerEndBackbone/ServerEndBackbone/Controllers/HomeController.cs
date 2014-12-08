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
        #region Member
        DBConnection context = new DBConnection();
        List<Field> fieldCollectionList = new List<Field>();
        #endregion

        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetFieldCollections()
        {
           
            fieldCollectionList.Add(new Field { Id = "1", Type = "SingleLineText" });
            fieldCollectionList.Add(new Field { Id = "2", Type = "Checkbox" });
            fieldCollectionList.Add(new Field { Id = "3", Type = "Number" });
            var fields= GetAllFields();
            return Json(fields, JsonRequestBehavior.AllowGet);
        }

        public IEnumerable<Field> GetAllFields()
        {
            if (context.ServerIsDown) return null;
            List<Field> newfieldCollectionList = new List<Field>();
            if (Convert.ToInt32(context.FieldCollection.Count()) > 0)
            {
                var fields = context.FieldCollection.FindAs(typeof(Field), Query.NE("Type", "null"));
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
               context.FieldCollection.RemoveAll();
               foreach (var field in fieldCollectionList)
                {
                    newfieldCollectionList.Add(field);
                    Add(field); // add data to mongo db also
                }
                #endregion
            }

            var result = newfieldCollectionList.AsQueryable();
            return result;
        }

        public Field Add(Field field)
        {
            context.FieldCollection.Save(field);
            return field;
        }

        public JsonResult AddConfigureFormFields(List<Field> formFields)
        {
            try
            {
                if (formFields.Count > 0)
                {
                    foreach (var item in formFields)
                    {
                        context.ConfigureFormCollection.Save(item);
                    }
                    return Json("Save Successfull", JsonRequestBehavior.AllowGet);
                }
                else
                    return Json("List is blank", JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(ex.Message, JsonRequestBehavior.AllowGet);
            }
            
        }

        public JsonResult GetConfigureFields(string Id)
        {
            if (string.IsNullOrEmpty(Id))
            {
                return Json(new ArgumentNullException("id", "Field Id is empty!"), JsonRequestBehavior.AllowGet);
            }
            var field = (Field) context.ConfigureFormCollection.FindOneAs(typeof(Field), Query.EQ("_id", Id));
            return Json(field,JsonRequestBehavior.AllowGet);
        }

        public JsonResult SaveFormContents(FormContent formContents)
        {
            try
            {
                if (formContents!=null)
                {
                    context.FormContentCollection.Save(formContents);
                    return Json("Save Successfull", JsonRequestBehavior.AllowGet);
                }
                else
                    return Json("List is blank", JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(ex.Message, JsonRequestBehavior.AllowGet);
            }
        }
        public JsonResult GetFormContents(string Id)
        {
            if (string.IsNullOrEmpty(Id))
            {
                var formContents = context.FormContentCollection.FindAllAs(typeof(FormContent));
                return Json(formContents, JsonRequestBehavior.AllowGet);
            }
            var formContent = (FormContent)context.ConfigureFormCollection.FindOneAs(typeof(Field), Query.EQ("_id", Id));
            return Json(formContent, JsonRequestBehavior.AllowGet);
        }

        public JsonResult DeleteFormContentList(string Id)
        {
            try
            {
                context.FormContentCollection.Remove(Query.EQ("FormId", Id));
                return Json("Delete Successfull", JsonRequestBehavior.AllowGet);
            }
            catch (Exception)
            {
                return Json("Delete item failled", JsonRequestBehavior.AllowGet);
            }
           
        }

        public JsonResult UpdateFormContent(FormContent formContents)
        {
            context.FormContentCollection.Save(formContents);
            return Json("Update Successfull", JsonRequestBehavior.AllowGet);
        }
    }
}
