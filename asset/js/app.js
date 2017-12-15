$(document).ready(function(){
	$(function(){
   	setTimeout(function() {
      $('#splash').fadeOut(1000);
   	}, 5000);
  });
  
 
	var randomNumber = (function() {
 	var code = "";
  	var str = "1234567890";
 	 for (var i = 0; i < 3; i++) {
   		 code += str.charAt(Math.floor(Math.random() * str.length));
  	}
  return code;
});
	
    $("#input-key").keyup(function() {
      var notWord = /^[0-9]*$/;
      var inputValue = $(this).val();
      if (inputValue.length >= 10 && notWord.test(inputValue)) {
        $("#btn-next").removeClass("disabled");
      } else {
        $("#btn-next").addClass("disabled");
      }
    });


    $("#btn-next").click(function() {
       alert("Tu código es "+randomNumber());
     
      });

    $(".resend-button").click(function(){
      alert("Tu código es "+ randomNumber());

    });

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
