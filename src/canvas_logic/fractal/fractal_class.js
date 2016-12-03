'use strict';
const core = require('mathjs/core');
const math = core.create();
math.import(require('mathjs/lib/type/complex'));
math.import(require('mathjs/lib/function/arithmetic/add'));
math.import(require('mathjs/lib/function/arithmetic/multiply'));

export default class Fractal {
  constructor(){
    this.iter = 0;
    this.speed = 128;
    this.fade = Math.pow(2, 17);
    this.path = new Path2D();
  }

  binary(num) {
    let b = math.complex(1, 1);
    let c = math.complex(0, 0);
    let p = math.complex(1, 0);
    while(num > 0){
      if(num % 2){ c = math.add(c, p); }
      num = ~~(num / 2);
      p = math.multiply(p, b);
    }
    return { x: c.re, y: c.im };
  }

  draw({ctx, canvasHeight, canvasWidth}){
    const center = { x: ~~(canvasWidth/2), y: ~~(canvasHeight * 0.7) };
    // let vals = [1,0.9,0.8,0.7,0.6,0.5,0.4,0.3,0.2,0.1,0];
    // let vals = [1, 0.75, 0.5, 0.25, 0];
    // let vals = [1, 0.5];
    // let alpha = vals[~~(this.iter / 512) % 5];
    ctx.fillStyle = `rgba(217, 200, 147, ${1 - this.iter/this.fade})`;
    for (var i = 0; i < this.speed; i++) {
      const point = this.binary(this.iter);
      ctx.fillRect(center.x + point.x, center.y + point.y, 1, 1);
      this.iter++;
    }
  }

//TODO add chaching below.  Not yet implemented for chrome.
  // draw({ctx, canvasHeight, canvasWidth}){
  //   const center = { x: ~~(canvasWidth/2), y: ~~(canvasHeight * 0.7) };
  //   // ctx.fillStyle = `rgba(217, 200, 147, ${1 - j/65536})`;
  //   ctx.fillStyle = `rgba(217, 200, 147, 1`;
  //   var p = new Path2D()
  //   for (var i = 0; i < 4; i++) {
  //     var point = this.binary(this.iter);
  //     p.rect(center.x + point.x, center.y + point.y, 1, 1);
  //     this.iter++;
  //   }
  //   debugger;
  //   this.path = this.path.addPath(p);
  //   ctx.fill(this.path);
    // for (var j = 0; j < this.store.length; j++) {
    //   var point = this.store[j];
    //   ctx.fillRect(center.x + point.x, center.y + point.y, 1, 1);
    // }
  // }

}




// export const Fractal = ({x, y}) => {
//
// };
