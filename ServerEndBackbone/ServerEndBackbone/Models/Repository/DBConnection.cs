using MongoDB.Bson;
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
        #region Member
        public MongoDatabase MogoDatabase;
        public MongoCollection FieldCollection;
        public MongoCollection ConfigureFormCollection;
        public MongoCollection FormContentCollection;
        public bool ServerIsDown = false;
        #endregion

        #region Method
        public DBConnection()
        {

            var mongoClient = new MongoClient(Settings.Default.PracticsConnectionString);
            var server = mongoClient.GetServer();
            MogoDatabase = server.GetDatabase(Settings.Default.DB);
            FieldCollection = MogoDatabase.GetCollection("Fields");
            ConfigureFormCollection = MogoDatabase.GetCollection("ConfigureFormFields");
            FormContentCollection = MogoDatabase.GetCollection("FormContents");
            try
            {
                MogoDatabase.Server.Ping();
            }
            catch (Exception ex)
            {
                ServerIsDown = true;
            }
        }
        #endregion
    }
}