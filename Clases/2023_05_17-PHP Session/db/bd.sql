use grupob;

create table if not exists users(
	id int auto_increment primary key,
    nombre varchar (20),
    email varchar (40),
    password varchar (70),
    rol_id int
);

insert into users (nombre, email, password, rol_id) values ('Sergio', 'sfontan@profesores.imf.com', 123456, 1);
insert into users (nombre, email, password, rol_id) values ('Miguel', 'miguelmiguel@alumnos.imf.com', 'abcd', 2);

select * from users;

SELECT * FROM users WHERE email = 'sfontan@profesores.imf.com' AND password = '123456';