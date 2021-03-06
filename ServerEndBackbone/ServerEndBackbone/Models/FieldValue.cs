﻿using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServerEndBackbone.Models
{
    public class FieldValue
    {
        [BsonId]
        public string Id { get; set; }
        public string FieldId { get; set; }
        public string Value { get; set; }
    }
}