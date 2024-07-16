export function ControlMenu() {
  let checkName = "view_item_menu";
  let viewMenu = localStorage.getItem(checkName);
  let homeWrapper = document.getElementById("home_wrapper");
  let homeContainer = document.getElementById("home_container");
  let nav_horizontal = document.getElementById("nav_horizontal_bar");
  let nav_side = document.getElementById("nav_side_bar");
  let nav_view_bars = document.getElementById("nav_view_bars");

  if (viewMenu && viewMenu == "horizontal") {
    homeWrapper.classList.remove("wrapper_size");
    homeContainer.classList.remove("mt-2");

    nav_horizontal.style.display = "block";
    nav_side.style.display = "none";
    nav_view_bars.style.display = "none";
  } else {
    viewMenu = "vertical";
    localStorage.setItem(checkName, viewMenu);

    homeWrapper.classList.add("wrapper_size");
    homeContainer.classList.add("mt-2");

    nav_horizontal.style.display = "none";
    nav_side.style.display = "block";
    nav_view_bars.style.display = "block";
  }
}

export function changeMenu(view) {
  let checkName = "view_item_menu";
  let homeWrapper = document.getElementById("home_wrapper");
  let homeContainer = document.getElementById("home_container");
  let nav_horizontal = document.getElementById("nav_horizontal_bar");
  let nav_side = document.getElementById("nav_side_bar");

  if (view && view == "horizontal") {
    homeWrapper.classList.remove("wrapper_size");
    homeContainer.classList.remove("mt-2");

    nav_horizontal.style.display = "block";
    nav_side.style.display = "none";
    nav_view_bars.style.display = "none";

    localStorage.setItem(checkName, "horizontal");
  } else {
    localStorage.setItem(checkName, "vertical");

    homeWrapper.classList.add("wrapper_size");
    homeContainer.classList.add("mt-2");

    nav_horizontal.style.display = "none";
    nav_side.style.display = "block";
    nav_view_bars.style.display = "block";
  }
}
