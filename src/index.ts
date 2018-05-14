import Game from "./game";

import "./styles/global.css";

window.onload = () => {
  const canvas = document.getElementById("pixi") as HTMLCanvasElement;
  if (canvas) {
    const game = new Game(canvas);
    window.onresize = () => game.resize();
    game.Run();
  }
};
