/* ========= SLIDER AUTOMÁTICO ========= */
let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";

    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}
showSlides();

/* ========= LIGHTBOX ========= */
function openModal() {
    document.getElementById("migaleria").style.display = "block";
}

function closeModal() {
    document.getElementById("migaleria").style.display = "none";
}

let slideIndex2 = 1;
function plusSlides(n) {
    mostrarSlides(slideIndex2 += n);
}

function currentSlide(n) {
    mostrarSlides(slideIndex2 = n);
}

function mostrarSlides(n) {
    let slides = document.getElementsByClassName("misImagenes");

    if (n > slides.length) slideIndex2 = 1;
    if (n < 1) slideIndex2 = slides.length;

    for (let img of slides) img.style.display = "none";

    slides[slideIndex2 - 1].style.display = "block";
}

/* ========= MODO OSCURO ========= */
const btnModo = document.getElementById("modoOscuroBtn");

// Cargar configuración guardada
if (localStorage.getItem("modoOscuro") === "activo") {
    document.body.classList.add("modo-oscuro");
    btnModo.textContent = "☀️";
}

btnModo.addEventListener("click", () => {
    document.body.classList.toggle("modo-oscuro");

    if (document.body.classList.contains("modo-oscuro")) {
        btnModo.textContent = "☀️";
        localStorage.setItem("modoOscuro", "activo");
    } else {
        btnModo.textContent = "🌙";
        localStorage.setItem("modoOscuro", "inactivo");
    }
});

/* ============================
   MODO OSCURO
===============================*/
const btnOscuro = document.getElementById("modoOscuro");

btnOscuro.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

/* ============================
   SLIDER AUTOMÁTICO
===============================*/
let index = 0;
const slides = document.querySelectorAll(".slider img");

function cambiarImagen() {
    slides.forEach(img => img.classList.remove("active"));
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}

setInterval(cambiarImagen, 3000);

/* ============================
   LIGHTBOX
===============================*/
const imagenes = document.querySelectorAll(".galeria img");
const lightbox = document.querySelector(".lightbox");
const lightImg = document.getElementById("light-img");

imagenes.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.classList.add("active");
        lightImg.src = img.src;
    });
});

lightbox.addEventListener("click", () => {
    lightbox.classList.remove("active");
});

