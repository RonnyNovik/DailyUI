$(document).ready(function(){
  //Get the input from
  var lightmode = false;
  $('.changeButton').click(function(){
    if(!lightmode){
      $(this).css({
        color: 'rgb(31, 31, 31)',
        background: 'white',
        border: '3px solid rgb(145, 245, 28)'
      }).addClass('glowHandler-lightmode').removeClass('glowHandler-darkmode');
      $('.wrapper ,.container-fluid').css({
        transition: '0.3s',
        background: '#fff',
        color: 'rgb(31, 31, 31)'
      });

      lightmode = true;
    }else{
      $(this).css({
        color: 'white',
        background: 'rgb(22,22,22)',
        border: '3px solid rgb(221, 23, 130)'
      }).addClass('glowHandler-darkmode').removeClass('glowHandler-lightmode');
      $('.wrapper').css({
        transition: '1.66s',
        background: 'linear-gradient(to right, #212121, #060606)',
      });
      $('.container-fluid').css({
        transition: '0.3s',
        background: 'rgb(22,22,22)',
        color: '#fff'
      });
      lightmode = false;
    }
});
 $('.col').hover(function(){
  if(!lightmode){
    $(this).addClass('glowHandler-darkmode').removeClass('glowHandler-lightmode');
  }else{
    $(this).addClass('glowHandler-lightmode').removeClass('glowHandler-darkmode');
  }
 });
});
