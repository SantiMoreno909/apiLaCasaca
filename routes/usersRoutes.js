const express = require("express");
const routes = express.Router();

routes.get("/users", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    // Obtener el total de usuarios
    conn.query(
      "SELECT COUNT(*) AS total_usuarios FROM usuarios",
      (err, countResult) => {
        if (err) return res.send(err);

        // Obtener datos de usuarios
        conn.query(
          "SELECT id, nombre, apellido, email FROM usuarios",
          (err, rows) => {
            if (err) return res.send(err);

            // Array con detalles de usuarios
            const users = rows.map((user) => {
              return {
                id: user.id,
                nombre: user.nombre + " " + user.apellido,
                email: user.email,
                detail: `/users/${user.id}`, // URL para obtener el detalle del usuario
              };
            });

            // Modificar el valor de "detail" para que sea una URL sin "/users"
            users.forEach((user) => {
              user.detail = user.detail.replace(
                "/users",
                "Agregá este número al final de la URL: "
              );
            });

            // Respuesta
            const responseObject = {
              total_usuarios: countResult[0].total_usuarios,
              usuarios: users.map((user) => ({
                nombre: user.nombre,
                email: user.email,
                detail: user.detail,
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

routes.get("/users/:id", (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err);

    // Obtener el detalle del usuario con el ID proporcionado
    conn.query(
      "SELECT id, nombre, apellido, email, telefono, fec_nac, genero, direccion_envios, tyc, url_foto_perfil FROM usuarios WHERE id = ?",
      [req.params.id],
      (err, rows) => {
        if (err) return res.send(err);

        if (rows.length === 0) {
          return res.status(404).json({ message: "Usuario no encontrado" });
        }

        const user = rows[0];

        const userData = {
          id: user.id,
          nombre: user.nombre,
          apellido: user.apellido,
          email: user.email,
          telefono: user.telefono,
          fec_nac: user.fec_nac,
          genero: user.genero,
          direccion_envios: user.direccion_envios,
          tyc: user.tyc,
          imagenPerfilURL: `/users/${req.params.id}/${user.url_foto_perfil}`,
        };

        res
          .set("Content-Type", "application/json")
          .send(JSON.stringify(userData, null, 2));
      }
    );
  });
});

module.exports = routes;
