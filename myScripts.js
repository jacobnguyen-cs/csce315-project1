/* toggle button */
var checkbox = document.querySelector("input[name=checkbox]");
var link = document.getElementById("style");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    console.log("Checkbox is checked...");
    link.setAttribute("href", "styles2.css");
  } else {
    console.log("Not checked");
    link.setAttribute("href", "styles1.css");
  }
})
