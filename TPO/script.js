/* ********** Menu ********** */

const $btnMenu = document.querySelector(".menu-btn");
const $menu = document.querySelector(".menu");
const $navA = document.querySelector(".nav-a");

$btnMenu.addEventListener("click", () => {
  $menu.classList.toggle("mn-activo");
});

$navA.addEventListener("click", () => {
  $menu.classList.remove("mn-activo");
});

/* **** Validación **** */

function enviarFormulario() {
  if (document.form.nombre.value.length == 0) {
    alert("Tiene que escribir su nombre");
    document.form.nombre.focus();
    return 0;
  }

  if (document.form.apellido.value.length == 0) {
    alert("Tiene que escribir su apellido");
    document.form.apellido.focus();
    return 0;
  }

  if (document.form.email.value.length == 0) {
    alert("Tiene que escribir su email.");
    document.form.email.focus();
    return 0;
  }

  if (
    document.form.telefono.value.length == 0 ||
    document.form.telefono.value.length < 11
  ) {
    alert("Tiene que escribir su telefono");
    document.form.telefono.focus();
    return 0;
  }

  //el formulario se envia
  alert(
    "Muchas gracias por comunicarse con nosotros, en breve nos pondremos con contacto con usted."
  );
  document.form.submit();
}
