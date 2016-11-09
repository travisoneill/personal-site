
export const urls = {
  about_background: 'http://res.cloudinary.com/devbook/image/upload/v1478304925/network_xwupq3.jpg',
  algoArena: [
    'http://res.cloudinary.com/devbook/image/upload/v1478553903/ss4_c4a0fz.png',
    'http://res.cloudinary.com/devbook/image/upload/v1478553941/aa-backend1_acfgmf.png',
    'http://res.cloudinary.com/devbook/image/upload/v1478553882/ss1_zwgmjz.png',
    'http://res.cloudinary.com/devbook/image/upload/v1478553898/ss2_vxgohd.png',
    'http://res.cloudinary.com/devbook/image/upload/v1478553941/aa-backend1_acfgmf.png',
    'http://res.cloudinary.com/devbook/image/upload/v1478553853/ss3_oidtep.png'
  ],
  paratrooper: [
    'http://res.cloudinary.com/devbook/image/upload/v1478641329/pt1_gpokd5.png',
    'http://res.cloudinary.com/devbook/image/upload/v1478641329/pt2_cmxblb.png',
    'http://res.cloudinary.com/devbook/image/upload/v1478641329/pt4_yao6tq.png',
    'http://res.cloudinary.com/devbook/image/upload/v1478641329/pt6_tdpl4d.png',
    'http://res.cloudinary.com/devbook/image/upload/v1478641329/pt5_kh1hkl.png'
  ],
  eosRedux: [
    'http://res.cloudinary.com/devbook/image/upload/v1478641329/eos0_ktzknv.png',
    'http://res.cloudinary.com/devbook/image/upload/v1478641329/eos5_thyvnd.png',
    'http://res.cloudinary.com/devbook/image/upload/v1478641329/eos2_ubq3zd.png',
    'http://res.cloudinary.com/devbook/image/upload/v1478641329/eos3_u2keyj.png',
    'http://res.cloudinary.com/devbook/image/upload/v1478641329/eos1_ousoqx.png',

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
