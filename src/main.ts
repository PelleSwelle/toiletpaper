import { Engine } from "excalibur";
import { Player } from "./player";
import { loader } from "./resources";
import { Roll } from "./roll";


class Game extends Engine {
    constructor() {
      super({
        width: 1024, 
        height: 800
      });
    }
    initialize() {
      const player = new Player();
      this.add(player);

      
      const roll = new Roll();
      this.add(roll)

      console.log(this.input.pointers.primary.lastPagePos)

      this.start(loader);
    }
  }
  
  export const game = new Game();
  game.initialize();