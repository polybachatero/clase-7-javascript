
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

    formulario.reset();
}

const validacion = () => {
    const usuarioRegistrado = localStorage.getItem(usuarioRegistrado)
}
/*
const validacion = () => {
    const usuarioRegistrado = localStorage.getItem("emailRegistrado");

    if (usuarioRegistrado === null) {
        alert("No hay ningún usuario registrado.");

        window.location.href = "index.html";
    } else {
        document.getElementById("mensaje").textContent =
            "¡Bienvenido/a, " + usuarioRegistrado + "!";
    }
};


const cerrarSesion = () => {

}
*/

const salir = () => {
    window.location.href = "index.html";
};