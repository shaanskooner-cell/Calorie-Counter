var weight = document.getElementById("user_weight");
var distance = document.getElementById("Distance");
var button = document.getElementById("button");
var calorie_shown = document.getElementById("calorie_burned");
var increase_weight = document.getElementById("plus_weight");
var decrease_weight = document.getElementById("minus_weight");
var increase_distance = document.getElementById("plus_distance");
var decrease_distance = document.getElementById("minus_distance");
distance.addEventListener("change", (event) => {
  distance.value = event.target.value;
});
increase_distance.addEventListener("click", () => {
  distance.value++;
});
decrease_distance.addEventListener("click", () => {
  if (distance.value > 1) {
    distance.value--;
  }
});
increase_weight.addEventListener("click", () => {
  weight.value = Number(weight.value) + 10;
});
decrease_weight.addEventListener("click", () => {
  if (weight.value > 1) {
    weight.value--;
  }
});
button.addEventListener("click", () => {
  if (distance.value === 0 || weight.value === 0) {
    calorie_shown.textContent = "Please enter valid value.";
  }
  calorie_shown.textContent =
    1.036 * Number(weight.value) * Number(distance.value);
});
