import Game from "./game";

import "./styles/global.css";

window.onload = () => {
  const canvas = document.getElementById("pixi") as HTMLCanvasElement;
  if (canvas) {
    new Game(canvas).Run();
  }
};
