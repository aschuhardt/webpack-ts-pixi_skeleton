import * as PIXI from "pixi.js";
import WebFont from "webfontloader";
import "./styles/global.css";

// load fonts, other resources
WebFont.load({
  google: {
    families: ["Overpass Mono"],
  },
});

// resize pixi with the window
window.onresize = () => {
  app.renderer.resize(container.clientWidth, container.clientHeight);
};

// set up pixi in its container div
const container = document.getElementById("container");
const app = new PIXI.Application(container.clientWidth, container.clientHeight,
  { backgroundColor: 0x223343 });
container.appendChild(app.view);
