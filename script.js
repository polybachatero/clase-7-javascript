// console.log("Hola Mundo");

const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const inputConfirmacion = document.getElementById("confirmacion");
const inputEdad = document.getElementById("number");

const registro = (event) => {
    event.preventDefault();

    const emailUser = inputEmail.value;
    const passwordUser = inputPassword.value;
    const confirmacionUser = inputConfirmacion.value;
    const edadUser = inputEdad.value;

    localStorage.setItem("usuarioRegistrado", emailUser);

    console.log(emailUser, passwordUser, confirmacionUser, edadUser);
}

const validacion = () => {

}

const cerrarSesion = () => {

}