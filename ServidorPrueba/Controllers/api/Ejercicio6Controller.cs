using ServidorPrueba.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Routing;

namespace ServidorPrueba.Controllers.api
{
    public class Ejercicio6Controller : ApiController
    {

        [Route("api/Partida/{idPartida}")]
        [HttpGet]
        public dynamic GetPartida(int idPartida)
        {
            return this.GetPartidas()[idPartida];
        }

        [Route("api/Partida/ganador/{idPartida}")]
        [HttpGet]
        public dynamic GetEvaluarJuego(int idPartida) 
        {
            var partida = this.GetPartidas()[idPartida];
            if (partida.TriquiVertical(1) || partida.TriquiHorizontal(1) || partida.TriquiDiag1(1) || partida.TriquiDiag2(1)) {
                return new { Resultado = 1 };
            } else if (partida.TriquiVertical(2) || partida.TriquiHorizontal(2) || partida.TriquiDiag1(2) || partida.TriquiDiag2(2)) {
                return new { Resultado = 2 };
            }
            else if (partida.TriquiLleno()) {
                return new { Resultado = 3 };
            }
                return new { Resultado = 0 };
        }

        [Route("api/Partida/Iniciar")]
        [HttpPost]
        public dynamic PostIniciarPartida(string jugador) 
        {
            var lista = this.GetPartidas();

            Triqui partida = null;
            int nJugador = 1;
            
            if (lista != null) 
            {
                //No hay un juego, inicia una partida nueva
                if (lista.Count == 0 || lista[lista.Count - 1].Jugador2 != null)
                {
                    partida = new Triqui() { Jugador1 = jugador, IdPartida = lista.Count, Turno = 1 };
                    //Id de la partida posicion en el arreglo
                    lista.Add(partida);
                }
                //La partida está esperando por jugador, los empareja
                else 
                {
                    partida = lista[lista.Count - 1];
                    partida.Jugador2 = jugador;
                    nJugador = 2;
                }
            }

            return new { IdPartida = partida.IdPartida, NumeroJugador = nJugador };
        }

        private List<Triqui> GetPartidas() 
        {
            if (HttpContext.Current.Application["lista"] == null)
                HttpContext.Current.Application["lista"] = new List<Triqui>();
            return  HttpContext.Current.Application["lista"] as List<Triqui>;
        }

        [Route("api/Partida/Jugar")]
        [HttpPost]
        public dynamic PostEnviarJugada(JugadaTriqui jugada)
        {
            var partidas = this.GetPartidas();

            var partida = partidas[jugada.IdPartida];

            if (partida.Turno != jugada.NumeroJugador)
                throw new Exception("Es el turno del jugador " + partida.Turno);

            partida.Jugar(jugada.Fila, jugada.Columna, jugada.NumeroJugador);

            //Actualiza el próximo turno para jugar
            partida.Turno = partida.Turno == 1 ? 2 : 1;

            return partida;
        }
    }
}
