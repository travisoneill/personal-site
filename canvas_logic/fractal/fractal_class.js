'use strict';
const core = require('mathjs/core');
const math = core.create();
math.import(require('mathjs/lib/type/complex'));
math.import(require('mathjs/lib/function/arithmetic/add'));
math.import(require('mathjs/lib/function/arithmetic/multiply'));

export default class FractalData {
  constructor(){
    // this.x = x;
    // this.y = y;
    this.iter = 0;
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
    const center = { x: ~~(canvasWidth/2), y: ~~(canvasHeight/2) };
    const point = this.binary(this.iter);
    ctx.fillStyle = 'rgba(217, 200, 147, 1)';
    ctx.fillRect(center.x + point.x, center.y + point.y, 1, 1);
    this.iter++;
  }

}




// export const Fractal = ({x, y}) => {
//
// };
