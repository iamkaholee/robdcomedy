$(document).ready(function() {
  // Add smooth scrolling to all links
    $(document).scroll(function() {
    if ($(this).scrollTop()> 100) {
      $('nav').addClass("nav-bg")
      $('#logo').fadeIn();
      $('.arrow').addClass('hidden');
     } else {
      $('#logo').fadeOut();
      $('.arrow').removeClass('hidden');
      $('nav').removeClass("nav-bg")
     }
    });

  $(function() {
    $('#ChangeToggle').click(function() {
      $('#navbar-hamburger').toggleClass('hidden');
      $('#navbar-close').toggleClass('hidden');  
      });
  });

  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
  });
});

$("#contactForm").submit(function(event){
    // cancels the form submission
    event.preventDefault();
    submitForm();
  });
function submitForm(){
    // Initiate Variables With Form Content
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var email = $("#emailAdd").val();
    var message = $("#messageText").val();
 
    $.ajax({
        type: "POST",
        url: "php/process.php",
        data: "fname=" + fname + "&lname=" + lname + "&email=" + email + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            }
        }
    });
}
function formSuccess(){
    $( "#msgSubmit" ).removeClass( "hidden" );
    $("#headmsg").addClass("hidden");
    $("#contactForm").addClass("hidden");
}