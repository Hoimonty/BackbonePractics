using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServerEndBackbone.Models
{
    public class FormContent
    {
        [BsonId]
        public string Id { get; set; }
        public string FormId { get; set; }
        public List<FieldValue> FieldValues { get; set; }
    }
}