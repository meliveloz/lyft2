$(document).ready(function(){
	$(function(){
   	setTimeout(function() {
      $('#splash').fadeOut(1000);
   	}, 4000);
  });
  $(".verify-section").fadeOut();
  $(".register").fadeOut();
  $(".final-section").fadeOut();
  $(".button-login").click(function(){
    $(".principal").fadeOut();
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
      $(".sing-up-section").fadeOut();
       $(".verify-section").fadeIn();
       alert("Tu código es "+randomNumber());
     
      });

    $(".resend-button").click(function(){
      alert("Tu código es "+randomNumber());

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
    $("#resend-next-button").click(function(){
      $(".verify-section").fadeOut();
       $(".register").fadeIn();
    })
    $(".input-register").keyup(function() {
     
      var inputValue = $(".input-register").val();
      if (inputValue.length !==0) {
        $("#register-next-button").removeClass("disabled");
      } else {
        $("#register-next-button").addClass("disabled");
      }
    });

    $("#register-next-button").click(function(){
      $(".register").fadeOut();
      $(".final-section").fadeIn();
    });


});
