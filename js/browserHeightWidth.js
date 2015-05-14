$(function() {
  
  $(window).resize(function() {
    // This will execute whenever the window is resized
    var height = $(window).height(); // New height
    var width = $(window).width(); // New width
    
    console.log("Height is " + height + " width is " + width);
  });
  
});