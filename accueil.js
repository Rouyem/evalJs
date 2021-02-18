var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: false
})

function verifchamps()
{
  var sujet = $('#sujet').val();
  var email = $('#email').val();
  var reg = new RegExp('^[\\w.-_]+@[a-zA-Z0-9-_]+.[a-zA-Z]{2,4}$');
  var message = $('#message').val();
  if(sujet == '' )
  {
    $('#erreurSujet').html('Ce champ est obligatoire')
    $('#erreurSujet').addClass('erreur')
  }
  else
  {
    $('#erreurSujet').html('')
    $('#erreurSujet').removeClass('erreur')
  }
  if(email == '' || !reg.test(email))
  {
    $('#erreurEmail').html("Votre e-mail n'est pas valide")
    $('#erreurEmail').addClass('erreur')
  }
  else
  {
    $('#erreurEmail').html('')
    $('#erreurEmail').removeClass('erreur')
  }
  if(message == '' )
  {
    $('#erreurMessage').html('Ce champ est obligatoire')
    $('#erreurMessage').addClass('erreur')
  }
  else
  {
    $('#erreurMessage').html('')
    $('#erreurMessage').removeClass('erreur')
  }
}

$(window).scroll(function () 
{
  var height = $(window).scrollTop();
  if(height >200) {
    $('#header').addClass('active');
    $('#logo').hide();
  }
  else {
    $('#header').removeClass('active');
    $('#logo').show();
  }
  var top = $(window).scrollTop();
  if(top > 300)
  {
    $('#enhaut').show();
  }
  else
  {
    $('#enhaut').hide();
  }
});

function haut()
{
  $('html, body').animate(
    { 
      scrollTop: '0px' 
    }, 
    1500); 
    return false; 
}