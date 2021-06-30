using MimeKit;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using MailKit.Net.Smtp;
using Nancy.Json;
using Org.BouncyCastle.Asn1.Ocsp;
using System;
using System.Collections.Generic;

using System.Threading.Tasks;
using System.Net;
using System.Text;

namespace K_Api202001.Tools
{
    public class AlertNotifiction
   
    {

        public static void Notifiction_push(string ServerKey, string SenderId, List <string> connectionFierbaseId, string Titel, string Body)
        {
            //start 
           foreach (var item in connectionFierbaseId)
           {
                try
                {
                    WebRequest tRequest;
                    tRequest = WebRequest.Create("https://fcm.googleapis.com/fcm/send");

                    tRequest.Method = "post";
                    tRequest.ContentType = "application/json";
                    tRequest.Headers.Add(string.Format("Authorization: key={0}", ServerKey));
                    tRequest.Headers.Add(string.Format("Sender: id={0}", SenderId));


                    //  FirebaseMessaging.DefaultInstance.SendAsync(message);

                    var data = new
                    {
                        notification = new
                        {

                            title = Titel,
                            body = Body,

                            click_action = "FLUTTER_NOTIFICATION_CLICK"
                        }
                          ,
                        to = item
                        //to = item.connectionFierbaseId
                    };

                    var serializer = new JavaScriptSerializer();
                    var json = serializer.Serialize(data);
                    //logger.Info("json: " + json);
                    Byte[] byteArray = Encoding.UTF8.GetBytes(json);
                    tRequest.ContentLength = byteArray.Length;

                    Stream dataStream = tRequest.GetRequestStream();
                    dataStream.Write(byteArray, 0, byteArray.Length);
                    dataStream.Close();

                    WebResponse tResponse = tRequest.GetResponse();
                    dataStream = tResponse.GetResponseStream();
                    StreamReader tReader = new StreamReader(dataStream);
                    String sResponseFromServer = tReader.ReadToEnd();

                    tReader.Close();
                    dataStream.Close();
                    tResponse.Close();
                }
                catch (Exception e) { }
           }
            //end
        }

        [Obsolete]
        public static void SendEmail(string to, string sabject, SmtpSettings SmtpSettings, string Body)
        {
            try
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
            catch { }
           

           
        }

        public static string  ReadeFile(string FilePath)
        {
           
            string FileRead = "";


            try
            {
                using (StreamReader SourceReader = System.IO.File.OpenText(FilePath))
                {
                    FileRead = SourceReader.ReadToEnd();
                }
            }
            catch (Exception e) { }



            return  FileRead;
        }
    }
}