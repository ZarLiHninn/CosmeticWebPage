$(document).ready(function() {

    $('#contactform').submit(function(e) {
      e.preventDefault();
      var name = $('#name').val();
      var email = $('#email').val();

      $(".error").remove();
     
      if (name.length < 1) {
        $('#name').after('<span class="error">This field is required</span>');
      }
      else if(name.length<2){
        $('#name').after('<span class="error">Please fill name at least 2characters.</span>');
      }else{
          var regEx= /^[a-zA-Z]*$/;
          var validName = regEx.test(name);
          if(!validName){
              $('#name').after('<span class="error">Please fill only text.</span>');
          }
      }
      if (email.length < 1) {
        $('#email').after('<span class="error">This field is required</span>');
      } else {
        var regEx = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z])+\.)+([a-zA-Z]{2,4})+$/;
        var validEmail = regEx.test(email);
        if (!validEmail) {
          $('#email').after('<span class="error">Enter a valid email</span>');
        }
      }
 
    });
  
  });