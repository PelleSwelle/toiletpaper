import { Actor, vec } from "excalibur";
import roll from './images/toiletpaper.png';
import * as ex from 'excalibur';

import { Resources } from "./resources";

export class Roll extends Actor {
  isGrabbed: boolean = false;
  sheetsLeft: number = 100;
  graphic: ex.Circle;
  clickY: number = 0;

  constructor() {
    super({
      width: 100,
      height: 100,
      radius: 100
    })
    this.sheetsLeft = 100;
    
    this.graphic = new ex.Circle({
      radius: this.sheetsLeft,
      color: ex.Color.White
    })

    this.graphics.add(this.graphic)
  }  
  
  onInitialize() {
    // const rollSprite = new ex.Sprite({
    //   image: Resources.Roll,
    //   destSize: {
    //     width: this.sheetsLeft,
    //     height: this.sheetsLeft
    //   }
    // })

 
    // this.graphics.add(rollSprite);
  

    this.on('pointerenter', () => {
      this.color = ex.Color.Red;
    })
    
    this.on('pointerleave', () => {
      this.color = ex.Color.White;
    })
    
    
    this.on('pointerup', () => {
      this.isGrabbed = false;
    })

    this.on('pointermove', () => {
      if (this.isGrabbed) {
        console.log('rolling')
      }
    })
  }
  
  public update(engine: ex.Engine, delta: number): void {
    
    let currentMouseY = engine.input.pointers.primary.lastPagePos.y;

      this.on('pointerdown', () => {
        this.isGrabbed = true;
        this.clickY = engine.input.pointers.primary.lastPagePos.y;
      })
    
      if (this.isGrabbed) {
        let mouseDelta = this.clickY - currentMouseY
        this.rotation = engine.input.pointers.primary.lastPagePos.y;
        this.graphic.radius = this.graphic.radius + mouseDelta * .002
      }
  }
}