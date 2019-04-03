$(document).ready(function() {

    console.log("welcome.js loaded");

    //create user click handler
    $(document).on("click", "button.join-submit-button", beginCreateUser);

    //function to handle form submit
    function beginCreateUser(event) {

        event.preventDefault();
        console.log("create user button clicked");

        $newUser = $(".form-control").val().trim();
        console.log("User being created is: " + $newUser);

        upsertUser({
            name: $newUser
        });
    };

    function upsertUser(userData) {
        $.post("/api/users", userData, function() {

            console.log("user posted to server");
            window.location.href = "/user_stat.html";
            
        });
    }
});