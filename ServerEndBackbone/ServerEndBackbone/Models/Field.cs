using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServerEndBackbone.Models
{
    public class Field
    {
        [BsonId]
        public string Id { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }
    }
}