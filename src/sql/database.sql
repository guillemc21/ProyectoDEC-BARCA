
/* Guille Mendoza || Pau Motos */
DROP DATABASE proyectoBarca;
CREATE DATABASE proyectoBarca;
USE proyectoBarca;

CREATE TABLE usuarios 
(id_usuario INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
Nombre VARCHAR (25),
Usuario VARCHAR (15),
Apellido VARCHAR (20),
Fecha_Nacimiento DATE,
Gmail VARCHAR(50),
Contrasenya VARCHAR (15)
);

CREATE TABLE reservas
(id_reserva INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
nombreUsuario VARCHAR (25),
apellidoUsuario VARCHAR (20),
correoUsuario VARCHAR (50),
telefono INT,
fechaReserva DATE,
RUTA VARCHAR (50),
asiento INT,
fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE reservas;

INSERT INTO usuarios VALUES
(1,"Guille","gmendo","Mendoza","2001-05-07","gmendo@gmail.com","P@ssw0rd"),
(2,"Pau","pmotos","Motos","2001-02-01","pmotos@gmail.com","P@ssw0rd");




