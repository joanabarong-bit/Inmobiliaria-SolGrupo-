/* ================= PROPIEDADES ================= */
let imagenActual = 0;
let imagenesActuales = [];
let scrollRevealObserver = null;
const cacheImagenes = new Set();

const propiedades = [
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
    precio: "$399.000.000",
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
    referencia: "C. 018",
    imagenes: ["Ref. C. 18/1.png",
             "Ref. C. 18/2.jpg",
             "Ref. C. 18/3.png",
             "Ref. C. 18/4.png",
             "Ref. C. 18/5.png",
             "Ref. C. 18/6.png",
             "Ref. C. 18/7.png",
             "Ref. C. 18/8.png",
             "Ref. C. 18/9.png",
             "Ref. C. 18/10.png",],
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
    referencia: "LT. 019",
    imagenes: ["Ref. LT. 19/1.jpeg",
             "Ref. LT. 19/2.jpeg",
             "Ref. LT. 19/3.jpeg",
             "Ref. LT. 19/4.jpeg",
             "Ref. LT. 19/5.jpeg",
             "Ref. LT. 19/6.jpeg",
             "Ref. LT. 19/7.jpeg",
             "Ref. LT. 19/8.jpeg",
             "Ref. LT. 19/9.jpeg",
             "Ref. LT. 19/10.jpeg",
             "Ref. LT. 19/11.jpeg",
             "Ref. LT. 19/12.jpeg",],
    precio: "$215.000.000",
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
    tipo: "Finca",
    nombre: "Finca Rural",
    referencia: "FC. 012",
    imagenes: ["Ref. FC. 12/1.jpeg",
             "Ref. FC. 12/2.jpeg",
             "Ref. FC. 12/3.jpeg",
             "Ref. FC. 12/4.jpeg",],
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
{
    tipo: "Casa",
    nombre: "Casa Urbana",
    referencia: "C. 006",
    imagenes: ["Ref. C. 06/1.jpeg",
             "Ref. C. 06/2.jpeg",
             "Ref. C. 06/3.jpeg",
             "Ref. C. 06/4.jpeg",
             "Ref. C. 06/5.jpeg",],
    precio: "$350.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "146 m²",
    areaPrivada:"146 m²",
    areaConstruida:"146 m²",
    habitaciones: "4",
    banos: "3",
    descripcion: `🏡 HERMOSA CASA EN VENTA – BARRIO RICAURTE

✨ Excelente oportunidad de inversión en una de las zonas con mayor proyección y fácil acceso. 
Esta propiedad se encuentra muy bien ubicada, cerca de vías principales y zonas comerciales. 
Su distribución la convierte en una excelente opción tanto para vivienda familiar como para
 obtener ingresos por arrendamiento.

📍 Ubicación: Barrio Ricaurte
📐 Área: 146 m²
✨ Distribución del inmueble

🏠 Casa primer piso:
🛏️ 2 habitaciones
🚿 1 baño
🛋️ Sala comedor
🍽️ Cocina
🌿 Patio

🏘️ 2 apartaestudios segundo piso:
🛏️ 1 habitación
🚿 1 baño cada uno

🔧 Servicios
💧 Agua
⚡ Energía eléctrica
🔥 Gas domiciliario

📋 Documentación
✅ Documentos totalmente al día
✅ Propiedad urbana`,
    videoYoutube: "https://youtu.be/roUAGcg7LGo?si=Q0gXQdPvFRutFmUV",
  },
{
    tipo: "Casa",
    nombre: "Casa Campestre",
    referencia: "C. 003",
    imagenes: ["Ref. C. 03/1.PNG",
             "Ref. C. 03/2.PNG",
             "Ref. C. 03/3.PNG",
             "Ref. C. 03/4.PNG",
             "Ref. C. 03/5.PNG",
             "Ref. C. 03/6.PNG",
             "Ref. C. 03/7.PNG",
             "Ref. C. 03/8.PNG",
             "Ref. C. 03/9.PNG",
             "Ref. C. 03/10.PNG",
             "Ref. C. 03/11.PNG",
             "Ref. C. 03/12.PNG",
             "Ref. C. 03/13.PNG",],
    precio: "$145.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "500 m²",
    areaPrivada:"500 m²",
    areaConstruida:"60 m²",
    habitaciones: "2",
    banos: "1",
    descripcion: `📌 ENCANTADORA CABAÑA CAMPESTRE EN VENTA
MONIQUIRÁ BOYACÁ – VEREDA COLORADO

🌿 Disfruta de la tranquilidad, el confort y una vista privilegiada en esta moderna propiedad de estilo campestre, ideal para descansar o vivir rodeado de naturaleza.

📍 Ubicación: Vereda Colorado

📐 Área total del lote: 500 m²
🏠 Área construida: 60 m² Aprox.

✨ Características del inmueble:

🏡 Cabaña de dos niveles
🏗️ Construcción tradicional en bloque y concreto
🛏️ 2 habitaciones amplias
🛁 1 baño con división en vidrio
🛋️ Sala acogedora
🍽️ Cocina integral
🌅 Ventanales de piso a techo con excelente iluminación natural
🪟 Vista panorámica a las montañas
🪜 Escalera metálica con peldaños en madera
🌳 Entorno natural y tranquilo
🔧 Servicios y adicionales:
💧 Servicio de agua
⚡ Energía eléctrica
🔥 Gas propano
🚗 Espacio para parqueo

🌿 Amplias zonas verdes alrededor de la propiedad
✅ Excelente iluminación y ventilación natural
✅ Ideal para vivienda, descanso o inversión turística
✅ Ambiente seguro y rodeado de naturaleza`,
    videoYoutube: "https://youtu.be/gLKxlGwuNvM?si=oWrGOo3HnSDxnNf0",
  },
{
    tipo: "Lote",
    nombre: "Lote en Condominio",
    referencia: "LT. 011",
    imagenes: ["Ref. LT. 11/1.jpeg",
             "Ref. LT. 11/2.jpeg",
             "Ref. LT. 11/3.jpeg",
             "Ref. LT. 11/4.jpeg",
             "Ref. LT. 11/5.jpeg",
             "Ref. LT. 11/6.jpeg",
             "Ref. LT. 11/7.jpeg",
             "Ref. LT. 11/8.jpeg",],
    precio: "$159.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "1.372 m²",
    areaPrivada:"1.372 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `📌Venta de Lote en condominio en Moniquirá – Boyacá

Contamos con 1 lote disponibles en Condominio Campestre. Ubicado en Moniquirá, Boyacá

📏Áreas

✅ Lote – Área: 1.372 m²

✅ Amplios senderos peatonales

El condominio cuenta con:

✨ Portería, lago, piscina, quioscos, BBQ
✨ Zonas verdes, zona de juegos, acceso al río
✨ Planta de tratamiento de aguas
✨ Servicios públicos completos: agua, luz, gas y alcantarillado
✨ Escritura independiente

🏡 Además, si deseas adquirir tu lote y construir tu casa con nosotros, recibirás totalmente gratis el diseño arquitectónico personalizado.`,
    videoYoutube: "https://youtu.be/gToaauh3vaA?si=J8ieyir0D8o5R2aV",
  },
{
    tipo: "Lote",
    nombre: "Lote",
    referencia: "LT. 022",
    imagenes: ["Ref. LT. 22/1.jpg",
             "Ref. LT. 22/2.jpg",
             "Ref. LT. 22/3.jpg",
             "Ref. LT. 22/4.jpg",
             "Ref. LT. 22/5.jpg",
             "Ref. LT. 22/6.jpg",
             "Ref. LT. 22/7.jpg",
             "Ref. LT. 22/8.jpg",
             "Ref. LT. 22/9.jpg",
             "Ref. LT. 22/10.jpg",
             "Ref. LT. 22/11.jpg",],
    precio: "$230.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "4,000 m²",
    areaPrivada:"4,000 m²",
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





 