$(document).ready(function() {

    //var $userName =  $("#userName").val().trim();
    var $weight = $("#weight");
    var $chest = $("#chest");
    var $waist = $("#waist");
    var $beltLine = $("#beltLine");
    var $leftBicep = $("#leftBicep");
    var $rightBicep = $("#rightBicep");
    var $leftForearm = $("#leftForearm");
    var $rightForearm = $("#rightForearm");
    var $leftThigh = $("#leftThigh");
    var $rightThigh = $("#rightThigh");
    var $leftCalf = $("#leftCalf");
    var $rightCalf = $("#rightCalf");
    
    //grabs users from database in prep for list creation
    $.get("/api/users", function(data) {
        console.log(data);

        if (data.length !==0) {

            for (var i=0; i<data.length; i++) {
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

    //submit button event handler
    $(document).on("click", "button.submitButton", sendMeasurementData);

    //submit button function logic
    function sendMeasurementData(event) {

        event.preventDefault();
        console.log("Submit Measurement button pressed.");

        if (!$weight.val() || !$chest.val() || !$waist.val() || !$beltLine.val() || !$leftBicep.val() || !$rightBicep.val() || !$leftForearm.val() || !$rightForearm.val() || !$leftThigh.val() || !$rightThigh.val() || !$leftCalf.val() || !$rightCalf.val()) {
            console.log("Uh oh. Empty form inputs.");
            return;
        }

        else {

            console.log("Form info complete");

            var newMeasurement = {
                weight: $weight.val().trim(),
                chest: $chest.val().trim(),
                waist: $waist.val().trim(),
                beltLine: $beltLine.val().trim(),
                leftBicep: $leftBicep.val().trim(),
                rightBicep: $rightBicep.val().trim(),
                leftForearm: $leftForearm.val().trim(),
                rightForearm: $rightForearm.val().trim(),
                leftThigh: $leftThigh.val().trim(),
                rightThigh: $rightThigh.val().trim(),
                leftCalf: $leftCalf.val().trim(),
                rightCalf: $rightCalf.val().trim(),
                UserId: $(".dropdown-toggle").attr("data-id")
            };

            submitMeasurement(newMeasurement);
        }
    };

    //function to send data to database
    function submitMeasurement(measurement) {

        $.post("api/measurements/", measurement, function() {

            //add href link to the next user page.
            window.location.href = "/user_stat.html"
        });

    };

});