import tape from 'tape';

import mix from '..';

tape('hex', (t) => {
  const { deepEqual, equal, end } = t;

  equal(mix('fff', '#fff'), null, 'missing token fff');
  equal(mix('##fff', '#fff'), null, 'double token ##fff');
  equal(mix(' #fff', '#fff'), null, 'leading whitespace " #fff"');
  equal(mix('#fff ', '#fff'), null, 'trailing whitespace "#fff "');
  equal(mix('#y3', '#fff'), null, 'invalid hex #y3');
  equal(mix('#ff', '#fff'), null, 'invalid hex #ff');
  equal(mix('#ffg', '#fff'), null, 'invalid hex #ffg');

  deepEqual(
    mix('#00000000', '#00000000'),
    {
      rgba: [0, 0, 0, 0],
      hsla: [0, 0, 0, 0],
      hex: '#000000',
      hexa: '#00000000'
    },
    '#000000000 -> #00000000 : 50'
  );

  deepEqual(
    mix('#ff6347', '#0ff'),
    {
      rgba: [128, 177, 163, 1],
      hsla: [163, 24, 60, 1],
      hex: '#80b1a3',
      hexa: '#80b1a3ff'
    },
    '#ff6347 -> #0ff : 50'
  );

  deepEqual(
    mix('#fff', '#f00'),
    {
      rgba: [255, 128, 128, 1],
      hsla: [0, 100, 75, 1],
      hex: '#ff8080',
      hexa: '#ff8080ff'
    },
    '#fff -> #f00 : 50'
  );

  deepEqual(
    mix('#ff6347', '#0099ff80', 42),
    {
      rgba: [174, 116, 129, 0.71113725],
      hsla: [347, 26, 57, 0.71113725],
      hex: '#ae7481',
      hexa: '#ae7481b5'
    },
    '#ff6347 -> #0099ff80 : 42'
  );

  deepEqual(
    mix('#000', 'rgba(255, 0, 0, 0.22)', 22),
    {
      rgba: [78, 0, 0, 0.3916],
      hsla: [0, 100, 15, 0.3916],
      hex: '#4e0000',
      hexa: '#4e000064'
    },
    '#000 -> rgba(255, 0, 0, 0.22) : 22'
  );

  deepEqual(
    mix('#ff6347', 'rgb(0 255 255 / 0.5)', 80),
    {
      rgba: [235, 111, 85, 0.9],
      hsla: [10, 79, 63, 0.9],
      hex: '#eb6f55',
      hexa: '#eb6f55e6'
    },
    '#ff6347 -> rgb(0 255 255 / 0.5) : 80'
  );

  deepEqual(
    mix('#ff6347', 'hsla(360 100% 50% / 0.8)', 40),
    {
      rgba: [255, 50, 36, 0.88],
      hsla: [4, 100, 57, 0.88],
      hex: '#ff3224',
      hexa: '#ff3224e0'
    },
    '#ff6347 -> hsla(360 100% 50% / 0.8) : 40'
  );

  end();
});
