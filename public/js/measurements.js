$(document).ready(function() {

    var $userName =  $("#userName").val().trim();
    var $weight = $("#weight").val().trim();
    var $chest = $("#chest").val().trim();
    var $waist = $("#waist").val().trim();
    var $beltLine = $("#beltLine").val().trim();
    var $leftBicep = $("#leftBicep").val().trim();
    var $rightBicep = $("#rightBicep").val().trim();
    var $leftForearm = $("#leftForearm").val().trim();
    var $rightForearm = $("#rightForearm").val().trim();
    var $leftThigh = $("#leftThigh").val().trim();
    var $rightThigh = $("#rightThigh").val().trim();
    var $leftCalf = $("#leftCalf").val().trim();
    var $rightCalf = $("#rightCalf").val().trim();

    //submit button event handler
    $(document).on("click", "button.submitButton", sendMeasurementData);

    //submit button function logic
    function sendMeasurementData(event) {

        event.preventDefault();
        console.log("Goliath online.");

        if (!$weight || !$chest || !$waist || !$beltLine || !$leftBicep || !$rightBicep || !$leftForearm || !$rightForearm || !$leftThigh || !$rightThigh || !$leftCalf || !$rightCalf) {
            console.log("Uh oh. Empty form inputs.");
            return;
        }

        else {

            console.log("Form info complete");

            var newMeasurement = {
                name: TESTDATA, //add how to grab this name
                weight: $weight,
                chest: $chest,
                waist: $waist,
                beltLine: $beltLine,
                leftBicep: $leftBicep,
                rightBicep: $rightBicep,
                leftForearm: $leftForearm,
                rightForearm: $rightForearm,
                leftThigh: $leftThigh,
                rightThigh: $rightThigh,
                leftCalf: $leftCalf,
                rightCalf: $rightCalf
            };

            submitMeasurement(newMeasurement);
        }
    };

    //function to send data to database
    function submitMeasurement(Measurement) {

        $.post("api/measurements/", Measurement, function() {

            //add href link to the next user page. Ask Carmen/Dami
            window.location.href = "/"
        });

    };

});