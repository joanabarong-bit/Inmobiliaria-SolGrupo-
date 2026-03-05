/* ================= PROPIEDADES ================= */
let imagenActual = 0;
let imagenesActuales = [];
let scrollRevealObserver = null;

const propiedades = [
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
                <img src="${p.imagenes[0]}" alt="${p.nombre}">
                <div class="property-body">
                    <h3>${p.nombre}</h3>
                     <p class="property-ref">📌 Ref: ${p.referencia || "Sin referencia"}</p>
                    <p class="location">📍 ${p.ubicacion}</p>
                    <p class="price">${p.precio}</p>
                    <button onclick="verDetalle('${p.nombre}')">Ver detalles</button>
                </div>
            </div>
        `;
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

function verDetalle(nombre) {
    const p = propiedades.find(prop => prop.nombre === nombre);
    if (!p) return;

    // cargar imágenes del inmueble
    imagenesActuales = p.imagenes;
    imagenActual = 0;

    // SIEMPRE mostrar la primera imagen
    document.getElementById("detalleImg").src = imagenesActuales[0];
    document.getElementById("detalleImg").alt = p.nombre;


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





 