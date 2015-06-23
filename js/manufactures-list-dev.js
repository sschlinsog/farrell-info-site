$(function() {
  
  console.log("JQuery is READY!");
  
  $('.manufacture-blocks li').click(function(e) {
    // Disable the default of the anchor tags which are the siblings of the li's
    e.preventDefault();
    
    // store the current element that was clicked on
    var $clicked = $(this);
    
    // Dynamically Changing the text inside the popup window
    var firstChangeText = $clicked.children().first().text(); // !important
    $('#change-link-01').html(firstChangeText); // !important
    
    var secondChangeText = $clicked.children().next().text();
    $('#change-link-02').html(secondChangeText);
    
    // Dynamically Change the href of the link in the popup window
    
    // Saving the index number from the current element that was clicked on
    var clickedIndex = $clicked.index();
    
    // Using the saved index number to GET the current element that was clicked on minus
    // 2 because of the 2 li's that are being used as our popup window
    var changeLink = $('.manufacture-blocks li a:even').eq(clickedIndex - 2).attr("href");
    // Setting the saved href from the getter
    $('#change-link-01').attr("href", changeLink);
    
    var secondChangeLink = $('.manufacture-blocks li a:odd').eq(clickedIndex - 2).attr("href");
    $('#change-link-02').attr("href", secondChangeLink);
    
    // open the popup window
    openPopup();
    
    // update the position of the popup window
    updatePopup();
  });
  
  
  
  //$(".modal-open-button").click(function(e) {
    //console.log('$(".modal-open-button").click');
    //openPopup();
    //updatePopup();
  //});
  
  $(".modal-close-button").click(function(e) {
    closePopup();
  });
  
  $("#overlay-bg").click(function(e) {
    closePopup();
  });
  
  $(window).resize(function() {
    updatePopup();
  });
  
});

function openPopup() {
  $("#popup-content").fadeIn();
  $("#overlay-bg").fadeIn();
}

function closePopup() {
  $(".modal-clost-button").prop("disabled", false);
  $("#popup-content").fadeOut();
  $("#overlay-bg").fadeOut();
}

function updatePopup() {
  var $popupContent = $("#popup-content");
  var top = '50px';
  var left = ($(window).width() - $popupContent.outerWidth()) / 2;
  $popupContent.css({
    'top' : top,
    'left' : left
  });
}