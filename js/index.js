//$('.carousel').carousel();

$("#telefono").on("keyup", function () {
  var id = $(this).val();
  var texto = "";
  var numero = /^[0-9]+$/;
  $("#errorTel").addClass("d-none");
  if (id.length != 8) {
    texto = "Ingrese un teléfono válido";
    $("#errorTel").removeClass("d-none");
  }
  if (!numero.test(id)) {
    texto = "Ingrese un teléfono válido";
    $("#errorTel").removeClass("d-none");
  }
  var primero = id.substr(0, 1);
  if (primero != 2 && primero != 8 && primero != 7 && primero != 6) {
    texto = "Ingrese un teléfono válido";
    $("#errorTel").removeClass("d-none");
  }

  $("#errorTel").text(texto);
  return false;
});

$("#email").on("keyup", function () {
  var id = $(this).val();
  var texto = "";
  var expreCor = /^([a-zA-Z0-9\_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,63})+$/;
  $("#errorEmail").addClass("d-none");
  if (!expreCor.test(id)) {
    texto = "Ingrese un correo eléctronico válido";
    $("#errorEmail").removeClass("d-none");
  }

  $("#errorEmail").text(texto);
  return false;
});

$("#identificacion").on("keyup", function () {
  var id = $(this).val();
  var texto = "";
  var numero = /^[0-9]+$/;

  if (id.length != 0 || id != "") {
    texto = "";
  }

  if (id.length != 9) {
    texto = "Ingrese una identificación válida";
  }
  if (!numero.test(id)) {
    $("#identificacion").val("");
    texto = "Ingrese una identificación válida";
  }
  if (id.length == 0 || id == "") {
    texto = "Ingrese una identificación";
  }

  $("#errorIden").text(texto);
  if (texto == "") {
    var url = "https://datatalks.io/wspadron/api/padron/" + id;
    $.ajax({
      type: "GET",
      url: url,
      dataType: "json",
      success: function (data, status) {
        $("#emailHelp").text(
          data.nombre + " " + data.apellido1 + " " + data.apellido2
        );

        $("#nombre").val(data.nombre);
        $("#apellido").val(data.apellido1 + " " + data.apellido2);
      },
      error: function () {
        //alert('error');
        //nombreNacional.innerHTML = 'Si es Nacional debe digitar los 9 digitos, si es Dimex 12.Error';
      },
    });
  }

  return false;
});

$("#btnSolicitar").on("click", function () {
  var identificacion = $("#identificacion").val();
  var telefono = $("#telefono").val();
  var email = $("#email").val();
  $(".text-informacion-req").addClass("d-none");
  var texto = "";
  var numero = /^[0-9]+$/;
  var expreCor = /^([a-zA-Z0-9\_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,63})+$/;

  texto = "";
  if (identificacion.length != 9) {
    texto = "Ingrese una identificación válida";
    $("#errorIden").text(texto);
    $(".text-informacion-req").removeClass("d-none");
    return false;
  }
  if (!numero.test(identificacion)) {
    texto = "Ingrese una identificación válida";
    $("#errorIden").text(texto);
    $(".text-informacion-req").removeClass("d-none");
    return false;
  }
  if (identificacion.length == 0 || identificacion == "") {
    texto = "Ingrese una identificación";
    $("#errorIden").text(texto);
    $(".text-informacion-req").removeClass("d-none");
    return false;
  }
  texto = "";
  if (email == "" || email == 0 || email.length == 0) {
    texto = "Ingrese un correo electrónico";
    $("#errorEmail").text(texto);
    $(".text-informacion-req").removeClass("d-none");
    return false;
  }
  if (!expreCor.test(email)) {
    texto = "Ingrese un correo electrónico válido";
    $("#errorEmail").text(texto);
    $(".text-informacion-req").removeClass("d-none");
    return false;
  }
  texto = "";
  if (telefono == "" || telefono == 0 || telefono.length == 0) {
    texto = "Ingrese un teléfono";
    $("#errorTel").text(texto);
    $(".text-informacion-req").removeClass("d-none");
    return false;
  }
  if (telefono.length != 8) {
    texto = "Ingrese un teléfono válido";
    $("#errorTel").text(texto);
    $(".text-informacion-req").removeClass("d-none");
    return false;
  }
  if (!numero.test(telefono)) {
    texto = "Ingrese un teléfono válido";
    $("#errorTel").text(texto);
    $(".text-informacion-req").removeClass("d-none");
    return false;
  }
  var primero = telefono.substr(0, 1);
  if (primero != 2 && primero != 8 && primero != 7 && primero != 6) {
    texto = "Ingrese un teléfono válido";
    $("#errorTel").text(texto);
    $(".text-informacion-req").removeClass("d-none");
    return false;
  }

  $("#formdata").submit();
});
