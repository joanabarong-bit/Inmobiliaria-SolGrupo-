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
    area: "54 m² contruidos (1,328 m² en total)",
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
    area: "118 m² contruidos (1,238 m² en total)",
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
    referencia: "LT. 016",
    imagenes: ["Ref. LT. 16/1.jpeg",
             "Ref. LT. 16/2.jpeg",
             "Ref. LT. 16/3.jpeg",
             "Ref. LT. 16/4.jpeg",
             "Ref. LT. 16/5.jpeg",
             "Ref. LT. 16/6.jpeg",
             "Ref. LT. 16/7.jpeg",],
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

    document.getElementById("btnWhatsappDetalle").href =
        "https://wa.me/573161498625?text=" +
       encodeURIComponent(`Hola, estoy interesado en la propiedad: ${p.nombre} (Ref: ${p.referencia || "Sin referencia"})`);

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
    form.addEventListener("submit", async e => {
        e.preventDefault();
        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
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





 