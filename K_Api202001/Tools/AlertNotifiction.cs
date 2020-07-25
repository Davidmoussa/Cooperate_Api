using MimeKit;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using MailKit.Net.Smtp;


using System.Threading.Tasks;

namespace K_Api202001.Tools
{
    public class AlertNotifiction
   
    {
        //public static List<ListNotficition> tList { get; set; }

        //public static void push(string ServerKey, string SenderId, Contextdb1 db, Notification notification)
        //{
        //    //start 
        //    foreach (var item in db.FireBaseConnectionId.Where(i => i.UserId == notification.UserId).Select(i => new { i.connectionFierbaseId }).ToList())
        //    {

        //        WebRequest tRequest;
        //        tRequest = WebRequest.Create("https://fcm.googleapis.com/fcm/send");

        //        tRequest.Method = "post";
        //        tRequest.ContentType = "application/json";
        //        tRequest.Headers.Add(string.Format("Authorization: key={0}", ServerKey));
        //        tRequest.Headers.Add(string.Format("Sender: id={0}", SenderId));


        //        //  FirebaseMessaging.DefaultInstance.SendAsync(message);

        //        var data = new
        //        {
        //            notification = new
        //            {

        //                title = notification.Titel,
        //                body = notification.text,

        //                click_action = "FLUTTER_NOTIFICATION_CLICK"
        //            }
        //              ,
        //            // to = "/topics/marketing"
        //            to = item.connectionFierbaseId
        //        };

        //        var serializer = new JavaScriptSerializer();
        //        var json = serializer.Serialize(data);
        //        //logger.Info("json: " + json);
        //        Byte[] byteArray = Encoding.UTF8.GetBytes(json);
        //        tRequest.ContentLength = byteArray.Length;

        //        Stream dataStream = tRequest.GetRequestStream();
        //        dataStream.Write(byteArray, 0, byteArray.Length);
        //        dataStream.Close();

        //        WebResponse tResponse = tRequest.GetResponse();
        //        dataStream = tResponse.GetResponseStream();
        //        StreamReader tReader = new StreamReader(dataStream);
        //        String sResponseFromServer = tReader.ReadToEnd();

        //        tReader.Close();
        //        dataStream.Close();
        //        tResponse.Close();
        //    }
        //    //end
        //}

        [Obsolete]
        public static void SendEmail(string to, string sabject, SmtpSettings SmtpSettings, string Body)
        {
            using (var emailClient = new SmtpClient())
            {


                var message = new MimeMessage();
                message.From.Add(new MailboxAddress(SmtpSettings.FromAddress));
                message.To.Add(new MailboxAddress(to));

                


                message.Subject = sabject;
                var builder = new BodyBuilder();// { TextBody = message };
                //using (StreamReader SourceReader = System.IO.File.OpenText(FilePath))
                //{
                //    builder.HtmlBody = SourceReader.ReadToEnd();
                //}
                builder.HtmlBody = Body;
                message.Body = builder.ToMessageBody();



                //We will say we are sending HTML. But there are options for plaintext etc. 



                //The last parameter here is to use SSL (Which you should!)
                emailClient.Connect(SmtpSettings.Server, int.Parse(SmtpSettings.Port), false);

                //Remove any OAuth functionality as we won't be using it. 


                emailClient.Authenticate(SmtpSettings.FromAddress, SmtpSettings.Password);

                emailClient.Send(message);

                emailClient.Disconnect(true);
            }
        }
    }
}