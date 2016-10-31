const inRad = deg => Math.PI * deg / 180;

const randInt = (hi, lo) => {
  const range = hi - lo;
  return lo + ~~(Math.random() * range);
};

module.exports = {
  canvas: null,
  ctx: null,
  canvasHeight: null,
  canvasWidth: null,
  points: [],
  polygons: [],
  inRad: inRad,
  randInt: randInt
};
