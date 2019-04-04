$(document).ready(function() {
  $(document).on("click", "button.weightButton", function() {



$.ajax({
  url: "/api/measurements",
  async: false,
  dataType: 'json',
  type: "GET",
  success: function (jsonData) {
    console.log(jsonData);

    for (var i = 0; i < jsonData.length; i++) {
      console.log(jsonData[i+=1].id);

      var aChart = $("#lineChart");
      var lineChart = new Chart(aChart, {
        type: 'line',
        data: {
          labels: [jsonData[i].updatedAt.slice(5,10), jsonData[i].updatedAt.slice(5,10), "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          datasets: [{
            data: [jsonData[i].weight],
            label: "Weight",
            borderColor: "#3e95cd",
            fill: false
          }, {
            data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 52670],
            label: "Chest",
            borderColor: "#8e5ea2",
            fill: false
          }, {
            data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
            label: "Waist",
            borderColor: "#3cba9f",
            fill: false
          }, {
            data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
            label: "Belt Line",
            borderColor: "#e8c3b9",
            fill: false
          }, {
            data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
            label: "Biceps",
            borderColor: "#c45850",
            fill: false
          }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'M-body Fitness Tracker'
          }
        }
      });
    }
  }
});
});
});