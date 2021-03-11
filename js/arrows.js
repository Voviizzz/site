function toggleSort(target) {
    let arrow = target.getElementsByClassName("catalog__sort-arrow")[0];
    console.log(arrow);
    if (arrow) {
      if (arrow.classList.contains("catalog__sort-arrow_top")) {
        arrow.classList.remove("catalog__sort-arrow_top");
        arrow.classList.add("catalog__sort-arrow_bottom");
      } else {
        arrow.classList.remove("catalog__sort-arrow_bottom");
        arrow.classList.add("catalog__sort-arrow_top");
      }
    }
  }
  let sortButtons = document.getElementsByClassName("catalog__sort-button");
  Array.from(sortButtons).forEach(function (button) {
    button.addEventListener("click", function (event) {
      toggleSort(button);
    });
  });
  