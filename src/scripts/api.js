import { renderAlbums } from "./albums.js";

export const fetchMusics = async () => {
  const res = await fetch("https://openmusic-fake-api.onrender.com/api/musics");
  return await res.json();
};
