/* ================= PROPIEDADES ================= */
let imagenActual = 0;
let imagenesActuales = [];
let scrollRevealObserver = null;
const cacheImagenes = new Set();

const propiedades = [
{
    tipo: "Finca",
    nombre: "Finca",
    referencia: "FC. 014",
    imagenes: ["Ref. FC. 14/1.jpeg",
             "Ref. FC. 14/2.jpeg",
             "Ref. FC. 14/3.jpeg",
             "Ref. FC. 14/4.jpeg",
             "Ref. FC. 14/5.jpeg",
             "Ref. FC. 14/6.jpeg",
             "Ref. FC. 14/7.jpeg",
             "Ref. FC. 14/8.jpeg",
             "Ref. FC. 14/9.jpeg",
             "Ref. FC. 14/10.jpeg",
             "Ref. FC. 14/11.jpeg",
             "Ref. FC. 14/12.jpeg",
             "Ref. FC. 14/13.jpeg",
             "Ref. FC. 14/14.jpeg",
             "Ref. FC. 14/15.jpeg",
             "Ref. FC. 14/16.jpeg",
             "Ref. FC. 14/17.jpeg",
             "Ref. FC. 14/18.jpeg",
             "Ref. FC. 14/19.jpeg",
             "Ref. FC. 14/20.jpeg",
             "Ref. FC. 14/21.jpeg",
             "Ref. FC. 14/22.jpeg",
             "Ref. FC. 14/23.jpeg",
             "Ref. FC. 14/24.jpeg",
             "Ref. FC. 14/25.jpeg",
             "Ref. FC. 14/26.jpeg",
             "Ref. FC. 14/27.jpeg",
             "Ref. FC. 14/28.jpeg",],
    precio: "$690.000.000",
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
    videoYoutube: "https://youtu.be/c_jHdMNsRbU",
  },
{
    tipo: "Casa",
    nombre: "Casa Urbana",
    referencia: "C. 007",
    imagenes: ["Ref. C. 07/1.png",
             "Ref. C. 07/2.jpg",
             "Ref. C. 07/3.jpg",
             "Ref. C. 07/4.jpg",
             "Ref. C. 07/5.jpg",
             "Ref. C. 07/6.jpg",
             "Ref. C. 07/7.jpg",
             "Ref. C. 07/8.jpg",
             "Ref. C. 07/9.jpg",
             "Ref. C. 07/10.jpeg",
             "Ref. C. 07/11.png",
             "Ref. C. 07/12.jpg",
             "Ref. C. 07/13.jpg",
             "Ref. C. 07/14.jpg",],
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
    nombre: "Casa en Condominio",
    referencia: "C. 019",
    imagenes: ["Ref. C. 19/1.png",
             "Ref. C. 19/2.jpg",
             "Ref. C. 19/3.png",
             "Ref. C. 19/4.png",
             "Ref. C. 19/5.png",
             "Ref. C. 19/6.png",
             "Ref. C. 19/7.png",
             "Ref. C. 19/8.png",
             "Ref. C. 19/9.png",
             "Ref. C. 19/10.png",],
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
    tipo: "Apartaestudio",
    nombre: "Apartaestudio",
    referencia: "Apte. 001",
    imagenes: ["Ref. Apte. 01/1.jpg",
             "Ref. Apte. 01/2.jpg",
             "Ref. Apte. 01/3.jpg",
             "Ref. Apte. 01/4.jpg",
             "Ref. Apte. 01/5.jpg",
             "Ref. Apte. 01/6.jpg",
             "Ref. Apte. 01/7.jpg",
             "Ref. Apte. 01/8.jpg",],
    precio: "$231.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "50,77 m²",
    areaPrivada:"-",
    areaConstruida:"50,77 m²",
    habitaciones: "1",
    banos: "1",
    descripcion: `🏢🌿 Se vende aparta estudio en Moniquirá, Boyacá

📍 Ubicado en el edificio Altos del Nogal, conjunto residencial que ofrece:

🛎️ Portería con celador
🕒 Vigilancia 24/7
🛗 Ascensor panorámico

✨ El aparta estudio cuenta con:

🛋️ Sala comedor
🍽️ Cocina integral con horno y campana extractora
🧺 Zona de lavandería
🚪 Hall hacia las habitaciones
🛏️ Habitación principal con balcón y baño privado
🛏️ 1 habitación con clóset
🚿 Baño social
`,
    videoYoutube: "https://youtu.be/HM1YtC1UIPg",
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
             "Ref. C. 08/7.jpeg",
             "Ref. C. 08/8.jpeg",
             "Ref. C. 08/9.jpeg",
             "Ref. C. 08/10.jpeg",
             "Ref. C. 08/11.jpeg",
             "Ref. C. 08/12.jpeg",
             "Ref. C. 08/13.jpeg",
             "Ref. C. 08/14.jpeg",],
    precio: "$440.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "558 m²",
    areaPrivada:"558 m²",
    areaConstruida:"181 m²",
    habitaciones: "3",
    banos: "2",
    descripcion: `🏡¡CASA EN CONDOMINIO EN VENTA EN MONIQUIRÁ - BOYACÁ!

✨ Comodidad, seguridad y excelente ubicación

📍 Ubicación
🚗 A solo 5 minutos del parque principal

📐 Áreas
🌳 Lote: 558 m²
🏠 Construida: 181 m²


🏠 Casa de dos pisos

🔹 Primer piso:
🍳 Cocina integral
🛋️ Sala comedor
🛏️ 1 habitación con baño privado
🚿 1 baño social
🚶 Corredores

🔹 Segundo piso:
🛋️ Sala de estar
🌅 Balcón con vista panorámica
🛏️ 2 habitaciones
🚿 1 baño social

🧺 Zona de lavandería
🚗 Parqueadero para 3 carros

🌳 Zona para cultivo de árboles cítricos

💡 Cuenta con todos los servicios

🔹 Zonas sociales:
🎉 Salón social
🚗 Parqueadero comunal
🏊 Piscina
🔥 Zona BBQ`,
    videoYoutube: "https://youtu.be/6H4QTncNsSQ",
  },
{
    tipo: "Lote",
    nombre: "Lote",
    referencia: "LT. 018",
    imagenes: ["Ref. LT. 18/1.jpeg",
             "Ref. LT. 18/2.jpeg",
             "Ref. LT. 18/3.jpeg",
             "Ref. LT. 18/4.jpeg",
             "Ref. LT. 18/5.jpeg",
             "Ref. LT. 18/6.jpeg",
             "Ref. LT. 18/7.jpeg",
             "Ref. LT. 18/8.jpeg",
             "Ref. LT. 18/9.jpeg",
             "Ref. LT. 18/10.jpeg",
             "Ref. LT. 18/11.jpeg",
             "Ref. LT. 18/12.jpeg",],
    precio: "$200.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "400 m²",
    areaPrivada:"400 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `🏡 ¡SE VENDEN LOTES EN EXCLUSIVO CONDOMINIO – MONIQUIRÁ, BOYACÁ!

✨ Vive en un entorno exclusivo, tranquilo y con excelentes zonas sociales

📍 Ubicación
🏘️ Condominio Villa Helena
🚗 A solo 5 minutos del casco urbano

📐 Lotes disponibles

🔹 Lote I-3
📏 Área: 400 m²
💰 Precio: $220.000.000

🔹 Lote I-6
📏 Área: 400 m²
💰 Precio: $200.000.000

🔧 Características
💡 Todos los servicios disponibles
📑 Documentación al día

🏊 Áreas sociales del condominio
🎉 Salón social
🧖 Zonas húmedas
🏊 Piscina para adultos y niños
🛝 Parque infantil
🔒 Portería con CCTV
🌳 Zonas verdes y senderos peatonales
🚗 Parqueadero para visitantes
🚰 Red de alcantarillado
🗑️ Chut de basuras
🏀 Cancha de básquetbol
🎾 Cancha de tenis`,
    videoYoutube: "https://youtu.be/qaaSYAeJzBU?si=Mcx5mhiEOhcBSLOj",
  },
{
    tipo: "Lote",
    nombre: "Lote",
    referencia: "LT. 024",
    imagenes: ["Ref. LT. 24/1.jpeg",
             "Ref. LT. 24/2.jpeg",
             "Ref. LT. 24/3.jpeg",
             "Ref. LT. 24/4.jpeg",
             "Ref. LT. 24/5.jpeg",
             "Ref. LT. 24/6.jpeg",
             "Ref. LT. 24/7.jpeg",],
    precio: "$250.000.000",
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
    tipo: "Casa",
    nombre: "Casa Campestre",
    referencia: "C. 024",
    imagenes: ["Ref. C. 24/1.jpeg",
             "Ref. C. 24/2.jpeg",
             "Ref. C. 24/3.jpeg",
             "Ref. C. 24/4.jpeg",
             "Ref. C. 24/5.jpeg",
             "Ref. C. 24/6.jpeg",
             "Ref. C. 24/7.jpeg",
             "Ref. C. 24/8.jpeg",
             "Ref. C. 24/9.jpeg",
             "Ref. C. 24/10.jpeg",
             "Ref. C. 24/11.jpeg",
             "Ref. C. 24/12.jpeg",
             "Ref. C. 24/13.jpeg",
             "Ref. C. 24/14.jpeg",
             "Ref. C. 24/15.jpeg",
             "Ref. C. 24/16.jpeg",
             "Ref. C. 24/17.jpeg",
             "Ref. C. 24/18.jpeg",
             "Ref. C. 24/19.jpeg",],
    precio: "$950.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "1,500 m²",
    areaPrivada:"1,500 m²",
    areaConstruida:"228.55 m²",
    habitaciones: "4",
    banos: "3",
    descripcion: `✨ EXCLUSIVA CASA CAMPESTRE MODERNA EN VENTA | PUEBLO VIEJO, MONIQUIRÁ 🏡

📍 Ubicada en el sector Pueblo Viejo, a tan solo 5 minutos del casco urbano de Moniquirá.
Descubre una propiedad que destaca por su arquitectura moderna, acabados de lujo y amplios espacios, pensada para quienes desean vivir rodeados de naturaleza sin alejarse de la ciudad. Cada rincón ha sido diseñado para ofrecer una experiencia de vida exclusiva, donde la tranquilidad, la seguridad y la elegancia se combinan en un solo lugar.

📐 Área del lote: 1.500 m²
🏗️ Área construida: 228.55 m²

Características:

🏡 Primer nivel
🍽️ Cocina integral
🛋️ Amplia sala - comedor
🚻 2 baños sociales
🛏️ 3 habitaciones
🎬 Sala de cine

🏡 Segundo nivel
👑 Amplia habitación principal
👗 Walk-in clóset
🚿 Baño privado
🌄 Amplio balcón con hermosa vista
🌳 Espacios exteriores
🌿 Amplias zonas verdes
🛝 Parque infantil para el disfrute de los más pequeños
🍖 Zona BBQ
🔥 Zona de fogatas
🚶 Amplios corredores
🚗 Parqueadero para 5 vehículos

⭐ Características adicionales

🎥 Sistema de cámaras de seguridad
💧 Tanque de reserva de agua con capacidad de 5.000 litros`,
    videoYoutube: "https://youtu.be/3AUZXxYCJZM?si=GCyPP8e3Rs3BSVkB",
  },
{
    tipo: "Apartamento",
    nombre: "Apartamento",
    referencia: "Apt. 002",
    imagenes: ["Ref. Apt. 02/1.jpg",
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
    videoYoutube: "https://youtu.be/HM1YtC1UIPg",
  },
{
    tipo: "Casa",
    nombre: "Casa En Condominio",
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
             "Ref. C. 09/17.jpg",
             "Ref. C. 09/18.jpg",
             "Ref. C. 09/19.jpg",
             "Ref. C. 09/20.jpg",],
    precio: "$470.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "107 m²",
    areaPrivada:"107 m²",
    areaConstruida:"107 m²",
    habitaciones: "4",
    banos: "4",
    descripcion: `🏡 ¡SE VENDE CASA QUINTA EN MONIQUIRÁ – BOYACÁ!

✨ Exclusiva propiedad con amplios espacios, excelente iluminación y ubicación privilegiada

📍 Ubicación
🚗 A solo 1.2 kilómetros del parque principal

📐 Área: 107.25 m²

✨ Características generales
🛣️ Acceso totalmente pavimentado
☀️ Excelente iluminación natural
👕 Clósets de techo a piso
🌅 Amplios balcones
🏠 Casa de 2 niveles

🔧 Servicios
🔥 Gas natural
🌐 Internet fibra óptica
🔥 Calentador a gas
💡 Energía eléctrica
💧 Agua

🪟 Persianas instaladas en toda la casa

🏠 Distribución

🔹 Primer nivel
🚗 Parqueadero
🛋️ 2 salas de estar
🍳 Cocina
🛋️ Sala comedor
🚿 Baño social
🛏️ 1 habitación con baño privado
🧺 Zona de lavandería
👕 Zona de planchado

🔹 Segundo nivel
🛏️ 3 habitaciones con clóset
🛏️ 1 habitación con baño privado
🚿 1 baño social
🌅 Balcón`,
    videoYoutube: "https://youtu.be/bY2IfDgHdqM?si=tm1w7-_WCR0gc3Ug",
  },
{
    tipo: "Finca",
    nombre: "Finca Rural",
    referencia: "FC. 011",
    imagenes: ["Ref. FC. 11/1.jpeg",
             "Ref. FC. 11/2.jpeg",
             "Ref. FC. 11/3.jpeg",
             "Ref. FC. 11/4.jpeg",],
    precio: "$445.000.000",
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
    tipo: "Lote",
    nombre: "Lote",
    referencia: "LT. 008",
    imagenes: ["Ref. LT. 08/1.jpg",
             "Ref. LT. 08/2.jpg",
             "Ref. LT. 08/3.jpg",
             "Ref. LT. 08/4.jpg",
             "Ref. LT. 08/5.jpg",
             "Ref. LT. 08/6.jpg",
             "Ref. LT. 08/7.jpg",
             "Ref. LT. 08/8.jpg",
             "Ref. LT. 08/9.jpg",],
    precio: "$110.000.000",
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
];



/* ================= MOSTRAR PROPIEDADES ================= */

function mostrarPropiedades(lista, titulo = "Propiedades") {
    const contenedor = document.getElementById("contenedorPropiedades");
    const tituloProp = document.getElementById("tituloPropiedades");

      if (!contenedor) {
        return;
    }


    contenedor.innerHTML = "";
     if (tituloProp) {
        tituloProp.textContent = titulo;
    }

    if (lista.length === 0) {
        contenedor.innerHTML = "<p>No hay propiedades disponibles.</p>";
        return;
    }

    lista.forEach(p => {
        contenedor.innerHTML += `
            <div class="property-card">
             <span class="badge">Destacada</span>
                <img src="${p.imagenes[0]}" alt="${p.nombre}" loading="lazy" decoding="async">
                <div class="property-body">
                    <h3>${p.nombre}</h3>
                     <p class="property-ref">📌 Ref: ${p.referencia || "Sin referencia"}</p>
                    <p class="location">📍 ${p.ubicacion}</p>
                    <p class="price">${p.precio}</p>
                    <button onclick="verDetalle('${p.referencia || p.nombre}')">Ver detalles</button>
                </div>
            </div>
        `;
    });
}

function precargarImagen(src) {
    if (!src || cacheImagenes.has(src)) return;
    const img = new Image();
    img.decoding = "async";
    img.src = src;
    cacheImagenes.add(src);
}

function precargarImagenesCercanas() {
    if (!imagenesActuales.length) return;

    const siguiente = (imagenActual + 1) % imagenesActuales.length;
    const anterior = (imagenActual - 1 + imagenesActuales.length) % imagenesActuales.length;

    precargarImagen(imagenesActuales[siguiente]);
    precargarImagen(imagenesActuales[anterior]);
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
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    });

    elementosAnimados.forEach(elemento => {
        if (elemento.classList.contains("visible")) {
            return;
        }
        scrollRevealObserver.observe(elemento);
    });
}


/* ================= FILTRO ================= */

function filtrarPorTipo(tipo) {
    const filtradas = propiedades.filter(p => p.tipo === tipo);
    mostrarPropiedades(filtradas, `${tipo}s disponibles`);
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

function verDetalle(identificador) {
    const p = propiedades.find(prop =>
        (prop.referencia && prop.referencia === identificador) ||
        prop.nombre === identificador
    );
    if (!p) return;

    // cargar imágenes del inmueble
    imagenesActuales = p.imagenes;
    imagenActual = 0;

    // SIEMPRE mostrar la primera imagen
    const detalleImg = document.getElementById("detalleImg");
    detalleImg.decoding = "async";
    detalleImg.fetchPriority = "high";
    detalleImg.src = imagenesActuales[0];
    detalleImg.alt = p.nombre;
    precargarImagenesCercanas();


    // info
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

    const referencia = p.referencia || "Sin referencia";
    document.getElementById("detalleReferencia").textContent = `Referencia: ${referencia}`;
    document.getElementById("btnWhatsappDetalle").href =
        "https://wa.me/573161498625?text=" +
       encodeURIComponent(`Hola, estoy interesado en la propiedad: ${p.nombre}. Referencia: ${referencia}`);

        const videoYoutube = p.videoYoutube || "";
    const videoEmbed = obtenerVideoEmbebido(videoYoutube);
    const videoCard = document.querySelector(".detalle-video-card");
    const videoFrame = document.getElementById("detalleVideo");
    const videoFrameLink = document.getElementById("detalleVideoFrameLink");

    if (videoEmbed) {
        videoFrame.src = videoEmbed;
        videoFrameLink.href = videoYoutube;
        videoCard.style.display = "block";
    } else {
        videoFrame.src = "";
        videoFrameLink.removeAttribute("href");
        videoCard.style.display = "none";
    }

    // mostrar u ocultar flechas
    document.querySelectorAll(".slider-btn").forEach(btn => {
        btn.style.display = imagenesActuales.length > 1 ? "block" : "none";
    });

    document.getElementById("modalDetalle").style.display = "flex";
    document.body.classList.add("detalle-modal-open");
}

function cambiarFoto(direccion) {
    if (imagenesActuales.length <= 1) return;

    imagenActual += direccion;

    if (imagenActual < 0) {
        imagenActual = imagenesActuales.length - 1;
    }

    if (imagenActual >= imagenesActuales.length) {
        imagenActual = 0;
    }

    const detalleImg = document.getElementById("detalleImg");
    detalleImg.src = imagenesActuales[imagenActual];
    detalleImg.alt = "Imagen " + (imagenActual + 1);
    precargarImagenesCercanas();
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
        card.style.display = card.innerText.toLowerCase().includes(texto)
            ? "block"
            : "none";
    });
}

/* ================= FORMULARIO ================= */

const form = document.getElementById("contactForm");
if (form) {
    const endpointCorreo = "https://formsubmit.co/ajax/solgrupo.asesorias@gmail.com";

    form.addEventListener("submit", async e => {
        e.preventDefault();
        const formData = new FormData(form);

        try {
            const destino = form.action && form.action.trim() ? form.action : endpointCorreo;
            const response = await fetch(destino, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            });

            if (!response.ok) {
                throw new Error("No se pudo enviar el formulario");
            }

            alert("Gracias por contactarnos. Tu mensaje fue enviado correctamente.");
            form.reset();
        } catch (error) {
            alert("No pudimos enviar tu mensaje en este momento. Inténtalo nuevamente.");
        }
    });
}

/* ================= INICIO ================= */
 document.addEventListener("DOMContentLoaded", () => {
    mostrarPropiedades(propiedades);
    iniciarAnimacionesScroll();
});





 