// Attach event listener to form
document.getElementById("xg-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get user input
  var locationX = document.getElementById("location_x").value;
  var locationY = document.getElementById("location_y").value;
  var bodyPart = document.getElementById("body_part").value;
  var assistType = document.getElementById("assist_type").value;

  // Use input to make prediction
  var xg = predictXG(locationX, locationY, bodyPart, assistType);

  // Display result
  document.getElementById("xg-result").innerHTML = "xG: " + xg;
});
