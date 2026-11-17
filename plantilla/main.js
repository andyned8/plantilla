// --- 1. INICIALIZACIÓN DE VUE.JS (Opcional) ---
const { createApp } = Vue;

createApp({
    data() {
        return {
            mensajeVue: "Componente interactivo controlado por Vue.js con éxito."
        }
    }
}).mount('#app');


// --- 2. BÚSQUEDA LOCAL ---
const btnBuscar = document.getElementById('btn-buscar');
const inputBusqueda = document.getElementById('input-busqueda');
const resultadoBusqueda = document.getElementById('resultado-busqueda');

const datosLocales = {
    "elemento 1": { titulo: "Resultado Encontrado", desc: "Información correspondiente al elemento solicitado." }
};

btnBuscar.addEventListener('click', () => {
    const query = inputBusqueda.value.trim().toLowerCase();
    if (!query) return;

    if (datosLocales[query]) {
        const item = datosLocales[query];
        resultadoBusqueda.innerHTML = `<strong>${item.titulo}</strong><p>${item.desc}</p>`;
    } else {
        resultadoBusqueda.innerHTML = `<p style="color: #dc3545;">No se encontró nada. Prueba escribiendo "elemento 1".</p>`;
    }
});


// --- 3. THREE.JS (Visualizador 3D básico) ---
const container = document.getElementById('three-container');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
const material = new THREE.MeshBasicMaterial({ color: 0x0d6efd, wireframe: true });
const cubo = new THREE.Mesh(geometry, material);
scene.add(cubo);

camera.position.z = 3;

function animate() {
    requestAnimationFrame(animate);
    cubo.rotation.x += 0.01;
    cubo.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Ajuste responsivo para el visor 3D
window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
});