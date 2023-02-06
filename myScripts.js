/* toggle button */
var bool = true;
function toggle() {
  bool = !bool;
  if (bool) {
    style1();
  } else {
    style2();
  }
}

function load_style() {
  page_style = localStorage.getItem("page_style");
  if (page_style == null) {
    page_style = "styles1.css";
  }

  document.getElementById('page_style').setAttribute("href", page_style);
}

function style1() {
  localStorage.setItem("page_style", "styles1.css");
  load_style();
}

function style2() {
  localStorage.setItem("page_style", "styles2.css");
  load_style();
}

load_style();
