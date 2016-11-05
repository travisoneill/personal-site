const urls = {
  about_background: 'http://res.cloudinary.com/devbook/image/upload/v1478304925/network_xwupq3.jpg'
};

const makeURL = ({ type, w, h, params }) => {
  let width = `w_${w},`;
  let height = `h_${h},`;
  if(!params){params = '';}
  if(!h){height = '';}
  if(!w){width = '';}
  let fill = '';
  if(height || width){ fill = 'c_fill,'}
  let url = urls[type];
  const query = `${width}${height}${fill}${params}`;
  if(!query){ return url; }
  const string = `/upload/${query}`
  return url.split('/upload').join(string);
};

// let u = makeURL({ type: 'about_background', h: 100, w: 200, params: 'o_20' });
// let u = makeURL({ type: 'about_background'});

console.log(u);
