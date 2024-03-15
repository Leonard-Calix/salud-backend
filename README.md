
## NPHI

#### Descripcion

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

#### Proyecto esta realizado con las siguientes tecnologias

![](https://wethinkapp.com/wp-content/uploads/2022/09/NodeJS.svg)
![](https://www.emizentech.com/blog/wp-content/uploads/sites/2/2022/03/Express.jpg)
![](https://www.onworks.net/imagescropped/sequelizeicon.png_3.webp)
![](https://cdn-bhdil.nitrocdn.com/isrDVIFCpCXbHHPoNruCoFKRiVumSNxS/assets/images/optimized/rev-0ec5e2e/bobcares.com/wp-content/uploads/2023/01/Docker-1-300x300-180x.png)
![](https://www.i-programmer.info/images/stories/News/2016/Sept/A/mysql.jpg)

#### Pasos para levantar el proyecto y la base de datos

#### Ejecutar en la terminal

- Copiar el archivo. env-example y renombrarlo de la siguiente manera .env

- Instalar las dependencias de Node ：`npm install`

- Levantar la base de datos ：`docker compose up --build`

#### Crear la base de datos

- npx sequelize-cli db:migrate

#### Bajar la base de datos

- npx sequelize-cli db:migrate:undo

#### Ejecutar los Seeders

- npx sequelize-cli db:seed:all

#### Crear un modelo

- npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

#### Crear una migracion

- npx sequelize-cli migration:generate --name <name>

#### Crear un seeders

- npx sequelize-cli seed:generate --name demo-user