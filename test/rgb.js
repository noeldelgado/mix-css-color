import tape from 'tape';

import mix from '..';

tape('rgb', (t) => {
  const { deepEqual, equal, end } = t;

  equal(mix('rgb()', '#fff'), null, 'missing channels');

  deepEqual(
    mix('rgb(0 0 0 / 0)', 'rgb(0 0 0 / 0)'),
    {
      rgba: [0, 0, 0, 0],
      hsla: [0, 0, 0, 0],
      hex: '#000000',
      hexa: '#00000000'
    },
    'rgb(0 0 0 / 0) -> rgb(0 0 0 / 0) : 50'
  );

  deepEqual(
    mix('rgb(255 99 71 / 1)', 'rgb(0 255 255)'),
    {
      rgba: [128, 177, 163, 1],
      hsla: [163, 24, 60, 1],
      hex: '#80b1a3',
      hexa: '#80b1a3ff'
    },
    'rgb(255 99 71 / 1) -> rgb(0 255 255) : 50'
  );

  deepEqual(
    mix('rgb(255 99 71 / 1)', 'rgb(0 255 255)', 100),
    {
      rgba: [255, 99, 71, 1],
      hsla: [9, 100, 64, 1],
      hex: '#ff6347',
      hexa: '#ff6347ff'
    },
    'rgb(255 99 71 / 1) -> rgb(0 255 255) : 100'
  );

  deepEqual(
    mix('rgb(255 99 71 / 1)', 'rgb(0 255 255)', 200),
    {
      rgba: [255, 99, 71, 1],
      hsla: [9, 100, 64, 1],
      hex: '#ff6347',
      hexa: '#ff6347ff'
    },
    'rgb(255 99 71 / 1) -> rgb(0 255 255) : 200 (clipped to 100)'
  );

  deepEqual(
    mix('rgb(255 99 71 / 1)', 'rgb(0 255 255)', 0),
    {
      rgba: [0, 255, 255, 1],
      hsla: [180, 100, 50, 1],
      hex: '#00ffff',
      hexa: '#00ffffff'
    },
    'rgb(255 99 71 / 1) -> rgb(0 255 255) : 0'
  );

  deepEqual(
    mix('rgb(255 99 71 / 1)', 'rgb(0 255 255)', -100),
    {
      rgba: [0, 255, 255, 1],
      hsla: [180, 100, 50, 1],
      hex: '#00ffff',
      hexa: '#00ffffff'
    },
    'rgb(255 99 71 / 1) -> rgb(0 255 255) : -100 (clipped to 0)'
  );

  deepEqual(
    mix('rgb(255 99 71 / 1)', '#0099ff80', 42),
    {
      rgba: [174, 116, 129, 0.71113725],
      hsla: [347, 26, 57, 0.71113725],
      hex: '#ae7481',
      hexa: '#ae7481b5'
    },
    'rgb(255 99 71 / 1) -> #0099ff80 : 42'
  );

  deepEqual(
    mix('rgb(0, 0, 0)', 'rgba(255, 0, 0, 0.22)', 22),
    {
      rgba: [78, 0, 0, 0.3916],
      hsla: [0, 100, 15, 0.3916],
      hex: '#4e0000',
      hexa: '#4e000064'
    },
    'rgb(0, 0, 0) -> rgba(255, 0, 0, 0.22) : 22'
  );

  deepEqual(
    mix('rgb(255 99 71 / 1)', 'rgb(0 255 255 / 0.5)', 80),
    {
      rgba: [235, 111, 85, 0.9],
      hsla: [10, 79, 63, 0.9],
      hex: '#eb6f55',
      hexa: '#eb6f55e6'
    },
    'rgb(255 99 71 / 1) -> rgb(0 255 255 / 0.5) : 80'
  );

  deepEqual(
    mix('rgb(255 255 255 / 1)', 'rgb(255 0 0 / 1)'),
    {
      rgba: [255, 128, 128, 1],
      hsla: [0, 100, 75, 1],
      hex: '#ff8080',
      hexa: '#ff8080ff'
    },
    'rgb(255 255 255 / 1) -> rgb(255 0 0 / 1) : 50'
  );

  deepEqual(
    mix('rgb(255, 255, 255, 100%)', 'hsl(360 100% 50% / 1)', 100),
    {
      rgba: [255, 255, 255, 1],
      hsla: [0, 0, 100, 1],
      hex: '#ffffff',
      hexa: '#ffffffff'
    },
    'rgb(255, 255, 255, 100%) -> hsl(360 100% 50% / 1) : 100'
  );

  deepEqual(
    mix('rgb(255 99 71 / 1)', 'hsla(360 100% 50% / 0.8)', 40),
    {
      rgba: [255, 50, 36, 0.88],
      hsla: [4, 100, 57, 0.88],
      hex: '#ff3224',
      hexa: '#ff3224e0'
    },
    'rgb(255 99 71 / 1) -> hsla(360 100% 50% / 0.8) : 40'
  );

  end();
});
