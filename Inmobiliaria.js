/* ================= PROPIEDADES ================= */
let imagenActual = 0;
let imagenesActuales = [];
let scrollRevealObserver = null;
const cacheImagenes = new Set();

const propiedades = [
{
    tipo: "Finca",
    nombre: "Finca",
    referencia: "FC. 013",
    imagenes: ["Ref. FC. 13/1.jpeg",
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
             "Ref. FC. 13/13.jpeg",
             "Ref. FC. 13/14.jpeg",
             "Ref. FC. 13/15.jpeg",
             "Ref. FC. 13/16.jpeg",
             "Ref. FC. 13/17.jpeg",
             "Ref. FC. 13/18.jpeg",
             "Ref. FC. 13/19.jpeg",
             "Ref. FC. 13/20.jpeg",
             "Ref. FC. 13/21.jpeg",
             "Ref. FC. 13/22.jpeg",
             "Ref. FC. 13/23.jpeg",
             "Ref. FC. 13/24.jpeg",
             "Ref. FC. 13/25.jpeg",
             "Ref. FC. 13/26.jpeg",
             "Ref. FC. 13/27.jpeg",
             "Ref. FC. 13/28.jpeg",],
    precio: "$760.000.000",
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
    referencia: "C. 005",
    imagenes: ["Ref. C. 05/1.png",
             "Ref. C. 05/2.jpg",
             "Ref. C. 05/3.jpg",
             "Ref. C. 05/4.jpg",
             "Ref. C. 05/5.jpg",
             "Ref. C. 05/6.jpg",
             "Ref. C. 05/7.jpg",
             "Ref. C. 05/8.jpg",
             "Ref. C. 05/9.jpg",
             "Ref. C. 05/10.jpeg",
             "Ref. C. 05/11.png",
             "Ref. C. 05/12.jpg",
             "Ref. C. 05/13.jpg",
             "Ref. C. 05/14.jpg",],
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
    precio: "$620.000.000",
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
    referencia: "C. 006",
    imagenes: ["Ref. C. 06/1.jpeg",
             "Ref. C. 06/2.jpeg",
             "Ref. C. 06/3.jpeg",
             "Ref. C. 06/4.jpeg",
             "Ref. C. 06/5.jpeg",
             "Ref. C. 06/6.jpeg",
             "Ref. C. 06/7.jpeg",
             "Ref. C. 06/8.jpeg",
             "Ref. C. 06/9.jpeg",
             "Ref. C. 06/10.jpeg",
             "Ref. C. 06/11.jpeg",
             "Ref. C. 06/12.jpeg",
             "Ref. C. 06/13.jpeg",
             "Ref. C. 06/14.jpeg",],
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
    nombre: "Lote en Condominio",
    referencia: "LT. 016",
    imagenes: ["Ref. LT. 16/1.jpeg",
             "Ref. LT. 16/2.jpeg",
             "Ref. LT. 16/3.jpeg",
             "Ref. LT. 16/4.jpeg",
             "Ref. LT. 16/5.jpeg",
             "Ref. LT. 16/6.jpeg",
             "Ref. LT. 16/7.jpeg",],
    precio: "$180.000.000",
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
    tipo: "Casa",
    nombre: "Casa Urbana",
    referencia: "C. 002",
    imagenes: ["Ref. C. 02/1.jpeg",
             "Ref. C. 02/2.jpeg",
             "Ref. C. 02/3.jpeg",
             "Ref. C. 02/4.jpeg",
             "Ref. C. 02/5.jpeg",
             "Ref. C. 02/6.jpeg",
             "Ref. C. 02/7.jpeg",
             "Ref. C. 02/8.jpeg",
             "Ref. C. 02/9.jpeg",
             "Ref. C. 02/10.jpeg",
             "Ref. C. 02/11.jpeg",
             "Ref. C. 02/12.jpeg",],
    precio: "$290.000.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "168 m²",
    areaPrivada:"168 m²",
    areaConstruida:"168 m²",
    habitaciones: "6",
    banos: "5",
    descripcion: `🏡 ¡SE VENDE CASA EN MONIQUIRÁ – BOYACÁ!

✨ Amplia propiedad ideal para vivir y generar ingresos

📍 Ubicación
🏘️ Barrio Las Colinas (por la calle de las grúas)
📐 Área 168 m²

🏢 Propiedad horizontal

🏠 Casa de 3 pisos
🏠 Distribución

🔹 Primer piso
🛏️ 2 habitaciones
🚿 2 baños
🍽️ Cocina
🛋️ Sala comedor
🧺 Patio de ropas

🔹 Segundo piso
🛏️ 3 habitaciones
🚿 2 baños
🍽️ Cocina
🛋️ Sala comedor

🔹 Tercer piso (apartaestudio)
🛏️ 1 habitación
🚿 1 baño
🛋️ Sala
🍳 Cocina
🧺 Patio compartido con el segundo piso`,
    videoYoutube: "https://youtu.be/1x4IqTyEd-E",
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
    tipo: "Apartamento",
    nombre: "Apartamento",
    referencia: "Apt. 003",
    imagenes: ["Ref. Apt. 03/1.jpg",
             "Ref. Apt. 03/2.jpg",
             "Ref. Apt. 03/3.jpg",
             "Ref. Apt. 03/4.jpg",
             "Ref. Apt. 03/5.jpg",
             "Ref. Apt. 03/6.jpg",
             "Ref. Apt. 03/7.jpg",
             "Ref. Apt. 03/8.jpg",
             "Ref. Apt. 03/9.jpg",
             "Ref. Apt. 03/10.jpg",
             "Ref. Apt. 03/11.jpg",
             "Ref. Apt. 03/12.jpg",
             "Ref. Apt. 03/13.jpg",],
    precio: "$363.375.000",
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
             "Ref. C. 07/16.jpg",
             "Ref. C. 07/17.jpg",
             "Ref. C. 07/18.jpg",
             "Ref. C. 07/19.jpg",
             "Ref. C. 07/20.jpg",],
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
    videoYoutube: "https://youtu.be/T6aVRPwMsTQ",
  },
{
    tipo: "Finca",
    nombre: "Finca Rural",
    referencia: "FC. 009",
    imagenes: ["Ref. FC. 09/1.jpeg",
             "Ref. FC. 09/2.jpeg",
             "Ref. FC. 09/3.jpeg",
             "Ref. FC. 09/4.jpeg",],
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
    nombre: "Lote Rural",
    referencia: "LT. 009",
    imagenes: ["Ref. LT. 09/1.jpeg",
             "Ref. LT. 09/2.jpeg",
             "Ref. LT. 09/3.jpeg",
             "Ref. LT. 09/4.jpeg",
             "Ref. LT. 09/5.jpeg",
             "Ref. LT. 09/6.jpeg",
             "Ref. LT. 09/7.jpeg",
             "Ref. LT. 09/8.jpeg",
             "Ref. LT. 09/9.jpeg",
             "Ref. LT. 09/10.jpeg",
             "Ref. LT. 09/11.jpeg",
             "Ref. LT. 09/12.jpeg",
             "Ref. LT. 09/13.jpeg",
             "Ref. LT. 09/14.jpeg",
             "Ref. LT. 09/15.jpeg",
             "Ref. LT. 09/16.jpeg",
             "Ref. LT. 09/17.jpeg",
             "Ref. LT. 09/18.jpeg",],
    precio: "$117.376.000",
    ubicacion: "Moniquirá, Boyacá",
    area: "896 m²",
    areaPrivada:"896 m²",
    areaConstruida:"-",
    habitaciones: "-",
    banos: "-",
    descripcion: `🏡✨ ¡Invierte en el lugar perfecto para construir tu futuro! ✨🏡

🌿 Se venden exclusivos lotes en Moniquirá, Boyacá
📍 Vereda Potrero Grande

Disfruta de la tranquilidad, naturaleza y excelente ubicación a tan solo 7 minutos (2.7 km) del casco urbano de Moniquirá.
🚗 Vía en buen estado y fácil acceso.

🌄 Características del proyecto:
✅ Topografía mixta: plana y ondulada
🌿 Entorno natural y tranquilo
🏡 Ideal para construir tu hogar, finca o proyecto de descanso

🔌 Servicios disponibles:
⚡ Punto de luz
💧 Acueducto veredal
🔥 Gas natural

💰 Disponibilidad de lotes:

📐 Lote 1 — 1.076,49 m² | $144.249.660
📐 Lote 2 — 931,8 m² | $123.929.400
📐 Lote 3 — 896 m² | $117.376.000
📐 Lote 4 — 963,25 m² | $125.222.500
📐 Lote 5 — 1.052 m² | $133.604.000
📐 Lote 6 — 1.050 m² | $130.200.000
📐 Lote 7 — 1.038 m² | $129.750.000
📐 Lote 8 — 1.097 m² | $136.028.000
📐 Lote 15 — 2.617 m² | $287.870.000

🌟 Vive rodeado de naturaleza, aire puro y tranquilidad.`,
    videoYoutube: "https://youtu.be/8qDXzdINnhQ",
  }
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





 