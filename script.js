
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const inputConfirmacion = document.getElementById("confirmacion");

const registro = (event) => {
    event.preventDefault();

    const emailUser = inputEmail.value.trim();
    const passwordUser = inputPassword.value;
    const confirmacionUser = inputConfirmacion.value;

    if (passwordUser !== confirmacionUser) {
        alert("Las contraseñas no coinciden.");
        inputConfirmacion.focus();
        return;
    }

    localStorage.setItem("usuarioRegistrado", emailUser);
    window.location.href = "bienvenida.html";
}

const validacion = () => {
    const usuarioRegistrado = localStorage.getItem(usuarioRegistrado)
}

const cerrarSesion = () => {
 
}