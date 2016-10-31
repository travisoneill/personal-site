const distance = (mouse, polygon) => {

};

const inRad = deg => Math.PI * deg / 180;

const randInt = (hi, lo) => {
  const range = hi - lo;
  return lo + ~~(Math.random() * range);
};

module.exports = {
  inRad: inRad,
  randInt: randInt,
  distance: distance
}
