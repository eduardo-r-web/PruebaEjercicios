using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServidorPrueba.Models
{


    public class JugadorModel
    {
        private static List<string> datosJuego = new List<string>();

        enum Estrategia 
        {
            Roca = 1,
            Lagarto = 2,
            Papel = 3,
            Spock = 4,
            Tijeras = 5
        }

        public static List<string> GetDatosJuego() => datosJuego;
       
        public static void SetDatosJuego(string valor)
        {
            datosJuego.Add(valor);
        }

        public static void ReiniciarDatosJuego()
        {
            datosJuego.Clear();
        }

        public int CompararEstrategia(int estrategia1, int estrategia2)
        {
            int gana;

            if (estrategia1 == estrategia2) {
                gana = 0;
            }else if (estrategia1 == (int)Estrategia.Roca && (estrategia2 == (int)Estrategia.Lagarto || estrategia2 == (int)Estrategia.Tijeras))
            {
                gana = 1;
            }
            else if (estrategia1 == (int)Estrategia.Lagarto && (estrategia2 == (int)Estrategia.Spock || estrategia2 == (int)Estrategia.Papel))
            {
                gana = 1;
            }
            else if (estrategia1 == (int)Estrategia.Papel && (estrategia2 == (int)Estrategia.Roca || estrategia2 == (int)Estrategia.Spock))
            {
                gana = 1;
            }
            else if (estrategia1 == (int)Estrategia.Spock && (estrategia2 == (int)Estrategia.Tijeras || estrategia2 == (int)Estrategia.Roca))
            {
                gana = 1;
            }
            else if (estrategia1 == (int)Estrategia.Tijeras && (estrategia2 == (int)Estrategia.Papel || estrategia2 == (int)Estrategia.Lagarto))
            {
                gana = 1;
            }
            else
            {
                gana = 2;
            }

            return gana;
        }
    }
}