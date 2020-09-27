using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace ServidorPrueba.Models
{
    /// <summary>
    /// Encapsula un juego de triqui
    /// </summary>
    public class Triqui
    {
        public string Jugador1
        {
            get;
            set;
        }

        public string Jugador2
        {
            get;
            set;
        }

        /// <summary>
        /// Indica el jugador q tiene el turno
        /// </summary>
        public int Turno
        {
            get;
            set;
        }

        /// <summary>
        /// Identificador de la partida
        /// </summary>
        public int IdPartida
        {
            get;
            set;
        }

        private int[,] matrizTablero = { { 0, 0, 0 }, { 0, 0, 0 }, { 0, 0, 0 } };

        public int[,] Tablero
        {
            get
            {
                return matrizTablero;
            }
        }

        public void Jugar(int fila, int col, int jugada)
        {
            if (matrizTablero[fila, col] == 0)
                matrizTablero[fila, col] = jugada;
            else
                throw new Exception("La posición ya está ocupada");
        }


        //devuelve el dato en una posicion dada
        public int GetPosicion(int fila, int col)
        {
            return matrizTablero[fila, col];
        }

        public void ReiniciarMatriz()
        {
            for (int fila = 0; fila < 3; fila++)
            {
                for (int col = 0; col < 3; col++)
                {
                    matrizTablero[fila, col] = 0;
                }
            }
        }

        public bool TriquiHorizontal(int turno) 
        {
            int cont;
            bool valor = false;
            for (int fila = 0; fila < 3; fila++)
            {
                cont = 0;
                for (int col = 0; col < 3; col++)
                {
                    if (matrizTablero[fila, col] == turno) 
                    {
                        cont++;
                    }
                    if (cont == 3)
                    {
                        valor = true;
                    }
                }
            }
            return valor;
        }

        public bool TriquiVertical(int turno) 
        {
            bool valor = false;
            int cont;
            for (int col = 0; col < 3; col++)
            {
                cont = 0;
                for (int fila = 0; fila < 3; fila++)
                {
                    if (matrizTablero[fila, col] == turno)
                    {
                        cont++;
                    }
                    if (cont == 3)
                    {
                        valor = true;
                    }
                }
            }
            return valor;
        }

        public bool TriquiDiag1(int turno) 
        {
            int cont = 0;
            for (int posicion = 0; posicion < 3; posicion++) 
            {
                
                if (matrizTablero[posicion, posicion] == turno) 
                {
                    cont++;
                }
                if (cont == 3) 
                {
                    return true;
                }

            }
            return false;
        }

        public bool TriquiDiag2(int turno) 
        {
            int cont = 0;
            int col = 2;
            for (int fila = 0; fila < 3; fila++)
            {
                if (matrizTablero[fila, col] == turno)
                {
                    cont++;
                }
                if (cont == 3)
                {
                    return true;
                }
                col--;
            }
            return false;
        }

        public bool TriquiLleno() 
        {
            bool valor = false;
            int cont = 0;
            for (int fila = 0; fila < 3; fila++) 
            {
                for (int col = 0; col < 3; col++) 
                {
                    if (matrizTablero[fila, col] != 0) 
                    {
                        cont++;
                    }
                }
            }
            if (cont == 9) 
            {
                valor = true;
            }
            return valor;
        }
    }
}