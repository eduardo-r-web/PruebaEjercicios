using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServidorPrueba.Models
{
    public class JugadaTriqui
    {

        public int Fila { get; set; }

        public int Columna { get; set; }

        /// <summary>
        /// Partida que se va a modificar
        /// </summary>
        public int IdPartida { get; set; }

        /// <summary>
        /// Numero de jugador que realiza la jugada
        /// </summary>
        public int NumeroJugador 
        {
            get;
            set;
        }

    }
}