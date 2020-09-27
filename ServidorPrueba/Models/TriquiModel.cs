using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ServidorPrueba.Models
{
    /// <summary>
    /// NO se puede justificar no existe
    /// </summary>
    public class TriquiModel
    {

        public static void Jugar(int fila, int col, int jugador)
        {
            if (Triqui.GetMatrizTablero(fila, col) == 0 ) 
            {
                Triqui.SetMatrizTablero(fila, col, jugador);
            }
        }

        public static int[,] DevolverTablero() 
        {
            int[,] matriz = new int[3, 3];
            for (int fila=0;fila<3;fila++)
            {
                for (int col=0;col<3;col++)
                {
                    matriz[fila, col] = Triqui.GetMatrizTablero(fila, col);
                }
            }
            return matriz;
        }

        public static void ReiniciarJuego() 
        {
            Triqui.ReiniciarMatriz();
        }
    }
}