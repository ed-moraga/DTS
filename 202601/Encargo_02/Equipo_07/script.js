// AQUÍ PUEDES MODIFICAR FÁCILMENTE LOS DATOS DE LOS PINES
const pinsData = [
    {
        id: 1,
        title: "Diseño Moderno",
        description: "Inspiración para diseño web contemporáneo y minimalista",
        image: "images/imagen1.jpg"
    },
    {
       id: 2,
       title: "Mapa Sistémico",
       description: "Actores involucrados, flujos que los conectan, retroalimentaciones que sostienen el sistema y puntos donde se concentra el control o el poder.",
       image: "images/imagen1.jpg"
    },
    {
        id: 3,
                title: "Viaje de Usuario",
                description: "Viaje que reconstruye su recorrido en el uso de la plataforma.",
                image: "images/imagen4.jpg"
    },
    {
        id: 4,
                title: "Scripts",
                description: "Tres scripts inscritos en el diseño de la plataforma.",
                image: "images/imagen2.jpg"
    },
    {
        id: 5,
                title: "Wireframes",
                description: "Propuesta de rediseño del script problemático.",
                image: "images/imagen3.jpg"
    },
    {
        id: 6,
                title: "Integrantes del grupo",
                description: "Sara Pimentel, Isidora Sandoval, Skandar Jadue, Fernanda Tapia y Sofía Toro.",
                image: "images/imagen5.jpg"
    }
];

// Función para renderizar los pines
function renderPins() {
    const pinsGrid = document.getElementById('pinsGrid');
    pinsGrid.innerHTML = '';

    pinsData.forEach(pin => {
        const pinElement = document.createElement('div');
        pinElement.className = 'pin';
        pinElement.innerHTML = `
            <img src="${pin.image}" alt="${pin.title}" class="pin-image">
            <div class="pin-content">
                <h3 class="pin-title">${pin.title}</h3>
                <p class="pin-description">${pin.description}</p>
            </div>
        `;
        
        pinElement.addEventListener('click', () => openModal(pin));
        pinsGrid.appendChild(pinElement);
    });
}

// Función para abrir el modal
function openModal(pin) {
    const modal = document.getElementById('modal');
    document.getElementById('modalImage').src = pin.image;
    document.getElementById('modalTitle').textContent = pin.title;
    document.getElementById('modalDescription').textContent = pin.description;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// ZOOM - AGRANDA TODO EL MODAL
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
let isZoomedIn = false;

modalImage.addEventListener('click', function() {
    isZoomedIn = !isZoomedIn;
    
    if (isZoomedIn) {
        modal.classList.add('zoomed');
        modalImage.style.cursor = 'zoom-out';
    } else {
        modal.classList.remove('zoomed');
        modalImage.style.cursor = 'zoom-in';
    }
});

// Resetear zoom al cerrar
const originalClose = closeModal;
window.closeModal = function() {
    isZoomedIn = false;
    modal.classList.remove('zoomed');
    originalClose();
};

// Eventos para cerrar modal
document.getElementById('closeBtn').addEventListener('click', closeModal);

document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});


// Función para actualizar un pin
function updatePin(id, title, description, image) {
    const pin = pinsData.find(p => p.id === id);
    if (pin) {
        pin.title = title;
        pin.description = description;
        pin.image = image;
        renderPins();
    }
}