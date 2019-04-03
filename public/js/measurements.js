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

    //grabs value from user select menu
    $(".dropdown-menu a").click( function(event) {
        event.preventDefault();
        var selectedUser = $(this).text();
        //assigns button text to name of selected user
        $(".dropdown-toggle").text(selectedUser);
        //creates an attritube in html element to later be grabbed for ajax post
        $(".dropdown-toggle").attr("data-name", selectedUser);
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
                UserId: $(".dropdown-toggle").attr("data-name")
            };

            submitMeasurement(newMeasurement);
        }
    };

    //function to send data to database
    function submitMeasurement(Measurement) {

        $.post("api/measurements/", Measurement, function() {

            //add href link to the next user page.
            window.location.href = "/user_stat.html"
        });

    };

});