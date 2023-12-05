// Uppgift 4 - Skapa variabler
const checkbox = document.querySelector(".checkbox");
const textFields = document.querySelectorAll(".textfield");
const buttons = document.getElementsByTagName("button");
const divElement = document.getElementById("output");

//Uppgift 5

function handleEvent(e) {
  console.log("Det tröcks på", e.target);
  const whatField = e.target.name;

  if (whatField == "content") {
    const valueContent = e.target.value;
    divElement.innerHTML = "<p>" + valueContent + "</p>";
  }
}
//Uppgift 6
textFields.forEach((field) => field.addEventListener("input", handleEvent));

checkbox.addEventListener("change", function (e) {
  console.log("Det som tryckets var", e.target);
  textFields.forEach((field) => {
    if (field.name == "color") {
      const colorField = field.value;
      divElement.style.backgroundColor = colorField;
    }
  });
});

buttons[0].addEventListener("click", function () {
  divElement.remove();
});
