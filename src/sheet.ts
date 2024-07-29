import * as ex from 'excalibur'

export class Sheet extends ex.Actor {
  constructor() {
    super({
      width: 100,
      height: 100,
      collider: new ex.CircleCollider({radius: 20, offset: ex.vec(10, 10)}) ,
      collisionType: ex.CollisionType.Active
    })
  }

  onInitialize() {
    this.graphics.add(new ex.Circle({ 
      radius: 20, 
      color: ex.Color.Blue 
    }))

  }
}