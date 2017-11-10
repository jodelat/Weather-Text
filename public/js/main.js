$(document).ready(function() {

  function sendText() {
    var info  = {
      number: $("#number").val().trim(),
      zip: $("#zipcode").val().trim()
    }

    $.post("/text", info, function(){
      $("#number").val("");
      $("#zipcode").val("");
    });
  }








$(document).on("click", ".submit", sendText);

});
