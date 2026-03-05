/* ================= PROPIEDADES ================= */
let imagenActual = 0;
let imagenesActuales = [];
let scrollRevealObserver = null;

const VIDEO_YOUTUBE_DEFAULT = "https://www.youtube.com/watch?v=x_xDcaQxBX0";

const propiedades = [
  /* ================= apartaestudio ================= */
  {
    tipo: "Apartaestudio",
    nombre: "Apartaestudio",
    referencia: "Apte. 001",
    imagenes:["Ref. Apte. 01/1.jpg",
             "Ref. Apte. 01/2.jpg",
             "Ref. Apte. 01/3.jpg",
             "Ref. Apte. 01/4.jpg",
             "Ref. Apte. 01/5.jpg",
             "Ref. Apte. 01/6.jpg",
             "Ref. Apte. 01/7.jpg",
             "Ref. Apte. 01/8.jpg",
             "Ref. Apte. 01/9.jpg",
             "Ref. Apte. 01/10.jpg",
             "Ref. Apte. 01/11.jpg",
             "Ref. Apte. 01/12.jpg",
             "Ref. Apte. 01/13.jpg",
             "Ref. Apte. 01/14.jpg",
             "Ref. Apte. 01/15.jpg",
             "Ref. Apte. 01/16.jpg",
             "Ref. Apte. 01/17.jpg",
             "Ref. Apte. 01/18.jpg",
             "Ref. Apte. 01/19.jpg",
             "Ref. Apte. 01/20.jpg",
             "Ref. Apte. 01/21.jpg",
             "Ref. Apte. 01/22.jpg",
             "Ref. Apte. 01/23.jpg",],
    precio: "$136.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "42 m²",
    areaPrivada:"-",
    areaConstruida:"42 m²",
    habitaciones: "1",
    banos: "1",
    descripcion: `📌 Venta de Apartamento en Moniquirá – Boyacá

📏 Área 45 mt2

Características del apartamento 

✔Queda en un primer piso
✔Cuenta con parqueadero
✔Sala Comedor
✔1 habitación
✔Cocina integral
✔Zona de lavandería amplia
✔1 baños social
✔Ubicado en un barrio residencial`,
videoYoutube: "https://youtu.be/JiUddVN-l84?si=YDCyPaKFSDIYP19ds",

  },
  {
    tipo: "Apartaestudio",
    nombre: "Apartaestudio",
    referencia: "Apte. 002",
    imagenes: ["Ref. Apte. 02/1.jpg",
             "Ref. Apte. 02/2.jpg",
             "Ref. Apte. 02/3.jpg",
             "Ref. Apte. 02/4.jpg",
             "Ref. Apte. 02/5.jpg",
             "Ref. Apte. 02/6.jpg",
             "Ref. Apte. 02/7.jpg",
             "Ref. Apte. 02/8.jpg",],
    precio: "$231.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "50,77 m²",
    areaPrivada:"-",
    areaConstruida:"50,77 m²",
    habitaciones: "1",
    banos: "1",
    descripcion: "“Apartamentos nuevos para estrenar 🏡✨ 1 y 3 habitaciones en clima cálido. ¡Tu nuevo hogar te está esperando!",
    videoYoutube: "https://youtube.com/shorts/abuIVw7IXH8",
  },

/* ================= apartamentos ================= */
  {
    tipo: "Apartamento",
    nombre: "Apartamento",
    referencia: "Apt. 001",
    imagenes: ["Ref. Apt. 01/1.jpg",
             "Ref. Apt. 01/2.jpg",
             "Ref. Apt. 01/3.jpg",
             "Ref. Apt. 01/4.jpg",
             "Ref. Apt. 01/5.jpg",
             "Ref. Apt. 01/6.jpg",
             "Ref. Apt. 01/7.jpg",
             "Ref. Apt. 01/8.jpg",
             "Ref. Apt. 01/9.jpg",
             "Ref. Apt. 01/10.jpg",
             "Ref. Apt. 01/11.jpg",
             "Ref. Apt. 01/12.jpg",
             "Ref. Apt. 01/13.jpeg",
             "Ref. Apt. 01/14.jpeg",],
    precio: "$130.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "57.76 m²",
    areaPrivada:"-",
    areaConstruida:"57.76 m²",
    habitaciones: "1",
    banos: "1",
    descripcion:  `📌 VENTA DE APARTAMENTO EN MONIQUIRA- BOYACÁ

📏AREA: 57.76 m2
✔Sala - Comedor
✔Cocina
✔2 Habitaciones
✔Sala de estar/Biblioteca 
✔1 baño
✔Zona de lavandería
✔Buena iluminación
✔2 Piso
✔Ubicado cerca a la vía principal que conduce al hospital nuevo
✔ Documentos al día
✔ Propiedad Horizontal
✔ Venta Directa

⛔ NO PERMUTA
⛔ NO PARQUEADERO`,
    videoYoutube: "https://youtu.be/AA85XfnvnLI",
  },
   {
    tipo: "Apartamento",
    nombre: "Apartamento",
    referencia: "Apt. 002",
    imagenes:["Ref. Apt. 02/1.jpg",
             "Ref. Apt. 02/2.jpg",
             "Ref. Apt. 02/3.jpg",
             "Ref. Apt. 02/4.jpg",
             "Ref. Apt. 02/5.jpg",
             "Ref. Apt. 02/6.jpg",
             "Ref. Apt. 02/7.jpg",
             "Ref. Apt. 02/8.jpg",
             "Ref. Apt. 02/9.jpg",
             "Ref. Apt. 02/10.jpg",
             "Ref. Apt. 02/11.jpg",
             "Ref. Apt. 02/12.jpg",
             "Ref. Apt. 02/13.jpg",],
    precio: "$185.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "94 m²",
    areaPrivada:"-",
    areaConstruida:"94 m²",
    habitaciones: "3",
    banos: "4",
    descripcion: `Ubicado Cerca al Centro 
📏 Área: 94 mt2 
👉🏿 CARACTERÍSTICAS GENERALES
✔Cerca al Centro de Moniquirá 
✔Buena iluminación natural 
✔Closets de techo a piso 
✔3 piso 👉
🏿 CARACTERISTICAS ESPECIFICAS 
✔Cocina 
✔Sala comedor
✔2 Baños 
✔2 habitaciones, 1 con baño privado 
✔1 baño social 
⛔No parqueadero.`,
    videoYoutube: "https://youtu.be/iOTYsHt7Phg?si=eCMkZwohBA67i4Nm",

  },
  {
    tipo: "Apartamento",
    nombre: "Apartamento",
    referencia: "Apt. 003",
    imagenes: ["Ref. Apt. 03/1.jpeg",
             "Ref. Apt. 03/2.jpeg",
             "Ref. Apt. 03/3.jpeg",
             "Ref. Apt. 03/4.jpeg",
             "Ref. Apt. 03/5.jpeg",
             "Ref. Apt. 03/6.jpeg",
             "Ref. Apt. 03/7.jpeg",
             "Ref. Apt. 03/8.jpeg",
             "Ref. Apt. 03/9.jpeg",
             "Ref. Apt. 03/10.jpeg",
             "Ref. Apt. 03/11.jpeg",
             "Ref. Apt. 03/12.jpeg",
             "Ref. Apt. 03/13.jpeg",
             "Ref. Apt. 03/14.jpeg",
             "Ref. Apt. 03/15.jpeg",
             "Ref. Apt. 03/16.jpeg",],
    precio: "$225.000.000",
    ubicacion: "Barbosa, Santander",
    area: "68 m²",
    areaPrivada:"-",
    areaConstruida:"68 m²",
    habitaciones: "3",
    banos: "2",
    descripcion: `🏡 ¡Tu nuevo hogar te espera en Barbosa, Santander!

📌 Venta de apartamentos 
📏 Áreas disponibles: 62 m² y 68 m²
🛏️ Habitaciones: 2 y 3
🚿 Baños: 2
🛋️ Ambientes: Sala, comedor y cocina integral
🧺 Patio de ropas incluido
✨ Características destacadas:
✅ Totalmente terminados
✅ Divisiones de baño en vidrio
✅ Closets en las habitaciones
✅ Cocina integral moderna
✅ Propiedad horizontal — ¡listos para escriturar!`,
    videoYoutube: "https://youtube.com/shorts/UDz3Q-EIm7w?si=Hmro_xjnE4zGQt3Q",
  },
  {
    tipo: "Apartamento",
    nombre: "Apartamento",
    referencia: "Apt. 004",
    imagenes: ["Ref. Apt. 04/1.jpeg",
             "Ref. Apt. 04/2.jpeg",
             "Ref. Apt. 04/3.jpeg",
             "Ref. Apt. 04/4.jpeg",
             "Ref. Apt. 04/5.jpeg",
             "Ref. Apt. 04/6.jpeg",
             "Ref. Apt. 04/7.jpeg",
             "Ref. Apt. 04/8.jpeg",
             "Ref. Apt. 04/9.jpeg",
             "Ref. Apt. 04/10.jpeg",
             "Ref. Apt. 04/11.jpeg",
             "Ref. Apt. 04/12.jpeg",],
    precio: "$295.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "94 m²",
    areaPrivada:"-",
    areaConstruida:"94 m²",
    habitaciones: "3",
    banos: "2",
    descripcion: `📌Se arrienda Apartamento en Moniquirá – Boyacá
📐Área 94 mt2
Características:
El apartamento cuenta con:
✅Apartamento esquinero
✅3 Habitaciones
✅Sala Comedor
✅2 Balcónes
✅Cocina integral con horno a gas.
✅Calentador
✅Amplio Hall de acceso a las habitaciones
✅Zona de lavandería
✅2 baños (1. Social. 1. Privado)
✅Balcón en habitaciones principal
✅Excelente vista
✅Cuenta con Ascensor panoramico
✅Incluye Parqueadero  y deposito
🏡El apartamento esta disponible`,
    videoYoutube: "-",
  },
  {
    tipo: "Apartamento",
    nombre: "Apartamento",
    referencia: "Apt. 004",
    imagenes: ["Ref. Apt. 05/1.jpg",
             "Ref. Apt. 05/2.jpg",
             "Ref. Apt. 05/3.jpg",
             "Ref. Apt. 05/4.jpg",
             "Ref. Apt. 05/5.jpg",
             "Ref. Apt. 05/6.jpg",
             "Ref. Apt. 05/7.jpg",
             "Ref. Apt. 05/8.jpg",
             "Ref. Apt. 05/9.jpg",
             "Ref. Apt. 05/10.jpg",
             "Ref. Apt. 05/11.jpg",
             "Ref. Apt. 05/12.jpg",
             "Ref. Apt. 05/13.jpg",
             "Ref. Apt. 05/14.jpg",
             "Ref. Apt. 05/15.jpg",
             "Ref. Apt. 05/16.jpg",
             "Ref. Apt. 05/17.jpg",
             "Ref. Apt. 05/18.jpg",
             "Ref. Apt. 05/19.jpg",
             "Ref. Apt. 05/20.jpg",
             "Ref. Apt. 05/21.jpg",
             "Ref. Apt. 05/22.jpg"],
    precio: "$305.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: " 117,19  m²",
    areaPrivada:"-",
    areaConstruida:"117,19 m²",
    habitaciones: "4",
    banos: "3",
    descripcion:`📌 VENTA APARTAMENTO EN MONIQUIRA – BOYACA
Ubicado Cerca al Centro 

📏 Área: 117.19 mt2
👉🏿 CARACTERÍSTICAS GENERALES 
✔️Cerca al Centro de Moniquirá
✔️Buena iluminación natural
✔️Closets de techo a piso
✔️Amplios Balcones
✔️Dúplex
✔️4 piso
👉🏿 CARACTERISTICAS ESPECIFICAS
1 Nivel
✔️Cocina
✔️Sala comedor
✔️Amplio Corredor
✔️Cuarto de sanalejo
✔️Amplio balcón/corredor
✔️1. Baño social
2 Nivel
✔️4 habitaciones en total
✔️2 habitaciones con baño privado
✔️1 baño social
⛔No permuta
⛔No parqueadero`,
    videoYoutube: "https://youtu.be/3K91QM6tP2E"
  },
   {
    tipo: "Apartamento",
    nombre: "Apartamento",
    referencia: "Apt. 005",
    imagenes: ["Ref. Apt. 06/1.jpg",
             "Ref. Apt. 06/2.jpg",
             "Ref. Apt. 06/3.jpg",
             "Ref. Apt. 06/4.jpg",
             "Ref. Apt. 06/5.jpg",
             "Ref. Apt. 06/6.jpg",
             "Ref. Apt. 06/7.jpg",
             "Ref. Apt. 06/8.jpg",
             "Ref. Apt. 06/9.jpg",
             "Ref. Apt. 06/10.jpg",
             "Ref. Apt. 06/11.jpg",
             "Ref. Apt. 06/12.jpg",],
    precio: "$325.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "94 m²",
    areaPrivada:"-",
    areaConstruida:"94 m²",
    habitaciones: "3",
    banos: "2",
    descripcion: `📌 VENTA DE APARTAMENTO + PARQUEADERO + DEPOSITO EN MONIQUIRÁ – BOYACÁ

 👉 No. de Habita: 3
✅Closet Empotrado de techo a piso
✅Amplios Balcones con puerta corrediza en (Sala Comedor y habitación principal)
👉 No. de Baños: 2
✅Con División en vidrio
👉 Cocina Integral:
✅Muble superior – mueble inferior
✅ Mesón Auxiliar 
✅Horno
✅Alacena
✅Extractor
✅Zona de Lavandería
👉 Proyección de áreas sociales:
🌼 Salón Social
🌼 Sauna 
🌼 Jacuzzy
🌼 Senderos peatonales
🌼 Piscinas
👉 Cuenta con Ascensor Panorámico, parqueadero y deposito
✖️ No permuta
`,
    videoYoutube: "https://youtu.be/m-yQXOTCkPM",

  },
  {
    tipo: "Apartamento",
    nombre: "Apartamento",
    referencia: "Apt. 007",
    imagenes: ["Ref. Apt. 07/1.jpg",
             "Ref. Apt. 07/2.jpg",
             "Ref. Apt. 07/3.jpg",
             "Ref. Apt. 07/4.jpg",
             "Ref. Apt. 07/5.jpg",
             "Ref. Apt. 07/6.jpg",
             "Ref. Apt. 07/7.jpg",
             "Ref. Apt. 07/8.jpg",
             "Ref. Apt. 07/9.jpg",
             "Ref. Apt. 07/10.jpg",
             "Ref. Apt. 07/11.jpg",
             "Ref. Apt. 07/12.jpg",
             "Ref. Apt. 07/13.jpg",],
    precio: "$367.341.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "85,5 m²",
    areaPrivada:"-",
    areaConstruida:"85,5 m²",
    habitaciones: "3",
    banos: "2",
    descripcion: `📌 VENTA DE APARTAMENTO + PARQUEADERO + DEPOSITO EN MONIQUIRÁ – BOYACÁ

 👉 No. de Habita: 3
✅Closet Empotrado de techo a piso
✅Amplios Balcones con puerta corrediza en (Sala Comedor y habitación principal)
👉 No. de Baños: 2
✅Con División en vidrio
👉 Cocina Integral:
✅Muble superior – mueble inferior
✅ Mesón Auxiliar 
✅Horno
✅Alacena
✅Extractor
✅Zona de Lavandería
👉 Proyección de áreas sociales:
🌼 Salón Social
🌼 Sauna 
🌼 Jacuzzy
🌼 Senderos peatonales
🌼 Piscinas
👉 Cuenta con Ascensor Panorámico, parqueadero y deposito
✖️ No permuta
`,
    videoYoutube: "https://youtu.be/m-yQXOTCkPM",
  },
  {
    tipo: "Apartamento",
    nombre: "Apartamento",
    referencia: "Apt. 008",
    imagenes: ["Ref. Apt. 08/1.jpg",
             "Ref. Apt. 08/2.jpg",
             "Ref. Apt. 08/3.jpg",
             "Ref. Apt. 08/4.jpg",
             "Ref. Apt. 08/5.jpg",
             "Ref. Apt. 08/6.jpg",
             "Ref. Apt. 08/7.jpg",
             "Ref. Apt. 08/8.jpg",
             "Ref. Apt. 08/9.jpg",
             "Ref. Apt. 08/10.jpg",
             "Ref. Apt. 08/11.jpg",
             "Ref. Apt. 08/12.jpg",
             "Ref. Apt. 08/13.jpeg",
             "Ref. Apt. 08/14.jpeg",],
    precio: "$390.000.000",
    ubicacion: "Barbosa, Santander",
    area: "222 m²",
    areaPrivada:"-",
    areaConstruida:"222 m²",
    habitaciones: "3",
    banos: "2",
    descripcion: `📌 VENTA DE APARTAMENTO + PARQUEADERO + DEPOSITO EN MONIQUIRÁ – BOYACÁ

 👉 No. de Habita: 3
✅Closet Empotrado de techo a piso
✅Amplios Balcones con puerta corrediza en (Sala Comedor y habitación principal)
👉 No. de Baños: 2
✅Con División en vidrio
👉 Cocina Integral:
✅Muble superior – mueble inferior
✅ Mesón Auxiliar 
✅Horno
✅Alacena
✅Extractor
✅Zona de Lavandería
👉 Proyección de áreas sociales:
🌼 Salón Social
🌼 Sauna 
🌼 Jacuzzy
🌼 Senderos peatonales
🌼 Piscinas
👉 Cuenta con Ascensor Panorámico, parqueadero y deposito
✖️ No permuta
`,
    videoYoutube: "https://youtu.be/m-yQXOTCkPM",
  },
  {
    tipo: "Apartamento",
    nombre: "Penthouse",
    referencia: "Apt. 009",
    imagenes: ["Ref. Apt. 09/1.jpg",
             "Ref. Apt. 09/2.jpg",
             "Ref. Apt. 09/3.jpg",
             "Ref. Apt. 09/4.jpg",
             "Ref. Apt. 09/5.jpg",
             "Ref. Apt. 09/6.jpg",
             "Ref. Apt. 09/7.jpg",
             "Ref. Apt. 09/8.jpg",
             "Ref. Apt. 09/9.jpg",
             "Ref. Apt. 09/10.jpg",
             "Ref. Apt. 09/11.jpg",
             "Ref. Apt. 09/12.jpg",
             "Ref. Apt. 09/13.jpeg",
             "Ref. Apt. 09/14.jpeg",
             "Ref. Apt. 09/15.jpeg",
             "Ref. Apt. 09/16.jpeg",],
    precio: "$500.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "148 m²",
    areaPrivada:"-",
    areaConstruida:"148 m²",
    habitaciones: "3",
    banos: "2",
    descripcion: `📌 Venta de Apartamento PentHouse en Moniquirá – Boyacá

📏 Área 148 mt2

Características
El apartamento cuenta con:
✔3 Habitaciones
✔Sala Comedor
✔2 Balcónes
✔Cocina integral (horno, campana extractora)
✔Amplio Hall de acceso a las habitaciones
✔Zona de lavandería
✔2 baños (1. Social. 1. Privado)
✔Balcón en habitaciones principal
✔Ultimo piso de la torre (10)
✔Excelente vista
✔Cuenta con Ascensor panoramico
Incluye Parqueadero

☘️ AREAS SOCIALES
👉 PISCINAS PARA NIÑOS Y ADULTOS
👉 PARQUE INFANTIL
👉 MURO DE ESCALAR
👉 SENDEROS PEATONALES
👉 PORTERIA VIGILADA
👉 LOBBY POR TORRE
👉 GIMNASIO
👉 SAUNA
👉 TURCO
👉 JACUZZI`,
    videoYoutube: "https://www.youtube.com/watch?v=GQDtOe1y39o",
  },
   {
    tipo: "Apartamento",
    nombre: "Penthouse",
    referencia: "Apt. 010",
    imagenes: ["Ref. Apt. 10/1.jpg",
             "Ref. Apt. 10/2.jpg",
             "Ref. Apt. 10/3.jpg",
             "Ref. Apt. 10/4.jpg",
             "Ref. Apt. 10/5.jpg",
             "Ref. Apt. 10/6.jpg",
             "Ref. Apt. 10/7.jpg",
             "Ref. Apt. 10/8.jpg",
             "Ref. Apt. 10/9.jpg",
             "Ref. Apt. 10/10.jpg",
             "Ref. Apt. 10/11.jpg",
             "Ref. Apt. 10/12.jpg",
             "Ref. Apt. 10/13.jpg",
             "Ref. Apt. 10/14.jpg",
             "Ref. Apt. 10/15.jpg",],
    precio: "$548.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "148 m²",
    areaPrivada:"-",
    areaConstruida:"148 m²",
    habitaciones: "3",
    banos: "2",
    descripcion: `📌 Venta de Apartamento PenHouse en Moniquirá – Boyacá

📏 Área 148 mt2

Características
El apartamento cuenta con:
✔3 Habitaciones
✔Sala Comedor
✔2 Balcónes
✔Cocina integral (horno, campana extractora)
✔Amplio Hall de acceso a las habitaciones
✔Zona de lavandería
✔2 baños (1. Social. 1. Privado)
✔Balcón en habitaciones principal
✔Ultimo piso de la torre (10)
✔Excelente vista
✔Cuenta con Ascensor panoramico
Incluye Parqueadero
☘️ AREAS SOCIALES
👉 PISCINAS PARA NIÑOS Y ADULTOS
👉 PARQUE INFANTIL
👉 MURO DE ESCALAR
👉 SENDEROS PEATONALES
👉 PORTERIA VIGILADA
👉 LOBBY POR TORRE
👉 GIMNASIO
👉 SAUNA
👉 TURCO
👉 JACUZZI`,
    videoYoutube: "https://www.youtube.com/watch?v=PhUAKOEHQko",
  },

  /* ================= locales ================= */
  {
    tipo: "Local",
    nombre: "Local Comercial",
    referencia: "Lc. 001",
    imagenes: ["Ref. L.C. 01/1.jpg",
             "Ref. L.C. 01/2.jpg",
             "Ref. L.C. 01/3.jpg",
             "Ref. L.C. 01/4.jpg",
             "Ref. L.C. 01/5.jpg",
             "Ref. L.C. 01/6.jpg",
             "Ref. L.C. 01/7.jpg",
             "Ref. L.C. 01/8.jpg",
             "Ref. L.C. 01/9.jpg",
             "Ref. L.C. 01/10.jpg",],
    precio: "$200.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "28 m²",
    areaPrivada:"-",
    areaConstruida:"28 m²",
    habitaciones: "-",
    banos: "1",
    descripcion: `📌 Venta de Local en Moniquirá - Boyacá 

✅ CC El Cofre ( En Zona Comercial y central)
✅ Calle 18 No. 5-75
✅Area: 28 Mt2
🚽 1. Baño Privado 
✅ Incluye amplio depósito: 11.9 Mts2
✅ Valor de la administración: 100.000
 💸 200.000.000 
❌ No se acepta permuta `,
    videoYoutube: "https://youtu.be/TURknJOqOvY",
  },
   {
    tipo: "Local",
    nombre: "Local Comercial",
    referencia: "Lc. 002",
    imagenes: ["Ref. L.C. 02/1.jpg",
             "Ref. L.C. 02/2.jpg",
             "Ref. L.C. 02/3.jpg",
             "Ref. L.C. 02/4.jpg",
             "Ref. L.C. 02/5.jpg",
             "Ref. L.C. 02/6.jpg",
             "Ref. L.C. 02/7.jpg",
             "Ref. L.C. 02/8.jpg",
             "Ref. L.C. 02/9.jpg",
             "Ref. L.C. 02/10.jpg",
             "Ref. L.C. 02/11.jpg",],
    precio: "$200.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "30 m²",
    areaPrivada:"-",
    areaConstruida:"30 m²",
    habitaciones: "—",
    banos: "1", 
    descripcion: `📌 Venta de Local en Moniquirá - Boyacá 

✅ CC El Cofre ( En Zona Comercial y central)
✅ Calle 18 No. 5-75
✅Area: 30Mt2
🚽 1. Baño Privado 
✅ Incluye amplio depósito: 11.9 Mts2
✅ Valor de la administración: 100.000
 💸 200.000.000 
❌ No se acepta permuta  `,
 videoYoutube: "https://youtu.be/Zsdc4CKuEUM",
  },
   {
    tipo: "Local",
    nombre: "Local Comercial",
    referencia: "Lc. 003",
    imagenes: ["Ref. L.C. 03/1.jpg",
             "Ref. L.C. 03/2.jpg",
             "Ref. L.C. 03/3.jpg",
             "Ref. L.C. 03/4.jpg",
             "Ref. L.C. 03/5.jpg",
             "Ref. L.C. 03/6.jpg",
             "Ref. L.C. 03/7.jpg",
             "Ref. L.C. 03/8.jpg",
             "Ref. L.C. 03/9.jpg",
             "Ref. L.C. 03/10.jpg",
             "Ref. L.C. 03/11.png",],
    precio: "$210.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "28,7 m²",
    areaPrivada:"-",
    areaConstruida:"28,7 m²",
    habitaciones: "—",
    banos: "1", 
    descripcion: `📌 Venta de Local comercial en Moniquirá - Boyacá

✅ Altos del nogal ( En Zona Comercial )
✅Área: 28.7 Mt2
✅Ubicado en zona de alta valorización
🚽 baño privado
✅ parqueaderos sociales
✅ Valor de la administración: 60.000 pesos
 `,
 videoYoutube: "https://youtu.be/ffIgmKLqueI",
  },
  {
    tipo: "Local",
    nombre: "Local Comercial",
    referencia: "Lc. 004",
    imagenes: ["Ref. L.C. 04/1.jpeg",
             "Ref. L.C. 04/2.jpeg",
             "Ref. L.C. 04/3.jpeg",
             "Ref. L.C. 04/4.jpeg",
             "Ref. L.C. 04/5.jpeg",
             "Ref. L.C. 04/6.jpeg",
             "Ref. L.C. 04/7.jpeg",
             "Ref. L.C. 04/8.jpeg",
             "Ref. L.C. 04/9.jpeg",
             "Ref. L.C. 04/10.jpeg",],
    precio: "$280.000.000",
    ubicacion: "Tunja, Boyacá",
    area: "37,8 m²",
    areaPrivada:"-",
    areaConstruida:"37,8 m²",
    habitaciones: "-",
    banos: "1",
    descripcion: `📌 Venta de Local comercial en Tunja - Boyacá

✅ CC Boulevard ( En Zona Comercial )
✅Área: 37.8 Mt2
✅Ubicado en zona de alta valorización
🚽 baños sociales 
✅ escaleras eléctricas
✅ Ascensor
✅ Valor de la administración: 309.000 pesos`,
    videoYoutube: "https://youtu.be/DmfAK05wo2E",
  },

  /* ================= casas ================= */
  {
    tipo: "Casa",
    nombre: "Casa Lote",
    referencia: "C. 001",
    imagenes: ["Ref. C. 01/1.jpg",
             "Ref. C. 01/2.jpg",
             "Ref. C. 01/3.jpg",
             "Ref. C. 01/4.jpg",
             "Ref. C. 01/5.jpg",
             "Ref. C. 01/6.jpg",
             "Ref. C. 01/7.jpg",
             "Ref. C. 01/8.jpg",
             "Ref. C. 01/9.jpg",
             "Ref. C. 01/10.jpg",
             "Ref. C. 01/11.jpg",
             "Ref. C. 01/12.jpg",
             "Ref. C. 01/13.jpg",
             "Ref. C. 01/14.jpg",
             "Ref. C. 01/1.jpg",
             "Ref. C. 01/16.jpg",
             "Ref. C. 01/17.jpg",],
    precio: "$130.000.000",
    ubicacion: "San José de Pare, Boyacá",
    area: "137 m²",
    areaPrivada:"137 m²",
    areaConstruida:"61 m²",
    habitaciones: "2",
    banos: "1",
    descripcion: `📍 ¡Se vende hermosa casa lote en San José de Pare, Boyacá! 🏠✨

📏 Área total: 137 m² de terreno
🏗️ Área construida: 61 m²
🔹 La casa cuenta con:
🛋️ Sala
🍽️ Comedor
👩‍🍳 Cocina
🛏️ Dos habitaciones
🚻 Baño social
🧺 Patio de ropas
🌿 Amplios corredores
🚗 Parqueadero para tres vehículos
💵 Precio: 130´000.000 millones
📌 Ubicación estratégica:

A tan solo 2 kilómetros del casco urbano, sobre la vía que conduce de Barbosa a Bucaramanga, con fácil acceso al municipio.
🌳 Ideal para invertir o disfrutar de la tranquilidad del campo.`,
    videoYoutube: "https://youtu.be/MloCLaBm91g",
  }, 
   {
    tipo: "Casa",
    nombre: "Casa Rural",
    referencia: "C. 002",
    imagenes: ["Ref. C. 02/1.jpg",
             "Ref. C. 02/2.jpg",
             "Ref. C. 02/3.png",
             "Ref. C. 02/4.jpeg",
             "Ref. C. 02/5.jpeg",
             "Ref. C. 02/6.jpeg",
             "Ref. C. 02/7.jpeg",
             "Ref. C. 02/8.jpeg",
             "Ref. C. 02/9.jpeg",
             "Ref. C. 02/10.jpeg",
             "Ref. C. 02/11.jpeg",
             "Ref. C. 02/12.jpeg",],
    precio: "$160.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "1,328 m²",
    areaPrivada:"1,328 m²",
    areaConstruida:"54 m²",
    habitaciones: "2",
    banos: "2",
    descripcion: `🏡 Se vende cabaña en Moniquirá, Boyacá

Hermosa cabaña campestre ubicada en una zona tranquila y de naturaleza privilegiada.

Cuenta con un área total de 1.328 m² y una construcción de 54 m².
La propiedad es ideal para proyectos de ecoturismo, descanso, vivienda campestre o cultivo, ya que el terreno permite sembrar todo tipo de cítricos y plantas aromáticas.

La cabaña está distribuida en:
• Sala comedor
• Cocina integral
• Dos habitaciones
• Dos baños
• Estudio

Se entrega totalmente amoblada, lista para habitar o rentar.
Servicios y equipamiento:
• Pozo séptico instalado
• Tanque de almacenamiento de agua
• Energía eléctrica
• Gas por pipeta
• Sistema Hidro Flow
Un lugar perfecto para vivir, invertir y conectar con la naturaleza.
`,
    videoYoutube: "https://youtu.be/2VMqNNXp55g",
  },
   {
    tipo: "Casa",
    nombre: "Casa Rural",
    referencia: "C. 003",
    imagenes: ["Ref. C. 03/1.jpeg",
             "Ref. C. 03/2.jpeg",
             "Ref. C. 03/3.jpeg",
             "Ref. C. 03/4.jpeg",
             "Ref. C. 03/5.jpeg",
             "Ref. C. 03/6.jpeg",
             "Ref. C. 03/7.jpeg",
             "Ref. C. 03/8.jpeg",
             "Ref. C. 03/9.jpeg",
             "Ref. C. 03/10.jpeg",
             "Ref. C. 03/11.jpeg",
             "Ref. C. 03/12.jpeg",
             "Ref. C. 03/13.jpeg",
             "Ref. C. 03/14.jpeg",
             "Ref. C. 03/15.jpeg",
             "Ref. C. 03/16.jpeg",],
    precio: "$320.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "1,060 m²",
    areaPrivada:"1,060 m²",
    areaConstruida:"131 m²",
    habitaciones: "4",
    banos: "2",
    descripcion: `Venta de Casa campestre  en Moniquirá - Boyacá

📐Área del lote: 1.060 metros cuadrados
📐Área construida: 131 metros cuadrados

📌Ubicados en la vereda Monjas de Moniquirá, Boyacá, muy cerca de la vía principal que conduce a Moniquirá - Villa de Leyva.
✔️Cuentan con punto de agua y punto de luz.
✔️Documentos al día, listos para una transacción exitosa.
✔️Un lugar tranquilo.`,
    videoYoutube: "https://youtu.be/Qeih-MnhuLM",
  },  
   {
    tipo: "Casa",
    nombre: "Casa Rural",
    referencia: "C. 004",
    imagenes: ["Ref. C. 04/1.jpg",
             "Ref. C. 04/2.jpg",
             "Ref. C. 04/3.jpg",
             "Ref. C. 04/4.jpg",
             "Ref. C. 04/5.jpg",
             "Ref. C. 04/6.jpg",
             "Ref. C. 04/7.jpg",
             "Ref. C. 04/8.jpg",
             "Ref. C. 04/9.jpg",
             "Ref. C. 04/10.jpg",
             "Ref. C. 04/11.jpg",
             "Ref. C. 04/12.jpg",
             "Ref. C. 04/13.jpg",
             "Ref. C. 04/14.jpg",
             "Ref. C. 04/15.jpg",
             "Ref. C. 04/16.jpg",],
    precio: "$325.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "1,367 m²",
    areaPrivada:"1,367 m²",
    areaConstruida:"130 m²",
    habitaciones: "3",
    banos: "4",
    descripcion: `Se vende casa campestre en Moniquirá, Boyacá
hermosa casa campestre ubicada en una zona tranquila y de naturaleza privilegiada.
📐 Cuenta con un área total de 1.367 m² y una construcción de 130 m².
🏠 La casa está distribuida en:
🛋️ Sala comedor
🍽️ Cocina semi integral
🛏️ Tres habitaciones
🚿 Cuatro baños
🛋️ Sala de estar amplia
💦 Jacuzzi o piscina pequeña
⚙️ Servicios y equipamiento:
🚽 Pozo séptico
💧 Tanque de almacenamiento de agua
⚡ Energía eléctrica
🔥 Gas por pipeta
🚰 Punto de agua
Un lugar perfecto para vivir, invertir y conectar con la naturaleza.
🛣️ El acceso a la propiedad es totalmente pavimentado`,
    videoYoutube: "https://youtu.be/RACaIIVd31s?si=u2sFDChijtfBI0lZ",
  },
  {
    tipo: "Casa",
    nombre: "Casa Urbana",
    referencia: "C. 005",
    imagenes: ["Ref. C. 05/1.jpg",
             "Ref. C. 05/2.jpg",
             "Ref. C. 05/3.jpg",
             "Ref. C. 05/4.jpg",
             "Ref. C. 05/5.jpg",
             "Ref. C. 05/6.jpg",
             "Ref. C. 05/7.jpg",
             "Ref. C. 05/8.jpg",
             "Ref. C. 05/9.jpg",
             "Ref. C. 05/10.jpg",
             "Ref. C. 05/11.jpg",
             "Ref. C. 05/12.jpg",
             "Ref. C. 05/13.jpg",
             "Ref. C. 05/14.jpg",
             "Ref. C. 05/15.jpg",
             "Ref. C. 05/16.jpg",
             "Ref. C. 05/17.jpg",],
    precio: "$345.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "120 m²",
    areaPrivada:"120 m²",
    areaConstruida:"120 m²",
    habitaciones: "4",
    banos: "3",
    descripcion: `📌Venta de casa en Moniquirá- Boyacá

Ubicación: Perímetro Urbano

📏Área:120 mt2

Características Generales

👉8 mt de frente x 20 mt de Fondo
👉Dos Niveles
1. Nivel, zona privada
2. Nivel, Terraza
3. Una habitación con baño privado
Todos los Servicios

Características Especificas

👉No. de habitaciones:4
👉No. de Baños 3
👉Cocina: 1
👉Sala:1
👉Comedor:1
👉Zona de Lavandería/ Patio de ropas
👉Opción, para Parqueadero o local Comercial`,
    videoYoutube: "https://youtu.be/y1V4uB31-Sc",
  },
   {
    tipo: "Casa",
    nombre: "Casa Urbana",
    referencia: "C. 006",
    imagenes: ["Ref. C. 06/1.png",
             "Ref. C. 06/2.jpg",
             "Ref. C. 06/3.jpg",
             "Ref. C. 06/4.jpg",
             "Ref. C. 06/5.jpg",
             "Ref. C. 06/6.jpg",
             "Ref. C. 06/7.jpg",
             "Ref. C. 06/8.jpg",
             "Ref. C. 06/9.jpg",
             "Ref. C. 06/10.jpeg",
             "Ref. C. 06/11.png",
             "Ref. C. 06/12.jpg",
             "Ref. C. 06/13.jpg",
             "Ref. C. 06/14.jpg",],
    precio: "$405.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "1,238 m²",
    areaPrivada:"1,238 m²",
    areaConstruida:"118 m²",
    habitaciones: "2",
    banos: "2",
    descripcion: `🏡 ¡Se vende casa en zona rural a solo 5 minutos del casco urbano de Moniquirá!

🌿 Perfecta para quienes buscan tranquilidad, espacio y una excelente ubicación.

🚗 A 5 minutos del casco urbano
🛣️ Sobre la vía a Togüí
🪵 Solo 200 metros de vía destapada
📑 Documentación al día: escrituras y folio de matrícula independiente
📐 Área del lote: 1.238 m²
🏠 Área construida: 118 m²
🛏️ Distribución:
• 🛌 2 habitaciones (principal con baño privado y walk-in closet)
• 🍽️ Cocina integral
• 🛋️ Sala
• 🍴 Comedor
• 🧺 Patio de ropas
• 🚶 Corredor de servicios
• 🔥🍖 Terraza con zona BBQ ideal para reuniones
🚗 Parqueadero para aprox. 5 vehículos`,
    videoYoutube: "https://youtu.be/HNnFpE8Mn-Y",
  },
   {
    tipo: "Casa",
    nombre: "Casa Urbana",
    referencia: "C. 007",
    imagenes: ["Ref. C. 07/1.jpg",
             "Ref. C. 07/2.jpg",
             "Ref. C. 07/3.jpg",
             "Ref. C. 07/4.jpg",
             "Ref. C. 07/5.jpg",
             "Ref. C. 07/6.jpg",
             "Ref. C. 07/7.jpg",
             "Ref. C. 07/8.jpg",
             "Ref. C. 07/9.jpg",
             "Ref. C. 07/10.jpg",
             "Ref. C. 07/11.jpg",
             "Ref. C. 07/12.jpg",
             "Ref. C. 07/13.jpg",
             "Ref. C. 07/14.jpg",
             "Ref. C. 07/15.jpg",
             "Ref. C. 07/16.jpg",],
    precio: "$420.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "238 m²",
    areaPrivada:"238 m²",
    areaConstruida:"204 m²",
    habitaciones: "6",
    banos: "3",
    descripcion: `📌 VENTA DE CASA EN MONIQUIRA - BOYACA

📏 Área total: 238 metros cuadrados
📏 Área Construida: 204 metros

✔️Casa de dos niveles 
✔️6 habitaciones
✔️Sala comedor
✔Cuarto de Lavandería
✔️4 baños 
✔️2 cocinas
✔️Garaje Cubierto
✔️Antejardín
✔️Zona de Bbq 
✔️2 patios uno bastante amplio y otro pequeño`,
    videoYoutube: "https://youtu.be/UGGg38yn3pY",
  },
  {
    tipo: "Casa",
    nombre: "Casa Urbana",
    referencia: "C. 008",
    imagenes: ["Ref. C. 08/1.jpeg",
             "Ref. C. 08/2.jpeg",
             "Ref. C. 08/3.jpeg",
             "Ref. C. 08/4.jpeg",
             "Ref. C. 08/5.jpeg",
             "Ref. C. 08/6.jpeg",
             "Ref. C. 08/7.jpeg",],
    precio: "$490.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "220 m²",
    areaPrivada:"220 m²",
    areaConstruida:"220 m²",
    habitaciones: "7",
    banos: "6",
    descripcion: `VENTA DE CASA EN MONIQUIRA – BOYACA
CUENTA CON 3 APARTAMENTOS BAJO EL REGIMEN DE PROPEDAD HORIZONTAL
(SERVICIOS INDEPENDIENTES)

📐 Área: 220 mt2
⏳  Distancia: 5 minutos del parque principal
👉 1 piso:
 ✔️ 2 habitaciones
 ✔️ Sala- comedor
 ✔️ Cocina 
 ✔️ 1 baño
 ✔️ Parqueadero
 ✔️ Patio de ropas
👉 2 piso
 ✔️ 3 habitaciones
 ✔️ 2 baños
 ✔️ Cocina
 ✔️ Sala comedor
 ✔️ Patio de ropas
👉 3 piso
 ✔️ 3 habitaciones
 ✔️ 2 baños
 ✔️ Cocina
 ✔️ Sala Comedor
 ✔️ Patio de Ropas.`,
    videoYoutube: "https://youtu.be/xTFo3nhcXz0",
  },
  {
    tipo: "Casa",
    nombre: "Casa Urbana",
    referencia: "C. 009",
    imagenes: ["Ref. C. 09/1.jpg",
             "Ref. C. 09/2.jpg",
             "Ref. C. 09/3.jpg",
             "Ref. C. 09/4.jpg",
             "Ref. C. 09/5.jpg",
             "Ref. C. 09/6.jpg",
             "Ref. C. 09/7.jpg",
             "Ref. C. 09/8.jpg",
             "Ref. C. 09/9.jpg",
             "Ref. C. 09/10.jpg",
             "Ref. C. 09/11.jpg",
             "Ref. C. 09/12.jpg",
             "Ref. C. 09/13.jpg",
             "Ref. C. 09/14.jpg",
             "Ref. C. 09/15.jpg",
             "Ref. C. 09/16.jpg",
             "Ref. C. 09/17.jpg",],
    precio: "$490.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "270 m²",
    areaPrivada:"270 m²",
    areaConstruida:"270 m²",
    habitaciones: "6",
    banos: "4",
    descripcion: `📌 VENTA DE CASA URBANA EN MONIQUIRÁ – BOYACÁ 

📐 Área: 270 mt2
⏳  Distancia: 5 minutos del parque principal
📍Casa esquinera.
👉 1 piso:
✔ 3 habitaciones
 ✔ Sala- comedor
 ✔ Cocina 
 ✔ 2 baños
 ✔ Parqueadero, o local comercial
 ✔ Patio de ropas
👉 2 piso
 ✔ 3 habitaciones
 ✔ 2 baños
 ✔ 1 Cocina
 ✔ Sala comedor
 ✔ Patio de ropa
✔Amplio Balcón con excelente vista.
👉 3 piso
✔Plancha con vigas, columnas , bloque, para terminar otro apartamento o casa.
✔Cuenta con todos los servicios, agua, luz, gas, Internet
Documentos al día.`,
    videoYoutube: "https://youtu.be/DjltWnrV_-M",
  },
  {
    tipo: "Casa",
    nombre: "Casa Urbana",
    referencia: "C. 010",
    imagenes: ["Ref. C. 10/1.jpg",
             "Ref. C. 10/2.jpg",
             "Ref. C. 10/3.jpg",
             "Ref. C. 10/4.jpg",
             "Ref. C. 10/5.jpg",
             "Ref. C. 10/6.jpg",
             "Ref. C. 10/7.jpg",
             "Ref. C. 10/8.jpg",
             "Ref. C. 10/9.jpg",
             "Ref. C. 10/10.jpg",
             "Ref. C. 10/11.jpg",
             "Ref. C. 10/12.jpg",
             "Ref. C. 10/13.jpg",
             "Ref. C. 10/14.jpg",
             "Ref. C. 10/15.jpg",
             "Ref. C. 10/16.jpg",
             "Ref. C. 10/17.jpg",
             "Ref. C. 10/18.jpg",],
    precio: "$510.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "272 m²",
    areaPrivada:"272 m²",
    areaConstruida:"272 m²",
    habitaciones: "9",
    banos: "5",
    descripcion: `📌 VENTA DE CASA EN MONIQUIRÀ – BOYACÀ

📐Superficie de Terreno: 105 mt2 aprox.
📐Superficie Construida: 272 mt2 aprox.
👉 Estado: Segunda Mano
Características Generales:
✅ Habitaciones: 9
✅Baños: 5
✅Sala – Comedor: 2
✅Cocina: 2
Características Internas
👉 Primer Nivel
✅3 habitaciones
✅2 baños
✅Cocina
✅Sala Comedor
✅Amplio Patio de Ropas/ Lavanderia
👉 Segundo Nivel
✅3 habitaciones (Todas con Closet)
✅2 Baños
✅Cocina
✅Sala – Comedor
👉 Tercer Nivel
✅2 habitaciones
✅Amplio balcón (muy buena vista)
✅1 baño
✅Cuarto de sanalejo
✅Zona de Lavandería`,
    videoYoutube: "https://youtu.be/qYjkwKScWNg",
  },
  {
    tipo: "Casa",
    nombre: "Casa en Condominio",
    referencia: "C. 011",
    imagenes: ["Ref. C. 11/1.jpg",
             "Ref. C. 11/2.jpg",
             "Ref. C. 11/3.jpg",
             "Ref. C. 11/4.jpg",
             "Ref. C. 11/5.jpg",
             "Ref. C. 11/6.jpg",
             "Ref. C. 11/7.jpg",],
    precio: "$560.000.000",
    ubicacion: "Barbosa, Santander",
    area: "200 m²",
    areaPrivada:"200 m²",
    areaConstruida:"200 m²",
    habitaciones: "4",
    banos: "3",
    descripcion: `📌 Venta de Casa en Barbosa – Santander 

Te ofrecemos una casa de dos pisos en un conjunto residencial

📍 Lugar: Barbosa – Santander
📏 Área del lote: 128 metros cuadrados
📏 Área Construida: 200 metros cuadrados
👉 Características Casa
🛌🏻 No. de Habitaciones: 4 con sus respectivos closets
🛀 No. de Baños: 3 de lujo, con lavamanos en porcelanato
✔Parqueadero, cubierto
✔Cocina Integral con mesones en granito, extractor de campana y estufa en vidrio templado
✔Sala – comedor
✔ 1 Jacuzzi para 4 personas
✔Sistema de bombeo con Hidro Flow
✔Zona de Patio y Jardín 
✔Tanque subterráneo de 3.500 litros enchapado
✔Tanque de agua aéreo de 500 litros
✔Balcón amplio
✔Cuarto de lavandería 
✔Excelente vista
✔ Todos los servicios: agua, luz, gas y internet.

👉 Características Generales
✔Zonas sociales: piscina para adultos y para niños, BBQ, salón social, parque infantil, y zonas verdes, 

✔el condominio cuenta con alcantarillado y acueducto del municipio

¡Se entrega totalmente terminada!

Pago de administración: $85.000 pesos`,
    videoYoutube: "https://youtu.be/Ffkv9Ab024w",
  },
  {
    tipo: "Casa",
    nombre: "Casa en Condominio",
    referencia: "C. 012",
    imagenes: ["Ref. C. 12/1.jpg",
             "Ref. C. 12/2.png",
             "Ref. C. 12/3.png",
             "Ref. C. 12/4.png",
             "Ref. C. 12/5.png",
             "Ref. C. 12/6.png",
             "Ref. C. 12/7.png",
             "Ref. C. 12/8.png",
             "Ref. C. 12/9.jpg",
             "Ref. C. 12/10.jpg",
             "Ref. C. 12/11.png",
             "Ref. C. 12/12.png",],
    precio: "$565.000.000",
    ubicacion: "Barbosa, Santander",
    area: "677 m²",
    areaPrivada:"677 m²",
    areaConstruida:"217 m²",
    habitaciones: "3",
    banos: "3",
    descripcion: `📌 Venta de Casa campestre  en Barbosa – Santander 

Te ofrecemos una casa de un piso en un condominio Campestre.

📍 Lugar: Barbosa – Santander, a 1.5 Km del casco urbano

📏 Área del lote: 677 metros cuadrados
📏 Área Construida: 217 metros cuadrados

👉 Características Casa
🛌🏻 No. de Habitaciones: 3 con sus respectivos closets
✔1  Cuarto de servicios
🛀 No. de Baños: 3 de lujo, con lavamanos en porcelanato
✔ 2 Parqueaderos, cubiertos
✔Cocina Integral con mesones en granito, extractor de campana y estufa en vidrio templado
✔Sala – comedor
✔ 1 Jacuzzi para 4 personas
✔Sistema de bombeo con Hidro Flow
✔Zona de verde con Jardín 
✔Tanque subterráneo de 4.000 litros enchapado
✔Tanque de agua aéreo de 500 litros
✔Corredores externos y zonas verdes
✔Calentador a gas natural
✔1 Balcon
✔Excelente vista
✔ Todos los servicios: agua, luz, gas y internet.

👉 Características Generales
✔Zonas sociales: piscina para adultos y para niños, BBQ, salón social, y zonas verdes.
✔el condominio cuenta con alcantarillado y acueducto propio. 
¡Se entrega totalmente terminada!
Pago de administración: $90.000 pesos`,
    videoYoutube: "https://youtu.be/w9lbCLF2ScQ",
  },
  {
    tipo: "Casa",
    nombre: "Casa Urbana",
    referencia: "C. 013",
    imagenes: ["Ref. C. 13/1.jpg",
             "Ref. C. 13/2.jpg",
             "Ref. C. 13/3.jpg",
             "Ref. C. 13/4.jpg",
             "Ref. C. 13/5.jpg",
             "Ref. C. 13/6.jpg",
             "Ref. C. 13/7.jpg",
             "Ref. C. 13/8.jpg",
             "Ref. C. 13/9.jpg",
             "Ref. C. 13/10.jpg",
             "Ref. C. 13/11.jpg",
             "Ref. C. 13/12.jpg",
             "Ref. C. 13/13.jpg",
             "Ref. C. 13/14.jpg",
             "Ref. C. 13/15.jpg",],
    precio: "$590.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "300 m²",
    areaPrivada:"300 m²",
    areaConstruida:"300 m²",
    habitaciones: "8",
    banos: "6",
    descripcion: `🏚 VENTA DE CASA EN MONIQUIRÁ – BOYACÁ CUENTA CON 4 APARTAMENTOS

📐 Área: 300 mt2
⏳  Distancia: 5 minutos del parque principal
👉 1 piso:
✔ 2 habitaciones
 ✔ Sala- comedor
 ✔ Cocina 
 ✔ 1 baño
 ✔ Parqueadero con Baño
 ✔ Patio de ropas
👉 2 piso
 ✔ 4 habitaciones
 ✔ 2 baños
 ✔ 2 Cocinas
 ✔ Sala comedor
 ✔ Patio de ropas
👉 3 piso
 ✔ 2 habitaciones
 ✔ 2 baños
 ✔ Cocina
 ✔ Sala Comedor
 ✔ Patio de Ropas.
✔Amplio Balcón con excelente vista
✔Cuenta con todos los servicios, agua, luz, gas, Internet
Documentos al día.`,
    videoYoutube: "https://youtu.be/MidyuuMe5ew",
  },
   {
    tipo: "Casa",
    nombre: "Casa",
    referencia: "C. 014",
    imagenes: ["Ref. C. 14/1.jpeg",
             "Ref. C. 14/2.jpeg",
             "Ref. C. 14/3.jpeg",
             "Ref. C. 14/4.jpeg",
             "Ref. C. 14/5.jpeg",
             "Ref. C. 14/6.jpeg",
             "Ref. C. 14/7.jpeg",
             "Ref. C. 14/8.jpeg",
             "Ref. C. 14/9.jpeg",
             "Ref. C. 14/10.jpeg",],
    precio: "$590.000.000",
    ubicacion: "Tunja, Boyacá",
    area: "940 m²",
    areaPrivada:"940 m²",
    areaConstruida:"208 m²",
    habitaciones: "3",
    banos: "3",
    descripcion: `🏡 SE VENDE CASA EN TUNJA
📍 A 4 km de la salida hacia Villa de Leyva
🌄 Excelente vista • 🛣️ Fácil acceso

📐 Lote: 940 m²
🏗️ Construidos: 208 m²

🏠 Primer piso:
🛋️ Sala • 
🍽️ Comedor • 
👩‍🍳 Cocina integral
🛏️ Habitación • 
🚻 Baño social • 
🧺 Lavandería

🏠 Segundo piso:
🛏️ 2 alcobas (principal con walking closet)
🌅 Balcón • 
🛁 Baño privado • 
🚻 Baño social
🛋️ Sala de estar • 
💼 Estudio

🔧 Extras:
🚗 Garaje para 2 vehículos
🔥 Bases para kiosko/BBQ
🌿 Zonas verdes`,
    videoYoutube: "https://youtu.be/6Y3sZK5VnT4",
  },
  {
    tipo: "Casa",
    nombre: "Casa Urbana",
    referencia: "C. 015",
    imagenes: ["Ref. C. 15/1.jpeg",
             "Ref. C. 15/2.jpeg",
             "Ref. C. 15/3.jpeg",
             "Ref. C. 15/4.jpeg",
             "Ref. C. 15/5.jpeg",
             "Ref. C. 15/6.jpeg",
             "Ref. C. 15/7.jpeg",
             "Ref. C. 15/8.jpeg",
             "Ref. C. 15/9.jpeg",
             "Ref. C. 15/10.jpeg",
             "Ref. C. 15/11.jpeg",
             "Ref. C. 15/12.jpeg",
             "Ref. C. 15/13.jpeg",],
    precio: "$620.000.000",
    ubicacion: "Simijaca, Cundinamarca",
    area: "240 m²",
    areaPrivada:"240 m²",
    areaConstruida:"240 m²",
    habitaciones: "4",
    banos: "3",
    descripcion: `🏡 casa en venta – Simijaca, Cundinamarca!
📍 Ubicación: Calle 8 #9-69, Barrio Orquídea, Simijaca

📐 Área construida: 240 m²
🏠 Distribución:
✨ Primer piso:
🛋️ Sala amplia
🍽️ Comedor y cocina integral abiertas
🧰 Cuarto pequeño para herramientas
🧺 Cuarto de ropa
🚻 Baño social
🚗 Dos garajes
✨ Segundo piso:
🛏️ Cuatro alcobas con chifonier
💻 Estudio pequeño
🚿 Dos baños completos
🌅 Dos miradores
⚡ Características adicionales:
💡 Luz trifásica
🔆 Iluminación interior y exterior (control desde la entrada y el final de la casa)
📹 Sistema de cámaras de seguridad
🔥 Calentador a gas`,
    videoYoutube: "https://youtu.be/6lFXeePrJhI",
  },
   {
    tipo: "Casa",
    nombre: "Casa en Condominio",
    referencia: "C. 016",
    imagenes: ["Ref. C. 16/1.jpg",
             "Ref. C. 16/2.jpg",
             "Ref. C. 16/3.jpg",
             "Ref. C. 16/4.jpg",
             "Ref. C. 16/5.jpg",
             "Ref. C. 16/6.jpg",
             "Ref. C. 16/7.jpg",
             "Ref. C. 16/8.jpg",
             "Ref. C. 16/9.jpg",
             "Ref. C. 16/10.jpg",
             "Ref. C. 16/11.jpg",
             "Ref. C. 16/12.jpg",
             "Ref. C. 16/13.jpg",
             "Ref. C. 16/14.jpg",
             "Ref. C. 16/15.jpg",
             "Ref. C. 16/16.jpg",
             "Ref. C. 16/17.jpg",],
    precio: "$630.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "187 m²",
    areaPrivada:"187 m²",
    areaConstruida:"187 m²",
    habitaciones: "4",
    banos: "3",
    descripcion: `📌SE VENDE CASA DE DOS PISOS EN CONDOMINIO DE MONIQUIRÁ BOYACÁ

📐AREA DEL LOTE: 186.66M2
📐AREA DE CONSTRUCCIÓN: 187 M2
☑DISTRIBUCIÓN:
PISO 1:
✅2 HABITACIONES CON CLOSET Y BAÑO PRIVADO
✅1 BAÑO SOCIAL
✅COCINA INTEGRAL CON HORNO Y ESTRACTOR
✅SALA COMEDOR
✅PATIO DE ROPA
✅CALENTADOR A GAS
PISO 2:
✅1 HABITACION CON CLOSET Y BAÑO PRIVADO
✅2 HABITACIONES CON CLOSET Y BALCON
✅1 BAÑO SOCIAL
✅SALA
✅BALCON AMPLIO
👩‍🍳ZONA BBQ
🛁JACUZZI
✅CORREDORES AMPLIOS
🚗GARAJE BAJO TECHO
☑GAS NATURAL, AGUA, LUZ, ALCANTARILLADO
💰ADMINISTRACION: 💸314.000 MIL PESOS
📝DOCUMENTOS AL DIA`,
    videoYoutube: "hhttps://youtu.be/Y0Tqh3dpEUs",
  },
  {
    tipo: "Casa",
    nombre: "Casa en Condominio",
    referencia: "C. 017",
    imagenes: ["Ref. C. 17/1.jpg",
             "Ref. C. 17/2.jpg",
             "Ref. C. 17/3.png",
             "Ref. C. 17/4.png",
             "Ref. C. 17/5.png",
             "Ref. C. 17/6.png",
             "Ref. C. 17/7.png",
             "Ref. C. 17/8.png",
             "Ref. C. 17/9.png",
             "Ref. C. 17/10.jpg",
             "Ref. C. 17/11.jpg",
             "Ref. C. 17/12.png",
             "Ref. C. 17/13.png",],
    precio: "$700.000.000",
    ubicacion: "Barbosa, Santander",
    area: "696 m²",
    areaPrivada:"696 m²",
    areaConstruida:"300 m²",
    habitaciones: "4",
    banos: "3",
    descripcion: `📌 Venta de Casa en Barbosa – Santander 

Te ofrecemos una casa de dos pisos en un condominio Campestre.

📍 Lugar: Barbosa – Santander, a 1.5 Km del casco urbano

📏 Área del lote: 696 metros cuadrados
📏 Área Construida: 300 metros cuadrados

👉 Características Casa
🛌🏻 No. de Habitaciones: 4 con sus respectivos closets
✔1  Cuarto de servicios
🛀 No. de Baños: 3 de lujo, con lavamanos en porcelanato
✔ 4 Parqueaderos, cubiertos y dos libres
✔Cocina Integral con mesones en granito, extractor de campana y estufa en vidrio templado
✔Sala – comedor
✔ 1 Jacuzzi para 4 personas
✔Sistema de bombeo con Hidro Flow
✔Zona de verde con Jardín 
✔Tanque subterráneo de 4.000 litros enchapado
✔Tanque de agua aéreo de 500 litros
✔Corredores externos y zonas verdes
✔Calentador a gas natural
✔3 Balcones
✔Excelente vista
✔ Todos los servicios: agua, luz, gas y internet.

👉 Características Generales
✔Zonas sociales: piscina para adultos y para niños, BBQ, salón social, y zonas verdes.
✔el condominio cuenta con alcantarillado y acueducto propio. 
¡Se entrega totalmente terminada!

Pago de administración: $90.000 pesos`,
    videoYoutube: "https://youtu.be/qZKO0WCM1lw",
  },
  {
    tipo: "Casa",
    nombre: "Casa Rural",
    referencia: "C. 018",
    imagenes: ["Ref. C. 18/1.jpeg",
             "Ref. C. 18/2.jpeg",
             "Ref. C. 18/3.jpeg",
             "Ref. C. 18/4.jpeg",
             "Ref. C. 18/5.jpeg",
             "Ref. C. 18/6.jpeg",
             "Ref. C. 18/7.jpeg",
             "Ref. C. 18/8.jpeg",
             "Ref. C. 18/9.jpeg",
             "Ref. C. 18/10.jpeg",
             "Ref. C. 18/11.jpeg",
             "Ref. C. 18/12.jpeg",
             "Ref. C. 18/13.jpeg",
             "Ref. C. 18/14.jpeg",
             "Ref. C. 18/15.jpeg",],
    precio: "$735.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "2,056 m²",
    areaPrivada:"2,056 m²",
    areaConstruida:"360 m²",
    habitaciones: "6",
    banos: "5",
    descripcion: `🏡 ¡SE VENDE CASA EN ZONA RURAL – MONIQUIRÁ!

🌿 Ideal para quienes buscan tranquilidad, amplitud y excelente ubicación, a solo minutos del casco urbano.

📍 Ubicación
🚗 A solo 5 minutos del casco urbano de Moniquirá
🛣️ Vereda Potrero Grande
🪵 Solo 200 metros de vía destapada

📑 Documentación al día (escrituras y folio de matrícula independiente)

📐 Características Generales
Área del lote: 2.056 m²
Área construida: 360 m²

La propiedad se divide en: 2 casas y 1 apartaestudio

🏠 Distribución
🛌 6 habitaciones
🚿 5 baños
🍽️ Cocina integral
🛋️ Sala
🍴 Comedor
🧺 Zona de lavandería
👕 Patio de ropas
🚶 Corredor de servicios
🔥 Terraza con zona BBQ ideal para reuniones

🔧 Servicios y Comodidades

💧 Punto de agua del acueducto
🔥 Calentador a gas
💡 Servicio de luz
🔥 Gas
🌐 Internet con fibra óptica
🚗 Parqueadero

Espacio para aproximadamente 3 vehículos`,
    videoYoutube: "https://youtu.be/LO_szsBXv9E",
  },
  {
    tipo: "Casa",
    nombre: "Casa Campestre",
    referencia: "C. 019",
    imagenes: ["Ref. C. 19/1.jpg",
             "Ref. C. 19/2.jpg",
             "Ref. C. 19/3.jpg",
             "Ref. C. 19/4.jpg",
             "Ref. C. 19/5.jpg",
             "Ref. C. 19/6.jpg",
             "Ref. C. 19/7.jpg",
             "Ref. C. 19/8.jpg",
             "Ref. C. 19/9.jpg",
             "Ref. C. 19/10.jpg",
             "Ref. C. 19/11.jpg",
             "Ref. C. 19/12.jpg",
             "Ref. C. 19/13.jpg",
             "Ref. C. 19/14.jpg",
             "Ref. C. 19/15.jpg",],
    precio: "$790.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "2,400 m²",
    areaPrivada:"2,400 m²",
    areaConstruida:"180 m²",
    habitaciones: "4",
    banos: "5",
    descripcion: `Venta de Casa Campestre en Moniquirá - Boyacá

📍 Lugar: Moniquirá – Boyacá
✔️ A un 1Km del parque principal de Moniquirá
✔️ Punto de agua Municipal
📏 Área Total: 2.400 Mt2
📏 Área Construida: 180 Mt2

👉 Características Casa

🛌🏻 No. de Habitaciones: 4
🛀 No. de Baños: 5
✔️ Parqueadero
✔️ Cocina Integral
✔️ Sala - comedor
✔️Cuarto de lavandería
👉 Características Generales

✔️Senderos Peatonales
✔️Hermoso pozo natural con pescados
✔️2 niveles
✔️Dentro de condominio

❌ NO PERMUTA`,
    videoYoutube: "https://youtu.be/ILXghX1kTbI",
  },
  {
    tipo: "Casa",
    nombre: "Casa Quinta en Condominio",
    referencia: "C. 020",
    imagenes: ["Ref. C. 20/1.jpeg",
             "Ref. C. 20/2.jpeg",
             "Ref. C. 20/3.jpeg",
             "Ref. C. 20/4.jpeg",
             "Ref. C. 20/5.jpeg",
             "Ref. C. 20/6.jpeg",
             "Ref. C. 20/7.jpeg",
             "Ref. C. 20/8.jpeg",
             "Ref. C. 20/9.jpeg",
             "Ref. C. 20/10.jpeg",
             "Ref. C. 20/11.jpeg",
             "Ref. C. 20/12.jpeg",
             "Ref. C. 20/13.jpeg",
             "Ref. C. 20/14.jpeg",
             "Ref. C. 20/15.jpeg",],
    precio: "$820.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "1,600 m²",
    areaPrivada:"1,600 m²",
    areaConstruida:"210 m²",
    habitaciones: "4",
    banos: "4",
    descripcion: `📌Venta Casa quinta dentro de condominio en Moniquirá - Boyacá

📍Ubicado en un excelente sector de alta valorización 

📐Área del lote: 1.160 metros cuadrados
📐Área construida: 210 metros aproximadamente sin contar senderos peatonales y zonas sociales.

✔Cuenta con Todos los servicios públicos
✔esta ubicada en uno de los condominios más exclusivos del municipio 

🔻 Primer piso:
➡ Sala-comedor
➡ Cocina integral con extractor e isla 🍽
➡ 3 habitaciones 🛏 (una con baño privado 🚿)
➡ Baño social 🚻
➡ Zona de lavandería 🧺
🔺 Segundo piso:
➡ 1 habitación con balcón 🌅
➡ 1 baño completo 🛁
➡ Sala de estar con balcón 🛋

🚗 Exteriores y zonas comunes:
➡ Amplio parqueadero 🚘
➡ Pileta de descanso 💧
➡ Senderos peatonales 🚶‍♂🌿
➡ Zona BBQ con 2 comedores 🍖🍽
➡ 1 baño auxiliar 🚻
➡ Kiosco campestre ⛱
➡ Mini cancha de tejo 🎯
➡ Zonas verdes 🌳
➡ Árboles frutales 🍊🍌🍍
➡ Alcantarillado del municipio
➡ Pago de administración mensual : 150.000 pesos `,
    videoYoutube: "https://youtu.be/M7qr_Q6sFcg",
  },
  {
    tipo: "Casa",
    nombre: "Casa en Condominios",
    referencia: "C. 021",
    imagenes: ["Ref. C. 21/1.jpeg",
             "Ref. C. 21/2.jpeg",
             "Ref. C. 21/3.jpeg",
             "Ref. C. 21/4.jpeg",
             "Ref. C. 21/5.jpeg",
             "Ref. C. 21/6.jpeg",
             "Ref. C. 21/7.jpeg",
             "Ref. C. 21/8.jpeg",
             "Ref. C. 21/9.jpeg",
             "Ref. C. 21/10.jpeg",
             "Ref. C. 21/11.jpeg",
             "Ref. C. 21/12.jpeg",
             "Ref. C. 21/13.jpeg",
             "Ref. C. 21/14.jpeg",],
    precio: "$850.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "1,045 m²",
    areaPrivada:"1,045 m²",
    areaConstruida:"273 m²",
    habitaciones: "3",
    banos: "4",
    descripcion: `📌 Venta de Casa dentro de condominio exclusivo, en Moniquirá Boyacá.

📐 Área del lote: 1045 Mt2.”
📐 Área Construida: 273 mt2

✅ Amplios senderos peatonales
✅ 3 habitaciones con closet, todas con baño
✅ 4 baños
✅ Jacuzzi 
✅Cocina integral y sala comedor 
✅ zona de lavandería
✅ Parqueaderos: Dos (2) cubiertos y tres (3) descubiertos, con capacidad total para cinco (5) vehículos.
✅ Zonas Verdes con cítricos 
✅ Zona BBQ (Buena Ventilación) Acero Inoxidable 
✅ Gran Balcón, con excelente vista
✅ Gas natural
✅ luz eléctrica
✅ punto de agua
✅ Zonas sociales, piscina, salón social, cancha de básquet, de voleibol,
portón automático se abre desde el celular
✅Si  deseas puedes instalar internet de fibra óptica..`,
    videoYoutube: "https://youtu.be/eMXcAzKSLXw",
  },
  {
    tipo: "Casa",
    nombre: "Casa Urbana",
    referencia: "C. 022",
    imagenes: ["Ref. C. 22/1.jpg",
             "Ref. C. 22/2.jpg",
             "Ref. C. 22/3.jpg",
             "Ref. C. 22/4.jpg",
             "Ref. C. 22/5.jpg",
             "Ref. C. 22/6.jpg",
             "Ref. C. 22/7.jpg",
             "Ref. C. 22/8.jpg",
             "Ref. C. 22/9.jpg",
             "Ref. C. 22/10.jpg",
             "Ref. C. 22/11.jpg",
             "Ref. C. 22/12.jpg",
             "Ref. C. 22/13.jpg",
             "Ref. C. 22/14.jpg",
             "Ref. C. 22/15.jpg",],
    precio: "$950.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "1,000 m²",
    areaPrivada:"1,000 m²",
    areaConstruida:"400 m²",
    habitaciones: "8",
    banos: "5",
    descripcion: `📌VENTA DE CASA URBANA EN MONIQUIRA – BOYACA

👉🏻Características Generales

✔Ubicada Sobre el Perímetro Urbano
✔Dos Casas
✔Parqueaderos
✔Bbq
✔Tanques de reserva
✔Propiedad en su totalidad Cercada
✔Buena Iluminación y vista

👉🏻CARACTERÍSTICAS ESPECIFICAS

👉🏻PRIMERA CASA (PRINCIPAL)
✔4 habitaciones
✔2 baños
✔Sala Comedor
✔Cocina
✔Amplios Corredores
✔Zona de Lavandería

👉🏻SEGUNDA CASA

✔4 habitaciones
✔3 baños
✔Sala Comedor
✔Cocina
✔Corredor Amplio
✔Zona de Lavandería

👉🏻ÁREA EXTERIOR

✔Amplias Zonas Verdes
✔1 parqueadero Cubierto para una Camioneta
✔Parqueadero Exterior Capacidad 4 Carros
✔Portón
✔Muro fachada
✔Zona BBQ
✔Balcón amplio (Para Quiosco)
✔Árboles frutales (cítricos)

👌🏻Documentos al día
👌🏻Se recibe permuta como parte de pago`,
    videoYoutube: "https://www.youtube.com/watch?v=aMlZLWIDy3o&t=9s",
  },
  {
    tipo: "Casa",
    nombre: "Casa Quinta",
    referencia: "C. 023",
    imagenes: ["Ref. C. 23/1.jpg",
             "Ref. C. 23/2.jpg",
             "Ref. C. 23/3.jpg",
             "Ref. C. 23/4.jpg",
             "Ref. C. 23/5.jpg",
             "Ref. C. 23/6.jpg",
             "Ref. C. 23/7.jpg",
             "Ref. C. 23/8.jpg",
             "Ref. C. 23/9.jpg",],
    precio: "$950.000.000",
    ubicacion: "Cite, Santander",
    area: "1,000 m²",
    areaPrivada:"1,000 m²",
    areaConstruida:"280 m²",
    habitaciones: "3",
    banos: "4",
    descripcion: `📌Invierte en el lugar perfecto, donde el ambiente y tranquilidad que te ofrece la naturaleza se unen con la comodidad de la ciudad.

Venta de Casas quintas dentro de conjunto cerrado en Cite - Santander
Ubicación:  A 3km desde la Y que está ubicada sobre la vía principal que conduce de Barbosa a Cite y a tan solo 800 mt de la Universidad Industrial de Santander.

Temperatura: 23 a 25ºC

📐Casas de 280 mt2 en lotes desde 1.000 mt2
Con excelente vista, ambiente sano y seguro con fácil acceso

👉🏿 Entrada con portería vigilada (vehicular y peatonal 24/7)
👉🏿 Circuito cerrado de Vigilancia
👉🏿 Piscina apta para niños y adultos
👉🏿 Parque infantil
👉🏿 Exclusiva cancha de tenis
👉🏿 Zonas verdes
👉🏿 Salón Social
👉🏿 Cancha de tenis


Goza de buena iluminación y ventilación, en casas de una sola planta, pensadas para todos los miembros de la familia.

Con parqueadero para tres vehículos, con dos accesos al interior de la casa en la que encontraras:

👉🏿 Sala 
👉🏿 Comedor
👉🏿 Cocina Americana
👉🏿 3 alcobas, la principal con Walking closet
👉🏿 Alcoba de servicios
👉🏿 Zona de lavandería
👉🏿 4 Baños
👉🏿 Opción de piscina privada

Servicios:
💧2 Puntos de Agua Veredal
💧1 Punto de agua Municipal
Punto de Gas natural
Energía
Alcantarillado Pluvial y de aguas grises `,
    videoYoutube: "https://youtu.be/pReB9Zdyeo8",
  },
  {
    tipo: "Casa",
    nombre: "Casa Lote Urbano",
    referencia: "C. 024",
    imagenes: ["Ref. C. 24/1.jpg",
             "Ref. C. 24/2.jpg",
             "Ref. C. 24/3.jpg",
             "Ref. C. 24/4.jpg",
             "Ref. C. 24/5.jpg",
             "Ref. C. 24/6.jpg",
             "Ref. C. 24/7.jpg",
             "Ref. C. 24/8.jpg",
             "Ref. C. 24/9.jpg",
             "Ref. C. 24/10.jpg",
             "Ref. C. 24/11.jpg",],
    precio: "$995.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "1,420 m²",
    areaPrivada:"1,420 m²",
    areaConstruida:"- m²",
    habitaciones: "4",
    banos: "2",
    descripcion: `📌 Venta de Casa - Lote en Moniquirá – Boyacá

📏 Area: 1.420 mt2
  Ubicado: Perímetro Urbano 
✔La Propiedad cuenta con todos los Servicios Públicos
✔Ubicada a 5 Minutos del parque principal `,
    videoYoutube: "https://youtu.be/WOs7xb1X1sA",
  },
   {
    tipo: "Casa",
    nombre: "Casa Lote Urbano",
    referencia: "C. 025",
    imagenes: ["Ref. C. 25/1.jpeg",
             "Ref. C. 25/2.jpeg",
             "Ref. C. 25/3.jpeg",
             "Ref. C. 25/4.jpeg",
             "Ref. C. 25/5.jpeg",
             "Ref. C. 25/6.jpeg",
             "Ref. C. 25/7.jpeg",
             "Ref. C. 25/8.jpeg",],
    precio: "$1.150.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "520 m²",
    areaPrivada:"520 m²",
    areaConstruida:"- m²",
    habitaciones: "3",
    banos: "2",
    descripcion: `📌 Casa lote Urbano en venta en Moniquirá - Boyacá,

📍 Ubicado en un excelente sector de alta valorización 
📐 Área: 520 metros cuadrados
✔️Cuenta con Todos los servicios públicos
✔️está ubicado a unos pasos del parque principal de Municipio. 
✔️Uso residencial 
✔️Cuenta con de una Casa y un local comercial 
✔️Documentos al día 
✔️ Ubicado en una zona comercial y residencial `,
    videoYoutube: "https://youtu.be/RyukLWNBP1M",
  },
   {
    tipo: "Casa",
    nombre: "Casa en Condominio",
    referencia: "C. 026",
    imagenes: ["Ref. C. 26/1.jpg",
             "Ref. C. 26/2.jpg",
             "Ref. C. 26/3.jpg",
             "Ref. C. 26/4.jpg",
             "Ref. C. 26/5.jpg",
             "Ref. C. 26/6.jpg",
             "Ref. C. 26/7.jpg",
             "Ref. C. 26/8.jpg",
             "Ref. C. 26/9.jpg",],
    precio: "$1.200.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "1,170 m²",
    areaPrivada:"1,170 m²",
    areaConstruida:"480 m²",
    habitaciones: "6",
    banos: "7",
    descripcion: `🏡VENTA DE CASA EN CONDOMINIO EXCLUSIVO EN MONIQUIRÁ BOYACÁ

📏 AREA TOTAL: 1.170 MT2
📏 AREA CONSTRUIDA: 480 MT2
 💲 Precio:  1.200.000.000 Millones
🍬 2 NIVELES
👉 Primer Nivel
✔2 Habitaciones, con Baño privado
✔Fuente de agua
✔Cocina integral amueblada con mesón Auxiliar
✔Sala de estar y estudio 
✔comedor 
✔1 baño social 
✔1 Baño exterior con regaderas 
✔2 casas para perro 
✔1 Cuarto exterior se puede usar para guardar de herramienta, capilla.
✔Corredores y zonas verdes
✔Parqueadero Cubierto
✔Espacio para Ejercitarse, 
👉Segundo Nivel
✔Estación de café o estudio
✔4 habitaciones cada una con baño privado 
✔4 baños 
✔Balcones en las habitaciones
✔Jacuzzy 
✔1 Sala de estar.
✔Balcones con excelente vista 
✔Mirador, Excelentes Paisajes
👉Otros
⏳Ubicada a 5 minutos del Parque Principal
⚡ Servicios: Agua, Energía Eléctrica, punto de gas 
✔Excelentes acabados 
✔Valor Administración: 175.000 pesos
✔Estrato 3
✔Buenas Vías de Acceso
✔Espacio para jardín o huerta
✔Portón Principal
✔Parqueadero para 4 Vehículos
✔Seguridad
✔Zonas sociales, Piscina cancha de basquetbol `,
    videoYoutube: "https://youtu.be/kyAVuzNEJLY",
  },
   {
    tipo: "Casa",
    nombre: "Casa en Condominio Cerrado",
    referencia: "C. 027",
    imagenes: ["Ref. C. 27/1.jpg",
             "Ref. C. 27/2.jpg",
             "Ref. C. 27/3.jpg",
             "Ref. C. 27/4.jpeg",
             "Ref. C. 27/5.jpeg",
             "Ref. C. 27/6.jpeg",
             "Ref. C. 27/7.jpeg",
             "Ref. C. 27/8.jpeg",
             "Ref. C. 27/9.jpeg",
             "Ref. C. 27/10.jpeg",
             "Ref. C. 27/11.jpeg",
             "Ref. C. 27/12.jpeg",
             "Ref. C. 27/13.jpeg",
             "Ref. C. 27/14.jpeg",
             "Ref. C. 27/15.jpeg",],
    precio: "$3.000.000.000",
    ubicacion: "La Calera, Cundinamarca",
    area: "1,398 m²",
    areaPrivada:"1,398 m²",
    areaConstruida:"464 m²",
    habitaciones: "4",
    banos: "6",
    descripcion: `🏡 Venta de Casa en Condominio – La Calera

💰 Precio: $3.000.000.000
📏 Área privada: 1.398 m²
🏠 Área construida: 464 m²
📅 Año de construcción: 2018
💳 Administración: $800.000
📍 Ubicación: Altos Patios

Características principales:
🛏️ 4 habitaciones
🛁 6 baños
🚗 4 garajes
🛣️ Acceso pavimentado
⚽ Cancha de fútbol
🏋️ Gimnasio
🏢 Salón comunal
🌳 Zona campestre / bosques nativos
🤝 Área social
🎾 Cancha de squash y de tenis
📺 Circuito cerrado de TV
🅿️ Parqueadero de visitantes
🏘️ Urbanización cerrada
🏡 Club House
🛡️ Portería, recepción y vigilancia `,
    videoYoutube: "",
  },
  /* ================= lote ================= */
   {
    tipo: "Lote",
    nombre: "Lote en Condominio",
    referencia: "LT. 001",
    imagenes: ["Ref. LT. 01/1.jpg",
             "Ref. LT. 01/2.jpg",
             "Ref. LT. 01/3.jpg",
             "Ref. LT. 01/4.jpg",
             "Ref. LT. 01/5.jpg",
             "Ref. LT. 01/6.jpg",
             "Ref. LT. 01/7.jpg",
             "Ref. LT. 01/8.jpg",
             "Ref. LT. 01/9.jpg",
             "Ref. LT. 01/10.jpg",
             "Ref. LT. 01/11.jpg",
             "Ref. LT. 01/12.jpg",
             "Ref. LT. 01/13.jpg",],
    precio: "$43.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "1,287 m²",
    areaPrivada:"1,287 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `🏡 Venta de Lotes en Condominio – Moniquirá, Boyacá

📍 Ubicados a tan solo 5 minutos del casco urbano
🛣️ Vía pavimentada hasta la entrada del condominio
📐 Áreas y precios:
✅lote 31: 📐1.287 m²= 40 millones 
✅lote 33: 📐 1.645 m²= 50 millones
✅lote 8: 📐629 m²= 70 millones
✅lote 13: 📐1.157 m²= 90 millones 
💧⚡🔥 Servicios disponibles:
✅ Agua
✅ Luz
✅ Gas

💦 Acueducto propio con reservorio natural, que garantiza el abastecimiento de agua `,
    videoYoutube: "https://youtu.be/IIK3hd4l3UA",
  },
   {
    tipo: "Lote",
    nombre: "Lote",
    referencia: "LT. 002",
    imagenes: ["Ref. LT. 02/1.jpg",
             "Ref. LT. 02/2.jpg",
             "Ref. LT. 02/3.jpg",
             "Ref. LT. 02/4.jpg",
             "Ref. LT. 02/5.jpg",
             "Ref. LT. 02/6.jpg",
             "Ref. LT. 02/7.jpg",
             "Ref. LT. 02/8.jpg",
             "Ref. LT. 02/9.jpg",
             "Ref. LT. 02/10.jpg",
             "Ref. LT. 02/11.jpg",
             "Ref. LT. 02/12.jpg",
             "Ref. LT. 02/13.jpg",
             "Ref. LT. 02/14.jpg",
             "Ref. LT. 02/15.jpg",],
    precio: "$55.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "500 m²",
    areaPrivada:"500 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `📌VENTA DE LOTES RURALES EN MONIQUIRÁ- BOYACÁ 

📏Áreas del lote 500 Mts2 hasta 1.100 mts2 
📏 Áreas de la cabaña: 40 mts2 y 150 mts2
✔ Se entrega con punto de agua instalado 
✔ Se entrega con punto de punto de luz instalado
✔ Vía de Acceso Hasta el Lote 
✔ Cerca de lugares turísticos como la cascada del zorro 
✔ A 8 kilómetros pueblo 
✔ A 22 minutos de distancia del parque principal de Moniquirá Boyacá 
✔ Excelente vista 
✔ Senderos ecológicos 
✔ Zonas sociales 
✔ Ideal para construir tu cabaña 
Precio: Cabaña Tipo 1, 40Mts2 120 millones en un lote de 700 Mts2
Precio: Cabaña Tipo 2, 150 Mts2 220 millones en un lote de 700 Mts2`,
    videoYoutube: "https://youtu.be/uITRIPGSBtE",
  },
  {
    tipo: "Lote",
    nombre: "Lotes",
    referencia: "LT. 003",
    imagenes: ["REF. LT. 03/1.jpg",
             "REF. LT. 03/2.jpg",
             "REF. LT. 03/3.jpg",
             "REF. LT. 03/4.jpg",
             "REF. LT. 03/5.jpg",
             "REF. LT. 03/6.jpg",
             "REF. LT. 03/7.jpg",
             "REF. LT. 03/8.jpg",
             "REF. LT. 03/9.jpg",
             "REF. LT. 03/10.jpg",
             "REF. LT. 03/11.jpg",
             "REF. LT. 03/12.jpg",
             "REF. LT. 03/13.jpg",],
    precio: "$60.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "120 m²",
    areaPrivada:"120 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `📌 Venta de lote rural en Moniquirá - Boyacá

📐Área: 8 x 15 metros. 120 metros cuadrados
📌Ubicado a 2.3 kilómetros del pueblo, equivalen a 6 minutos del municipio.
✔️Cuenta la disponibilidad de instalar punto de luz y gas natural   
✔️Topografía totalmente plano.
✔️El 90% de la vía es pavimentada, y el otro 10% es destapado en buen estado.`,
    videoYoutube: "https://youtu.be/gYl7-P8GZks",
  },
  {
    tipo: "Lote",
    nombre: "Lotes",
    referencia: "LT. 004",
    imagenes: ["REF. LT. 04/1.jpg",
             "REF. LT. 04/2.jpg",
             "REF. LT. 04/3.jpg",
             "REF. LT. 04/4.jpg",
             "REF. LT. 04/5.jpg",
             "REF. LT. 04/6.jpg",
             "REF. LT. 04/7.jpg",
             "REF. LT. 04/8.jpg",
             "REF. LT. 04/9.jpg",
             "REF. LT. 04/10.jpg",
             "REF. LT. 04/11.jpg",
             "REF. LT. 04/12.jpg",
             "REF. LT. 04/13.jpg",
             "REF. LT. 04/14.jpg",],
    precio: "$69.000.000",
    ubicacion: "Barbosa, Santander",
    area: "72 m²",
    areaPrivada:"72 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `🟢Se vende lote – Barbosa, Santander
¿Buscas el lugar perfecto para invertir o construir tu nuevo hogar? 🏡✨

🌟 Excelente lote disponible
📌 Ubicado a solo 300 metros abajo de la Universidad Industrial de Santander (UIS)
🏞️ Zona tranquila, segura y con un entorno ideal para vivir o desarrollar un proyecto rentable.

📐 Área: 72 m²
Un espacio perfecto para construir a tu gusto.

⚡ Servicios públicos disponibles para solicitar:
💡 Luz
🚰 Agua
🔥 Gas`,
    videoYoutube: "https://youtu.be/CtM5iNxqIig",
  },
  {
    tipo: "Lote",
    nombre: "Lote Urbano",
    referencia: "LT. 005",
    imagenes: ["Ref. LT. 05/1.jpg",
             "Ref. LT. 05/2.jpg",
             "Ref. LT. 05/3.jpg",
             "Ref. LT. 05/4.jpg",
             "Ref. LT. 05/5.jpg",
             "Ref. LT. 05/6.jpg",
             "Ref. LT. 05/7.jpg",
             "Ref. LT. 05/8.jpg",
             "Ref. LT. 05/9.jpg",
             "Ref. LT. 05/10.jpg",
             "Ref. LT. 05/11.jpg",
             "Ref. LT. 05/12.jpg",
             "Ref. LT. 05/13.jpg",
             "Ref. LT. 05/14.jpg",
             "Ref. LT. 05/15.jpg",],
    precio: "$78.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "84 m²",
    areaPrivada:"84 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `📌 Lote Urbano en venta en Moniquirá - Boyacá,

📐Area: 84 mt2
📌Ubicado a 4 cuadras del parque Santander
✔️cuenta con Todos los servicios publicos
✔️documentos al día
✔️Alcantarillado interno
✔️Disponibilidad, para tramitar licencia de construción.`,
    videoYoutube: "https://www.youtube.com/watch?v=QojWbtiaTAM&t=4s",
  },
  {
    tipo: "Lote",
    nombre: "Lotes Urbanos",
    referencia: "LT. 006",
    imagenes: ["Ref. LT. 06/1.jpeg",
             "Ref. LT. 06/2.jpeg",
             "Ref. LT. 06/3.jpeg",
             "Ref. LT. 06/4.jpeg",
             "Ref. LT. 06/5.jpeg",
             "Ref. LT. 06/6.jpeg",
             "Ref. LT. 06/7.jpeg",
             "Ref. LT. 06/8.jpeg",
             "Ref. LT. 06/9.jpeg",
             "Ref. LT. 06/10.jpeg",],
    precio: "$85.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "157 m²",
    areaPrivada:"157 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `📌 Lotes Urbanos en venta en Moniquirá - Boyacá,

📌Ubicado en un barrio residencial
✔️cuenta con Todos los servicios publicos
✔️documentos al día 
✔️Uso residencial
✔️estan ubicados a dos cuadras del parque Santander 

💸Precios y áreas de los lotes:
📐Lote # 1   Área: 157M2  $ 85.000.000 millones de pesos
📐Lote # 2.  Área: 157 M2  $ 115.000.000 millones de pesos
📐Lote # 3   Área: 192 M2  $160.000.000 millones de pesos
📐Lote # 5   Área: 238 M2 $198.000.000 millones de pesos`,
    videoYoutube: "https://youtu.be/beHO-48Z-3s",
  },
  {
    tipo: "Lote",
    nombre: "Lotes",
    referencia: "LT. 007",
    imagenes: ["Ref. LT. 07/1.jpeg",
             "Ref. LT. 07/2.jpeg",
             "Ref. LT. 07/3.jpeg",
             "Ref. LT. 07/4.jpeg",],
    precio: "$110.000.000",
    ubicacion: "Cite, Santander",
    area: "300 m²",
    areaPrivada:"300 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `📌 ¡Venta de Lotes en Cite, Santander!

¡Invierte en una zona con gran proyección de valorización! Disponibles 5 lotes amplios, todos con servicios públicos completos (agua, luz, gas natural y alcantarillado), escritura independiente y excelente ubicación.

🟩 Detalles de los Lotes:
✅ Lote 1 – Área: 304 m² – 💸 $140.000.000
✅ Lote 2 – Área: 303,70 m² – 💸 $110.000.000
✅ Lote 3 – Área: 300,70 m² – 💸 $130.000.000
✅ Lote 4 – Área: 300,70 m² – 💸 $120.000.000
✅ Lote 5 – Área: 312,70 m² – 💸 $115.000.000 `,
    videoYoutube: "https://youtu.be/f8-LuSuXE5k",
  }, 
  {
    tipo: "Lote",
    nombre: "Lote",
    referencia: "LT. 008",
    imagenes: ["Ref. LT. 08/1.jpeg",
             "Ref. LT. 08/2.jpeg",
             "Ref. LT. 08/3.jpeg",
             "Ref. LT. 08/4.jpeg",
             "Ref. LT. 08/5.jpeg",
             "Ref. LT. 08/6.jpeg",
             "Ref. LT. 08/7.jpeg",
             "Ref. LT. 08/8.jpeg",
             "Ref. LT. 08/9.jpeg",
             "Ref. LT. 08/10.jpeg",
             "Ref. LT. 08/11.jpeg",
             "Ref. LT. 08/12.jpeg",
             "Ref. LT. 08/13.jpeg",
             "Ref. LT. 08/14.jpeg",
             "Ref. LT. 08/15.jpeg",],
    precio: "$120.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "2,500 m²",
    areaPrivada:"2,500 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `📌 VENTA DE LOTE EN MONIQUIRA – BOYACA

📏 Área: 2.500 mt2
👉🏻 Perímetro Rural
👉🏻 Vereda: Chovo
👉🏻Cerca de Vía Principal (Moniquirá – Santa Sofia 400 mts)
👉🏻Vía hasta el lote

✔Terreno Semiplano
✔Acceso a Punto de Agua Veredal
✔Excelente vista
✔Buen estado de la Vía
✔Acceso a punto de energía eléctrica `,
    videoYoutube: "https://youtu.be/2BeopAk18o8",
  },
   {
    tipo: "Lote",
    nombre: "Lote en Condominio",
    referencia: "LT. 009",
    imagenes: ["Ref. LT. 09/1.jpg",
             "Ref. LT. 09/2.jpg",
             "Ref. LT. 09/3.jpg",
             "Ref. LT. 09/4.jpg",
             "Ref. LT. 09/5.jpg",
             "Ref. LT. 09/6.jpg",
             "Ref. LT. 09/7.jpg",
             "Ref. LT. 09/8.jpg",
             "Ref. LT. 09/9.jpg",],
    precio: "$135.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "1,153 m²",
    areaPrivada:"1,153 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `📌 Venta de lotes dentro de Condominio en Moniquirá Boyacá

📏Área:  1.153 metros

✔️Lote número 11 
✔️Cada lote cuenta con licencia de construcción para una casa de 2 pisos más altillo (MODELO DE CONSTRUCIÓN LIBRE)
✔️Servicios de agua veredal, energía eléctrica 
✔️Dos vías de acceso a la propiedad, así como una fanegada para áreas sociales
✔️Lotes de alta valorización.
✔️Buena Vista
✔️Ambiente Natural
✔️Ubicados a 800 metros antes de la primera entrada al municipio, vía Tunja – Moniquirá
✔️Acceso pavimentado hasta el condominio y cerca al municipio  `,
    videoYoutube: "https://youtu.be/lKo5TlLiOzk",
  },
  {
    tipo: "Lote",
    nombre: "Lote",
    referencia: "LT. 010",
    imagenes: ["Ref. LT. 10/1.jpg",
             "Ref. LT. 10/2.jpg",
             "Ref. LT. 10/3.jpg",
             "Ref. LT. 10/4.jpg",
             "Ref. LT. 10/5.jpg",
             "Ref. LT. 10/6.jpg",
             "Ref. LT. 10/7.jpg",
             "Ref. LT. 10/8.jpg",
             "Ref. LT. 10/9.jpg",],
    precio: "$140.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "2,530 m²",
    areaPrivada:"2,530 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `📌 Venta de lote rural en Moniquirá – Boyacá

📏 Área: 2.530 mt2

👉🏻 Perímetro Rural
👉🏻 Vereda: Tapias y San Antonio, Sector Pajales
👉🏻 carretera desatada, se recomienda tener campero, está a una distancia de 9.1 kilómetros, 22 minutos desde el municipio de Moniquirá, 

✔ Terreno Plano
✔ Pasa una quebrada por el lote 
✔ Excelente vista
✔ Acceso a punto de energía eléctrica
✔ cuenta con tres vías de acceso `,
    videoYoutube: "https://youtu.be/GJNmj6I9TFY",
  },
  {
    tipo: "Lote",
    nombre: "Lote Urbano",
    referencia: "LT. 011",
    imagenes: ["Ref. LT. 11/1.jpeg",
             "Ref. LT. 11/2.jpeg",
             "Ref. LT. 11/3.jpeg",
             "Ref. LT. 11/4.jpeg",
             "Ref. LT. 11/5.jpeg",],
    precio: "$145.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "99 m²",
    areaPrivada:"99 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `🏡 VENTA DE LOTE URBANO
📍 Moniquirá, Boyacá

📐 Área total: 99 m²

Frente: 6,60 m

Fondo: 15 m

Topografía: Totalmente plana

✨ Características del lote

✔️ Servicio de agua
✔️ Energía eléctrica
✔️ Alcantarillado
✔️ Vía adoquinada
✔️ Permite construcción hasta de 4 pisos`,
    videoYoutube: "https://youtu.be/pAa0sWAKSmA",
  },
   {
    tipo: "Lote",
    nombre: "Lote en Condominio",
    referencia: "LT. 012",
    imagenes: ["Ref. LT. 12/1.jpeg",
             "Ref. LT. 12/2.jpeg",
             "Ref. LT. 12/3.jpeg",
             "Ref. LT. 12/4.jpeg",
             "Ref. LT. 12/5.jpeg",],
    precio: "$160.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "915 m²",
    areaPrivada:"915 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `📌 Venta de lote dentro de condominio exclusivo, en Moniquirá Boyacá.

📐 Área del lote: 915 Mt2
Topografía: Lote con topografía inclinada de pendiente constante, apta para construcción con adecuaciones mínimas.”

✅ Amplios senderos peatonales

Cuenta con todos los servicios:

✅ Gas natural
✅ luz eléctrica
✅ punto de agua
✅ Zonas sociales, piscina, salón social, cancha de básquet, de voleibol,
portón automático se abre desde el celular
✅Si  deseas puedes instalar internet de fibra óptica..`,
    videoYoutube: "https://youtu.be/GIaLj9XbMWI",
  },
   {
    tipo: "Lote",
    nombre: "Lote en Condominio",
    referencia: "LT. 013",
    imagenes: ["Ref. LT. 13/1.jpg",
             "Ref. LT. 13/2.jpg",
             "Ref. LT. 13/3.jpg",
             "Ref. LT. 13/4.jpg",
             "Ref. LT. 13/5.jpg",],
    precio: "$160.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "1,399 m²",
    areaPrivada:"1,399 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `📌 Venta de lotes dentro de Condominio en Moniquirá Boyacá

📏 Área:  1.399 metros cuadrados
✔️Lote número 10
✔️Cada lote cuenta con licencia de construcción para una casa de 2 pisos más altillo (MODELO DE CONSTRUCIÓN LIBRE)
✔️ Servicios de agua veredal, energía eléctrica 
✔️Dos vías de acceso a la propiedad, así como una fanegada para áreas sociales
✔️Lotes de alta valorización. 
✔️Buena Vista
✔️ Ambiente Natural
✔️ Ubicados a 800 metros antes de la primera entrada al municipio, vía Tunja – Moniquirá
✔️ Acceso pavimentado hasta el condominio y cerca al municipio `,
    videoYoutube: "https://youtu.be/5j7nmDEquPw",
  },
   {
    tipo: "Lote",
    nombre: "Lote en Condominio",
    referencia: "LT. 014",
    imagenes: ["Ref. LT. 14/1.jpeg",
             "Ref. LT. 14/2.jpeg",
             "Ref. LT. 14/3.jpeg",
             "Ref. LT. 14/4.jpeg",
             "Ref. LT. 14/5.jpeg",
             "Ref. LT. 14/6.jpeg",
             "Ref. LT. 14/7.jpeg",
             "Ref. LT. 14/8.jpeg",
             "Ref. LT. 14/9.jpeg",
             "Ref. LT. 14/10.jpg",],
    precio: "$170.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "1,110 m²",
    areaPrivada:"1,110 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `📌 Lote en venta dentro de condominio, en Moniquirá Boyacá.

📐 Área del lote: 1.110 Mt2
Topografía: plana con una pendiente de inclinación minima

✅ Amplios senderos peatonales

Cuenta con todos los servicios:

✅ Gas natural
✅ luz eléctrica
✅ punto de agua
✅ Zonas sociales: piscina, salón social, cancha de básquet, de voleibol y además cuenta con un portón automático que se abre desde el celular.`,
    videoYoutube: "https://youtu.be/ApOfWWArBkw",
  },
   {
    tipo: "Lote",
    nombre: "Lote Urbano",
    referencia: "LT. 015",
    imagenes: ["Ref. LT. 15/1.jpeg",
             "Ref. LT. 15/2.jpeg",
             "Ref. LT. 15/3.jpeg",
             "Ref. LT. 15/4.jpeg",],
    precio: "$175.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "131 m²",
    areaPrivada:"131 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `📌 Lote Urbano en venta en Moniquirá - Boyacá,

📐Área: 131 mt2
📌Ubicado en un barrio residencial, muy valorizado
✔️ El barrio cuenta con un parque de zonas verdes
✔️cuenta con Todos los servicios publicos
✔️documentos al día
✔️Alcantarillado interno
✔️Uso residencial`,
    videoYoutube: "https://youtu.be/bVqU0IkkRcs",
  },
   {
    tipo: "Lote",
    nombre: "Lotes en Condominio",
    referencia: "LT. 016",
    imagenes: ["Ref. LT. 16/1.jpeg",
             "Ref. LT. 16/2.jpeg",
             "Ref. LT. 16/3.jpeg",
             "Ref. LT. 16/4.jpeg",
             "Ref. LT. 16/5.jpeg",
             "Ref. LT. 16/6.jpeg",
             "Ref. LT. 16/7.jpeg",
             "Ref. LT. 16/8.jpeg",
             "Ref. LT. 16/9.jpeg",],
    precio: "$179.900.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "425 m²",
    areaPrivada:"425 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `📌Venta de Lotes en condominio en Moniquirá – Boyacá 
Contamos con 2 lotes disponibles en Condominio Campestre. Ubicado en Moniquirá, Boyacá

📏Áreas
✅ Lote 3 – Área: 1.318,94 m²
✅ Lote 6 – Área: 1.521,69 m²
✅ Amplios senderos peatonales
El condominio cuenta con:
✨ Portería, lago, piscina, quioscos, BBQ
✨ Zonas verdes, zona de juegos, acceso al río
✨ Planta de tratamiento de aguas
✨ Servicios públicos completos: agua, luz, gas y alcantarillado
✨ Escritura independiente
🏡 Además, si deseas adquirir tu lote y construir tu casa con nosotros, recibirás totalmente gratis el diseño arquitectónico personalizado.
💸 Precios:
💸Lote 3: 179’900.000
💸Lote 6: 179’900.000l`,
    videoYoutube: "https://youtu.be/BmScr0QFKfo",
  },
   {
    tipo: "Lote",
    nombre: "Lote en Condominio",
    referencia: "LT. 017",
    imagenes: ["Ref. LT. 17/1.jpeg",
             "Ref. LT. 17/2.jpeg",
             "Ref. LT. 17/3.jpeg",
             "Ref. LT. 17/4.jpeg",
             "Ref. LT. 17/5.jpeg",
             "Ref. LT. 17/6.jpeg",
             "Ref. LT. 17/7.jpeg",],
    precio: "$189.000.000",
    ubicacion: "Puente Nacional, Santander",
    area: "996 m²",
    areaPrivada:"996 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `🏡 VENTA DE LOTE EN CONDOMINIO – PUENTE NACIONAL, SANTANDER

📍 Condominio Chaneque
📐 Área: 996 m²

✨ Características del lote
💧 Agua
⚡ Energía eléctrica
🔥 Gas natural
🛠️ Pozo séptico
🏗️ Libre construcción
🚪 Portón eléctrico
🛣️ Vía adoquinada

🌿 Zonas y áreas comunes
🏓 Mesa de pimpón
🏀 Cancha múltiple
🌴 Zona de hamacas
💦 Piscina
🧖 Sauna
🧖‍♂️ Turco
🏛️ Salón comunal`,
    videoYoutube: "https://youtu.be/pbxH9u49Gis",
  },
   {
    tipo: "Lote",
    nombre: "Lote",
    referencia: "LT. 018",
    imagenes: ["Ref. LT. 18/1.jpg",
             "Ref. LT. 18/2.jpg",
             "Ref. LT. 18/3.jpg",
             "Ref. LT. 18/4.jpg",
             "Ref. LT. 18/5.jpg",
             "Ref. LT. 18/6.jpg",
             "Ref. LT. 18/7.jpg",
             "Ref. LT. 18/8.jpg",
             "Ref. LT. 18/9.jpg",
             "Ref. LT. 18/10.jpg",],
    precio: "$210.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "4,291 m²",
    areaPrivada:"4,291 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `Lotes campestres en venta en Moniquirá - Boyacá

📐 Áreas: 5.000 metros cuadrados.
📌 Ubicados en la vereda El Colorado de Moniquirá, Boyacá. Zona de alta valorización.
✔️ A 18 minutos (7,3 kilómetros) del municipio de Moniquirá.
✔️ Disponibilidad para instalar punto de agua, luz y gas natural.
✔️ Documentos al día, listos para una transacción exitosa.
✔️ Puedes construir la casa de tus sueños.
✔️ Un lugar tranquilo.
✔️ Dos lotes incluyen cabaña construida para tu descanso.
💸 Precio: a partir de 210.000.000 de pesos.
📕 Documentos al día.`,
    videoYoutube: "https://www.youtube.com/watch?v=wNLakzJaosI",
  },
   {
    tipo: "Lote",
    nombre: "Lotes",
    referencia: "LT. 019",
    imagenes: ["Ref. LT. 19/1.jpg",
             "Ref. LT. 19/2.jpg",
             "Ref. LT. 19/3.jpg",
             "Ref. LT. 19/4.jpg",
             "Ref. LT. 19/5.jpg",
             "Ref. LT. 19/6.jpg",
             "Ref. LT. 19/7.jpg",
             "Ref. LT. 19/8.jpg",
             "Ref. LT. 19/9.jpg",
             "Ref. LT. 19/10.jpg",
             "Ref. LT. 19/11.jpg",
             "Ref. LT. 19/12.jpg",
             "Ref. LT. 19/13.jpg",],
    precio: "$215.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "3,300 m²",
    areaPrivada:"3,300 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `📌Venta de Lotes cerca a la vía principal 
✔️3 Lotes de 3.300 Mts2
✔️1 Lote de 10.135 Mts2
✔️Ubicación: Vereda el chovo Moniquirá Boyacá 
✔️Se puede comprar el punto de agua del acueducto Veredal 
✔️Punto de luz
✔️Vía placa Huella, 
✔️a menos de un 1km de la vía principal santa Sofia. 
💲 Precio: 215.000.000 millones (3300mts2)
💲 Precio: 450.000.000 Millones (10.135mts2`,
    videoYoutube: "https://youtu.be/6CPwk1PU8gc",
  },
   {
    tipo: "Lote",
    nombre: "Lote en Condominio",
    referencia: "LT. 020",
    imagenes: ["Ref. LT. 20/1.jpg",
             "Ref. LT. 20/2.jpg",
             "Ref. LT. 20/3.jpg",
             "Ref. LT. 20/4.jpg",
             "Ref. LT. 20/5.jpg",
             "Ref. LT. 20/6.jpg",
             "Ref. LT. 20/7.jpg",
             "Ref. LT. 20/8.jpg",
             "Ref. LT. 20/9.jpg",
             "Ref. LT. 20/10.jpg",
             "Ref. LT. 20/11.jpg",
             "Ref. LT. 20/12.jpg",
             "Ref. LT. 20/13.jpg",],
    precio: "$220.000.000",
    ubicacion: "Cite, Santander",
    area: "1,000 m²",
    areaPrivada:"1,000 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `📌 Lotes en venta dentro de condominio en Cite - Santander 
Invierte en el lugar perfecto, donde el ambiente y tranquilidad que te ofrece la naturaleza se unen con la comodidad de la ciudad.

Venta de Lotes dentro de conjunto cerrado en Cite - Santander
Ubicación:  A 3km desde la Y que está ubicada sobre la vía principal que conduce de Barbosa a Cite y a tan solo 800 mt de la Universidad Industrial de Santander.
Temperatura: 23 a 25ºC
📐 lotes desde 1.000 mt2
Con excelente vista, ambiente sano y seguro con fácil acceso
👉🏿 Entrada con portería vigilada (vehicular y peatonal 24/7)
👉🏿 Circuito cerrado de Vigilancia
👉🏿 Piscina apta para niños y adultos
👉🏿 Exclusiva cancha de tenis
👉🏿 Zonas verdes
👉🏿 Salón Social
👉🏿 Cancha de tenis
Goza de buena iluminación y ventilación, en casas de una sola planta, pensadas para todos los miembros de la familia.
Si deseas construir tu casa: 
cuenta con parqueadero para tres vehículos, con dos accesos al interior de la casa en la que encontraras:
👉🏿 Sala 
👉🏿 Comedor
👉🏿 Cocina Americana
👉🏿 3 alcobas, la principal con Walking closet
👉🏿 Alcoba de servicios
👉🏿 Zona de lavandería
👉🏿 4 Baños
👉🏿 Opción de piscina privada
Servicios:
💧2 Puntos de Agua Veredal
💧1 Punto de agua Municipal
Punto de Gas natural
Energía
Alcantarillado Pluvial y de aguas grises `,
    videoYoutube: "https://youtu.be/UaBJX_1hitU",
  },
   {
    tipo: "Lote",
    nombre: "Lote",
    referencia: "LT. 021",
    imagenes: ["Ref. LT. 21/1.jpg",
             "Ref. LT. 21/2.jpg",
             "Ref. LT. 21/3.jpg",
             "Ref. LT. 21/4.jpg",
             "Ref. LT. 21/5.jpg",
             "Ref. LT. 21/6.jpg",
             "Ref. LT. 21/7.jpg",
             "Ref. LT. 21/8.jpg",
             "Ref. LT. 21/9.jpg",
             "Ref. LT. 21/10.jpg",
             "Ref. LT. 21/11.jpg",],
    precio: "$230.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "3,500 m²",
    areaPrivada:"3,500 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `🏡 Se venden lotes en Moniquirá , Boyacá

📍 Ubicado en la vereda ubaza Están ubicados a tan solo 12 minutos (4,6 kilómetros) del casco urbano.

📐 Área: 4.000 metros cuadrados
🌄 Topografía ondulada, en su mayoría plana

Disponibilidad de:

⚡ Punto de luz
💧 Acueducto veredal y aljibe
🔥 gas natural

📄 Documentación al día. Escritura con matricula independiente .`,
    videoYoutube: "https://www.youtube.com/watch?v=epFVfZrE9qg",
  },
   {
    tipo: "Lote",
    nombre: "Lote en Condominio",
    referencia: "LT. 022",
    imagenes: ["Ref. LT. 22/1.jpeg",
             "Ref. LT. 22/2.jpeg",
             "Ref. LT. 22/3.jpeg",
             "Ref. LT. 22/4.jpeg",],
    precio: "$245.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "1,597 m²",
    areaPrivada:"1,597 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `📌 Venta de lote en condominio Moniquirá Boyacá

📐 Área del lote: 1.597 Mt2

Topografía: plana con una pendiente de inclinación mínima

✅ Amplios senderos peatonales

Cuenta con todos los servicios:

✅ Luz eléctrica
✅ punto de agua
✅ Zonas sociales: piscina, salón social, cancha de básquet, vigilancia
✅ Está ubicado entre la Moniquirá - Barbosa
✅ Construye la casa de tus sueños.`,
    videoYoutube: "https://youtu.be/G_0s631XGRE",
  },
   {
    tipo: "Lote",
    nombre: "Lote",
    referencia: "LT. 023",
    imagenes: ["Ref. LT. 23/1.jpeg",
             "Ref. LT. 23/2.jpeg",
             "Ref. LT. 23/3.jpeg",
             "Ref. LT. 23/4.jpeg",
             "Ref. LT. 23/5.jpeg",
             "Ref. LT. 23/6.jpeg",
             "Ref. LT. 23/7.jpeg",],
    precio: "$260.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "6,000 m²",
    areaPrivada:"6,000 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `🏡 SE VENDE LOTE EN MONIQUIRÁ, BOYACÁ

📍 Ubicado en la vereda Tierra de Gómez, sector La Capona, sobre la vía pavimentada hacia Santa Sofía.

📐 Área: 6.000 metros cuadrados
🌄 Topografía ondulada, en su mayoría plana
⚡ Punto de luz
💧 Acueducto veredal y aljibe
🚗 A solo 20 minutos del casco urbano de Moniquirá
📄 Documentación al día`,
    videoYoutube: "https://youtu.be/oB5l0_gkj5w",
  },
   {
    tipo: "Lote",
    nombre: "Lote en Condominio",
    referencia: "LT. 024",
    imagenes: ["Ref. LT. 24/1.jpeg",
             "Ref. LT. 24/2.jpeg",
             "Ref. LT. 24/3.jpeg",
             "Ref. LT. 24/4.jpeg",
             "Ref. LT. 24/5.jpeg",
             "Ref. LT. 24/6.jpeg",
             "Ref. LT. 24/7.jpeg",],
    precio: "$260.000.000",
    ubicacion: "Cite, Santander",
    area: "1,000 m²",
    areaPrivada:"1,000 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `📌 Venta de Lotes en Cite Santander.

🌱Hola 👋🏼! Te comparto una excelente oportunidad de inversión, en el corregimiento de Cite Santander.
Contamos con 2 lotes disponibles:
✅ Lote 29 – Área: 895 m²
✅ Lote 30 – Área: 821,70 m²
Cuentan con todos los servicios públicos (agua, luz, gas y alcantarillado), escritura independiente y ubicación estratégica con excelente valorización.
🏡 Además, si deseas adquirir tu lote y construir tu casa con nosotros, recibirás totalmente gratis el diseño arquitectónico personalizado.
🌡️ Temperatura promedio: 12 °C a 25 °C`,
    videoYoutube: "https://youtu.be/QbbpelBdYqc",
  },
   {
    tipo: "Lote",
    nombre: "Lote Urbano",
    referencia: "LT. 025",
    imagenes: ["Ref. LT. 25/1.jpg",
             "Ref. LT. 25/2.jpg",
             "Ref. LT. 25/3.jpg",
             "Ref. LT. 25/4.jpg",
             "Ref. LT. 25/5.jpg",
             "Ref. LT. 25/6.jpg",
             "Ref. LT. 25/7.jpg",
             "Ref. LT. 25/8.jpg",
             "Ref. LT. 25/9.jpg",],
    precio: "$690.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "262 m²",
    areaPrivada:"262 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `📌VENTA DE LOTE URBANO EN MONIQUIRÁ- BOYACÁ

👉Lote Urbano, Ubicado en un punto de Expansión y alta valorización

📏Área total: 262 Mts2
✔️Punto de Agua
✔️Red de Gas
✔️Punto de luz
✔️ Internet por fibra óptica
✔️Tiene disponibilidad para todos los servicios
✔️Terreno plano
✔️Lote esquinero con Doble día de acceso.
✔️19.3 metros x 15 metros
✔️Tiene uso de suelos para zona comercial y residencial.`,
    videoYoutube: "https://www.youtube.com/watch?v=mBRRXE_GTQo",
  },
   {
    tipo: "Lote",
    nombre: "Lote",
    referencia: "LT. 026",
    imagenes: ["Ref. LT. 26/1.jpg",
             "Ref. LT. 26/2.jpg",
             "Ref. LT. 26/3.jpg",
             "Ref. LT. 26/4.jpg",
             "Ref. LT. 26/5.jpg",],
    precio: "$750.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "8,572.2 m²",
    areaPrivada:"8,572.2 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `📌 Venta de Lote en Moniquirá - Boyacá

👉Área: 8.572.2 mt2
👉Lote Semi- Urbano
👉800 mt2 de Moniquirá 
👉Acceso hasta el lote
👉Cerca a la vía principal -Tunja -Moniquirá 
👉Buena proyección 
👉Agua tratada / Acueducto Municipal 
👉 Energía eléctrica 
👉Pasa la red de gas natural `,
    videoYoutube: "https://youtu.be/H4JFyabHQow",
  },
  
   /* ================= finca ================= */
   {
    tipo: "Finca",
    nombre: "Finca",
    referencia: "FC. 001",
    imagenes: ["Ref. FC. 01/1.jpg",
             "Ref. FC. 01/2.jpg",
             "Ref. FC. 01/3.jpg",
             "Ref. FC. 01/4.jpg",
             "Ref. FC. 01/5.jpg",
             "Ref. FC. 01/6.jpg",
             "Ref. FC. 01/7.jpg",
             "Ref. FC. 01/8.jpg",
             "Ref. FC. 01/9.jpg",
             "Ref. FC. 01/10.jpg",],
    precio: "$65.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "1,890 m²",
    areaPrivada:"1,890 m²",
    areaConstruida:"20 m²",
    habitaciones: "-",
    banos: "-",
    descripcion: `📌VENTA DE LOTE EN MONIQUIRÁ- BOYACÁ

👉Lote ubicado en vereda monjas
📏Área: 1.890 mt2 
📏Área Cuarto de Herramientas: 20 mt2 
✔ Punto de Agua del acueducto Veredal
✔ Punto de luz
✔ Terreno Semiplano 
✔ Vía de Acceso Hasta el Lote `,
    videoYoutube: "https://youtu.be/5OZRUQm98Bk",
  },
   {
    tipo: "Finca",
    nombre: "Finca",
    referencia: "FC. 002",
    imagenes: ["Ref. FC. 02/1.JPG",
             "Ref. FC. 02/2.JPG",
             "Ref. FC. 02/3.JPG",
             "Ref. FC. 02/4.JPG",
             "Ref. FC. 02/5.JPG",
             "Ref. FC. 02/6.JPG",],
    precio: "$240.000.000",
    ubicacion: "Vélez, Santander",
    area: "20,000 m²",
    areaPrivada:"20,000 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `Vélez -Santander (2 héctareas)

Ubicación: 6 kilometros de la vía principal que conduce del
Municipio de Barbosa a Vélez santander .
👉Cuenta con aceptables vías de acceso
📏Área: 2 Hectáreas
👉Cuenta con punto de agua
👉Punto de luz
👉 Punto de gas natural
✅Linda a una quebrada natural de agua.
✅La propiedad cuenta con diferentes tipos de topografía, plano, y semiondulado`,
    videoYoutube: "https://youtu.be/j7MCWWhJDbM",
  },
   {
    tipo: "Finca",
    nombre: "Finca Rural",
    referencia: "FC. 003",
    imagenes: ["Ref. FC. 03/1.jpeg",
             "Ref. FC. 03/2.jpeg",
             "Ref. FC. 03/3.jpeg",
             "Ref. FC. 03/4.jpeg",],
    precio: "$240.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "1,850 m²",
    areaPrivada:"1,850 m²",
    areaConstruida:"170 m²",
    habitaciones: "4",
    banos: "3",
    descripcion: `📌Venta de casa campestre en Moniquirá – Boyacá - Colombia

📐Área total: 1.850 metros cuadrados 
📐Área Construida: 170 metros cuadrados

✅Distancia: a 12.3 km, 30 minutos del Parque principal, el 60% de la vía es pavimentada y el otro 40% es destapado se recomienda tener un carro campero, para acceder a la propiedad. 

🟡Primer piso
✅2 habitaciones
✅1 baños
✅Sala – Comedor
✅2 Cocinas, una de gas y otra de leña
✅parquedero
✅Amplio Corredor
✅Excelente vista
✅2 niveles
✅Punto de Agua, luz eléctrica, y gas natural 

🟡Segundo piso
✅2 habitaciones 
✅1 baño
✅ Sauna 
✅ sala de estar `,
    videoYoutube: "https://youtu.be/C0sbg68cJwg",
  },
  {
    tipo: "Finca",
    nombre: "Finca Rural",
    referencia: "FC. 004",
    imagenes: ["Ref. FC. 04/1.jpeg",
             "Ref. FC. 04/2.jpeg",
             "Ref. FC. 04/3.jpeg",
             "Ref. FC. 04/4.jpeg",
             "Ref. FC. 04/5.jpeg",
             "Ref. FC. 04/6.jpeg",
             "Ref. FC. 04/7.jpeg",
             "Ref. FC. 04/8.jpeg",
             "Ref. FC. 04/9.jpeg",
             "Ref. FC. 04/10.jpeg",
             "Ref. FC. 04/11.jpeg",],
    precio: "$250.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "3,673 m²",
    areaPrivada:"3,673 m²",
    areaConstruida:"70 m²",
    habitaciones: "2",
    banos: "1",
    descripcion: `📌VENTA DE CASA LOTE EN MONIQUIRÁ BOYACÁ

📏Área lote: 3673 mts2
📏Área casa: 70 metros aproximadamente

Ubicada en Neval y Cruces
✔️Tiene una casa sencilla de dos habitaciones , cocina , patio , cocina y baño.
✔️Agua veredal del municipio
✔️Punto de luz
✔️Acceso pavimentado hasta la propiedad
✔️Terreno plano y semi ondulado
✔️Estado de la vía excelente
✔️Esta ubicada a 9.3 km de Moniquirá 18 minutos.
✔️tiene cultivos y cítricos
✔️ parqueadero hasta para 4 carros
👉🏻 Documentos Al Dia`,
    videoYoutube: "https://youtu.be/3HNU0RRhwNg",
  },
  {
    tipo: "Finca",
    nombre: "Finca",
    referencia: "FC. 005",
    imagenes: ["Ref. FC. 05/1.png",
             "Ref. FC. 05/2.jpg",
             "Ref. FC. 05/3.jpg",
             "Ref. FC. 05/4.jpg",
             "Ref. FC. 05/5.jpg",
             "Ref. FC. 05/6.jpg",
             "Ref. FC. 05/7.jpg",
             "Ref. FC. 05/8.jpg",
             "Ref. FC. 05/9.jpg",
             "Ref. FC. 05/10.jpg",
             "Ref. FC. 05/11.jpg",
             "Ref. FC. 05/12.jpg",
             "Ref. FC. 05/13.jpg",
             "Ref. FC. 05/14.jpg",
             "Ref. FC. 05/15.jpg",],
    precio: "$330.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "7,300 m²",
    areaPrivada:"7,300 m²",
    areaConstruida:"160 m²",
    habitaciones: "3",
    banos: "2",
    descripcion: `🏡 SE VENDE FINCA EN MONIQUIRÁ, BOYACÁ 🌳

📍 Ubicación: Vereda San Cristóbal, a solo 17 minutos del casco urbano y 6.6 km del pueblo.

📐 Área total: 7.300 m²
🏠 Casa construida: 160 m²

La casa cuenta con:
✨ Sala - comedor
🛏️ 3 habitaciones
🚻 2 baños sociales
🍳 2 cocinas (una a leña y otra con gas)
🧺 Zona de lavandería
🚗 Parqueadero cubierto
🌿 Amplias zonas verdes`,
    videoYoutube: "https://youtu.be/8X-aM3JnDS4",
  },
  {
    tipo: "Finca",
    nombre: "Finca",
    referencia: "FC. 006",
    imagenes: ["Ref. FC. 06/1.jpeg",
             "Ref. FC. 06/2.jpeg",
             "Ref. FC. 06/3.jpeg",
             "Ref. FC. 06/4.jpeg",
             "Ref. FC. 06/5.jpeg",
             "Ref. FC. 06/6.jpeg",
             "Ref. FC. 06/7.jpeg",
             "Ref. FC. 06/8.jpeg",
             "Ref. FC. 06/9.jpeg",
             "Ref. FC. 06/10.jpeg",
             "Ref. FC. 06/11.jpeg",],
    precio: "$340.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "80,000 m²",
    areaPrivada:"80,000 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `📌VENTA DE FINCA EN MONIQUIRÁ- BOYACÁ

👉Finca rural, Moniquirá Boyacá

📏Área 8 hectáreas
✔1 hectárea aproximadamente sembrada en pinos
✔️Punto de Agua (por Instalar)
✔️Aljibe de agua
✔️Terreno Semi ondulado
✔️Vía de Acceso Hasta el Lote
✔️Estado de la vía acta, para carro Campero 4x4
✔Se puede acceder por Puente Nacional o Moniquirá
✔️Lote Rural a una distancia de 40 Minutos del Parque Principal
✔️A 12.5 Kilómetros del pueblo`,
    videoYoutube: "https://youtu.be/pyizV_ZH88U",
  },
   {
    tipo: "Finca",
    nombre: "Finca Rural",
    referencia: "FC. 007",
    imagenes: ["Ref. FC. 07/1.jpg",
             "Ref. FC. 07/2.jpg",
             "Ref. FC. 07/3.jpg",
             "Ref. FC. 07/4.jpg",
             "Ref. FC. 07/5.jpg",
             "Ref. FC. 07/6.jpg",
             "Ref. FC. 07/7.jpg",
             "Ref. FC. 07/8.jpg",
             "Ref. FC. 07/9.jpg",
             "Ref. FC. 07/10.jpg",
             "Ref. FC. 07/11.jpg",
             "Ref. FC. 07/12.jpg",],
    precio: "$390.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "32,000 m²",
    areaPrivada:"32,000 m²",
    areaConstruida:"80 m²",
    habitaciones: "2",
    banos: "2",
    descripcion: `📌Venta de Finca productiva en Moniquirá – Boyacá - Colombia

📐Área total: 3.2 hectáreas 
📐Área Construida: 80 metros cuadrados

✅Distancia: 6.7 km, 17 minutos del Parque principal.

Características Casa

✅2 habitaciones
✅2 baños
✅Sala – Comedor
✅2 Cocinas, una de gas y otra de leña
✅parqueadero
✅Amplio Corredor
✅Excelente vista
✅Punto de Agua, luz eléctrica, y gas natural
✅4.000 plantas de café 
✅Cítricos 
✅Terreno Ondulado.
✅Aljibe de agua propio`,
    videoYoutube: "https://youtu.be/ogIaz4p5uYU",
  },
  {
    tipo: "Finca",
    nombre: "Finca Rural",
    referencia: "FC. 008",
    imagenes: ["Ref. FC. 08/1.jpeg",
             "Ref. FC. 08/2.jpeg",
             "Ref. FC. 08/3.jpeg",
             "Ref. FC. 08/4.jpeg",],
    precio: "$460.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "6,000 m²",
    areaPrivada:"6,000 m²",
    areaConstruida:"159 m²",
    habitaciones: "4",
    banos: "4",
    descripcion: `👉Venta de Finca campestre
📍 Ubicación: Moniquirá – Boyacá

Cuenta con un área total de: 6.000 Mt2
Área construida de la casa: 159 metros cuadrados

Además, tiene dos vías de acceso:
1. A una distancia aproximada de 8 Km – 16 Minutos sobre vía pavimentada que de Moniquirá conduce a Togui.
2. A una distancia de 6 km por via al Gaque en Moniquirá – Boyacá (vía no pavimentada)

Cuenta con casa de un nivel con:

✔️4 habitaciones
✔️4 baños (3 baños privados y 1 social)️
✔️Cocina
✔️Sala Comedor
✔️Dos puertas de ingreso a la casa
✔️Parqueadero
✔️Kiosco cerca a la quebrada con camino en piedra
✔️BBQ
✔️Linda a quebrada
✔️Tanques de reserva
✔️Sistema hidro Flow
✔️Cuarto de herramientas
✔️Piscina con cascadas
✔️Zona de regaderas externas
✔️los servicios, excepto gas natural, la red avanza, está a más o menos 1 km de la propiedad.
✔️Terreno plano – ondulado
✔️La propiedad pertenece a la vereda de Neval y Cruces de Moniquirá- Boyacá`,
    videoYoutube: "https://youtu.be/AJa1UqjWiE8",
  },
  {
    tipo: "Finca",
    nombre: "Finca",
    referencia: "FC. 009",
    imagenes: ["Ref. FC. 09/1.jpg",
             "Ref. FC. 09/2.jpg",
             "Ref. FC. 09/3.jpg",
             "Ref. FC. 09/4.jpg",
             "Ref. FC. 09/5.jpg",
             "Ref. FC. 09/6.jpg",
             "Ref. FC. 09/7.jpg",
             "Ref. FC. 09/8.jpg",
             "Ref. FC. 09/9.jpg",
             "Ref. FC. 09/10.jpg",
             "Ref. FC. 09/11.jpg",
             "Ref. FC. 09/12.jpg",
             "Ref. FC. 09/13.jpg",
             "Ref. FC. 09/14.jpg",],
    precio: "$530.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "10,700 m²",
    areaPrivada:"10,700 m²",
    areaConstruida:"225 m²",
    habitaciones: "7",
    banos: "4",
    descripcion: `📌 Se vende finca en Moniquirá – Boyacá

📍 Ubicación: Vereda Ubaza

📐 Área total: 10.700 m²
🛣️ Entrada con placa huella
🏠 Casa de dos pisos – Área construida: 225 m²
🛋️ Sala – Comedor
👩‍🍳 Cocina con estufa 
🛏️ Primer piso: 4 habitaciones (3 con baño privado)
🛏️ Segundo piso: 3 habitaciones con baño privado
📍 Servicio de agua de acueducto veredal y de aljibe, luz y gas natural
🌳 árboles frutales:
💧 2 aljibes 
🚗 A solo 15 minutos de la vía nacional `,
    videoYoutube: "https://youtu.be/OGOKnkDz7lE",
  },
   {
    tipo: "Finca",
    nombre: "Finca",
    referencia: "FC. 010",
    imagenes: ["Ref. FC. 10/1.jpeg",
             "Ref. FC. 10/2.jpeg",
             "Ref. FC. 10/3.jpeg",
             "Ref. FC. 10/4.jpeg",
             "Ref. FC. 10/5.jpg",
             "Ref. FC. 10/6.jpg",
             "Ref. FC. 10/7.jpg",
             "Ref. FC. 10/8.jpg",
             "Ref. FC. 10/9.jpg",
             "Ref. FC. 10/10.jpg",
             "Ref. FC. 10/11.jpg",
             "Ref. FC. 10/12.jpeg",
             "Ref. FC. 10/13.jpg",
             "Ref. FC. 10/14.jpg",],
    precio: "$690.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "21,760 m²",
    areaPrivada:"21,760 m²",
    areaConstruida:"90 m²",
    habitaciones: "3",
    banos: "2",
    descripcion: `📍VENTA FINCA PRODUCTIVA EN MONIQUIRÁ – BOYACÁ 

👉Ubicación: Vereda Jordán
👉A 45 Minutos de distancia de Moniquirá y a 20 Minutos de Barbosa – Santander

👉La propiedad cuenta con un área de 3.4 fanegadas, con una casa de 90 mt2 y consta de:

🏡2 habitaciones
🏡Sala Comedor
🏡Baño Social
🏡Cocina

👉Adicionalmente, cuenta con una cabaña construida en Guadua de tres pisos, área 70mt2 y un domo bajo tierra tipo glamping.

👉La propiedad tiene abundante agua, con dos reservorios, linda al Rio Suarez, subterráneo de 30 mts de profundidad aproximadamente, tanques de almacenamiento, uno de 600 cm3 y dos de 2.000 cm3, motobomba para bombear agua del rio.

PROPIEDAD PRODUCTIVA

🐓Un galpón de 264 mt2
🐡10 pozos - 50x10 -
🌾2 invernaderos

La finca es de terreno plano, con buena vista y vías de acceso, sin embargo, se recomienda tener vehículo alto o 4x4. `,
    videoYoutube: "https://youtu.be/-bx6O4-xBDQ",
  },
   {
    tipo: "Finca",
    nombre: "Finca",
    referencia: "FC. 011",
    imagenes: ["Ref. FC. 11/1.jpg",
             "Ref. FC. 11/2.jpg",
             "Ref. FC. 11/3.jpg",
             "Ref. FC. 11/4.jpg",
             "Ref. FC. 11/5.jpg",
             "Ref. FC. 11/6.jpg",
             "Ref. FC. 11/7.jpg",
             "Ref. FC. 11/8.jpg",
             "Ref. FC. 11/9.jpg",
             "Ref. FC. 11/10.jpg",
             "Ref. FC. 11/11.jpg",],
    precio: "$715.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "80,000 m²",
    areaPrivada:"80,000 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `📌 Venta de Finca en Moniquirá- Boyacá 

📏Área: 8 Hectáreas (80.000) Mt2

✔ Aljibe/ Nacimiento de Agua (Propio)
✔Topografía: Semiplano, semiondulado.
✔ Dividido en potreros (alambre de púas)

⌛ Distancia: 20 minutos Aprox. de Moniquirá

✔  Cuenta con estudio Hidrológico.

✔Acceso a energía eléctrica
✔ Excelente vista
🍀Buena Vegetación 
🍀Tranquilo`,
    videoYoutube: "https://youtu.be/SZsVw5NdoH0",
  },
  {
    tipo: "Finca",
    nombre: "Finca",
    referencia: "FC. 012",
    imagenes: ["Ref. FC. 12/1.jpg",
             "Ref. FC. 12/2.jpg",
             "Ref. FC. 12/3.jpg",
             "Ref. FC. 12/4.jpg",
             "Ref. FC. 12/5.jpg",
             "Ref. FC. 12/6.jpg",
             "Ref. FC. 12/7.jpg",
             "Ref. FC. 12/8.jpg",
             "Ref. FC. 12/9.jpg",
             "Ref. FC. 12/10.jpg",
             "Ref. FC. 12/11.jpg",
             "Ref. FC. 12/12.jpg",],
    precio: "$830.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "130,000 m²",
    areaPrivada:"130,000 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `📌 VENTA DE FINCA EN MONIQUIRÁ – BOYACÁ 

Ubicada en Perímetro Rural
📐Área: 13 Hectáreas
✅Características 
✅Sembrada plátano y cítricos 
✅Punto de luz 
✅2 Aljibe (Nacimiento de agua)
✅Excelente vista 
✅Linda a una quebrada
✅Topografía mixta
✅Bosque natural
✅Queda a tan solo 5 kilómetros del parque principal de Moniquirá. Esta finca goza de abundante agua, vegetación, cuenta con servicio de luz, tiene la disponibilidad de instalar un punto de agua veredal. 
Distancia: 10 minutos Minutos del parque principal de Moniquirá `,
    videoYoutube: "https://youtu.be/_zFwDW1L4Ho",
  },
  {
    tipo: "Finca",
    nombre: "Finca",
    referencia: "FC. 013",
    imagenes: ["Ref. FC. 13/1.jpg",
             "Ref. FC. 13/2.jpeg",
             "Ref. FC. 13/3.jpeg",
             "Ref. FC. 13/4.jpeg",
             "Ref. FC. 13/5.jpeg",
             "Ref. FC. 13/6.jpeg",
             "Ref. FC. 13/7.jpeg",
             "Ref. FC. 13/8.jpeg",
             "Ref. FC. 13/9.jpeg",
             "Ref. FC. 13/10.jpeg",
             "Ref. FC. 13/11.jpeg",
             "Ref. FC. 13/12.jpeg",
             "Ref. FC. 13/13.jpg",
             "Ref. FC. 13/14.jpg",
             "Ref. FC. 13/15.jpeg",
             "Ref. FC. 13/16.jpg",],
    precio: "$850.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "8,500 m²",
    areaPrivada:"8,500 m²",
    areaConstruida:"250 m²",
    habitaciones: "4",
    banos: "3",
    descripcion: `📌Venta de espectacular Finca campestre en Moniquirá - Boyacá

📐Área del lote:  8.500 metros cuadrados
📐Casa 1 Área construida: 250 metros cuadrados aproximadamente
📐Casa 2 Área construida: 150 metros cuadrados aproximadamente
✔️Cuentan con punto de agua, gas y punto de luz.
✔️Un lugar tranquilo.
✔️Topografía plana 
Características de la casa 1:
✔️4 habitaciones
✔️3 baños
✔️Sala-comedor
✔️Cocina integral
✔️Corredores
✔️Zonas verdes
✔️Zona de lavandería 
✔️Sala de estar con jacuzzi
Características de la casa 2:
✔️3 habitaciones
✔️2 baños
✔️Sala-comedor
✔️Cocina 
✔️Corredores
✔️Zonas verdes
✔️Zona BBQ
🌱 esta sembrada en café, plátano y algunos cítricos.`,
    videoYoutube: "https://youtu.be/BBYVbJ0bF4c",
  },
   {
    tipo: "Finca",
    nombre: "Finca",
    referencia: "FC. 014",
    imagenes: ["Ref. FC. 14/1.jpg",
             "Ref. FC. 14/2.jpg",
             "Ref. FC. 14/3.jpg",
             "Ref. FC. 14/4.jpg",
             "Ref. FC. 14/5.jpg",
             "Ref. FC. 14/6.jpg",
             "Ref. FC. 14/7.jpg",
             "Ref. FC. 14/8.jpg",
             "Ref. FC. 14/9.jpg",
             "Ref. FC. 14/10.jpg",
             "Ref. FC. 14/11.jpg",
             "Ref. FC. 14/12.jpg",
             "Ref. FC. 14/13.jpg",
             "Ref. FC. 14/14.jpg",
             "Ref. FC. 14/15.jpg",],
    precio: "$860.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "20,000 m²",
    areaPrivada:"20,000 m²",
    areaConstruida:"230 m²",
    habitaciones: "2",
    banos: "3",
    descripcion: `📌 VENTA DE FINCA EN MONIQUIRÁ – BOYACÁ

 📐Área terreno: 2 hectáreas
 📐Área Casa: 230 Mts2
👉 No. de Habitaciones: 2
👉 No. de Baños: 3
👉 Sala amplia
👉 Zona de lavandería
👉 Corredores amplios
👉Garaje con puerta automática
✅ Punto de agua, acueducto veredal
✅ Punto de luz 
✅ Cuarto de bombas 
✅ Vereda la Coralina 
✅ Distancia: 20 minutos de Moniquirá
✅ 1.5 Km de la vía principal santa Sofía`,
    videoYoutube: "https://youtu.be/ep0YpZZo0ZA",
  },
  {
    tipo: "Finca",
    nombre: " Dos Fincas",
    referencia: "FC. 015",
    imagenes: ["Ref. FC. 15/1.jpg",
             "Ref. FC. 15/2.jpg",
             "Ref. FC. 15/3.jpg",
             "Ref. FC. 15/4.jpg",
             "Ref. FC. 15/5.jpg",
             "Ref. FC. 15/6.jpg",
             "Ref. FC. 15/7.jpg",
             "Ref. FC. 15/8.jpg",
             "Ref. FC. 15/9.jpg",
             "Ref. FC. 15/10.jpg",
             "Ref. FC. 15/11.jpg",
             "Ref. FC. 15/12.jpg",
             "Ref. FC. 15/13.jpg",
             "Ref. FC. 15/14.jpg",
             "Ref. FC. 15/15.jpg",
             "Ref. FC. 15/16.jpg",],
    precio: "$900.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "300,000 m²",
    areaPrivada:"300,000 m²",
    areaConstruida:"140 m²",
    habitaciones: "3",
    banos: "1",
    descripcion: `📌 VENTA DE FINCA EN MONIQUIRÁ – BOYACÁ 

Ubicada en Perímetro Rural
📐Área: 30 Hectáreas
📐Área Casa: 140 Mts2 
La Propiedad cuenta con un Molino Moderno y funcional.
✅Características casa
👉No. de Habitaciones: 3 
👉Sala Amplia
👉No. de Baños: 2
👉2 Cocinas
👉Corredores sociales amplios
👉 Quiosco 
✅Sembrada de Café, plátano y cítricos 
✅Punto de luz 
✅2 Aljibe (Nacimiento de agua)
✅Excelente vista y topografía.
✅Sobre vía vereda principal `,
    videoYoutube: "https://youtu.be/1KDp4R_w9uE",
  },
  {
    tipo: "Finca",
    nombre: "Finca",
    referencia: "FC. 016",
    imagenes: ["Ref. FC. 16/1.jpg",
             "Ref. FC. 16/2.jpg",
             "Ref. FC. 16/3.jpg",
             "Ref. FC. 16/4.jpg",
             "Ref. FC. 16/5.jpg",
             "Ref. FC. 16/6.jpg",
             "Ref. FC. 16/7.jpg",
             "Ref. FC. 16/8.jpg",],
    precio: "$1.050.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "50,000 m²",
    areaPrivada:"50,000 m²",
    areaConstruida:"300 m²",
    habitaciones: "5",
    banos: "3",
    descripcion: `📌Venta de Finca con Casa en Moniquirá - Boyacá

Ubicación: Veredal, muy cerca a la vía principal que de Moniquirá conduce a Villa de Leyva

👉Cuenta con buenas vías de acceso, gran porcentaje en placahuella.
 (apta para vehículos automóviles)

📏 Área:5 Hectáreas
👉4 hectáreas aprovechables, 1 hectárea de reserva natural, ideal para senderos ecológicos.
👉Hermosa vista, cuenta con quebrada.
👉Sembradas algunas plantas de café, naranja, mandarina, plátano.
✨Características Generales
👉Terreno plano y ondulado
👉Dos Casas
👉Parqueadero cubierto

✨Características Especificas

Casa principal:

👉Un solo nivel
👉Tres habitaciones, una de ellas, con baño privado
👉Sala – Comedor
👉Cocina
👉Zona de lavandería
👉Baño externo
👉Amplios balcones
✨La segunda casa:
Dos niveles
👉Dos habitaciones
👉Sala - comedor
👉Cocina
👉Un baño
👉Terraza
👉Cuarto de herramientas
Servicios
👉Dos puntos de agua del acueducto veredal
👉Luz trifásica

✅Diferentes opciones de Compra

1. 3 Fanegadas (cada fanegada cuenta con su escritura, matrícula inmobiliaria, documentos totalmente al día. 

Valor Unidad

F.1. Área: 6.505 mt2: 159.000.000
F. 2.Área: 6.122 mt2 149.000.000
F.3. Área: 7.577 mt2 165.000.000

✅Opción 2 
Comprar las 3 fanegadas
  $ 455.000.000
✅Opción 3 
Comprar toda la propiedad 
  $1.050.000 millones `,
    videoYoutube: "https://youtu.be/mt5KiRn5qF4",
  },
  {
    tipo: "Finca",
    nombre: "Finca Productiva",
    referencia: "FC. 017",
    imagenes: ["Ref. FC. 17/1.jpg",
             "Ref. FC. 17/2.jpg",
             "Ref. FC. 17/3.jpg",
             "Ref. FC. 17/4.jpg",
             "Ref. FC. 17/5.jpg",
             "Ref. FC. 17/6.jpg",
             "Ref. FC. 17/7.jpg",
             "Ref. FC. 17/8.jpg",
             "Ref. FC. 17/9.jpg",
             "Ref. FC. 17/10.jpg",
             "Ref. FC. 17/11.jpg",
             "Ref. FC. 17/12.jpg",
             "Ref. FC. 17/13.jpg",
             "Ref. FC. 17/14.jpg",],
    precio: "$1.700.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "100,000 m²",
    areaPrivada:"100,000 m²",
    areaConstruida:"520 m²",
    habitaciones: "2",
    banos: "2",
    descripcion: `📌 VENTA DE FINCA PRODUCTIVA EN MONIQUIRÁ – BOYACÁ

📐Área: 10 Hectáreas o 100.000 mt2
📐 Área Construida: 520 mt2 Aprox.
👉 Estado: Segunda Mano

✅Incluye un Molino totalmente funcional con empacadora
✅Finca sembrada en caña de azucar, linda al Rio Suarez
✅Hasta el mes de marzo de 2024 tiene agendado Maquila.
✅ Incluye casa Sencilla`,
    videoYoutube: "https://youtu.be/KRf_whScWk4",
  },
];

const ORDEN_TIPOS = ["Apartaestudio", "Apartamento", "Casa", "Lote", "Finca", "Local"];

function normalizarTipo(tipo) {
  if (tipo === "Locales") return "Local";
  if (tipo === "Aparta estudio" || tipo === "Aparta-Estudio") return "Apartaestudio";
  return tipo;
}

const propiedadesNormalizadas = propiedades.map((propiedad, index) => ({
  ...propiedad,
  tipo: normalizarTipo(propiedad.tipo),
  referencia: propiedad.referencia || `REF-${String(index + 1).padStart(4, "0")}`
}));

function ordenarPropiedades(lista) {
  return [...lista].sort((a, b) => {
    const ordenA = ORDEN_TIPOS.indexOf(normalizarTipo(a.tipo));
    const ordenB = ORDEN_TIPOS.indexOf(normalizarTipo(b.tipo));

    const prioridadA = ordenA === -1 ? Number.MAX_SAFE_INTEGER : ordenA;
    const prioridadB = ordenB === -1 ? Number.MAX_SAFE_INTEGER : ordenB;

    if (prioridadA !== prioridadB) return prioridadA - prioridadB;

    return (a.referencia || "").localeCompare(b.referencia || "", "es", { numeric: true, sensitivity: "base" });
  });
}


/* ================= MOSTRAR PROPIEDADES ================= */
function mostrarPropiedades(lista, titulo = "Propiedades") {
   const listaOrdenada = ordenarPropiedades(lista);
  const contenedor = document.getElementById("contenedorPropiedades");
  const tituloProp = document.getElementById("tituloPropiedades");

  if (!contenedor || !tituloProp) return;

  contenedor.innerHTML = "";
  tituloProp.textContent = titulo;

   if (listaOrdenada.length === 0) {
    contenedor.innerHTML = "<p>No hay propiedades disponibles.</p>";
    return;
  }

   listaOrdenada.forEach(p => {
    const card = document.createElement("div");
    card.className = "property-card";
    card.innerHTML = `
      <img src="${p.imagenes[0]}" alt="${p.nombre}">
      <div class="property-body">
        <h3>${p.nombre}</h3>
           <p class="property-ref">📌 Ref: ${p.referencia}</p>
        <p class="location">📍 ${p.ubicacion}</p>
        <p class="price">${p.precio}</p>
         <button onclick="verDetalle('${p.referencia}')">Ver detalles</button>
      </div>
    `;
    contenedor.appendChild(card);
  });
}

function iniciarAnimacionesScroll() {
    const elementosAnimados = document.querySelectorAll(
        ".hero, .featured-properties, .property-card, .contact-section, .mapa, .footer, .footer-col, .why-solgrupo, .services-section, .about-section, .values-section, .team-section, .videos-section"
    );

    if (elementosAnimados.length === 0) {
        return;
    }

    elementosAnimados.forEach(elemento => {
        elemento.classList.add("reveal-on-scroll");
    });

    if (!("IntersectionObserver" in window)) {
        elementosAnimados.forEach(elemento => {
            elemento.classList.add("visible");
        });
        return;
    }

    if (scrollRevealObserver) {
        scrollRevealObserver.disconnect();
    }

    scrollRevealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.08,
        rootMargin: "0px 0px -12% 0px"
    });

    elementosAnimados.forEach(elemento => {
        if (elemento.classList.contains("visible")) {
            return;
        }
        scrollRevealObserver.observe(elemento);
    });
     window.requestAnimationFrame(() => {
        elementosAnimados.forEach(elemento => {
            const rect = elemento.getBoundingClientRect();
            const yaEnVista = rect.top < window.innerHeight * 0.95 && rect.bottom > 0;
            if (yaEnVista) {
                elemento.classList.add("visible");
            }
        });
    });
}


/* ================= FILTRO ================= */
function filtrarPorTipo(tipo) {
 const tipoNormalizado = normalizarTipo(tipo);
  const filtradas = propiedadesNormalizadas.filter(p => p.tipo === tipoNormalizado);
  const etiquetasTipo = {
     Apartaestudio: "Apartaestudios",
    Apartamento: "Apartamentos",
    Casa: "Casas",
    Lote: "Lotes",
    Finca: "Fincas",
    Local: "Locales"
  };
  const etiqueta = etiquetasTipo[tipoNormalizado] || tipoNormalizado;
  mostrarPropiedades(filtradas, `${etiqueta} disponibles`);
  iniciarAnimacionesScroll();
  document.getElementById("propiedades").scrollIntoView({ behavior: "smooth" });
}
function mostrarTodasLasPropiedades() {
   mostrarPropiedades(propiedadesNormalizadas, "Propiedades");
    iniciarAnimacionesScroll();
  document.getElementById("propiedades").scrollIntoView({ behavior: "smooth" });
}

function obtenerVideoEmbebido(urlVideo) {
  if (!urlVideo) return "";

  if (urlVideo.includes("/embed/")) {
    return urlVideo;
  }

  const regex = /(?:v=|be\/|shorts\/)([A-Za-z0-9_-]{11})/;
  const match = urlVideo.match(regex);
  if (!match) return "";

  return `https://www.youtube-nocookie.com/embed/${match[1]}`;
}

/* ================= MODAL ================= */
function obtenerAreasDetalle(propiedad) {
  const areaTexto = propiedad.area || "-";

  const areaTotal = propiedad.areaTotal || areaTexto;
  const areaConstruida = propiedad.areaConstruida ||
    (areaTexto.toLowerCase().includes("constru") ? areaTexto : "No especificada");
  const areaPrivada = propiedad.areaPrivada || "No especificada";

  return { areaTotal, areaConstruida, areaPrivada };
}

function verDetalle(referencia) {
  const p = propiedadesNormalizadas.find(prop => prop.referencia === referencia);
  if (!p) return;

  // Inicializar slider
  imagenesActuales = p.imagenes;
  imagenActual = 0;
  document.getElementById("detalleImg").src = imagenesActuales[0];
  document.getElementById("detalleImg").alt = p.nombre;

  // Información
  document.getElementById("detalleTitulo").textContent = p.nombre;
  document.getElementById("detallePrecio").textContent = p.precio;
  
  const areas = obtenerAreasDetalle(p);

  document.getElementById("detalleArea").textContent = areas.areaTotal;
  document.getElementById("detalleAreaConstruida").textContent = areas.areaConstruida;
  document.getElementById("detalleAreaPrivada").textContent = areas.areaPrivada;
  document.getElementById("detalleHabitaciones").textContent = p.habitaciones;
  document.getElementById("detalleBanos").textContent = p.banos;
  document.getElementById("detalleUbicacion").textContent = p.ubicacion;
  document.getElementById("detalleDescripcion").textContent = p.descripcion;

  const referenciaDetalle = p.referencia || "Sin referencia";
  document.getElementById("detalleReferencia").textContent = `Referencia: ${referenciaDetalle}`;

  // WhatsApp
  document.getElementById("btnWhatsappDetalle").href =
    "https://wa.me/573161498625?text=" +
     encodeURIComponent(`Hola, estoy interesado en la propiedad: ${p.nombre} (Ref: ${referenciaDetalle})`);

     // Video
  const videoYoutube = p.videoYoutube || VIDEO_YOUTUBE_DEFAULT;
  const videoEmbed = obtenerVideoEmbebido(videoYoutube);
  const videoFrame = document.getElementById("detalleVideo");
  const videoFrameLink = document.getElementById("detalleVideoFrameLink");

  videoFrame.src = videoEmbed;
   videoFrameLink.href = videoYoutube;



  // Mostrar flechas solo si hay más de 1 imagen
  document.querySelectorAll(".slider-btn").forEach(btn => {
    btn.style.display = imagenesActuales.length > 1 ? "block" : "none";
  });

  // Mostrar modal
  document.getElementById("modalDetalle").style.display = "flex";
  document.body.classList.add("detalle-modal-open");
}

function cambiarFoto(direccion) {
  if (imagenesActuales.length <= 1) return;

  imagenActual += direccion;

  // Ajustar índices para que roten
  if (imagenActual < 0) imagenActual = imagenesActuales.length - 1;
  if (imagenActual >= imagenesActuales.length) imagenActual = 0;

  document.getElementById("detalleImg").src = imagenesActuales[imagenActual];
  document.getElementById("detalleImg").alt = "Imagen " + (imagenActual + 1);
}

function cerrarDetalle() {
  document.getElementById("modalDetalle").style.display = "none";
  document.getElementById("detalleVideo").src = "";
  document.body.classList.remove("detalle-modal-open");
}

/* ================= BUSCADOR ================= */
function buscarPropiedades() {
  const texto = document.getElementById("busquedaPropiedades").value.toLowerCase();
  const cards = document.querySelectorAll(".property-card");

  cards.forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(texto) ? "block" : "none";
  });
}

/* ================= INICIO ================= */
document.addEventListener("DOMContentLoaded", () => {
   mostrarPropiedades(propiedadesNormalizadas);
  const dropdown = document.querySelector(".menu .dropdown");
  const dropdownTrigger = dropdown?.querySelector(".dropdown-trigger");
  const header = document.querySelector(".top-header");

  const actualizarPosicionDropdownMobile = () => {
    if (!header) return;

    const headerRect = header.getBoundingClientRect();
    const top = Math.max(headerRect.bottom + 8, 8);
    document.documentElement.style.setProperty("--mobile-dropdown-top", `${top}px`);
  };

  if (dropdown && dropdownTrigger) {
   dropdownTrigger.addEventListener("click", event => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        event.preventDefault();
        event.stopPropagation();
        actualizarPosicionDropdownMobile();
        dropdown.classList.toggle("open");
        dropdownTrigger.setAttribute("aria-expanded", dropdown.classList.contains("open") ? "true" : "false");
      }
    });

    document.addEventListener("click", event => {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove("open");
        dropdownTrigger.setAttribute("aria-expanded", "false");
      }
    });

    const dropdownLinks = dropdown.querySelectorAll(".dropdown-content a");
    dropdownLinks.forEach(link => {
      link.addEventListener("click", () => {
        dropdown.classList.remove("open");
        dropdownTrigger.setAttribute("aria-expanded", "false");
      });
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        dropdown.classList.remove("open");
        dropdownTrigger.setAttribute("aria-expanded", "false");
      }
    });
     window.addEventListener("resize", () => {
      actualizarPosicionDropdownMobile();
      if (!window.matchMedia("(max-width: 768px)").matches) {
        dropdown.classList.remove("open");
        dropdownTrigger.setAttribute("aria-expanded", "false");
      }
    });
    window.addEventListener("scroll", actualizarPosicionDropdownMobile, { passive: true });
  }

  iniciarAnimacionesScroll();
});
