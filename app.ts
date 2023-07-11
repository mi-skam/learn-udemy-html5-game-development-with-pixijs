import { Application } from '@pixi/app';
import { Sprite } from '@pixi/sprite';
import { Assets } from '@pixi/assets';
import { Texture } from 'pixi.js';

let app = new Application({
  view: document.getElementById('pixi-canvas') as HTMLCanvasElement,
  autoDensity: true,
  resolution: window.devicePixelRatio || 1,
  backgroundColor: 0xffffff,
  width: 640,
  height: 480,
});

const texture: Texture = await Assets.load('assets/crab.png');
const crab: Sprite = new Sprite(texture);

// resize the crab
crab.width = crab.width / 4;
crab.height = crab.height / 4;

// position the crab
crab.x = app.screen.width;
crab.y = app.screen.height / 2;

// rotate around the center
crab.anchor.x = 0.5;
crab.anchor.y = 0.5;

// add the crab to the stage
app.stage.addChild(crab);

// Add a variable to count up the seconds our demo has been running
let elapsed = 0.0;
// Tell our application's ticker to run a new callback every frame, passing
// in the amount of time that has passed since the last tick.
app.ticker.add((delta) => {
  // Add the delta time to our elapsed time
  elapsed += delta;
  // Update the crab's x position to match the elapsed time
  crab.x = 100.0 + Math.cos(elapsed / 50.0) * 100.0 + 200;

  crab.rotation += 0.0;
});
