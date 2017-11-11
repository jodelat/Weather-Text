$(document).ready(function() {

  function sendText() {
    if ($("#number").val() == "" || $("#zipcode").val() == "") {
      $(".sent").html("<div class='alert alert-danger fade in'>" +
        "<a href='#' class='close' data-dismiss='alert'>&times;</a>" +
        "<strong>'Error!'</strong> " + 'Must fill out all forms.' +
        "</div>");
    }

    else {
      var info = {
        number: $("#number").val().trim(),
        zip: $("#zipcode").val().trim()
      }

      $.post("/text", info);
      $(".sent").html("<div class='alert alert-success fade in'>" +
        "<a href='#' class='close' data-dismiss='alert'>&times;</a>" +
        "<strong>'Success!'</strong> " + 'Your message has been sent.' +
        "</div>");
      $("#number").val("");
      $("#zipcode").val("");
    }
  }

  $(document).on("click", ".submit", sendText);

});
