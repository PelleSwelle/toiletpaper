import { Actor, vec } from "excalibur";
import roll from './images/toiletpaper.png';
import * as ex from 'excalibur';

import { Resources } from "./resources";

export class Roll extends Actor {
  isGrabbed: boolean;

  constructor() {
    super({
      pos: vec(200, 200),
      width: 200,
      height: 200,
    })

    this.isGrabbed = false;
  }  
  
  onInitialize() {
    const rollSprite = new ex.Sprite({
      image: Resources.Roll,
      destSize: {
        width: 100,
        height: 100
      }
    })
 
    this.graphics.add(rollSprite);
    
    this.on('pointerenter', () => {
      console.log('rolling')

    })
    
    
    this.on('pointerdown', () => {
      this.isGrabbed = true;
      

      // get pointer position

    })

    this.on('pointerup', () => {
      this.isGrabbed = false;
    })
    this.on('pointermove', () => {
      if (this.isGrabbed) {
      }
    })
  }
  
  public update(engine: ex.Engine, delta: number): void {
      if (this.isGrabbed) {
        this.rotation = engine.input.pointers.primary.lastPagePos.y;
      }
  }
}