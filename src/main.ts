import { Engine } from "excalibur";
import { Player } from "./player";
import { loader } from "./resources";
import { Roll } from "./roll";
import * as ex from 'excalibur';
import { Sheet } from "./sheet";


class Game extends Engine {
    constructor() {
      super({
        width: 1024, 
        height: 800,
        physics: {
          solver: ex.SolverStrategy.Realistic
        }
      });
    }

    setPhysics = () => {
      // setting physics and gravity
      game.currentScene.physics.config.solver = ex.SolverStrategy.Realistic;
      game.currentScene.physics.config.gravity = ex.vec(0, 300)
    }

    initialize() {


      const player = new Player();
      this.add(player);
      
      const roll = new Roll();
      roll.pos = ex.vec(game.halfCanvasWidth, game.halfCanvasHeight);
      
      this.add(roll)
      
      console.log(this.input.pointers.primary.lastPagePos)
      this.setPhysics()
      this.start(loader);
    }
  }
  
  export const game = new Game();
  game.initialize();