using PruebaEjercicios.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PruebaEjercicios.Controllers
{
    public class Ejercicio4Controller : ApiController
    {

       public void jugar()
        {

        }

        public string Get() {
            return "value";
        }

        public void Post(Jugador obJ) { 
            
        }
        
    }
}
