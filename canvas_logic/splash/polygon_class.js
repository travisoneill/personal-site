import Point from './point_class';
import { randInt } from '../util';

export default class Polygon{
  constructor({x, y, n, r}){
    this.x = x;
    this.y = y; //position
    this.r = r / 1000; //radius
    this.n = n; //nuber of sides
    this.theta = 0; //angle of rotation
    this.dtheta = randInt(10, 1); //angular velocity of rotation
    this.vx = randInt(5, -5) + .5; //velocity of translation
    this.vy = randInt(5, -5) + .5;
    this.tail = []; //sets of points from previos frames for tail
  }

  //creates points of polygon based on circle or radius this.r
  createPoints(){
    let points = [];
    const rad = deg => Math.PI * deg / 180;
    const step = 360 / this.n;
    for (var theta = this.theta; theta < this.theta + 360; theta += step) {
      const x = this.x + (Math.cos(rad(theta)) * this.r);
      const y = this.y + (Math.sin(rad(theta)) * this.r);
      points.push(new Point(x, y));
    }
    return points;
  }

  createDiagonals(){
    //TODO
  }

  draw({ctx, inRad, canvasHeight, canvasWidth}){
    this.tail.push(this.createPoints()); //add new set of points to tail
    if(this.tail.length > 16){this.tail.shift();} //keep tail length of 16

    //render polygon for each set of points in tail
    for (var i = 0; i < this.tail.length; i++) {
      ctx.strokeStyle = `rgba(217, 200, 147, ${i/16})` //handle color fade
      let shape = this.tail[i];
      let start = shape[shape.length - 1];
      ctx.beginPath()
      ctx.moveTo(start.x * canvasWidth, start.y * canvasHeight);
      //draw each polygon
      for (var j = 0; j < shape.length; j++) {
        let point = shape[j];
        ctx.lineTo(point.x * canvasWidth, point.y * canvasHeight);
      }
      ctx.stroke();
    }
    this.step(canvasHeight, canvasWidth);
  }

  //2 body elastic collision
  //leading '_' in variable name indicates post-collision value
  static handleCollision(p1, p2){
    //2d vector math; vectors as arrays
    const mag = v => Math.sqrt(v[0]*v[0] + v[1]*v[1]); //magnitude of vector
    const dot = (v1, v2) => v1[0]*v2[0] + v1[1]*v2[1]; //dot product of 2 vectors
    const add = (v1, v2) => [v1[0]+v2[0], v1[1]+v2[1]]; //add 2 vectors
    const phi = (v1, v2) => dot(v1,v2) / (mag(v1) * mag(v2)); //angle between two vectors

    //vectors from object velocities
    const v1 = [p1.vx, p1.vy],
          v2 = [p2.vx, p2.vy];

    const [x1, x2, y1, y2] = [p1.x, p2.x, p1.y, p2.y]; //centers of 2 polygons

    const N = [x2-x1, y2-y1]; //normal vector to direction of collision
    const uN = N.map( n => n / mag(N)); // unit normal
    const uT = [-uN[1], uN[0]]; //unit tangent

    //vectors projected to unit normal and unit tangent
    const v1n = dot(uN, v1),
          v2n = dot(uN, v2),
          v1t = dot(uT, v1),
          v2t = dot(uT, v2);

    //1d elastic collision assuming equal mass
    const _v1t = v1t,
          _v2t = v2t,
          _v1n = v2n,
          _v2n = v1n;

    //convert to vectors
    const _v1 = add( uN.map( n => n * _v1n ), uT.map( n => n * _v1t ) );
    const _v2 = add( uN.map( n => n * _v2n ), uT.map( n => n * _v2t ) );

    let m1 = mag(v1) + mag(v2);
    let m2 = mag(_v1) + mag(_v2);
    // console.log(m1 - m2);

    // if( momentum1 !== momentum2 ){debugger;}
    p1.vx = _v1[0];
    p1.vy = _v1[1];
    p2.vx = _v2[0];
    p2.vy = _v2[1];
  }

  step(canvasHeight, canvasWidth){
    //collisions with sides
    if(this.x + this.r > 1 || this.x - this.r < 0){
      this.vx *= -1;
    }
    //collisions with top and bottom
    if(this.y + this.r > 1 || this.y - this.r < 0){
      this.vy *= -1;
    }
    //increment position by velocity
    this.x += this.vx / canvasWidth;
    this.y += this.vy / canvasHeight;
    //rotatte object by angular velocity
    this.theta = (this.theta + this.dtheta) % 360;
  }
}
