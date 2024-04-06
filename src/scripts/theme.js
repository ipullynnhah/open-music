export const configThemeBtn = () => {
  const btn = document.querySelector("header button");

  btn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    const theme = isDark ? "dark" : "light";
    localStorage.setItem("@openMusic:theme", theme);
  });
};
