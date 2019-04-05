$(document).ready(function () {

  var selectedUser = $(".dropdown-menu").attr("data-id");

  //grabs users from database, creates list of existing users
  $.get("/api/users", function (data) {

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
  $(".dropdown-menu").on("click", "a", function (event) {

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
  $(".query-button").on("click", function () {

    var buttonValue = $(this).attr("data-measurement");
    var selectedUser = $(".dropdown-toggle").attr("data-id");

    console.log("measurement selector clicked, button clicked: " + buttonValue);
    console.log("selected user ID is: " + selectedUser);

    $.get("/api/users/" + selectedUser)
      .then(function (response) {

        var theData = response.Measurements;
        var labels = [];
        var data = [];

        for (i = 0; i < theData.length; i++) {

          data.push(theData[i][buttonValue]);
          labels.push(theData[i].createdAt.slice(5, 10));

          console.log("The data requested: " + labels + ", " + data);

        }

        var aChart = $("#lineChart");
        var lineChart = new Chart(aChart, {

          type: 'line',
          data: {
            labels: labels,
            datasets: [{
              data: data,
              label: buttonValue,
              borderColor: "#3e95cd",
              fill: false
            }],
          },

          options: {
            responsive: true,
            title: {
              display: true,
              text: 'Progressional Fitness Tracker'
            },
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  suggestedMax: 40,
                  suggestedMin: 10
                }
              }]
            }
          }
        });
      });
  });
});
