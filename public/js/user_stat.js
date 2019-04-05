$(document).ready(function () {

  var selectedUser = $(".dropdown-menu").attr("data-id");

  //grabs users from database in prep for list creation
  $.get("/api/users", function (data) {
    console.log(data);

    if (data.length !== 0) {

      for (var i = 0; i < data.length; i++) {
        var row = $("<a>");
        row.addClass("dropdown-item");
        row.attr("href", "#");
        row.attr("data-name", data[i].name);
        row.attr("data-id", data[i].id);
        row.text(data[i].name);

        $(".dropdown-menu").append(row);
      }
    }
  });

    //grabs value from user select menu
    $(".dropdown-menu").on("click", "a", function(event) {

      event.preventDefault();

      var selectedUser = $(this).text();
      var selectedUserID = $(this).attr("data-id");

      //assigns button text to name of selected user
      $(".dropdown-toggle").text(selectedUser);
      
      //creates attritubes in html element to later be grabbed for ajax post
      $(".dropdown-toggle").attr("data-name", selectedUser);
      $(".dropdown-toggle").attr("data-id", selectedUserID);

      console.log("User selected: " + selectedUser);
  });

  //grabs value of button clicked, hopefully generates a graph
  $(".query-button").on("click", function() {

    var buttonValue = $(this).attr("data-measurement");
    var selectedUser = $(".dropdown-toggle").attr("data-id");

    console.log("measurement selector clicked, button clicked: " + buttonValue);
    console.log("selected user is: " + selectedUser);

 
  });


});