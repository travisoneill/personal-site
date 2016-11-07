
export const urls = {
  about_background: 'http://res.cloudinary.com/devbook/image/upload/v1478304925/network_xwupq3.jpg',
  algoArena: [
    'http://res.cloudinary.com/devbook/image/upload/v1478553903/ss4_c4a0fz.png',
    'http://res.cloudinary.com/devbook/image/upload/v1478553941/aa-backend1_acfgmf.png',
    'http://res.cloudinary.com/devbook/image/upload/v1478553882/ss1_zwgmjz.png',
    'http://res.cloudinary.com/devbook/image/upload/v1478553898/ss2_vxgohd.png',
    'http://res.cloudinary.com/devbook/image/upload/v1478553941/aa-backend1_acfgmf.png',
    'http://res.cloudinary.com/devbook/image/upload/v1478553853/ss3_oidtep.png'
  ]
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
