const navItems = document.querySelector(".nav-items");
const navButton = document.querySelector(".nav-button");
var isShowMenuMobile = false;
navButton.addEventListener("click", function () {
  isShowMenuMobile = !isShowMenuMobile;
  isShowMenuMobile ? navItems.classList.remove("hidden") : "";
  !isShowMenuMobile ? navItems.classList.add("hidden") : "";
});

const dropdownSelectGuide = document.querySelector(".dropdown-select-guide");
const itemsSelectionGuide = document.querySelector(".items-selection-guide");
var isShowSelectGuide = false;
// console.log(dropdownSelectGuide.firstElementChild.src);
dropdownSelectGuide.addEventListener("click", function () {
  isShowSelectGuide = !isShowSelectGuide;
  if(isShowSelectGuide) {
    itemsSelectionGuide.classList.remove("hidden")
    dropdownSelectGuide.firstElementChild.src = 'icons/bx-chevron-up.svg'
  }else{
    itemsSelectionGuide.classList.add("hidden")
    dropdownSelectGuide.firstElementChild.src = 'icons/bx-chevron-down.svg'
  }
});
