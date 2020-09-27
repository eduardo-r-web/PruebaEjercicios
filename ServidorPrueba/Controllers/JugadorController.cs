using ServidorPrueba.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace ServidorPrueba.Controllers
{
    public class JugadorController : ApiController
    {
        [HttpGet]
        public  IEnumerable<object> Values() 
        {
            if (JugadorModel.GetDatosJuego()!=null) 
            {
                return JugadorModel.GetDatosJuego();
            }
            else
            return new string[] { "esperando rival" };
        }

        public dynamic Post(Jugador jugador) 
        {
            var jugador1 = (Jugador) HttpContext.Current.Application["jugador1"];
            
            if (jugador1 == null)
            {
                JugadorModel.ReiniciarDatosJuego();
                HttpContext.Current.Application["jugador1"] = jugador;
                return new { Estado = "esperando"};
            }
            else
            {
                HttpContext.Current.Application["jugador1"] = null;
                JugadorModel jm = new JugadorModel();
                JugadorModel.SetDatosJuego(jugador1.Nombre);
                JugadorModel.SetDatosJuego(jugador.Nombre);
                int resultado = jm.CompararEstrategia(jugador1.Estrategia, jugador.Estrategia);
                if (resultado == 1)
                {
                    JugadorModel.SetDatosJuego("El ganador es el jugador 1");
                    return new { Ganador = "Jugador 1" };
                }
                else if (resultado == 2)
                {
                    JugadorModel.SetDatosJuego("El ganador es el jugador 2");
                    return new { Ganador = "Jugador 2" };
                }
                else 
                {
                    JugadorModel.SetDatosJuego("Hay empate");
                    return new { Resultado = "Empate" };
                }
            }
        }
    }
}
