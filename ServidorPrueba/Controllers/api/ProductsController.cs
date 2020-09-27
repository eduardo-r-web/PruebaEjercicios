using PrimerCrud.Models;
using ServidorPrueba;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PrimerCrud.Controllers.api
{
    public class ProductsController : ApiController
    {
        public IHttpActionResult GetTodosLosProductos()
        {

            List<ProductsModel> productos = null;

            using (var db = new NorthwindEntities())
            {
                productos = db.Products.Select(p => new ProductsModel()
                {
                    ProductID = p.ProductID,
                    ProductName = p.ProductName,
                    SupplierID = p.SupplierID,
                    CategoryID = p.CategoryID,
                    QuantityPerUnit = p.QuantityPerUnit,
                    UnitPrice = p.UnitPrice,
                    UnitsInStock = p.UnitsInStock,
                    UnitsOnOrder = p.UnitsOnOrder,
                    ReorderLevel = p.ReorderLevel,
                    Discontinued = p.Discontinued
                }).ToList();
            }

            if (productos == null)
            {
                return NotFound();
            }

            return Ok(productos);
        }

        public IHttpActionResult GetPorIdProducto(int id)
        {

            List<ProductsModel> productos = null;

            using (var db = new NorthwindEntities())
            {
                productos = db.Products.Where(p => p.ProductID == id).Select(p => new ProductsModel()
                {
                    ProductID = p.ProductID,
                    ProductName = p.ProductName,
                    SupplierID = p.SupplierID,
                    CategoryID = p.CategoryID,
                    QuantityPerUnit = p.QuantityPerUnit,
                    UnitPrice = p.UnitPrice,
                    UnitsInStock = p.UnitsInStock,
                    UnitsOnOrder = p.UnitsOnOrder,
                    ReorderLevel = p.ReorderLevel,
                    Discontinued = p.Discontinued
                }).ToList();
            }

            if (productos == null)
            {
                return NotFound();
            }

            return Ok(productos);
        }

        public IHttpActionResult PostNuevoProducto(ProductsModel producto)
        {

            if (!ModelState.IsValid) // se asegura de que el objeto producto incluya toda la información necesaria
                return BadRequest("Operacion Invalida");

            using (var db = new NorthwindEntities())
            {
                db.Products.Add(new Products()
                {
                    ProductName = producto.ProductName,
                    SupplierID = producto.SupplierID,
                    CategoryID = producto.CategoryID,
                    QuantityPerUnit = producto.QuantityPerUnit,
                    UnitPrice = producto.UnitPrice,
                    UnitsInStock = producto.UnitsInStock,
                    UnitsOnOrder = producto.UnitsOnOrder,
                    ReorderLevel = producto.ReorderLevel,
                    Discontinued = producto.Discontinued
                });
                db.SaveChanges();
            }

            return Ok();
        }


        public IHttpActionResult PutModificarProducto(ProductsModel producto)
        {
            if (!ModelState.IsValid)
                return BadRequest("No es valido");


            using (var db = new NorthwindEntities())
            {
                var productoExiste = db.Products.Where(p => p.ProductID == producto.ProductID).FirstOrDefault();

                if (productoExiste != null)
                {
                    productoExiste.ProductName = producto.ProductName;
                    productoExiste.SupplierID = producto.SupplierID;
                    productoExiste.CategoryID = producto.CategoryID;
                    productoExiste.QuantityPerUnit = producto.QuantityPerUnit;
                    productoExiste.UnitPrice = producto.UnitPrice;
                    productoExiste.UnitsInStock = producto.UnitsInStock;
                    productoExiste.UnitsOnOrder = producto.UnitsOnOrder;
                    productoExiste.ReorderLevel = producto.ReorderLevel;
                    productoExiste.Discontinued = producto.Discontinued;
                    db.SaveChanges();
                }
                else
                {
                    return NotFound();
                }
            }
            return Ok();
        }

    }
}