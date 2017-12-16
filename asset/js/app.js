$(document).ready(function(){ //Función para la vista splash
	$(function(){
   	setTimeout(function() {
      $('#splash').fadeOut(1000);
   	}, 5000);
  });
  
 
	var randomNumber = (function() {  // Para la generar un número de 3 dígitos random
 	var code = "";
  	var str = "1234567890";
 	 for (var i = 0; i < 3; i++) {
   		 code += str.charAt(Math.floor(Math.random() * str.length));
  	}
  return code;
});
	
    $("#input-key").keyup(function() {   //validando que solo sean validos los números 
      var notWord = /^[0-9]*$/;
      var inputValue = $(this).val();
      if (inputValue.length >= 10 && notWord.test(inputValue)) { //para que no ingresen menos de 10 números y se cumpla que solo ingresan letras.
        $("#btn-next").removeClass("disabled");// habilitar botones si las condiciones se dan.
      } else {
        $("#btn-next").addClass("disabled");
      }
    });


    $("#btn-next").click(function() {  //enviando código con alarma
       alert("Tu código es "+randomNumber());
     
      });

    $(".resend-button").click(function(){
      alert("Tu código es "+ randomNumber());

    });
//_________________________________________________________validando los input_________________________________________________
    $("#verify-key").keyup(function() { 
      var notWord = /^[0-9]*$/;
      var inputValue = $(this).val();
      if (inputValue.length == 3 && notWord.test(inputValue)) {
        $("#resend-next-button").removeClass("disabled");
      } else {
        $("#resend-next-button").addClass("disabled");
      }
    });
    
    $(".input-name").keyup(function() {
     
      var inputNameValue = $(".input-name").val();
      var inputMailValue =$(".input-mail").val();
      if (inputNameValue.length > 0 && inputMailValue.length > 0) {
        $("#register-next-button").removeClass("disabled");
      } else {
        $("#register-next-button").addClass("disabled");
      }
    });
     $(".input-mail").keyup(function() {
     
      var inputNameValue = $(".input-name").val();
      var inputMailValue =$(".input-mail").val();
      if (inputNameValue.length > 0 && inputMailValue.length > 0) {
        $("#register-next-button").removeClass("disabled");
      } else {
        $("#register-next-button").addClass("disabled");
      }
    });

  

});
