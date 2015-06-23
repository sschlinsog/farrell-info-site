$(function() {
  
  $('#mailing-list').click(function() {
    console.log('in the right place');
    openPopup();
    updatePopup();
  });
  
  $('#popup-close-button').click(function() {
    closePopup();
  });
  
  $('#overlay-bg').click(function() {
    closePopup();
  });
  
  $(window).resize(function() {
    updatePopup();
  });
  
});

function openPopup() {
  $('#mc_embed_signup').fadeIn();
  $('#overlay-bg').fadeIn();
}

function closePopup() {
  $('#mc_embed_signup').fadeOut();
  $('#overlay-bg').fadeOut();
}

function updatePopup() {
  var $popupWindow = $("#mc_embed_signup");
  var top = '50px';
  var left = ($(window).width() - $popupWindow.outerWidth()) / 2;
  $popupWindow.css({
    "top" : top,
    "left" : left
  });
}