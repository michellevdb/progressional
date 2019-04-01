$(document).ready(function() {

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

    //submit button logic
    function sendMeasurementData(event) {
        event.preventDefault();
        console.log("Goliath online.");
    }
});