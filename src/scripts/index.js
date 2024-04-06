import { renderAlbums } from "./albums.js";
import { configThemeBtn } from "./theme.js";
import { applyInputRangeStyle } from "./inputRange.js";
import { fetchMusics } from "./api.js";

const configRange = () => {
  const output = document.querySelector("output span");
  const range = document.querySelector("input[type='range']");
  output.innerText = range.value;

  range.addEventListener("input", () => {
    output.innerText = range.value;
    filters.price = +range.value;
    renderFilter();
  });
};

const configTags = () => {
  const radios = document.querySelectorAll("input[type='radio']");
  console.log(radios);
  radios.forEach(radio => {
    radio.addEventListener("click", () => {
      filters.tag = radio.value;
      renderFilter();
    });
  });
};

const renderFilter = () => {
  const { tag, price } = filters;
  renderAlbums(
    albumList.filter(
      alb => alb.price <= price && (alb.genre === tag || tag === "Todos")
    )
  );
};

const theme = localStorage.getItem("@openMusic:theme");
if (theme === "dark") {
  document.body.classList.toggle("dark-mode");
}

const albumList = await fetchMusics();
const filters = {
  tag: "Todos",
  price: 150
};

configThemeBtn();
configRange();
configTags();
applyInputRangeStyle();

renderAlbums(albumList);
