import { albumList } from "./albumsDatabase.js";
import { renderAlbums } from "./albums.js";
import { configThemeBtn } from "./theme.js";
import { applyInputRangeStyle } from "./inputRange.js";

export const configRange = () => {
  const output = document.querySelector("output span");
  const range = document.querySelector("input[type='range']");
  output.innerText = range.value;

  range.addEventListener("input", () => {
    output.innerText = range.value;
    renderAlbums(albumList.filter(album => album.price <= +range.value));
  });
};

const theme = localStorage.getItem("@openMusic:theme");
if (theme === "dark") {
  document.body.classList.toggle("dark-mode");
}

configThemeBtn();
configRange();
applyInputRangeStyle();
renderAlbums(albumList);
