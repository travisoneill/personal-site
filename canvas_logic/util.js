const distance = (obj1, obj2) => {
  const x1 = obj1.x,
        x2 = obj2.x,
        y1 = obj1.y,
        y2 = obj2.y;
  const dx = Math.abs(x1 - x2);
  const dy = Math.abs(y1 - y2);
  return Math.sqrt(dx * dx + dy * dy);
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
