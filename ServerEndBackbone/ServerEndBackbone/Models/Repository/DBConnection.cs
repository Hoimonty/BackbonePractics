using MongoDB.Driver;
using ServerEndBackbone.Properties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServerEndBackbone.Models.Repository
{
    public class DBConnection
    {
        public MongoDatabase MogoDatabase;
        public MongoCollection PracticsCollection;
        public bool ServerIsDown = false;
        public DBConnection()
        {
            var mongoClient = new MongoClient(Settings.Default.PracticsConnectionString);
            var server = mongoClient.GetServer();
            MogoDatabase = server.GetDatabase(Settings.Default.DB);
            PracticsCollection = MogoDatabase.GetCollection("Practics");
            try
            {
                MogoDatabase.Server.Ping();
            }
            catch (Exception ex)
            {
                
                ServerIsDown = true;
            }
        }
    }
}