$(document).ready(function(){

  // color themes
  let theme;
  let lMode = $("#lmode-icon");
  let dMode = $("#dmode-icon");

  $(dMode).click(function() {
    $("body").removeClass("light-mode")
    .addClass("dark-mode", 1000);

    $(dMode).css("opacity", "1");
    $(lMode).css("opacity", "0.5");  
  });

  $(lMode).click(function() {
    $("body").removeClass("dark-mode")
    .addClass("light-mode", 1000);

    $(lMode).css("opacity", "1");
    $(dMode).css("opacity", "0.5");
  });  
  
});

