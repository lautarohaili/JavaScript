function contactAlert() {
  Swal.fire({
    title: "Muchas gracias!",
    text: `En el plazo de 48hs nos contactaremos con usted .`,
    confirmButtonText: "Aceptar",
    customClass: {
      htmlContainer: "htmlContainer-class",
    },
    confirmButtonColor: "blue",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(location.reload());
    }
  });
}
export { contactAlert };
