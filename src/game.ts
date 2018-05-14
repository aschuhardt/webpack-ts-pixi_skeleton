import * as PIXI from "pixi.js";

import DogImage from "./assets/dog.jpeg";

export default class Game {
  private stage: PIXI.Container;
  private renderer: PIXI.WebGLRenderer | PIXI.CanvasRenderer;

  constructor(private canvas: HTMLCanvasElement) {
    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;
    this.stage = new PIXI.Container();
    this.renderer = PIXI.autoDetectRenderer(width, height, { view: canvas });
  }

  public Run() {
    const dogTexture = PIXI.Texture.fromImage(DogImage);
    const dogSprite = new PIXI.Sprite(dogTexture);

    dogSprite.x = 0;
    dogSprite.y = 0;
    dogSprite.scale = new PIXI.Point(0.1, 0.1);

    this.stage.addChild(dogSprite);

    requestAnimationFrame(() => this.update());
  }

  private update() {
    this.renderer.render(this.stage);
    requestAnimationFrame(() => this.update());
  }
}
