const express = require("express");
const routes = express.Router();

routes.get("/products", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    // Obtener el total de usuarios
    conn.query(
      "SELECT COUNT(*) AS total_productos FROM productos",
      (err, countResult) => {
        if (err) return res.send(err);

        // Obtener datos de productos
        conn.query(
          "SELECT id, nombre, descripcion, url_foto FROM productos",

          (err, rows) => {
            if (err) return res.send(err);

            // Array con detalles de usuarios
            const products = rows.map((product) => {
              return {
                id: product.id,
                nombre: product.nombre ,
                descripcion: product.descripcion , 
                detail: `/products/${product.id}`, // URL para obtener el detalle del product
              };
            });

            // Modificar el valor de "detail" para que sea una URL sin "/products"
            products.forEach((product) => {
                product.detail = product.detail.replace(
                "/products",
                "Agregá este número al final de la URL: "
              );
            });

            // Respuesta
            const responseObject = {
                total_productos: countResult[0].total_productos,
                productos: products.map((product) => ({
                id: product.id,
                nombre: product.nombre,
                descripcion: product.descripcion,
                detail: product.detail,
              })),
            };

            // Convertir el objeto a una cadena JSON con formato legible
            const formattedJSON = JSON.stringify(responseObject, null, 2);

            // Envía la respuesta con el JSON formateado
            res.set("Content-Type", "application/json").send(formattedJSON);
          }
        );

      }
    );
  });
});



module.exports = routes;
