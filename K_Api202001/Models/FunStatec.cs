//using LazZiya.ImageResize;

using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace K_Api202001.Models
{
    public class funStatac
    {

        /// <summary>
        /// this Function Return Distance Between two point (let , lng) in google Maps
        /// retrurn  Distance KM 
        /// </summary>
        /// <param name="l1"></param>
        /// <param name="l2"></param>
        /// <returns></returns>
        //public static double distance(Loction l1, Loction l2)
        //{

        //    const double RADIO = 6378137;

        //    double Radians(double x)
        //    {
        //        return x * Math.PI / 180;
        //    }


        //    double dlon = Radians(l2.lng - l1.lng);
        //    double dlat = Radians(l2.lat - l1.lat);

        //    double a = (Math.Sin(dlat / 2) * Math.Sin(dlat / 2))
        //        + Math.Cos(Radians(l1.lat)) * Math.Cos(Radians(l2.lat)) *
        //        (Math.Sin(dlon / 2) * Math.Sin(dlon / 2));
        //    double angle = 2 * Math.Atan2(Math.Sqrt(a), Math.Sqrt(1 - a));
        //    return (angle * RADIO) / 1000.0;//* 0.62137;//distance in miles
        //}
        public static void Image_resize(MemoryStream input_Image_Path, string output_Image_Path, int new_Width)

        {

            //---------------< Image_resize() >---------------

            //*Resizes an Image in Asp.Net MVC Core 2

            //*Using Nuget CoreCompat.System.Drawing

            //using System.IO

            //using System.Drawing;             //CoreCompat

            //using System.Drawing.Drawing2D;   //CoreCompat

            //using System.Drawing.Imaging;     //CoreCompat



            const long quality = 50L;

            Bitmap source_Bitmap = new Bitmap(input_Image_Path);



            double dblWidth_origial = source_Bitmap.Width;

            double dblHeigth_origial = source_Bitmap.Height;

            double relation_heigth_width = dblHeigth_origial / dblWidth_origial;

            int new_Height = (int)(new_Width * relation_heigth_width);



            //< create Empty Drawarea >

            var new_DrawArea = new Bitmap(new_Width, new_Height);

            //</ create Empty Drawarea >



            using (var graphic_of_DrawArea = Graphics.FromImage(new_DrawArea))

            {

                //< setup >

                graphic_of_DrawArea.CompositingQuality = CompositingQuality.HighSpeed;

                graphic_of_DrawArea.InterpolationMode = InterpolationMode.HighQualityBicubic;

                graphic_of_DrawArea.CompositingMode = CompositingMode.SourceCopy;

                //</ setup >



                //< draw into placeholder >

                //*imports the image into the drawarea

                graphic_of_DrawArea.DrawImage(source_Bitmap, 0, 0, new_Width, new_Height);

                //</ draw into placeholder >



                //--< Output as .Jpg >--

                using (var output = System.IO.File.Open(output_Image_Path, FileMode.Create))

                {

                    //< setup jpg >

                    var qualityParamId = Encoder.Quality;

                    var encoderParameters = new EncoderParameters(1);

                    encoderParameters.Param[0] = new EncoderParameter(qualityParamId, quality);

                    //</ setup jpg >



                    //< save Bitmap as Jpg >

                    var codec = ImageCodecInfo.GetImageDecoders().FirstOrDefault(c => c.FormatID == ImageFormat.Jpeg.Guid);

                    new_DrawArea.Save(output, codec, encoderParameters);

                    //resized_Bitmap.Dispose();

                    output.Close();

                    //</ save Bitmap as Jpg >

                }

                //--</ Output as .Jpg >--

                graphic_of_DrawArea.Dispose();

            }

            source_Bitmap.Dispose();

            //---------------</ Image_resize() >---------------

        }





    }
}
