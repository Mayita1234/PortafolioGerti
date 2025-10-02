// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
  
  document.addEventListener("DOMContentLoaded", () => {
    //Almacenamos los id a trabajar dentro de sus variables modal - modalImg
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");
    const cerrar = document.querySelector(".cerrar");
 
    const imagenes = document.querySelectorAll(".flip-card-back img");
 
    imagenes.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
        });
    });
 
    cerrar.addEventListener("click", () => {
        modal.style.display = "none";
    });
 
    modal.addEventListener("click", (e) => {
        if(e.target === modal){
            modal.style.display = "none";
        }
    });



  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyACOMuEdw6KEkIuYmlYvjNUkBldrs5Mz5U",
    authDomain: "form-portafolio1.firebaseapp.com",
    projectId: "form-portafolio1",
    storageBucket: "form-portafolio1.firebasestorage.app",
    messagingSenderId: "10011922525",
    appId: "1:10011922525:web:27f78aea0bcb08a6ecfdb4",
    measurementId: "G-K1XSX1NHYG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = firebase.firestore();

  const form = document.getElementById("contacto-form");
 
    form.addEventListener("submit", async(e) => {
        e.preventDefault();
 
        const nombre = document.getElementById("nombre");
        const email = document.getElementById("email");
        const asunto = document.getElementById("asunto");
        const mensaje = document.getElementById("mensaje");
 
        try{
            await db.collection("Clientes").add({
                nombre: nombre,
                email: email,
                asunto: asunto,
                mensaje: mensaje,
                fecha: new Date()
            });
            console.log("Datos enviados");
            alert("Solicitud enviada");
            form.reset();
        } catch(error){
            console.log("Error al enviar datos");
            alert("Hubo un error al enviar datos");
        }
    });