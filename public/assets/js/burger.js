$(function() {
  $(".devour-burger").on("click", function(event) {
    var id = $(this).data("id");
    
    var devourState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devourState
    }).then(
      function() {
        console.log("changed devoured to true");
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) { 
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(), 
		};

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});
